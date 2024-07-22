---
title: Endpoints List RESTful API
sidebar_position: 1
---

The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.

This API offers dual modes of interaction with the smart contract: firstly, via the RESTful API; and secondly, through the GraphQL API.

It facilitates interaction with various Pools smart contracts by providing an intuitive interface that maps the actions to straightforward concepts, such as create, lend, borrow, repaid, etc. Also, it enables seamless communication with smart contracts configured across multiple blockchain networks. It is necessary to specify the network and contract name in each request payload.

Outlined below is a detailed overview of the API's functionalities, leveraging a designated instance of the `counterpartypool` contract as the primary data source.

:::info

The `counterpartypool` contract is based on a token that follows the `erc20` token standard that has a set precision. For example it can be `usdc`, `euroc` with a exactly a precision of 6 or any other token that meets the above mentioned requirements.

Then, 10500000 is equivalent to 10.5 USDC.

:::

---

## Security Details

To secure the API access control, all requests are made through [Hasura](https://hasura.io/) which provides secure GraphQL, and RESTful endpoints restricted by a role-based authorization system.

Those endpoints that return public blockchain data do not require authentication for use. Query type requests are opened under the `guest` role, while mutation type needs a token with `admin` role.

For those that can modify data the API expects a valid authorization header containing a bearer token. These tokens are implemented as JSON Web Tokens (JWTs) issued by the server.

The security of the JWT is because it is signed by a secret key and has a configurable expiration time, which by default is 60 minutes.

Upon receiving a request, Hasura decodes and validates the JWT, which contains user account data, and their corresponding role. If the role lacks the necessary permissions or the token is invalid, expired or missing, the request is promptly rejected.

## Authentication

### `Login`

Return a JSON Web Token (JWT) access token and refresh token. By default, the access token has a maturity of 60 minutes, but it may vary depending on the server configuration.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/login`

**Request Body**

```json
{
  "session": {
    "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the generated access token and refresh token. This object encompasses the following attributes:

```json
{
  "v1Login": {
    "res": {
      "accessToken": <jwt>,
      "refreshToken": "0a1a6d5f-1bf9-4540-8c22-d9442a75476f"
    },
    "success": true
  }
}
```

### `Restore Session`

Return a new access and refresh token.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/restore-session`

**Request Body**

```json
{
  "session": {
    "refreshToken": "e6781b1a-ff37-4074-8b9e-39953b5a4f9d"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the generated access token and refresh token. This object encompasses the following attributes:

```json
{
  "v1RestoreSession": {
    "res": {
      "accessToken": <jwt>,
      "refreshToken": "0a1a6d5f-1bf9-4540-8c22-d9442a75476f"
    },
    "success": true
  }
}
```

## Pools

Unlike the contract, the status are in lowercase; Additionally, to streamline interaction the API include intermediate status such as `collectable`, `closable`, and `archivable`.

The `collateralDetails` is an array which each element has the following properties:

| Property          | Description                                         |
| ----------------- | --------------------------------------------------- |
| `contractAddress` | The address where the collateral token is deployed. |
| `amount`          | The amount of tokens that are put as collateral.    |
| `id`              | Optional id if collateral is an ERC721 contract.    |

### `Create Pool`

Create a new pool with the indicated collateral tokens using the `collateralDetails` schema.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/create-pool`

**Request Body**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "data": {
      "endTime": "2024-08-09T23:58:00.000",
      "interest": 10,
      "softCap": "300000000", // 300 USDC
      "hardCap": "800000000", // 800 USDC
      "collateralDetails": []
    }
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1CreatePool": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

### `Get Pool`

Retrieves the data associated with the specified `poolId`.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-pool`

**Request Body**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "poolId": "6"
  }
}
```

**Response**

Upon successful request completion, the server will return a status code of 200 along with a JSON object containing pool information. This object encompasses the following attributes:

```json
{
  "v1GetPool": {
    "res": {
      "borrowed": "980000",
      "closedTime": "2024-07-18T20:45:30.000Z",
      "collateralDetails": [],
      "endTime": "2024-07-18T20:44:07.000Z",
      "hardCap": "5000000",
      "id": "0",
      "interest": 1,
      "metadata": {
        "collateralDetails": []
      },
      "poolOwner": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "repaid": "2000000",
      "rewards": "2000000",
      "softCap": "3000000",
      "startDate": "2024-07-18T20:43:12.000Z",
      "status": "closed",
      "supplied": "1000000"
    },
    "success": true
  }
}
```

### `Get Pools`

Retrieves the data associated with the `pools` specified in the pagination parameters. If the offset exceeds the total number of pools, the API will return an empty list.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-pools`

**Request Body**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "offset": "6",
    "limit": "10"
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200, accompanied by a JSON object containing information regarding the pools. This object comprises the following attributes:

```json
{
  "v1GetPools": {
    "res": {
    "data":
      [{
        "borrowed": "980000",
        "collateralDetails": [],
        "endTime": "2024-07-19T20:42:26.000Z",
        "hardCap": "5000000",
        "id": "0",
        "interest": 1,
        "metadata": {
          "collateralDetails": []
        },
        "poolOwner": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
        "repaid": "0",
        "rewards": "0",
        "softCap": "1000000",
        "startDate": "2024-07-18T20:42:32.000Z",
        "status": "collectable",
        "supplied": "1000000"
      },
      .
      .
      .
      ],
      "more": false
    },
    "success": true
  }
}
```

### `Get Total Pools`

Returns the count of pools created within the current instance of `erc20collateraltoken`.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-pools`

**Request Body**

```json
{
  "data": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}"
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing information about the total pools. This object includes the following attributes:

```json
{
  "v1GetTotalPools": {
    "res": "672",
    "success": true
  }
}
```

### `Update Pool Metadata`

Update the pool metadata

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/update-pool-metadata`

**Request Body**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "id": "0",
    "name": "FACTR Pool 0",
    "description": "FACTR is a tool that facilitates the connection between the traditional world of assets and the decentralized ecosystem of cryptocurrencies. Explore more about Defactor and its potential in the financial world!",
    "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648",
    "collateralDetails": [
      {
        "address": "0x60E87395b0101F85C623c38Be010574f958496db",
        "standard": "ERC20",
        "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
      }
    ]
  }
}
```

**Response**

Upon successful request completion, the server will issue a status code of 200 alongside a JSON object. This object incorporates the following attributes:

```json
{}
```

### `Close Pool`

Close the specified `poolId` if possible.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/close-pool`

**Request Body**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "poolId": "0"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1ClosePool": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

### `Archive Pool`

Archive the specified `poolId` if possible.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/archive-pool`

**Request Body**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "poolId": "0"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1ArchivePool": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

## Lend

### `Lend`

Lend to a pool the specific amount of the token on which the contract is based. This endpoint is equivalent to the action `commitToPool` in the contract.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/lend`

**Request Body**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "data": {
      "poolId": "2",
      "amount": "300000000"
    }
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1Lend": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

### `Repay`

Repay a loan to a pool if it is `active` and it has not already been repaid. This endpoint is equivalent to the action `depositRewards` in the contract.

The `counterpartypool` contract needs the approval to spend money on behalf of the borrower, to give the approve the [`erc20 approve`](#erc20-approve) endpoint could be used. The amount to approve must be greater than `pool.supplied + (pool.supplied * pool.interest / 100).`

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/repay`

**Request Body**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "poolId": "628",
    "borrowId": "0"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1Repay": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

### `Claim Rewards`

Allows the owner of the address, if they have not already done so, to claim the rewards the pool must be arctive or closed. This endpoints it equivalent to the action `claim` in the contract.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/claim-rewards`

**Request Body**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "poolId": "0",
    "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
    "lendingId": "0"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1ClaimRewards": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

### `Reclaim Loan`

If possible recover the supplied amount to a pool. This endpoint is equivalent to the action `uncommitFromPool` in the contract.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/reclaim-loan`

**Request Body**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "data": {
      "poolId": "2"
    }
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1ReclaimLoan": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

## Borrow

### `Borrow`

Borrow the indicated amount of the token from the pool if it is not close and there is enough funds. Where the amount in the request body corresponds to the token on which the contract is based.

The `counterpartypool` contract needs the approval to spend the amount of collateral token on behalf of the borrower, to give the approve the [`erc20 approve`](#erc20-approve) endpoint could be used. Also, to get the amount of collateral token use the [`calculate collateral amount`](#calculate-collateral-token-amount) endpoint.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/borrow`

**Request Body**

```json
{
  "borrow": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "data": {
      "poolId": "1",
      "amount": "15000000"
    }
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1Borrow": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

## Utilities

### `Erc20 Approve`

Authorize a third party address to expend a designated sum of funds of the indicated token.

| Property             | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `tokenAddress`       | The address where the collateral token is deployed.               |
| `addressToAuthorize` | The address where the `counterpartypool` contract is deployed. |

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/erc20-approve`

**Request Body**

```json
{
  "token": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "{{COUNTER_PARTY_POOL}}",
    "data": {
      "address": "0xec92Ca91907fD64E446122953601E774Fd3CD6e6",
      "amount": 200000000
    }
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1Erc20Approve": {
    "res": {
      "_type": "TransactionResponse",
      "accessList": [],
      "blobVersionedHashes": null,
      "blockHash": null,
      "blockNumber": null,
      "chainId": "80001",
      "from": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "gasLimit": "150012",
      "gasPrice": null,
      "hash": "0x68dc6f65b96a427c4c289371637b063bbe20d9841d6c8183f06e657ab10efb1e",
      .
      .
      .
    },
    "success": true
  }
}
```

### `Get Usdc`

Returns the configured `usdc` contract address within the `erc20collateraltoken` instance.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-usdc`

**Request Body**

```json
{
  "data": {
    "network": "{{NETWORK_NAME}}"
  }
}
```

**Response**

Upon successful request completion, the server will issue a status code of 200 alongside a JSON object containing the address information for `usdc`. This object incorporates the following attributes:

```json
{
  "v1GetUsdc": {
    "res": "0x80D9E7bC3D962878b292F9536b38E52e266a77Fd",
    "success": true
  }
}
```

### `Get Total Usdc Available`

Get total `usdc` available which is equal to `lent - borrowed`.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-usdc-available`

**Request Body**

```json
{
  "data": {
    "network": "{{NETWORK_NAME}}"
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the total lent and borrowed. This object includes the following attributes:

```json
{
  "pool_aggregate": {
    "aggregate": {
      "sum": {
        "borrowed": 0,
        "lended": 0
      }
    }
  }
}
```

### `Get Dollar Price For Token`

Get the dollar price for token.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-dollar-price-for-token`

**Request Body**

```json
{
  "data": {
    "network": "{{NETWORK_NAME}}"
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing dollar price for the available tokens. This object includes the following attributes:

```json
{
  "token_price": [
    {
      "id": "dfcec840-6a79-4cc0-b368-f07b7a566b85",
      "date": "1970-01-01T00:00:00.000Z",
      "price": 0,
      "marketCaps": 0,
      "totalVolumes": 0,
      "tokenName": "tokenName"
    }
  ]
}
```

### `Get Historical Balance`

Get the historical contributions by filtered by event and group by period of time

| Property   | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| `filterBy` | One of the following values: `minute`, `hour`, `day`, `week`, `month`, `year`, `all` |
| `byEvent`  | One of the following values: `LendEvent`, `BorrowEvent`, `All`.                      |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-historical-balance`

**Request Body**

```json
{
  "stats": {
    "networks": ["{{NETWORK_NAME}}"],
    "filterBy": "month"
  }
}
```

**Response**

Upon successful request completion, the server will issue a status code of 200 alongside a JSON object. This object incorporates the following attributes:

```json
{
  "v1GetHistoricalContributions": {
    "res": {
      "1712188800000": {
        "collateral": 0,
        "fluctuation": 0,
        "fluctuationValue": 0,
        "price": 0
      },
      "1712275200000": {
        "collateral": 0,
        "fluctuation": 0,
        "fluctuationValue": 0,
        "price": 0
      }
    },
    "success": true
  }
}
```

### `get Config`

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/get-config`

**Request Body**

```json
{}
```

## Error Reference

### Error Response Format

The errors have the following schema:

| Property | Description                                 |
| -------- | ------------------------------------------- |
| `error`  | The description of the error                |
| `path`   | The path to the field that caused the error |
| `code`   | The error code                              |

**Examples**

The variable has a wrong type:

```json
{
  "error": "expected a string for type 'String', but found a number",
  "path": "$.selectionSet.v1GetPool.args.pool.poolId",
  "code": "validation-failed"
}
```

The variable is missing in the request body:

```json
{
  "error": "missing required field 'poolId'",
  "path": "$.selectionSet.v1GetPool.args.pool.poolId",
  "code": "validation-failed"
}
```

The field does not exists or the role has no permissions:

```json
{
  "error": "field 'v1UpdatePoolMetadata' not found in type: 'mutation_root'",
  "path": "$.selectionSet.v1UpdatePoolMetadata",
  "code": "validation-failed"
}
```

The variable is not in the request body schema:

```json
{
  "error": "Unexpected variable pool",
  "path": "$",
  "code": "bad-request"
}
```

The endpoint does not exists:

```json
{
  "error": "Endpoint not found",
  "path": "$",
  "code": "not-found"
}
```

There is no pool with the provided id:

```json
{
  "error": "Pool id 400 does not exist",
  "path": "$",
  "code": "unexpected"
}
```

### Types of Errors

**General**

- The date provided has already passed
  - **Error message**: Time must be in the future
- The number provided is negative or zero
  - **Error message**: Amount cannot be negative or 0
- The JWT is invalid
  - **Error message**: Could not verify JWT: `JWT error`
- The input provided has a invalid value
  - **Error message**: Invalid request payload input
- The string provided is not a integer number
  - **Error message**: Cannot convert `X` to BigInt

**Addresses**

- The address provided is invalid
  - **Error message**: Address does not follow the ethereum address format
- The address does not have the required admin role in the `counterpartypool` contract
  - **Error message**: Sender address is not admin
- The collateral token address is invalid
  - **Error message**: Collateral token does not follow the ethereum address format

**Pools**

- There is no pool with the provided id
  - **Error message**: Pool id `X` does not exist
- The `endTime` date of the pool was reached
  - **Error message**: Pool has ended
- The endpoint requires a closed pool
  - **Error message**: Pool is not closed
- The endpoint requires a not closed pool
  - **Error message**: Pool is closed
- The endpoint requires a completed pool
  - **Error message**: Pool is not completed
- Occurs when an attempt is made to liquidate or obtain liquidation information for a completed pool
  - **Error message**: Pool cannot be liquidated

**Lend**

- There is no lending with the provided id
  - **Error message**: Lending id `X` does not exist
- Occurs when an attempt is made to claim rewards of a loan that has already been claimed
  - **Error message**: Loan already claimed

**Borrow**

- There is no borrow with the provided id
  - **Error message**: Borrow id `X` does not exists
- Occurs when an attempt is made to borrow an amount that overpass the pool balance
  - **Error message**: Amount overpass the pool available amount
- Occurs when an attempt is made to repay a borrow that has already been repaid
  - **Error message**: Borrow already repaid

**Pagination**

- The provided offset is negative
  - **Error message**: Offset cannot be negative
- The provided limit is negative or zero
  - **Error message**: Limit cannot be negative or 0
- The provided limit is equal to the maximum results per page, use a smaller value
  - **Error message**: Max limit allowed is `X`
