---
id: graphql-api-staking-v2
title: Staking V2
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
mutation ($plan: CreatePlanV2Input!) {
  v2CreatePlan(plan: $plan) {
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
      "stakingToken": "0x1234567890123456789012345678901234567890",
      "rewardToken": "0x1234567890123456789012345678901234567890",
      "maxStakedAmount": "1000000000000000000000000",
      "minStakeAmount": "1000000000000000000",
      "initialRatio": 10,
      "stakingEndTime": "2026-01-01",
      "rewardsEndTime": "2026-02-01",
      "lockDuration": 7776000,
      "apr": 5,
      "aprAfterUnlock": 2
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

### `Update Plan`

Create a new plan with the indicated APY and lock duration in seconds.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($plan: UpdatePlanV2Input!) {
  v2UpdatePlan(plan: $plan) {
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
      "planId": 0,
      "maxStakedAmount": "1000000000000000000000000",
      "minStakeAmount": "1000000000000000000",
      "stakingEndTime": "2026-01-01",
      "rewardsEndTime": "2026-02-01",
      "lockDuration": 7776000,
      "apr": 5,
      "aprAfterUnlock": 2
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

### `Get Plans Dynamic Apr`

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query v2GetPlansDynamicApr($plan: GetDynamicAprInput!) {
  v2GetPlansDynamicApr(plan: $plan) {
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
        "networks": [{{ETHEREUM}}]
    }
}
```

**Response**

```json
{
  "v2GetPlansDynamicApr": {
    "res": [
      {
        "apr": 500,
        "aprAfterUnlock": 200,
        "data": [
          {
            "planId": 0,
            "schema": "polygon"
          }
        ],
        "dynamicApr": 500,
        "dynamicAprAfterUnlock": 200,
        "id": 1,
        "name": null
      }
    ],
    "success": true
  }
}
```

## Positions

### `Get Expected Rewards By User`

Get the expected rewards by user for each open position. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: RewardsByUserInput!) {
  v2GetExpectedRewardsByUser(position: $position) {
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
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_BASE}}"],
      "filterBy": ["now", "day", "year"],
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
        "FACTR": 11.87201460235921,
        "USD": 0.46357703076262946
      },
      "day": {
        "FACTR": 14.746729214231358,
        "USD": 0.5758285490345839
      }
    },
    "success": true
  }
}
```

### `Get Detailed Expected Rewards By User`

Get detailed expected rewards by user for each open position. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: RewardsByUserInput!) {
  v2GetDetailedExpectedRewardsByUser(position: $position) {
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
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_BASE}}"],
      "filterBy": ["now", "day", "year"],
      "withAccruedRewards": false
    }
  }
}
```

**Response**

```json
{
  "v2GetDetailedExpectedRewardsByUser": {
    "res": {
      "now": {
        "USD": 0.46357703076262946,
        "byToken": [{
            "FACTR": 11.87201460235921,
            "USD": 0.46357703076262946
        }]
      },
      "day": {
        "USD": 0.5758285490345839
        "byToken": [{
            "FACTR": 14.74672921423135,
            "USD": 0.5758285490345839
        }]
      },
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
  v2GetExpectedRewards(position: $position) {
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
        "FACTR": 11.87201460235921,
        "USD": 0.46357703076262946
      },
      "week": {
        "FACTR": 14.746729214231358,
        "USD": 0.5758285490345839
      }
    },
    "success": true
  }
}
```

### `Get Detailed Expected Rewards`

Get detailed expected rewards for each open position. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query ($position: RewardsFilterInput!) {
  v2GetDetailedExpectedRewards(position: $position) {
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
  "v2GetDetailedExpectedRewards": {
    "res": {
      "now": {
        "USD": 0.46357703076262946,
        "byToken": [{
            "FACTR": 11.87201460235921,
            "USD": 0.46357703076262946
        }]
      },
      "day": {
        "USD": 0.5758285490345839
        "byToken": [{
            "FACTR": 14.74672921423135,
            "USD": 0.5758285490345839
        }]
      },
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
  v2GetRewardsReceivedByUser(position: $position) {
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
        "FACTR": 11.87201460235921,
        "USD": 0.46357703076262946
      },
      "year": {
        "FACTR": 14.746729214231358,
        "USD": 0.5758285490345839
      }
    },
    "success": true
  }
}
```

### `Get Detailed Rewards Received By User`

Get the rewards claimed by user. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Request Method**: POST

**Roles**: Guest

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**

```graphql
query ($position: RewardsByUserInput!) {
  v2GetDetailedRewardsReceivedByUser(position: $position) {
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
  "v2GetDetailedRewardsReceivedByUser": {
    "res": {
      "month": {
        "USD": 5.2017,
        "byToken": [
          {
            "MTK": 1.7,
            "USD": 0.0017
          },
          {
            "FACTR": 250,
            "USD": 5.2
          }
        ]
      },
      "year": {
        "USD": 5.2017,
        "byToken": [
          {
            "MTK": 1.7,
            "USD": 0.0017
          },
          {
            "FACTR": 250,
            "USD": 5.2
          }
        ]
      }
    },
    "success": true
  }
}
```

### `Get Total Value Locked`

Get the expected rewards by user for each open position. Address is optional.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query v2GetTotalValueLocked($position: GetTotalValueLockedInput!) {
  v2GetTotalValueLocked(position: $position) {
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
  "v2GetTotalValueLocked": {
       "res": {
        "byAddress": {
          "FACTR": 1500,
          "USD": 25.500000000000004
        },
        "byNetworks": {
          "FACTR": 2500,
          "LBM": 2000,
          "USD": 68.5
        }
      }
    "success": true
  }
}
```

### `Get Staking Stats`

**HTTP Request Method**: POST

**GraphQL URL**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query v2GetStakingStats($position: GetTotalValueLockedInput!) {
  v2GetStakingStats(position: $position) {
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
