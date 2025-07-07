---
title: Endpoints List GraphQL API
sidebar_position: 2
---

The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.

This API offers dual modes of interaction with the smart contract: firstly, via the RESTful API; and secondly, through the GraphQL API.

It facilitates interaction with Pools smart contracts by providing a seamless communication with erc20 collateral pools configured across multiple blockchain networks.

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
mutation v1AuthLogin($session: AuthLoginInput!) {
  v1AuthLogin(session: $session) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "session": {
    "message": "0x0000000000000000000000000000000000000000",
    "signature": "0x0000000000000000000000000000000000000000"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the generated access token and refresh token. This object encompasses the following attributes:

```json
{
  "v1AuthLogin": {
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
mutation v1AuthRestoreSession($session: AuthRestoreSessionInput!) {
  v1AuthRestoreSession(session: $session) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "session": {
    "refreshToken": "eef12fe7-0cb6-4f1c-b0a1-29363f4b26a8"
  }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the generated access token and refresh token. This object encompasses the following attributes:

```json
{
  "v1AuthRestoreSession": {
    "res": {
      "accessToken": "<jwt>",
      "refreshToken": "0a1a6d5f-1bf9-4540-8c22-d9442a75476f"
    },
    "success": true
  }
}
```

### `Logout`

Close all open sessions.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v1AuthLogout($session: AuthLogoutInput!) {
  v1AuthLogout(session: $session) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "session": {
    "refreshToken": "d56c6181-749e-4ab9-ad4c-b5d725bdf2f3"
  }
}
```

## Pools

### `Get Total Collateral Locked`

Get the equivalent in usdc of all the collateral locked.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query ($stats: GetTotalCollateralLockedInput!) {
  v2GetTotalCollateralLocked(stats: $stats) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "stats": {
    "networks": [
      "{{NETWORK_ETHEREUM}}",
      "{{NETWORK_POLYGON}}",
      "{{NETWORK_BASE}}",
      "{{NETWORK_BSC}}"
    ]
  }
}
```

**Response**

Upon successful request completion, the server will issue a status code of 200 alongside a JSON object. This object incorporates the following attributes:

```json
{
  "data": {
    "v2GetTotalCollateralLocked": {
      "res": [
        {
          "lockedInUsdc": 1222.786080658453,
          "network": "base"
        }
      ],
      "success": true
    }
  }
}
```

### `Get Historical Balance`

Retrieves the historical balance with the active supplied, active borrowed, and available amount at a specific timestamp.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2GetHistoricalBalance($stats: GetHistoricalBalanceInput!) {
  v2GetHistoricalBalance(stats: $stats) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
"stats": {"networks": [{{NETWORK_BASE}}], "filterBy": "all"}
}
```

**Response**

Upon successful request completion, the server will return a status code of 200 along with a JSON object containing the active historical balance. This object encompasses the following attributes:

```json
{
  "v2GetHistoricalBalance": {
    "res": [
      {
        "available": {
          "amount": "210000000",
          "fluctuation": "1",
          "fluctuationValue": "0"
        },
        "borrowed": {
          "amount": "190000000",
          "fluctuation": "1",
          "fluctuationValue": "0"
        },
        "date": 1748995200000,
        "supplied": {
          "amount": "400000000",
          "fluctuation": "1",
          "fluctuationValue": "0"
        }
      }
    ]
  }
}
```

### `Get Withdrawable Fees`

Retrieves the withdrawable fees.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2GetWithdrawableFees($stats: GetWithdrawableFeesInput) {
  v2GetWithdrawableFees(stats: $stats) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
    "stats": {
        "networks": [{{NETWORK_BASE}}]
    }
}
```

**Response**

Upon successful request completion, the server will return a status code of 200 along with a JSON object containing the withdrawable fee information. This object encompasses the following attributes:

```json
{
  "data": {
    "v2GetWithdrawableFees": {
      "base": {
        "tokens": [
          {
            "address": "0x0000000000000000000000000000000000000000",
            "availableFee": {
              "decimals": 6,
              "formatted": 5.015323,
              "raw": "5015323"
            },
            "logo": "https://.../usdc.png",
            "symbol": "USDC",
            "usdPrice": {
              "decimals": 18,
              "formatted": 1,
              "raw": "1000000000000000000"
            }
          },
          {
            "address": "0x0000000000000000000000000000000000000000",
            "availableFee": {
              "decimals": 18,
              "formatted": 100,
              "raw": "100000000000000000000"
            },
            "logo": "https://.../factr.png",
            "symbol": "FACTR",
            "usdPrice": {
              "decimals": 18,
              "formatted": 0.02,
              "raw": "20000000000000000"
            }
          }
        ],
        "totalInUsd": 7.015323
      },
      "totalInUsd": 7.015323
    },
    "success": true
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
  v2UpdatePoolMetadata(pool: $pool) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "pool": {
    "id": 1,
    "poolVisibility": "PUBLIC",
    "name": "name",
    "description": "description",
    "logo": "https://www...png",
    "collateralToken": {
      "logo": "https://www...png"
    }
  }
}
```

**Response**

Upon successful request completion, the server will issue a status code of 200 alongside a JSON object. This object incorporates the following attributes:

```json
{
  "data": {
    "v2UpdatePoolMetadata": {
      "res": {
        "id": 1
      },
      "success": true
    }
  }
}
```

### `Update Token Metadata`

Update the metadata of a token.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v2UpdateTokenMetadata($token: UpdateTokenMetadataInput!) {
  v2UpdateTokenMetadata(token: $token) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
    "token": {
      "network": {{NETWORK_BASE}},
      "address": "0x0000000000000000000000000000000000000000",
      "logo": "https://.../logo.png"
    }
}
```

**Response**

Upon successful request completion, the server will return a status code of 200 along with a JSON object containing the id. This object encompasses the following attributes:

```json
{
  "data": {
    "v2UpdateTokenMetadata": {
      "res": {
        "id": 1
      },
      "success": true
    }
  }
}
```

## Supply

### `Get All Supplies Rewards`

Calculates and returns the rewards for all active supplies for the address provided in the request payload. Optionally, you can filter by a specific pool.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2CalculateAllSuppliesRewards(
  $lending: CalculateAllSuppliesRewardsInput!
) {
  v2CalculateAllSuppliesRewards(lending: $lending) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "lending": {
    "address": "0x0000000000000000000000000000000000000000",
    "poolId": 3
  }
}
```

```json
{
  "data": {
    "v2CalculateAllSuppliesRewards": {
      "res": {
        "base": {
          "rewards": [
            {
              "address": "0x0000000000000000000000000000000000000000",
              "amount": 2000000000,
              "bcId": 0,
              "id": 1,
              "poolId": 1,
              "poolName": "",
              "reward": 0,
              "total": 2000000000
            },
            {
              "address": "0x0000000000000000000000000000000000000000",
              "amount": 2000000000,
              "bcId": 1,
              "id": 3,
              "poolId": 2,
              "poolName": "",
              "reward": 0,
              "total": 2000000000
            },
            {
              "address": "0x0000000000000000000000000000000000000000",
              "amount": 1800000000,
              "bcId": 0,
              "id": 4,
              "poolId": 3,
              "poolName": "",
              "reward": 1535,
              "total": 1800001535
            }
          ],
          "total": 5800001535,
          "totalOutstandingAmount": 5800000000,
          "totalRewards": 1535
        }
      },
      "success": true
    }
  }
}
```

### `Get Supply Rewards`

Calculates and returns the reward for a specific supply by its ID. You can optionally provide a custom amount for the calculation.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2CalculateSupplyRewards($lending: CalculateSupplyRewardsInput!) {
  v2CalculateSupplyRewards(lending: $lending) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "lending": {
    "id": 3
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing comprehensive lending information. This object encompasses the following attributes:

```json
{
  "data": {
    "v2CalculateSupplyRewards": {
      "res": {
        "address": "0x0000000000000000000000000000000000000000",
        "amount": 400000000000000,
        "bcId": 0,
        "id": 4,
        "poolId": 3,
        "poolName": "",
        "reward": 341186770,
        "total": 400000341186770
      },
      "success": true
    }
  }
}
```

## Borrow

### `Get Collateral Token Amount`

Get the required collateral amount to borrow from a pool, indicating the usdc amount and ltv (optional).

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2CalculateCollateralTokenAmount(
  $borrow: CalculateCollateralTokenAmountInput!
) {
  v2CalculateCollateralTokenAmount(borrow: $borrow) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "borrow": {
    "poolId": 1,
    "amountToBorrow": 1000,
    "ltv": 65
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the required collateral amount. This object includes the following attributes:

```json
{
  "data": {
    "v2CalculateCollateralTokenAmount": {
      "res": {
        "decimals": 18,
        "formatted": 76923.07692307692,
        "raw": "76923076923076923076923"
      },
      "success": true
    }
  }
}
```

### `Get Repay Interest`

Returns the interest for the repayment of a borrow.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2CalculateRepayInterest($borrow: CalculateRepayInterestInput!) {
  v2CalculateRepayInterest(borrow: $borrow) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "borrow": {
    "id": 1,
    "amountToRepay": 1000
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the interest to be paid for a borrow. This object includes the following attributes:

```json
{
  "data": {
    "v2CalculateRepayInterest": {
      "res": {
        "decimals": 6,
        "formatted": 0.246102,
        "raw": "246102"
      },
      "success": true
    }
  }
}
```

### `Get Collateral Change Adjustment`

Get the required collateral amount to adjust the borrow position's ltv.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2CalculateCollateralChangeAdjustment(
  $borrow: CalculateCollateralChangeAdjustmentInput!
) {
  v2CalculateCollateralChangeAdjustment(borrow: $borrow) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "borrow": {
    "id": 7,
    "collateralAmount": 5163.360996900435
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the required amount. This object includes the following attributes:

```json
{
  "v2CalculateCollateralChangeAdjustment": {
    "res": {
      "bcId": 0,
      "collateral": {
        "current": {
          "decimals": 18,
          "formatted": 30.193236714975846,
          "raw": "30193236714975846000"
        },
        "maxRequired": {
          "decimals": 18,
          "formatted": 156.17625587824926,
          "raw": "156176255878249250000"
        },
        "required": {
          "decimals": 18,
          "formatted": 30.62279527024495,
          "raw": "30622795270244950000"
        },
        "safeRequired": {
          "decimals": 18,
          "formatted": 31.235251175649847,
          "raw": "31235251175649845000"
        },
        "usdPrice": {
          "decimals": 18,
          "formatted": 0.6403021985490374,
          "raw": "640302198549037300"
        }
      },
      "id": {
        "current": {
          "decimals": 2,
          "formatted": 51.72557822084184,
          "raw": "5172"
        },
        "maxRequired": {
          "decimals": 2,
          "formatted": 10,
          "raw": "1000"
        },
        "required": {
          "decimals": 2,
          "formatted": 0,
          "raw": "0"
        },
        "safeRequired": {
          "decimals": 2,
          "formatted": 50,
          "raw": "5000"
        }
      },
      "poolId": 1
    },
    "success": true
  }
}
```

### `Get Liquidation Stats`

Get if the borrow position is liquidatable and its liquidation stats such as the required fee and the minimum collateral amount to avoid the liquidation.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query v2CalculateLiquidationStats($borrow: CalculateLiquidationStatsInput!) {
  v2CalculateLiquidationStats(borrow: $borrow) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "borrow": {
    "id": 123,
    "amountToLiquidate": 100
  }
}
```

**Response**

Upon successful request completion, the server will respond with a status code of 200 and a JSON object containing the required amount. This object includes the following attributes:

```json
{
  "v2CalculateLiquidationStats": {
    "res": {
      "bcId": 0,
      "collateral": {
        "liquidationBonus": {
          "decimals": 18,
          "formatted": 0,
          "raw": "0"
        },
        "minRequired": {
          "decimals": 18,
          "formatted": 0,
          "raw": "0"
        },
        "usdPrice": {
          "decimals": 18,
          "formatted": 0.6403021985490374,
          "raw": "640302198549037300"
        }
      },
      "id": 1,
      "isPositionLiquidatable": false,
      "liquidationFee": {
        "decimals": 6,
        "formatted": 0,
        "raw": "0"
      },
      "liquidationPercentage": {
        "decimals": 2,
        "formatted": 35,
        "raw": "3500"
      },
      "poolId": 1
    },
    "success": true
  }
}
```

## Account

### `Update Account`

Updates the account metadata.

**HTTP Request Method**: POST

**Roles**: Admin

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
mutation v2UpdateAccount($account: UpdateAccountInput!) {
  v2UpdateAccount(account: $account) {
    res
    success
  }
}
```

**GraphQL Variables**

```json
{
  "account": {
    "address": "0x0000000000000000000000000000000000000000",
    "network": "{{NETWORK_BASE}}",
    "name": "name"
  }
}
```

**Response**

Upon successful request completion, the server will return a status code of 200 along with a JSON object containing the address. This object encompasses the following attributes:

```json
{
  "data": {
    "v2UpdateAccount": {
      "res": {
        "address": "0x0000000000000000000000000000000000000000"
      },
      "success": true
    }
  }
}
```

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
      "message": "field 'v2UpdatePoolMetadata' not found in type: 'mutation_root'",
      "extensions": {
        "path": "$.selectionSet.v2UpdatePoolMetadata",
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

| **Error message**                 | **Reason**                                  |
| --------------------------------- | ------------------------------------------- |
| Could not verify JWT: `JWT error` | The JWT is invalid                          |
| Invalid request payload input     | The input provided has a invalid value      |
| Cannot convert `X` to BigInt      | The string provided is not a integer number |

**Addresses**

| **Error message**    | **Reason**                      |
| -------------------- | ------------------------------- |
| Wrong address format | The address provided is invalid |

**Pools**

| **Error message**          | **Reason**                                  |
| -------------------------- | ------------------------------------------- |
| Pool id `X` does not exist | There is no pool with the provided id       |
| Missing identifier         | The input does not include identifiers      |
| Multiple identifiers found | The input includes more than one identifier |
