---
title: Staking V1
sidebar_position: 2
---

## Plans

### `Create Plan`

Create a new plan with the indicated APY and lock duration in seconds.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($plan: CreatePlanInput!) {
  v1CreatePlan(plan: $plan) {
    res
    success
  }
}
```

**Params**:

```json
{
  "plan": {
    "network": "{{NETWORK_POLYGON}}",
    "contractName": "{{STAKING}}",
    "data": {
      "apr": "5",
      "lockDuration": "7776000"
    }
  }
}
```

**Response**

```json
{
  "v1CreatePlan": {
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

### `Update Plan Metadata`

Update the metadata of an existing plan using an unique plan identifier. Either a `planId` or a `txHash` must be provided, but not both.

| **Param** | **Description**                                      |
| --------- | ---------------------------------------------------- |
| `planId`  | The id that the smart contract set to the plan       |
| `txHash`  | The hash of the transaction where the plan was added |
| `name`    | The new name of the plan                             |
| `logo`    | Optional field with the new logo of the plan         |

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($position: CreatePlanInput!) {
  v1Stake(position: $position) {
    res
    success
  }
}
```

**GraphQL Body**:

```graphql
mutation ($plan: PlanMetadataInput!) {
  v1UpdatePlanMetadata(plan: $plan) {
    res
    success
  }
}
```

**Params**:

```json
{
  "plan": {
    "network": "{{NETWORK_BASE}}",
    "contractName": "{{STAKING}}",
    "data": {
      "planId": "2",
      "name": "FACTR Plan - 25%",
      "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
    }
  }
}
```

**Response**

```json
{
  "v1UpdatePlanMetadata": {
    "res": {
      "id": "b2cd0c49-a354-4cd1-a0c5-0043ece4d12c"
    },
    "success": true
  }
}
```

## Positions

### `Stake`

Stake the indicated amount to the plan. Once the `stakingEndTime` period concludes, staking is not longer allowed.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($position: CreatePlanInput!) {
  v1Stake(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "network": "{{NETWORK_POLYGON}}",
    "contractName": "{{STAKING}}",
    "data": {
      "planId": "0",
      "amount": "1500000000000000000000"
    }
  }
}
```

**Response**

```json
{
  "v1Stake": {
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

### `Restake`

Unstake the position with the indicated stake index and stake the amount in the provided plan.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($position: ReopenPositionInput!) {
  v1Restake(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "network": "{{NETWORK_POLYGON}}",
    "contractName": "{{STAKING}}",
    "data": {
      "stakeIndex": "0",
      "planId": "0"
    }
  }
}
```

**Response**

```json
{
  "v1Restake": {
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

Claim the available rewards of the position with the indicated stake index.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($position: PositionInput!) {
  v1ClaimRewards(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "network": "{{NETWORK_POLYGON}}",
    "contractName": "{{STAKING}}",
    "data": {
      "stakeIndex": "0"
    }
  }
}
```

**Response**

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

### `Unstake`

Unstake the position with the indicated stake index.

**HTTP Method**: POST

**Roles**: User Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($position: PositionInput!) {
  v1Unstake(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "network": "{{NETWORK_POLYGON}}",
    "contractName": "{{STAKING}}",
    "data": {
      "stakeIndex": "0"
    }
  }
}
```

**Response**

```json
{
  "v1Unstake": {
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

### `Get Expected Rewards By User`

Get the expected rewards by user for each open position. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: RewardsByUserInput!) {
  v1GetExpectedRewardsByUser(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_POLYGON}}"],
      "filterBy": ["day", "year"],
      "withAccruedRewards": false
    }
  }
}
```

**Response**

```json
{
  "v1GetExpectedRewardsByUser": {
    "res": {
      "now": {
        "symbol": "FACTR",
        "token": 11.87201460235921,
        "USD": 0.46357703076262946
      },
      "day": {
        "symbol": "FACTR",
        "token": 14.746729214231358,
        "USD": 0.5758285490345839
      }
    },
    "success": true
  }
}
```

### `Get Expected Rewards`

Get the expected rewards for each open position. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: RewardsFilterInput!) {
  v1GetExpectedRewards(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_POLYGON}}"],
      "filterBy": ["day", "year"],
      "withAccruedRewards": false
    }
  }
}
```

**Response**

```json
{
  "v1GetExpectedRewardsByUser": {
    "res": {
      "day": {
        "symbol": "FACTR",
        "token": 11.87201460235921,
        "USD": 0.46357703076262946
      },
      "week": {
        "symbol": "FACTR",
        "token": 14.746729214231358,
        "USD": 0.5758285490345839
      }
    },
    "success": true
  }
}
```

### `Get Historical Value Locked`

Get the historical value locked in a period of time. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: HistoricalInput!) {
  v1GetHistoricalValueLocked(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_POLYGON}}"],
      "filterBy": ["day", "year", "week", "month"]
    }
  }
}
```

**Response**

```json
{
  "v1GetHistoricalValueLocked": {
    "res": {
      "year": {
        "2024-08-01T00:00:00.000Z": {
          "USD": 46,
          "symbol": "FACTR",
          "token": 1000
        },
        "2024-09-01T00:00:00.000Z": {
          "USD": 46,
          "symbol": "FACTR",
          "token": 1000
        },
        "2024-10-01T00:00:00.000Z": {
          "USD": 874.0087598522048,
          "symbol": "FACTR",
          "token": 19000.19043156967
        }
      }
    },
    "success": true
  }
}
```

### `Get Rewards Received By User`

Get the rewards claimed by user. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: RewardsByUserInput!) {
  v1GetRewardsReceivedByUser(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_POLYGON}}"],
      "filterBy": ["day", "year"]
    }
  }
}
```

**Response**

```json
{
  "v1GetRewardsReceivedByUser": {
    "res": {
      "day": {
        "symbol": "FACTR",
        "token": 11.87201460235921,
        "USD": 0.46357703076262946
      },
      "year": {
        "symbol": "FACTR",
        "token": 14.746729214231358,
        "USD": 0.5758285490345839
      }
    },
    "success": true
  }
}
```

### `Get Total Value Locked`

Get the expected rewards by user for each open position. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: GetTotalValueLockedInput!) {
  v1GetTotalValueLocked(position: $position) {
    res
    success
  }
}
```

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "networks": ["ethereum"],
      "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5"
    }
  }
}
```

**Response**

```json
{
  "v1GetExpectedRewardsByUser": {
    "res": {
      "1726069636050": {
        "FACTR": 11.87201460235921,
        "USDC": 0.46357703076262946
      },
      "1726155976050": {
        "FACTR": 14.746729214231358,
        "USDC": 0.5758285490345839
      }
    },
    "success": true
  }
}
```

## Token

### `Update Token Metadata`

Update the metadata of the contract token.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($token: TokenMetadataInput!) {
  v1UpdateTokenMetadata(token: $token) {
    res
    success
  }
}
```

**Params**:

```json
{
  "token": {
    "network": "{{NETWORK_BASE}}",
    "contractName": "{{STAKING}}",
    "data": {
      "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
    }
  }
}
```

**Response**

```json
{
  "v1UpdatePlanMetadata": {
    "res": {
      "contract_id": "f8f6925d-f20a-40a6-bb57-40bed4de188e"
    },
    "success": true
  }
}
```

## Ecosystem Wallet

### `Upsert Ecosystem Wallet`

**HTTP Method**: POST

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($wallet: UpsertEcosystemWalletInput!) {
  v1UpsertEcosystemWallet(wallet: $wallet) {
    res
    success
  }
}
```

**Params**:

```json
{
  "wallet": {
    "network": "{{NETWORK_BASE}}",
    "contractName": "{{STAKING}}",
    "data": {
      "label": "Governance long-term lock3",
      "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "initialAmount": 50000000,
      "iconUrl": "https://realtyx.factr.app/"
    }
  }
}
```

### `Delete Ecosystem Wallet`

**HTTP Method**: POST

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($wallet: DeleteEcosystemWalletInput!) {
  v1DeleteEcosystemWallet(wallet: $wallet) {
    res
    success
  }
}
```

**Params**:

```json
{
  "wallet": {
    "network": "{{NETWORK_BASE}}",
    "contractName": "{{STAKING}}",
    "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5"
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
        "path": "$.selectionSet.v1Stake.args.position.amount",
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
      "message": "missing required field 'planId'",
      "extensions": {
        "path": "$.selectionSet.v1Stake.args.position.planId",
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
      "message": "field 'v1CreatePlan' not found in type: 'mutation_root'",
      "extensions": {
        "path": "$.selectionSet.v1CreatePlan",
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
      "message": "Unexpected variable stake",
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
      "message": "Plan id 400 does not exist",
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

**Session**

| **Error message**                                | **Reason**                                       |
| ------------------------------------------------ | ------------------------------------------------ |
| The account does not have sufficient permissions | The user is not authorized to perform the action |
| Invalid message or signature                     | The message provided is invalid                  |
| Invalid or expired session                       | The user session is invalid                      |

**Addresses**

| **Error message**                                            | **Reason**                                                                  |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Neither Index nor Id can be negative                         | The index or id are negative                                                |
| Address does not follow the ethereum address format          | The address provided is invalid                                             |
| Sender address is not admin                                  | The address does not have the required admin role in the `staking` contract |
| Collateral token does not follow the ethereum address format | The collateral token address is invalid                                     |

**Plan**

| **Error message**                                     | **Reason**                                                                         |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Invalid plan id `X`                                   | There is no plan with the provided id                                              |
| Plan id is not unique                                 | "0x" does not uniquely identify a Plan                                             |
| Lock duration cannot be negative                      | The lock duration is not a positive number                                         |
| APY cannot be negative                                | The APY is not a positive number                                                   |
| Neither staking nor reward end date can be negative   | Occurs when trying to set negative dates                                           |
| Staking end time cannot be less than rewards end time | Occurs when trying to set dates with a staking end time less than rewards end time |

**Staking**

| **Error message**      | **Reason**                                                          |
| ---------------------- | ------------------------------------------------------------------- |
| Stake amount too low   | Must stake more than the minimum                                    |
| Invalid stake index    | The position does not exists                                        |
| Staking has ended      | The staking end time has passed and new positions cannot be created |
| Stake already unstaked | An already unstaked position cannot be unstaked again               |
| Stake is locked        | The lock duration has not passed                                    |

**Pagination**

| **Error Message**             | **Reason**                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------- |
| Offset cannot be negative     | The provided offset is negative                                                  |
| Limit cannot be negative or 0 | The provided limit is negative or zero                                           |
| Max limit allowed is `X`      | The provided limit is equal to the maximum results per page, use a smaller value |
