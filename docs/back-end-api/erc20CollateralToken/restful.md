---
title: Endpoints List RESTful API
sidebar_position: 1
---


The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.

This API offers dual modes of interaction with the smart contract: firstly, via the RESTful API; and secondly, through the GraphQL API.

Outlined below is a detailed overview of the API's functionalities, leveraging a designated instance of the `erc20collateralpool` contract as the primary data source.

:::info

The `erc20collateralpool` contact is based on a token that follows the erc20 token standard and has exactly a precision of 6. For example it can be `usdc`, `euroc` or any other token that meets the above mentioned requirements.

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
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IjEyMyIsIngtaGFzdXJhLW9yZy1pZCI6IjQ1NiIsIngtaGFzdXJhLWN1c3RvbSI6ImN1c3RvbS12YWx1ZSJ9fQ.07mlUOhH3Oigz_Yyil8EC579Ht6PbZ1yr8fYJfhQ4NE",
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
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IjEyMyIsIngtaGFzdXJhLW9yZy1pZCI6IjQ1NiIsIngtaGFzdXJhLWN1c3RvbSI6ImN1c3RvbS12YWx1ZSJ9fQ.07mlUOhH3Oigz_Yyil8EC579Ht6PbZ1yr8fYJfhQ4NE",
      "refreshToken": "0a1a6d5f-1bf9-4540-8c22-d9442a75476f"
    },
    "success": true
  }
}
```

## Pools
The `collateralDetails` schema has the following properties:

| Property | Description |
| --- | --- |
| `collateralToken` | The address where the collateral token is deployed. |
| `collateralTokenChainlink` | The address where the contract that indicates the price of the collateral token is deployed. |
| `collateralTokenFactor` | Used to adjust the collateral amount from the price of the collateral. |
| `collateralTokenPercentage` | Used to calculate the amount of collateral token a borrower will need to provide to borrow from the pool. |

### `Create Pool`

Create a new pool with the indicated collateral token using the `collateralDetails` schema. Once the `endTime` period concludes, neither lending nor borrowing are allowed.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/create-pool`

**Request Body**

```json
{
    "pool": {
        "endTime": "2024-02-28T00:20:00.000",
        "interest": 10,
        "collateralDetails": {
            "collateralToken": "0x5093C6838f44991B509b7f940fD7e8f0131B0A7C",
            "collateralTokenChainlink": "0xFd3da056e0552Bdac2b97025D7784C7C09838df8",
            "collateralTokenFactor": 115,
            "collateralTokenPercentage": 60
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
      "borrowed": "0",
      "collateralDetails": {
        "collateralToken": "0x81da82b49CD9Ee7b7d67B4655784581f30590eA1",
        "collateralTokenChainlink": "0x997a6BCe1372baca6Bbb8db382Cb12F2dDca2b45",
        "collateralTokenFactor": "115",
        "collateralTokenPercentage": "60"
      },
      "collateralTokenAmount": "0",
      "collateralTokenAmountAtLiquidation": "0",
      "endTime": "1706924460",
      "interest": "10",
      "lastUpdated": "0",
      "lended": "0",
      "liquidated": false,
      "liquidatedCollateral": "0",
      "repaid": "0",
      "rewardPerToken": "0",
      "rewardRate": "0",
      "rewards": "0"
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
        "borrowed": "2630",
        "collateralDetails": {
          "collateralToken": "0x81da82b49CD9Ee7b7d67B4655784581f30590eA1",
          "collateralTokenChainlink": "0x997a6BCe1372baca6Bbb8db382Cb12F2dDca2b45",
          "collateralTokenFactor": "115",
          "collateralTokenPercentage": "50"
        },
        "collateralTokenAmount": "80353506350309",
        "collateralTokenAmountAtLiquidation": "0",
        "endTime": "1711925999",
        "interest": "10",
        "lastUpdated": "1707770796",
        "lended": "6225000150",
        "liquidated": false,
        "liquidatedCollateral": "0",
        "repaid": "470",
        "rewardPerToken": "419803556",
        "rewardRate": "1100",
        "rewards": "0"
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
{}
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

### `Liquidate Pool`

Liquidate a pool.

**HTTP Request Method**: POST

**Roles**: Admin  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/liquidate-pool`

**Request Body**

```json
{
    "pool": {
        "poolId": "0"
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1LiquidatePool": {
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

### `Get Liquidation Info`

Retrieves the liquidation information of a loan.

**HTTP Request Method**: GET

**Roles**: Guest  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-liquidation-info`

**Request Body**

```json
{
   "pool": {
        "poolId": "0"
   }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the amount required to be paid in order to liquidate the pool. This object includes the following attributes:

```json
{
  "v1GetLiquidationInfo": {
    "res": {
      "liquidatableAmountWithLiquidationFee": "2874604918977589116",
      "liquidatableAmountWithProtocolFee": "2743941059024062338",
      "remainingInterest": "2613277199070533400"
    },
    "success": true
  }
}
```

### `Get Liquidation Protocol Fee`

Retrieves the fee for liquidation.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-liquidation-protocol-fee`

**Request Body**

```json
{}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the liquidation fee. This object includes the following attributes:

```json
{
  "v1GetLiquidationProtocolFee": {
    "res": "5",
    "success": true
  }
}
```

### `Get Total Collateral Amount`

Get the total collateral amount.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-collateral-amount`

**Request Body**

```json
{}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the total collateral amount. This object includes the following attributes:

```json
{
  "pool_aggregate": {
    "aggregate": {
      "sum": {
        "collateralTokenAmount": 0
       }
     }
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
        "id": "24",
        "name": "FACTR Pool 24",
        "description": "FACTR is a tool that facilitates the connection between the traditional world of assets and the decentralized ecosystem of cryptocurrencies. Explore more about Defactor and its potential in the financial world!",
        "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648",
        "collateralToken": {
            "name":"FACTR",
            "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648",
            "symbol": "FACTR"
        }
    }
}
```

**Response**

Upon successful request completion, the server will issue a status code of 200 alongside a JSON object. This object incorporates the following attributes:

```json
{}
```

## Lend

### `Lend`

Lend to a pool the specific amount of the token on which the contract is based.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/lend`

**Request Body**

```json
{
    "loan": {
        "poolId": "0",
        "amount": "10000000" // 10 of based token contract
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

Repay a loan to a pool if it is not closed and it has not already been repaid.

The `erc20collateralpool` contract needs the approval to spend money on behalf of the borrower, to give the approve the [`erc20 approve`](#erc20-approve) endpoint could be used. The amount to approve must be `USDC lent + loan interest.`

**HTTP Request Method**: POST

**Roles**: Admin  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/repay`

**Request Body**

```json
{
    "loan": {
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

Allows the owner of the address, if they have not already done so, to claim the rewards after the pool has been closed and completed.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/claim-rewards`

**Request Body**

```json
{
   "loan": {
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

### `Get Lending`

Retrieves lending information associated with the provided address.

**HTTP Request Method**: GET

**Roles**: Guest  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-lending`

**Request Body**

```json
{
    "loan": {
        "poolId": "0",
        "address": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd",
        "lendingId": "0"
    }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing comprehensive lending information. This object encompasses the following attributes:

```json
{
  "v1GetLending": {
    "res": {
      "amount": "10000000",
      "claimed": false,
      "rewardPerTokenIgnored": "0"
    },
    "success": true
  }
}
```

### `Get Total Lending`

Returns the amount of lending made for a specific pool and a provided address.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-lending`

**Request Body**

```json
{
    "loan": {
        "poolId": "0",
        "address": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd"
    }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing comprehensive total lending information. This object incorporates the following attributes:

```json
{
  "v1GetTotalLending": {
    "res": "646",
    "success": true
  }
}
```

### `Get Lendings By Lender`

Retrieves the lending participation for a lender in a pool specified in the pagination parameters.

**HTTP Request Method**: GET

**Roles**: Guest  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-lendings-by-lender`

**Request Body**

```json
{
    "loan": {
        "offset": "0",
        "limit": "10",
        "poolId": "0",
        "lenderAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd"
    }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the lending participation of a lender in a pool. This object incorporates the following attributes:

```json
{
  "v1GetLendingsByLender": {
    "res": [
      {
        "amount": "10000000",
        "claimed": false,
        "rewardPerTokenIgnored": "0"
      },
      .
      .
      .
    ],
    "success": true
  }
}
```

## Borrow

### `Borrow`

Borrow the indicated amount of the token from the pool if it is not close and there is enough funds. Where the amount in the request body corresponds to the token on which the contract is based.

The `erc20collateralpool` contract needs the approval to spend the amount of collateral token on behalf of the borrower, to give the approve the [`erc20 approve`](#erc20-approve) endpoint could be used. Also, to get the amount of collateral token use the [`calculate collateral amount`](#calculate-collateral-token-amount) endpoint.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/borrow`

**Request Body**

```json
{
    "borrow": {
        "poolId": "628",
        "amount": "1000000" // 10 of based token contract
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

### `Calculate Collateral Token Amount`

Retrieves the amount of collateral token required for borrowing the indicated amount of token from the pool. Where the amount in the request body corresponds to the token on which the contract is based.

**HTTP Request Method**: GET

**Roles**: Guest  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/calculate-collateral-token-amount`

**Request Body**

```json
{
    "borrow": {
        "poolId": "0",
        "amount": "10000000" // 10 of based token contract
    }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the collateral amount required to borrow the specified amount of token on which the contract is based. This object includes the following attributes:

```json
{
  "v1CalculateCollateralTokenAmount": {
    "res": "372006973844054693", // amount in collateral token
    "success": true
  }
}
```

### `Get Borrow`

Returns the borrow information for a borrower in a given pool.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-borrow`

**Request Body**

```json
{
   "borrow": {
        "poolId": "0",
        "borrowerAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd",
        "borrowId": "5"
   }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing borrow information for a borrower in a pool. This object includes the following attributes:

```json
{
  "v1GetBorrow": {
    "res": {
      "amount": "10",
      "borrowTime": "1706923529",
      "collateralTokenAmount": "372006973844",
      "repayTime": "0"
    },
    "success": true
  }
}
```

### `Get Total Borrows`

Returns the total borrows for a borrower in a pool.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-borrows`

**Request Body**

```json
{
   "borrow": {
        "poolId": "0",
        "borrowerAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd"
   }
}
```

**Response**

Upon a successful request, the server will respond with a status code of 200 and a JSON object containing the total borrow information for a borrower in a pool. The object includes the following attributes:

```json
{
  "v1GetTotalBorrows": {
    "res": "164",
    "success": true
  }
}
```

### `Get Borrows By Borrower`

Returns the borrows of a pool the borrower is participating in.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-borrows-by-borrower`

**Request Body**

```json
{
   "borrow": {
        "poolId": "0",
        "borrowerAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd",
        "offset": "0",
        "limit": "10"
   }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the borrows in which the borrower is participating in a pool. This object includes the following attributes:

```json
{
    "v1GetBorrowsByBorrower": {
        "res": [
            {
                "amount": "10",
                "borrowTime": "1706887089",
                "collateralTokenAmount": "372006973844",
                "repayTime": "1707255360"
            },
            .
            .
            .
        ],
        "success": true
    }
}
```

### `Calculate Repay Interest`

Returns the interest for the repayment of a borrow.

**HTTP Request Method**: GET

**Roles**: Guest  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/calculate-repay-interest`

**Request Body**

```json
{
   "loan": {
        "poolId": "0",
        "borrowerAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd",
        "borrowId": "136"
   }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the interest to be paid for a borrow. This object includes the following attributes:

```json
{
  "v1CalculateRepayInterest": {
    "res": "0",
    "success": true
  }
}
```

## Utilities

### `Get Usdc`

Returns the configured `usdc` contract address within the `erc20collateraltoken` instance.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-usdc`

**Request Body**

```json
{}
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
{}
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
{}
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

### `Erc20 Approve`

Authorize a third party address to expend a designated sum of funds of the indicated token.

| Property | Description |
| --- | --- |
| `tokenAddress` | The address where the collateral token is deployed. |
| `addressToAuthorize` | The address where the `erc20collateralpool` contract is deployed. |

**HTTP Request Method**: POST

**Roles**: Admin  

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/erc20-approve`

**Request Body**

```json
{
    "token": {
        "tokenAddress": "0x81da82b49CD9Ee7b7d67B4655784581f30590eA1",
        "addressToAuthorize": "0x615e1f7970363Fbf7A1843eFc16f0E4e685610F9",
        "amount": "1032002028946529865"
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

### `Get Historical Contributions`

Get the historical contributions by filtered by event and group by period of time

| Property | Description |
| --- | --- |
| `filterBy` | One of the following values: `minute`, `hour`, `day`, `week`, `month`, `year`, `all` |
| `byEvent` | One of the following values: `LendEvent`, `BorrowEvent`, `All`. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-historical-contributions`

**Request Body**

```json
{
    "stats": {
        "filterBy": "year",
        "byEvent": "LendEvent"
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

## Error Reference

### Error Response Format
The errors have the following schema:

| Property | Description |
| --- | --- |
| `error` | The description of the error |
| `path` | The path to the field that caused the error |
| `code` | The error code |

**Examples**

The variable has a wrong type:

``` json
{
  "error": "expected a string for type 'String', but found a number",
  "path": "$.selectionSet.v1GetPool.args.pool.poolId",
  "code": "validation-failed"
}

 ```

The variable is missing in the request body:

``` json
{
  "error": "missing required field 'poolId'",
  "path": "$.selectionSet.v1GetPool.args.pool.poolId",
  "code": "validation-failed"
}

 ```

The field does not exists or the role has no permissions:

``` json
{
  "error": "field 'v1UpdatePoolMetadata' not found in type: 'mutation_root'",
  "path": "$.selectionSet.v1UpdatePoolMetadata",
  "code": "validation-failed" 
}

 ```

The variable is not in the request body schema:

``` json
{
  "error": "Unexpected variable pool",
  "path": "$",
  "code": "bad-request"
}

 ```

The endpoint does not exists:

``` json
{
  "error": "Endpoint not found",
  "path": "$",
  "code": "not-found"  
}

 ```

There is no pool with the provided id:

``` json
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
- The address does not have the required admin role in the `erc20collateralpool` contract
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
