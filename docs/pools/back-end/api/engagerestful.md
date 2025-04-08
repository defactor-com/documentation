---
title: Endpoints List RESTful API
sidebar_position: 1
---


The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.

This API offers dual modes of interaction with the smart contract: firstly, via the RESTful API; and secondly, through the GraphQL API.

It facilitates interaction with Staking smart contracts, it enables seamless communication with smart contracts configured across multiple blockchain networks. It is necessary to specify the network and contract name in each request payload.

---

## Error Reference

### Error Response Format
The errors have the GraphQL error schema, an object with an `errors` array property where each item has the following schema:

| Property | Description |
| --- | --- |
| `message` | The description of the error |
| `extensions` | An object with the path to the field that caused the error, and the error code |

**Examples**

The variable has a wrong type:

``` json
{
  "errors":
    [
      {
        "message": "expected a string for type 'String', but found a number",
        "extensions":
          {
            "path": "$.selectionSet.v1Stake.args.position.amount",
            "code": "validation-failed"
          }
      }
    ]
}

 ```

The variable is missing in the request body:

``` json
{
  "errors":
    [
      {
        "message": "missing required field 'planId'",
        "extensions":
          {
            "path": "$.selectionSet.v1Stake.args.position.planId",
            "code": "validation-failed"
          }
      }
    ]
}

 ```

The field does not exists or the role has no permissions:

``` json
{
  "errors":
    [
      {
        "message": "field 'v1CreatePlan' not found in type: 'mutation_root'",
        "extensions":
          {
            "path": "$.selectionSet.v1CreatePlan",
            "code": "validation-failed"
          }
      }
    ]
}

 ```

The variable is not in the request body schema:

``` json
{
  "errors":
    [
      {
        "message": "Unexpected variable stake",
        "extensions":
          {
            "path": "$",  
            "code": "bad-request" 
          }
      }
    ]
}

 ```

The GraphQL variables object is not a valid json:

``` json
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

``` json
{
  "errors":
    [
      {
        "message": "Endpoint not found",
        "extensions":
          {
            "path": "$",
            "code": "not-found"
          }
      }
    ]
}

 ```

There is no pool with the provided id:

``` json
{
  "errors":
    [
      {
        "message": "Plan id 400 does not exist",
        "extensions":
        {
          "path": "$",
          "code": "unexpected"
        }
      }
    ]
}

 ```

### Types of Error
**General**

| **Error message** | **Reason** |
| --- | --- |
| Could not verify JWT: `JWT error` | The JWT is invalid |
| Invalid request payload input | The input provided has a invalid value |
| Cannot convert `X` to BigInt | The string provided is not a integer number |

**Session**

| **Error message** | **Reason** |
| --- | --- |
| The account does not have sufficient permissions | The user is not authorized to perform the action |
| Invalid message or signature | The message provided is invalid |
| Invalid or expired session | The user session is invalid |

**Addresses**

| **Error message** | **Reason** |
| --- | --- |
| Neither Index nor Id can be negative | The index or id are negative |
| Address does not follow the ethereum address format | The address provided is invalid |
| Sender address is not admin | The address does not have the required admin role in the `staking` contract |
| Collateral token does not follow the ethereum address format | The collateral token address is invalid |

**Plan**

| **Error message** | **Reason** |
| --- | --- |
| Invalid plan id `X` | There is no plan with the provided id |
| Plan id is not unique | "0x" does not uniquely identify a Plan |
| Lock duration cannot be negative | The lock duration is not a positive number |
| APY cannot be negative | The APY is not a positive number |
| Neither staking nor reward end date can be negative | Occurs when trying to set negative dates |
| Staking end time cannot be less than rewards end time | Occurs when trying to set dates with a staking end time less than rewards end time |

**Staking**

| **Error message** | **Reason** |
| --- | --- |
| Stake amount too low | Must stake more than the minimum |
| Invalid stake index | The position does not exists |
| Staking has ended | The staking end time has passed and new positions cannot be created |
| Stake already unstaked | An already unstaked position cannot be unstaked again |
| Stake is locked | The lock duration has not passed |

**Pagination**

| **Error Message** | **Reason** |
| --- | --- |
| Offset cannot be negative | The provided offset is negative |
| Limit cannot be negative or 0 | The provided limit is negative or zero |
| Max limit allowed is `X` | The provided limit is equal to the maximum results per page, use a smaller value |

## STAKING

### V1

#### Plans

##### `Create Plan`

Create a new plan with the indicated APY and lock duration in seconds. The lock duration is the amount of time in seconds that must pass after staking to be able to unstake.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/create-plan`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

##### `Get Pools`

Create a new plan with the indicated APY and lock duration in seconds. The lock duration is the amount of time in seconds that must pass after staking to be able to unstake.

**HTTP Request Method**: GET

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-pools`

**Request Body**

```json
{
  "condition": {
    "data": {
      "_contains": [{"schema": "ethereum"}]
    }
  },
  "limit": 10,
  "offset": 0
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

##### `Update Plan Metadata`

Update the metadata of an existing plan using an unique plan identifier. Either a `planId` or a `txHash` must be provided, but not both.

| **Param** | **Description** |
| --- | --- |
| `planId` | The id that the smart contract set to the plan |
| `txHash` | The hash of the transaction where the plan was added |
| `name` | The new name of the plan |
| `logo` | Optional field with the new logo of the plan |

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/update-plan-metadata`

**Request Body**

```json
{
    "plan": {
        "network": "{{NETWORK_POLYGON}}",
        "contractName": "{{STAKING}}",
        "data": {
            "planId": "0",
            "name": "FACTR Plan - No lock",
            "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1UpdatePlanMetadata": {
    "res": {
      "id": "b2cd0c49-a354-4cd1-a0c5-0043ece4d12c",
    },
    "success": true
  }
}
```

#### Positions

##### `Stake`

Stake the indicated amount to the plan. Once the `stakingEndTime` period concludes, staking is not longer allowed.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/stake`

**Request Body**

```json
{
    "plan": {
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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

##### `Restake`

Unstake the position with the indicated stake index and stake the amount in the provided plan.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/restake`

**Request Body**

```json
{
    "plan": {
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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

##### `Claim Rewards`

Claim the available rewards of the position with the indicated stake index.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/claim-rewards`

**Request Body**

```json
{
    "plan": {
        "network": "{{NETWORK_POLYGON}}",
        "contractName": "{{STAKING}}",
        "data": {
            "stakeIndex": "0"
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

##### `Unstake`

Unstake the position with the indicated stake index.

**HTTP Request Method**: POST

**Roles**: User Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/unstake`

**Request Body**

```json
{
    "plan": {
        "network": "{{NETWORK_POLYGON}}",
        "contractName": "{{STAKING}}",
        "data": {
            "stakeIndex": "0"
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

##### `Get Expected Rewards By User`

Get the expected rewards by user for each open position. The result can be filtered by network and group by period of time.

The response group by period of time includes the expected rewards in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `now`, `day`, `week`, `month`, `six-months`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-expected-rewards-by-user`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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
      },
    },
    "success": true
  }
}
```

##### `Get Expected Rewards`

Get the expected rewards for each open position. The result can be filtered by network and group by period of time.

The response group by period of time includes the expected rewards in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `now`, `day`, `week`, `month`, `six-months`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-expected-rewards`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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
      },
    },
    "success": true
  }
}
```

##### `Get Historical Value Locked`

Get the historical value locked in a period of time. The result can be filtered by network and group by period of time.

The response group by period of time includes the historical value locked in the collateral token and the equivalent in USDC using the price of the moment.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `day`, `week`, `month`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-historical-value-locked`

**Request Body**

```json
{
    "position": {
        "contractName": "{{STAKING}}",
        "data": {
            "networks": ["{{NETWORK_ETHEREUM}}","{{NETWORK_POLYGON}}"],
            "filterBy": ["year","month"]
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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

##### `Get Rewards Received By User`

Get the rewards claimed by user. The result can be filtered by network and group by period of time.

The response group by period of time includes the rewards claimed in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `day`, `week`, `month`, `six-months`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-rewards-received-by-user`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the rewards claimed. This object encompasses the following attributes:

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
      },
    },
    "success": true
  }
}
```

##### `Get Total Value Locked`

Get the expected rewards by user for each open position. The result can be filtered by network and group by period of time.

The response group by period of time includes the expected rewards in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `now`, `day`, `week`, `month`, `six-months`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-total-value-locked`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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
      },
    },
    "success": true
  }
}
```

#### Token

##### `Update Token Metadata`

Update the metadata of the contract token.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/update-token-metadata`

**Request Body**

```json
{
    "token": {
        "network": "{{NETWORK_POLYGON}}",
        "contractName": "{{STAKING}}",
        "data": {
            "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

#### Ecosystem Wallet

##### `Upsert Ecosystem Wallet`



**HTTP Request Method**: POST



**Request URL**: `{{BASE_RESTFUL_URL}}/v1/upsert-ecosystem-wallet`

**Request Body**

```json
{
    "wallet": {
        "network": "{{NETWORK_BASE}}",
        "contractName": "{{STAKING}}",
        "data": {
            "label": "Governance long-term lock3",
            "address": "0x3585f9e74f4b9F6CebD4D1a1a4F122545d1F7262",
            "initialAmount": 50000000,
            "iconUrl": "https://realtyx.factr.app/"
        }
    }
}
```



##### `Delete Ecosystem Wallet`



**HTTP Request Method**: POST



**Request URL**: `{{BASE_RESTFUL_URL}}/v1/delete-ecosystem-wallet`

**Request Body**

```json
{
    "wallet": {
        "network": "{{NETWORK_BASE}}",
        "contractName": "{{STAKING}}",
        "address": "0x3585f9e74f4b9F6CebD4D1a1a4F122545d1F7262"
    }
}
```



### V2

#### Plans

##### `Create Plan`

Create a new plan with the indicated APY and lock duration in seconds. The lock duration is the amount of time in seconds that must pass after staking to be able to unstake.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v2/create-plan`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

##### `Update Plan`

Create a new plan with the indicated APY and lock duration in seconds. The lock duration is the amount of time in seconds that must pass after staking to be able to unstake.

**HTTP Request Method**: POST

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v2/update-plan`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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

##### `Get Plans Dynamic Apr`

Get the dynamic apr for each plan in the requested networks. The result can be filtered by network.

The response group the plans and returns their dynamic apr.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v2/get-plans-dynamic-apr`

**Request Body**

```json
{
    "plan": {
        "contractName": "{{STAKING}}",
        "networks": ["{{NETWORK_ETHEREUM}}"]
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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

#### Positions

##### `Get Expected Rewards By User`

Get the expected rewards by user for each open position. The result can be filtered by network and group by period of time.

The response group by period of time includes the expected rewards in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `now`, `day`, `week`, `month`, `six-months`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v2/get-expected-rewards-by-user`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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
      },
    },
    "success": true
  }
}
```

##### `Get Expected Rewards`

Get the expected rewards for each open position. The result can be filtered by network and group by period of time.

The response group by period of time includes the expected rewards in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `now`, `day`, `week`, `month`, `six-months`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v2/get-expected-rewards`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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
      },
    },
    "success": true
  }
}
```

##### `Get Rewards Received By User`

Get the rewards claimed by user. The result can be filtered by network and group by period of time.

The response group by period of time includes the rewards claimed in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `filterBy` | An array with the following possible values: `day`, `week`, `month`, `six-months`, `year`. Or the string `all` to include all of them. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v2/get-rewards-received-by-user`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the rewards claimed. This object encompasses the following attributes:

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
      },
    },
    "success": true
  }
}
```

##### `Get Total Value Locked`

Get the expected rewards by user for each open position. The result can be filtered by network and group by period of time.

The response group by period of time includes the expected rewards in the collateral token and the equivalent in USDC using the current price.

| Property | Description |
| --- | --- |
| `address` | Optional attribute to get the total value locked of a specific address. |

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v2/get-total-value-locked`

**Request Body**

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

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the expected rewards. This object encompasses the following attributes:

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

## Authentication

### `Login`

Retrieve an access token with the role of the user and a refresh token to regenerate a new access token.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/login`

**Request Body**

```json
{
    "session": {
        "data": {
        "message": "https://localhost:3000 wants you to sign in with your Ethereum account: 0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5  Sign in with Ethereum to the app.  URI: https://localhost:3000 Version: 1 Chain ID: 1 Nonce: V4953jdM8Y5ljtOvZ Issued At: 2024-09-14T20:44:31.764Z Expiration Time: 2024-09-14T20:49:31.761Z",
        "signature": "0x81596c2af98457f7621455ca947db35cad201cb96ced9b34a4b2403fea35c01431f7bca6db5fc5ffdb92b42c3cd0ae0c5b21cc24099ce6e630f0966e3fa544701c"
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the access token. This object encompasses the following attributes:

```json
{
  "v1Login": {
    "res": {
      "accessToken": "",
      "refreshToken": ""
    },
    "success": true
  }
}
```

### `Restore Session`

Retrieve a new access token with the role of the user and a refresh token to regenerate a new access token.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/restore-session`

**Request Body**

```json
{
    "session": {
        "data": {
            "refreshToken": "00000000-0000-0000-0000-000000000000"
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the access token. This object encompasses the following attributes:

```json
{
  "v1Loding": {
    "res": {
      "accessToken": "",
      "refreshToken": ""
    },
    "success": true
  }
}
```

### `Update Account`

Update the metadata of an existing account in multiple networks using the address.

**HTTP Request Method**: POST

**Roles**: User Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/update-account`

**Request Body**

```json
{
    "account": {
        "data": {
            "networks": ["{{NETWORK_ETHEREUM}}","{{NETWORK_POLYGON}}"],
            "name": "name.eth",
            "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5"
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the networks where the account data was updated. This object encompasses the following attributes:

```json
{
  "v1UpdateAccount": {
    "res": {
      "updatedIn": ["ethereum"],
    },
    "success": true
  }
}
```

## Governance

### `Get Proposals`



**HTTP Request Method**: POST



**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-proposals`

**Request Body**

```json
{}
```



## Utilities

### Token

#### `Update Global Token Metadata`

Update the metadata of the contract token.

**HTTP Request Method**: POST

**Roles**: Admin\*_Request Body__\*_The token attribute is an object which identies in a unique way the token to update, it could be the tokenId or an object with the name, symbol, and precision of the erc20 token``` json{    "metadata": {       "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"    },    "token": {       "tokenId": "66d65ef0-5d57-4199-83ac-e7961949f420"    }} ```

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/update-global-token-metadata`

**Request Body**

```json
{
    "token": {
        "data": {
            "metadata": {
                "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648",
                "price": 0.02
            },
            "token": {
                "tokenId": "57d31729-85f9-461f-b748-fb83dee71671"
            }
        }
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

```json
{
  "v1UpdateGlobalPlanMetadata": {
    "res": {
      "id": "f8f6925d-f20a-40a6-bb57-40bed4de188e"
    },
    "success": true
  }
}
```

#### `Get Token Price`

Get the current instance configuration.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-token-price`

**Request Body**

```json
{
     "symbol": "FACTR"
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the current configuration by network. This object encompasses the following attributes:

```json
{
    "token_price": [
        "price": 0.02,
        "symbol": "FACTR",
        "date": "2025-03-07T00:00:00.000Z"
     ]
}
```

### `config`

Get the current instance configuration.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/config`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object with the current configuration by network. This object encompasses the following attributes:

```json
{
    "getConfig": {
      "res": {
        "inactiveNetworks": [
          "polygon",
          "base",
          "bsc"
        ],
        "networks": [
          {
            "contracts": [
              {
                "abi": [...],
                "address": "0x",
                "name": "STAKING",
                "params": {
                  "fromBlock": 0,
                  "nextBlock": 1000,
"lastHistoricalValueLockedUpdate": "2024-01-01T00:00:00.000Z",
                  "nextTimeTokenPrice": "2024-01-01T100:00:00.000Z"
                }
              }
            ],
            "inactiveContracts": [],
            "name": "ethereum",
            "providerHttps": "provider",
            "services": [
              "LISTENER"
            ],
            "tokensInfo": [
              {
                "isCoingeckoEnabled": true,
                "name": "defactor",
                "symbol": "FACTR"
              }
            ],
            "workers": [
              "BLOCK CATCHER",
              "TOKEN PRICE FETCHER",
              "EVENT MATURITY",
              "HISTORICAL VALUE LOCKED UPDATER"
            ]
          }
        ]
      },
      "success": true
    }
  }
```

### `v1 Get Circulating Supply`



**HTTP Request Method**: GET



**Request URL**: `{{BASE_RESTFUL_URL}}/v1-get-circulating-supply`

**Request Body**

```json
{
    "global": {
        "networks":["{{NETWORK_BASE}}"]
    }
}
```



## VESTING

### Schedules

#### `Create Schedule`

Add a new batch schedule with vesting schedules and their beneficieries. It is added only if the batch does not exists or it is pending.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/create-schedule`

**Request Body**

```json
{
    "schedule": {
        "network": "{{NETWORK_POLYGON}}",
        "contractName": "{{VESTING}}",
        "batchName": "batch",
        "schedules": [
            {
                "startTime":  "2025-07-05T19:44:48+00:00",
                "durationSec": 16,
                "secondsPerSlice": 5,
                "tokenAddress": "0x7D5c1468D8bE9f0F4FaD26F2Cb7e6b2ed9042577",
                "amount": "1",
                "initialAmount": "10",
                "beneficiaries": [
                    {
                        "beneficiary": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
                        "label": "abc"
                    }
                ]
            }
        ]
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the id and merkle root of the batch. This object encompasses the following attributes:

```json
{
  "v1CreateSchedule": {
    "res": {
      "batchId": "e319082e-b7c1-4095-b257-70c3f4243284",
      "merkleRoot": "0xcf3af4c07afaaffbdeb94b7a2ca8d7eb90c2946fd3a8f56c8ac4e2803f7e76fd",
      "onChain": false
    },
    "success": true
  }
}
```

### Releases

#### `Get Historical Emissions`

Retrieve the historical emissions from the day group by date.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-historical-emissions`

**Request Body**

```json
{
    "release": {
        "contractName": "{{VESTING}}",
        "data": [
            {
                "networks": ["{{NETWORK_POLYGON}}"]
            }
        ]
    }
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the data group by dates including the released amount, token address and schema. This object encompasses the following attributes:

```json
{
  "data": {
    "v1GetHistoricalEmissions": {
      "res": {
        "1741294800": [
          {
            "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
            "tokenAddress": "0x8574299682D036F88195a2685601D90300E21Bca"
          },
          {
             "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
           "tokenAddress":"0xa6da8c8999c094432c77e7d318951d34019af24b"
          }
        ],
        ...
        "1741366800": [
          {
            "amount": 1000000000000000000,
            "fluctuation": 1,
            "fluctuationValue": 0,
            "schema": "polygon",
            "tokenAddress": "0x8574299682D036F88195a2685601D90300E21Bca"
          },
          {
             "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
           "tokenAddress":"0xa6da8c8999c094432c77e7d318951d34019af24b"
          }
        ],
        "1741381200": [
          {
            "amount": 0,
            "fluctuation": -1,
            "fluctuationValue": -1000000000000000000,
            "schema": "polygon",
            "tokenAddress": "0x8574299682D036F88195a2685601D90300E21Bca"
          },
          {
             "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
           "tokenAddress":"0xa6da8c8999c094432c77e7d318951d34019af24b"
          }
        ]
      },
      "success": true
    }
  }
}
```

## BUYBACK

### `Copy`

Create a new plan with the indicated APY and lock duration in seconds. The lock duration is the amount of time in seconds that must pass after staking to be able to unstake.

**HTTP Request Method**: GET

**Roles**: Admin

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-pools Copy`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating pertinent blockchain transaction details. This object encompasses the following attributes:

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
