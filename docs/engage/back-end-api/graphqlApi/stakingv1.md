---
title: Staking V1
sidebar_position: 1
---

## Plans

### `Create Plan`

Create a new plan with the indicated APY and lock duration in seconds.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

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

**Params**:

```json
{
  "position": {
    "contractName": "{{STAKING}}",
    "data": {
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_BASE}}"],
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

**Params**:

```json
{
  "wallet": {
    "network": "{{NETWORK_ETHEREUM}}",
    "contractName": "{{STAKING}}",
    "data": {
      "label": "Governance long-term lock",
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
