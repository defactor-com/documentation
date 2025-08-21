---
id: graphql-api-staking
title: Staking
sidebar_position: 5
---

# Staking Actions

## v1ClaimRewards

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/claim-rewards`

**Action Type:** `mutation`

### Input Parameters

**position** (`PositionInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "stakeIndex": "string"
    },
    "network": "string",
    "tx": "string"
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1CreatePlan

**Handler URL:** `{{BASE_RESTFUL_URL}}/plan/create-plan`

**Action Type:** `mutation`

### Input Parameters

**plan** (`CreatePlanInput!`)

```json
{
  "plan": {
    "contractName": "string",
    "data": {
      "apr": "string",
      "lockDuration": "string"
    },
    "network": "string",
    "tx": "string"
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetExpectedRewards

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-expected-rewards`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsFilterInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetExpectedRewardsByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-expected-rewards`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsByUserInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetHistoricalValueLocked

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-historical-value-locked`

**Action Type:** `query`

**Permissions:** `guest`, `user-admin`

### Input Parameters

**position** (`HistoricalInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ]
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetRewardsReceivedByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-rewards-received-by-user`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsByUserInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetTotalValueLocked

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-total-value-locked`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`GetTotalValueLockedInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "networks": [
        "string"
      ]
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1Restake

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/restake`

**Action Type:** `mutation`

### Input Parameters

**position** (`ReopenPositionInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "planId": "string",
      "stakeIndex": "string"
    },
    "network": "string",
    "tx": "string"
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1Stake

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/stake`

**Action Type:** `mutation`

### Input Parameters

**position** (`OpenPositionInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "amount": "string",
      "planId": "string"
    },
    "network": "string",
    "tx": "string"
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1Unstake

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/unstake`

**Action Type:** `mutation`

### Input Parameters

**position** (`PositionInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "stakeIndex": "string"
    },
    "network": "string",
    "tx": "string"
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2CreatePlan

**Handler URL:** `{{BASE_RESTFUL_URL}}/plan/create-plan`

**Action Type:** `mutation`

### Input Parameters

**plan** (`CreatePlanV2Input!`)

```json
{
  "plan": {
    "contractName": "string",
    "data": {
      "apr": 0,
      "aprAfterUnlock": 0,
      "initialRatio": 0,
      "lockDuration": 0,
      "maxStakedAmount": "string",
      "minStakeAmount": "string",
      "rewardToken": "string",
      "rewardsEndTime": "string",
      "stakingEndTime": "string",
      "stakingToken": "string"
    },
    "network": "string",
    "tx": "string"
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetDetailedExpectedRewards

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-detailed-expected-rewards`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsFilterInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetDetailedExpectedRewardsByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-detailed-expected-rewards`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsByUserInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetDetailedRewardsReceivedByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-detailed-rewards-received-by-user`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsByUserInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetExpectedRewards

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-expected-rewards`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsFilterInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetExpectedRewardsByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-expected-rewards`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsByUserInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetPlansDynamicApr

**Handler URL:** `{{BASE_RESTFUL_URL}}/plan/get-plans-with-dynamic-apr`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**plan** (`GetDynamicAprInput`)

```json
{
  "plan": {
    "contractName": "string",
    "networks": [
      "string"
    ]
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetRewardsReceivedByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-rewards-received-by-user`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`RewardsByUserInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "filterBy": [
        "string"
      ],
      "networks": [
        "string"
      ],
      "withAccruedRewards": false
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetStakingStats

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-staking-summary`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`GetTotalValueLockedInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "networks": [
        "string"
      ]
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2GetTotalValueLocked

**Handler URL:** `{{BASE_RESTFUL_URL}}/position/get-total-value-locked`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**position** (`GetTotalValueLockedInput!`)

```json
{
  "position": {
    "contractName": "string",
    "data": {
      "address": "string",
      "networks": [
        "string"
      ]
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v2UpdatePlan

**Handler URL:** `{{BASE_RESTFUL_URL}}/plan/update-plan`

**Action Type:** `mutation`

### Input Parameters

**plan** (`UpdatePlanV2Input!`)

```json
{
  "plan": {
    "contractName": "string",
    "data": {
      "apr": 0,
      "aprAfterUnlock": 0,
      "lockDuration": 0,
      "maxStakedAmount": "string",
      "minStakeAmount": "string",
      "planId": 0,
      "rewardsEndTime": "string",
      "stakingEndTime": "string"
    },
    "network": "string",
    "tx": "string"
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
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
