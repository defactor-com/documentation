---
id: restfull-api-staking-v2
title: Staking V2
sidebar_position: 3
---

## Plans

### `Create Plan`

Create a new plan with the indicated APY and lock duration in seconds.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_RESTFUL_URL}}/v2/create-plan`

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

**Endpoint**: `{{BASE_RESTFUL_URL}}/v2/update-plan`

**Params**:

```json
{
  "plan": {
    "network": "{{NETWORK_POLYGON}}",
    "contractName": "{{STAKING}}",
    "data": {
      "planId": "0",
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

Get the dynamic apr for each plan in the requested networks.

**HTTP Method**: GET

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v2/get-plans-dynamic-apr`

**Params**:

```json
{
  "plan": {
    "contractName": "{{STAKING}}",
    "networks": ["{{NETWORK_ETHEREUM}}"]
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

**HTTP Method**: GET

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v2/get-expected-rewards-by-user`

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "address": "0xd198F7a8C953AC47dfd0F6a0267e4d19c67ce351",
      "networks": ["{{NETWORK_ETHEREUM}}"],
      "filterBy": ["month"],
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

### `Get Expected Rewards`

Get the expected rewards for each open position. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: GET

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v2/get-expected-rewards`

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "networks": ["{{NETWORK_ETHEREUM}}"],
      "filterBy": ["year"],
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

### `Get Rewards Received By User`

Get the rewards claimed by user. Filter by `now`, `day`, `week`, `month`, `six-months`, `year` or `all`.

**HTTP Method**: GET

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v2/get-rewards-received-by-user`

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "address": "0xd198F7a8C953AC47dfd0F6a0267e4d19c67ce351",
      "networks": ["{{NETWORK_ETHEREUM}}"],
      "filterBy": ["month"]
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

### `Get Total Value Locked`

Get the expected rewards by user for each open position. Address is optional.

**HTTP Method**: GET

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v2/get-total-value-locked`

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_BASE}}"]
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
