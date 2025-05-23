---
title: Endpoints List GraphQL API
sidebar_position: 2
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

---

## Authentication

### `Login`

Return a JSON Web Token (JWT) access token and refresh token. By default, the access token has a maturity of 60 minutes, but it may vary depending on the server configuration.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1Login($session: LoginInput!) {
  v1Login(session: $session) {
    res
    success
  }
}
```

**GraphQL Variables**

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
      "accessToken": "<jwt>",
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

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1RestoreSession($session: RestoreSessionInput!) {
  v1RestoreSession(session: $session) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "session": {
    "refreshToken": "c1c713d8-1088-4488-87c2-ff290df78cae"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the generated access token and refresh token. This object encompasses the following attributes:

```json
{
  "v1RestoreSession": {
    "res": {
      "accessToken": "<jwt>",
      "refreshToken": "0a1a6d5f-1bf9-4540-8c22-d9442a75476f"
    },
    "success": true
  }
}
```

---

## Pools

Unlike the contract, the status are in lowercase; Additionally, to streamline interaction the API include intermediate status such as `collectable`, `closable`, and `archivable`.

To maintain a common interface between API endpoints the structure of the counterparty pool is mapped as follows:

| Counterparty Pool contract | API                      |
| -------------------------- | ------------------------ |
| totalCommitted             | supplied                 |
| deadline                   | endTime (as Date)        |
| createdAt                  | startDate (as Date)      |
| minimumAPR                 | interest (as Percentage) |
| totalRewards               | repaid                   |
| rewardsPaidOut             | rewards                  |

The `collateralDetails` is an array which each element has the following properties:

| Property          | Description                                         |
| ----------------- | --------------------------------------------------- |
| `contractAddress` | The address where the collateral token is deployed. |
| `amount`          | The amount of tokens that are put as collateral.    |
| `id`              | Optional id if collateral is an ERC721 contract.    |

### `Create Pool`

Create a new pool with the indicated collateral tokens using the `collateralDetails` schema.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: CreatePoolInput!) {
  v1CreatePool(pool: $pool) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "data": {
      "endTime": "2024-08-09T23:58:00.000",
      "interest": 10,
      "softCap": "300000000", // 300 USDC
      "hardCap": "800000000", // 800 USDC
      "collateralDetails": [
        {
          "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
          "amount": "500000000"
        }
      ]
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

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: GetPoolInput!) {
  v1GetPool(pool: $pool) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "poolId": "0"
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

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: PaginationInput!) {
  v1GetPools(pool: $pool) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "offset": "0",
    "limit": "30"
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

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1GetTotalPools($data: DefaultInput!) {
  v1GetTotalPools(data: $data) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "data": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool"
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

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: UpdatePoolMetadataInput!) {
  v1UpdatePoolMetadata(pool: $pool) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "id": "0",
    "contractName": "counterparty-pool",
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

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: PoolDataInput!) {
  v1ClosePool(pool: $pool) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "data": {
      "poolId": "0"
    }
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

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: PoolDataInput!) {
  v1ArchivePool(pool: $pool) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "data": {
      "poolId": "0"
    }
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

---

## Lend

### `Lend`

Lend to a pool the specific amount of the token on which the contract is based. This endpoint is equivalent to the action `commitToPool` in the contract.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1Lend($loan: LendInput!) {
  v1Lend(loan: $loan) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "tx": "0x02f8b483aa36a70684208411a0850247082f388301dae194ec92ca91907fd64e446122953601e774fd3cd6e680b84418e0137200000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000190c001a0a9517b0049a5a3bcc4a2eefee336ae557eeb506bda6e1124b5283d7af37c20d0a05cf37832388a1a230e35561ff49d4c96f75952b48b1c964139eccd138e2f0b36"
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

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($loan: RepayInput!) {
  v1Repay(loan: $loan) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "tx": "0x02f8b3830138825b844190ab00844190ab1e8302d712940a2e94dd0d8efa9598f3fa7287f888dc03add28880b844d8aed14500000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000000c080a0afe1724c94d340b1a2304b3db1ad2b83d2f00740a21b81ba682979522c667683a06686ecda38010bec2694f9c10bd974e89ca7aeb0a9957d019353803f4e0356fa"
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

Allows the owner of the address, if they have not already done so, to claim the rewards the pool must be active or closed. This endpoints it equivalent to the action `claim` in the contract.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1ClaimRewards($loan: ClaimRewardsInput!) {
  v1ClaimRewards(loan: $loan) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "data": {
      "poolId": "0"
    }
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

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1ReclaimLoan($loan: PoolDataInput!) {
  v1ReclaimLoan(loan: $loan) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "tx": "0x02f8b483aa36a70684208411a0850247082f388301dae194ec92ca91907fd64e446122953601e774fd3cd6e680b84418e0137200000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000190c001a0a9517b0049a5a3bcc4a2eefee336ae557eeb506bda6e1124b5283d7af37c20d0a05cf37832388a1a230e35561ff49d4c96f75952b48b1c964139eccd138e2f0b36"
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

---

## Borrow

### `Borrow`

Borrow the supplied amount of the base token from the pool if the deadline was reached and status is `created`. This endpoint is equivalent to the action `collectPool` in the contract.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($borrow: BorrowInput!) {
  v1Borrow(borrow: $borrow) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "borrow": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "counterparty-pool",
    "tx": "0x02f8b38301388259844190ab00844190ab1e83044082940a2e94dd0d8efa9598f3fa7287f888dc03add28880b8440ecbcdab00000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000001c9c380c001a060a1ef201be2fb0062b2c8880eb4f7468745b7d057ef942c4d74c53c51adefdda00a17ecbf456d6aaf9d134334e98b24195ec23566abfd4836b6ac69e80dd111d8"
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

---

## Utilities

### `Erc20 Approve`

Authorize a third party address to expend a designated sum of funds of the indicated token.

| Property  | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `amount`  | The amount to approve.                                         |
| `address` | The address where the `counterpartypool` contract is deployed. |

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($token: Erc20ApproveInput!) {
  v1Erc20Approve(token: $token) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "token": {
    "contractName": "counterparty-pool",
    "network": "{{NETWORK_NAME}}",
    "tx": "0x02f8b383aa36a7058424bf2f8e85047a307cec82c9799475fe3476d90598080f7d12365020c438943dcef380b844095ea7b3000000000000000000000000ec92ca91907fd64e446122953601e774fd3cd6e60000000000000000000000000000000000000000000000000000000000000190c080a0530e4f4e58484c18038ac30b16fe4a93b91de19420aa9fc0de9b49edcc42a941a0582664ed5820e481c05cda95532df03383b1bdc73f485e51eef9ada80faa5803"
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

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1GetUsdc($data: DefaultInput!) {
  v1GetUsdc(data: $data) {
    res
    success
  }
}
```

**GraphQL Variables**

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

### `Config`

**HTTP Request Method**: POST

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query {
  getConfig {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{}
```

---

## Error Reference

### Error Response Format

The errors have the GraphQL error schema, an object with an `errors` array property where each item has the following schema:

| Property     | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| `message`    | The description of the error                                                   |
| `extensions` | An object with the path to the field that caused the error, and the error code |

**Examples**

The variable has a wrong type:

```json
{
  "errors": [
    {
      "message": "expected a string for type 'String', but found a number",
      "extensions": {
        "path": "$.selectionSet.v1GetPool.args.pool.poolId",
        "code": "validation-failed"
      }
    }
  ]
}
```

The variable is missing in the request body:

```json
{
  "errors": [
    {
      "message": "missing required field 'poolId'",
      "extensions": {
        "path": "$.selectionSet.v1GetPool.args.pool.poolId",
        "code": "validation-failed"
      }
    }
  ]
}
```

The field does not exists or the role has no permissions:

```json
{
  "errors": [
    {
      "message": "field 'v1UpdatePoolMetadata' not found in type: 'mutation_root'",
      "extensions": {
        "path": "$.selectionSet.v1UpdatePoolMetadata",
        "code": "validation-failed"
      }
    }
  ]
}
```

The variable is not in the request body schema:

```json
{
  "errors": [
    {
      "message": "Unexpected variable pool",
      "extensions": {
        "path": "$",
        "code": "bad-request"
      }
    }
  ]
}
```

The GraphQL variables object is not a valid json:

```json
{
  "errors": [
    {
      "message": "Error in $: Failed reading: satisfy. Expecting object value at X",
      "extensions": {
        "path": "$",
        "code": "invalid-json"
      }
    }
  ]
}
```

The endpoint does not exists:

```json
{
  "errors": [
    {
      "message": "Endpoint not found",
      "extensions": {
        "path": "$",
        "code": "not-found"
      }
    }
  ]
}
```

There is no pool with the provided id:

```json
{
  "errors": [
    {
      "message": "Pool id 400 does not exist",
      "extensions": {
        "path": "$",
        "code": "unexpected"
      }
    }
  ]
}
```

### Types of Error

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

- Occurs when an attempt is made to claim rewards of a loan that has already been claimed
  - **Error message**: Loan already claimed

**Borrow**

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
