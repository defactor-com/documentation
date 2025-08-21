---
id: graphql-api-lend
title: Lend
sidebar_position: 4
---

# Lend Actions

## v1Lend

**Handler URL:** `{{BASE_RESTFUL_URL}}/loan/lend`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**loan** (`LendInput!`)

```json
{
  "loan": {
    "contractName": "string",
    "data": {
      "amount": "string",
      "poolId": "string"
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

## v1GetLending

**Handler URL:** `{{BASE_RESTFUL_URL}}/loan/get-lending`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**loan** (`GetLendingInput!`)

```json
{
  "loan": {
    "address": "string",
    "contractName": "string",
    "lendingId": "string",
    "network": "string",
    "poolId": "string"
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

## v1GetLendingsByLender

**Handler URL:** `{{BASE_RESTFUL_URL}}/loan/get-lendings-by-lender`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**loan** (`GetLendingsByLenderInput!`)

```json
{
  "loan": {
    "contractName": "string",
    "lenderAddress": "string",
    "limit": "string",
    "network": "string",
    "offset": "string",
    "poolId": "string"
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

## v1GetTotalLending

**Handler URL:** `{{BASE_RESTFUL_URL}}/loan/get-total-lending`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**loan** (`GetTotalLendingInput!`)

```json
{
  "loan": {
    "address": "string",
    "contractName": "string",
    "network": "string",
    "poolId": "string"
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

## v1ClaimRewards

**Handler URL:** `{{BASE_RESTFUL_URL}}/loan/claim-rewards`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**loan** (`ClaimRewardsInput!`)

```json
{
  "loan": {
    "contractName": "string",
    "data": {
      "address": "string",
      "lendingId": "string",
      "poolId": "string"
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

## v1Repay

**Handler URL:** `{{BASE_RESTFUL_URL}}/loan/repay`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**loan** (`RepayInput!`)

```json
{
  "loan": {
    "contractName": "string",
    "data": {
      "amount": "string",
      "poolId": "string"
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

## v2CalculateAllSuppliesRewards

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v2/supplies/rewards/calculate`

**Action Type:** `query`

**Permissions:** `guest`, `ADMIN`

### Input Parameters

**lending** (`CalculateAllSuppliesRewardsInput!`)

```json
{
  "lending": {
    "address": "string",
    "poolId": 0
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

## v2CalculateSupplyRewards

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v2/supplies/reward/calculate`

**Action Type:** `query`

**Permissions:** `guest`, `ADMIN`

### Input Parameters

**lending** (`CalculateSupplyRewardsInput!`)

```json
{
  "lending": {
    "amount": 0,
    "id": 0
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
