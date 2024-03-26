---
title: Endpoints List (GraphQL and RESTful API)
---

The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.

This API offers dual modes of interaction with the smart contract: firstly, via the RESTful API; and secondly, through the GraphQL API.

Outlined below is a detailed overview of the API's functionalities, leveraging a designated instance of the `erc20collateralpool` contract as the primary data source.

## Authentication

### `Login`

Return a JSON Web Token (JWT) access token and refresh token. By default, the access token has a maturity of 60 minutes, but it may vary depending on the server configuration.

**HTTP Request Method**: POST

**RESTful URL**: `{{BASE_RESTFUL_URL}}/api/rest/v1/login`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($session: LoginInput!) {
  v1Login(session: $session) {
    res
    success
  }
}
```

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

**RESTful URL**: `{{BASE_RESTFUL_URL}}/api/rest/v1/restore-session`

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

**Request Body**

```json
{
  "session": {
    "refreshToken": "0a1a6d5f-1bf9-4540-8c22-d9442a75476f"
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
      "refreshToken": "d9438293-d378-4561-8b67-d7a4608b7d7c"
    },
    "success": true
  }
}
```

## Pools

### `Create Pool`

Create a new pool.

**HTTP Request Method**: POST

**RESTful URL**: `{{BASE_RESTFUL_URL}}/api/rest/v1/create-pool`

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

**Request Body**

```json
{
  "pool": {
    "endTime": "2024-02-13T15:10:00.000",
    "interest": 10,
    "collateralDetails": {
      "collateralToken": "0x81da82b49CD9Ee7b7d67B4655784581f30590eA1",
      "collateralTokenChainlink": "0x997a6BCe1372baca6Bbb8db382Cb12F2dDca2b45",
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

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-pool`

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

**Request Body**

```json
{
  "pool": {
    "poolId": "415"
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

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-pools`

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

**Request Body**

```json
{
  "pool": {
    "offset": "0",
    "limit": "10"
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200, accompanied by a JSON object containing information regarding the pools. This object comprises the following attributes:

```json
{
  "v1GetPools": {
    "res": [
      {
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
    "success": true
  }
}
```

### `Get Total Pools`

Returns the count of pools created within the current instance of `erc20collateraltoken`.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-pools`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation {
  v1GetTotalPools {
    res
    success
  }
}
```

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

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/liquidate-pool`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: GetPoolInput!) {
  v1LiquidatePool(pool: $pool) {
    res
    success
  }
}
```

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

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-liquidation-info`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: GetPoolInput!) {
  v1GetLiquidationInfo(pool: $pool) {
    res
    success
  }
}
```

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

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-liquidation-protocol-fee`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation {
  v1GetLiquidationProtocolFee {
    res
    success
  }
}
```

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

Get total collateral amount.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-collateral-amount`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v1GetTotalCollateralAmount {
  pool_aggregate(where: { liquidated: { _neq: true } }) {
    aggregate {
      sum {
        collateralTokenAmount
      }
    }
  }
}
```

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

## Lend

### `Lend`

Lend to a pool.

**HTTP Request Method**: POST

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/lend`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($loan: LendInput!) {
  v1Lend(loan: $loan) {
    res
    success
  }
}
```

**Request Body**

```json
{
  "loan": {
    "poolId": "628",
    "amount": "10000000"
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

Repay a loan to a pool.

**HTTP Request Method**: POST

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/repay`

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

Claim rewards.

**HTTP Request Method**: POST

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/claim-rewards`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($loan: ClaimRewardsInput!) {
  v1ClaimRewards(loan: $loan) {
    res
    success
  }
}
```

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

Retrieves lending information.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-lending`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($loan: GetLendingInput!) {
  v1GetLending(loan: $loan) {
    res
    success
  }
}
```

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

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-lending`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($loan: GetTotalLendingInput!) {
  v1GetTotalLending(loan: $loan) {
    res
    success
  }
}
```

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

Retrieves the lending participation for a lender in a pool.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-lendings-by-lender`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($loan: GetLendingsByLenderInput!) {
  v1GetLendingsByLender(loan: $loan) {
    res
    success
  }
}
```

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

Borrow from a pool.

**HTTP Request Method**: POST

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/borrow`

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

**Request Body**

```json
{
  "borrow": {
    "poolId": "628",
    "amount": "1000000"
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

Retrieves the amount of collateral token required for borrowing.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/calculate-collateral-token-amount`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($borrow: CalculateCollateralTokenAmountInput!) {
  v1CalculateCollateralTokenAmount(borrow: $borrow) {
    res
    success
  }
}
```

**Request Body**

```json
{
  "borrow": {
    "poolId": "0",
    "amount": "10000000" // 10 USDC
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the collateral amount required to borrow the specified amount. This object includes the following attributes:

```json
{
  "v1CalculateCollateralTokenAmount": {
    "res": "372006973844054693",
    "success": true
  }
}
```

### `Get Borrow`

Returns the borrow information for a borrower in a given pool.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-borrow`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($borrow: GetBorrowInput!) {
  v1GetBorrow(borrow: $borrow) {
    res
    success
  }
}
```

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

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-borrows`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($borrow: GetTotalBorrowsInput!) {
  v1GetTotalBorrows(borrow: $borrow) {
    res
    success
  }
}
```

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

### `Get Borrows by Borrower`

Returns the borrows of a pool the borrower is participating in.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-borrows-by-borrower`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($borrow: GetBorrowsByBorrowerInput!) {
  v1GetBorrowsByBorrower(borrow: $borrow) {
    res
    success
  }
}
```

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

Returns the interest for a repayment of a borrow.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/calculate-repay-interest`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($loan: CalculateRepayInterestInput!) {
  v1CalculateRepayInterest(loan: $loan) {
    res
    success
  }
}
```

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

## General

### `Get Total USDC Available`

Get total `usdc` available which is equal to `lent - borrowed`.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-usdc-available`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v1GetTotalUsdcAvailable {
  pool_aggregate {
    aggregate {
      sum {
        borrowed
        lended
      }
    }
  }
}
```

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

Get dollar price for token.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-dollar-price-for-token`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v1GetDollarPriceForToken {
  token_price(order_by: { date: desc }, limit: 1) {
    id
    date
    price
    marketCaps
    totalVolumes
    tokenName
  }
}
```

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

### `ERC20 Approve`

Authorize a third party to expend a designated sum of funds.

**HTTP Request Method**: POST

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/erc20-approve`

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

### `Get Usdc Address`

Returns the configured `usdc` contract address within the `erc20collateraltoken` instance.

**HTTP Request Method**: GET

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-usdc`

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation {
  v1GetUsdc {
    res
    success
  }
}
```

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