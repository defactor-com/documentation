---
title: Endpoints List GraphQL API
sidebar_position: 2
---

The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.

This API offers dual modes of interaction with the smart contract: firstly, via the RESTful API; and secondly, through the GraphQL API.

It facilitates interaction with various Pools smart contracts by providing an intuitive interface that maps the actions to straightforward concepts, such as create, lend, borrow, repaid, etc. Also, it enables seamless communication with smart contracts configured across multiple blockchain networks. It is necessary to specify the network and contract name in each request payload.

Outlined below is a detailed overview of the API's functionalities, leveraging a designated instance of the `erc20collateralpool` contract as the primary data source.

:::info

The `erc20collateralpool` contract is based on a token that follows the `erc20` token standard that has a set precision. For example it can be `usdc`, `euroc` with a exactly a precision of 6 or any other token that meets the above mentioned requirements.

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

The `collateralDetails` schema has the following properties:

| Property                    | Description                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `collateralToken`           | The address where the collateral token is deployed.                                                       |
| `collateralTokenChainlink`  | The address where the contract that indicates the price of the collateral token is deployed.              |
| `collateralTokenFactor`     | Used to adjust the collateral amount from the price of the collateral.                                    |
| `collateralTokenPercentage` | Used to calculate the amount of collateral token a borrower will need to provide to borrow from the pool. |

### `Create Pool`

Create a new pool with the indicated collateral token using the `collateralDetails` schema. Once the `endTime` period concludes, neither lending nor borrowing are allowed.

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
    "contractName": "erc20-collateral-pool",
    "data": {
      "endTime": "2024-08-09T23:58:00.000",
      "interest": 10,
      "collateralDetails": {
        "collateralToken": "0x6BaB3bEA9aD00893101837d46638B470076f8AAF",
        "collateralTokenChainlink": "0x295894a94F859cE1Ac960364D6b0D2Fa430027b4",
        "collateralTokenFactor": 10,
        "collateralTokenPercentage": 115
      }
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
    "contractName": "erc20-collateral-pool",
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
    "contractName": "erc20-collateral-pool",
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
    "contractName": "erc20-collateral-pool"
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

### `Liquidate Pool`

Liquidate a pool if it is not completed.

The `erc20collateralpool` contract needs the approval to spend the amount of base token on behalf of the lender, to give the approve the [`erc20 approve`](#erc20-approve) endpoint could be used. Also, to get the amount needed to liquidate the pool use the [`get liquidation info`](#get-liquidation-info) endpoint.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation ($pool: LiquidatePoolInput!) {
  v1LiquidatePool(pool: $pool) {
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
    "contractName": "erc20-collateral-pool",
    "data": {
      "poolId": "3"
    }
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

if the pool is not completed retrieves the liquidation information of a loan.

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "pool": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
    "poolId": "3"
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

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1GetLiquidationProtocolFee($data: DefaultInput!) {
  v1GetLiquidationProtocolFee(data: $data) {
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
    "contractName": "erc20-collateral-pool"
  }
}
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

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v1GetTotalCollateralAmount {
  global_pool_aggregate(
    where: {
      liquidated: { _neq: true }
      contract_id: { _eq: "{{ERC20_COLLATERAL_POOL_ID}}" }
    }
  ) {
    aggregate {
      sum {
        collateralTokenAmount
      }
    }
  }
}
```

**GraphQL Variables**

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

Update the pool metadata.

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
    "contractName": "erc20-collateral-pool",
    "id": "0",
    "name": "FACTR Pool 0",
    "description": "FACTR is a tool that facilitates the connection between the traditional world of assets and the decentralized ecosystem of cryptocurrencies. Explore more about Defactor and its potential in the financial world!",
    "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648",
    "collateralToken": {
      "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
    },
    "termsConditions": {
      "title": "What happens if I default on my loan?",
      "description": "Liquidation is an essential process of lending activity, the process of liquidation occurs when the lending pool has reached its maturity date, are still outstanding and have not been repaid by the borrowers.",
      "ref": {
        "label": "Download Repayment Terms & Conditions",
        "url": "https://www.defactor.com/"
      }
    }
  }
}
```

**Response**

Upon successful request completion, the server will issue a status code of 200 alongside a JSON object. This object incorporates the following attributes:

```json
{}
```

---

## Lend

### `Lend`

Lend to a pool the specific amount of the token on which the contract is based.

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
    "contractName": "erc20-collateral-pool",
    "data": {
      "poolId": "628",
      "amount": "10000000" // 10 of based token contract
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

Repay a loan to a pool if it is not closed and it has not already been repaid. This endpoint only supports signed transactions as payload.

The `erc20collateralpool` contract needs the approval to spend money on behalf of the borrower, to give the approve the [`erc20 approve`](#erc20-approve) endpoint could be used. The amount to approve must be `USDC lent + loan interest.`

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
    "contractName": "erc20-collateral-pool",
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

Allows the owner of the address, if they have not already done so, to claim the rewards after the pool has been closed and completed.

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
    "contractName": "erc20-collateral-pool",
    "data": {
      "poolId": "0",
      "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "lendingId": "0"
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

### `Get Lending`

Retrieves lending information associated with the provided address.

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
    "poolId": "0",
    "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
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

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
    "poolId": "0",
    "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5"
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

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
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

---

## Borrow

### `Borrow`

Borrow the indicated amount of the token from the pool if it is not close and there is enough funds. Where the amount in the request body corresponds to the token on which the contract is based. This endpoint only supports signed transactions as payload.

The `erc20collateralpool` contract needs the approval to spend the amount of collateral token on behalf of the borrower, to give the approve the [`erc20 approve`](#erc20-approve) endpoint could be used. Also, to get the amount of collateral token use the [`calculate collateral amount`](#calculate-collateral-token-amount) endpoint.

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
    "contractName": "erc20-collateral-pool",
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

### `Get Borrow`

Returns the borrow information for a borrower in a given pool.

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "borrow": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
    "poolId": "2",
    "borrowerAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd",
    "borrowId": "4"
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

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "borrow": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
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

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "borrow": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
    "poolId": "0",
    "borrowerAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd",
    "offset": "3",
    "limit": "2"
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

### `Calculate Collateral Token Amount`

Retrieves the amount of collateral token required for borrowing the indicated amount of token from the pool. Where the amount in the request body corresponds to the token on which the contract is based.

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "borrow": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
    "poolId": "37",
    "amount": "30000000"
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

### `Calculate Repay Interest`

Returns the interest for the repayment of a borrow.

**HTTP Request Method**: POST

**Roles**: Guest

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

**GraphQL Variables**

```json
{
  "loan": {
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
    "poolId": "37",
    "borrowerAddress": "0x0FEEe8332394aDc9eB439020DD8D38f4F93999Bd",
    "borrowId": "0"
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

---

## Utilities

### `Erc20 Approve`

Authorize a third party address to expend a designated sum of funds of the indicated token.

| Property  | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `amount`  | The amount to approve.                                            |
| `address` | The address where the `erc20collateralpool` contract is deployed. |

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
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool",
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

### `Get Total Usdc Available`

Get total `usdc` available which is equal to `supplied - borrowed`.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v1GetTotalUsdcAvailable {
  {{NETWORK_NAME}}_pool_aggregate(
    where: {
      contract_id: { _eq: "{{ERC20_COLLATERAL_POOL_ID}}"}
   }
  ) {
    aggregate {
      sum {
        borrowed
        supplied
      }
    }
  }
}
```

**GraphQL Variables**

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

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v1GetDollarPriceForToken {
    {{NETWORK_NAME}}_token_price(order_by: { date: desc }, limit: 1) {
      id
      date
      price
      marketCaps
      totalVolumes
      tokenName
    }
  }
```

**GraphQL Variables**

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
    "network": "{{NETWORK_NAME}}",
    "contractName": "erc20-collateral-pool"
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

### `Get Historical Balance`

Get the historical contributions by filtered by event and group by period of time

| Property   | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| `filterBy` | One of the following values: `minute`, `hour`, `day`, `week`, `month`, `year`, `all` |
| `byEvent`  | One of the following values: `LendEvent`, `BorrowEvent`, `All`.                      |

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v1GetHistoricalBalance($stats: GetHistoricalBalanceInput!) {
  v1GetHistoricalBalance(stats: $stats) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "stats": {
    "networks": ["{{NETWORK_NAME}}", "{{NETWORK_NAME}}"],
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
