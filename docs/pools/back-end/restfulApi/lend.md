---
title: Lend
sidebar_position: 3
description: REST API endpoints for lending operations in Defactor Pools platform
keywords: [lend, lending, rest, api, pools, backend, supply, rewards, liquidity]
tags: [lend, pools, backend, rest]
---

# Lend API

## v1/lend

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/lend`

**Action Type:** `mutation`

### Input Parameters

**loan** (`LendInput!`)

```json
{
  "contractName": "string",
  "data": {
    "amount": "string",
    "poolId": "string"
  },
  "network": "string",
  "tx": "string"
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

## v1/get-lending

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-lending`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**loan** (`GetLendingInput!`)

```json
{
  "address": "string",
  "contractName": "string",
  "lendingId": "string",
  "network": "string",
  "poolId": "string"
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

## v1/get-lendings-by-lender

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-lendings-by-lender`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**loan** (`GetLendingsByLenderInput!`)

```json
{
  "contractName": "string",
  "lenderAddress": "string",
  "limit": "string",
  "network": "string",
  "offset": "string",
  "poolId": "string"
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

## v1/get-total-lending

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-total-lending`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**loan** (`GetTotalLendingInput!`)

```json
{
  "address": "string",
  "contractName": "string",
  "network": "string",
  "poolId": "string"
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

## v1/claim-rewards

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/claim-rewards`

**Action Type:** `mutation`

### Input Parameters

**loan** (`ClaimRewardsInput!`)

```json
{
  "contractName": "string",
  "data": {
    "address": "string",
    "lendingId": "string",
    "poolId": "string"
  },
  "network": "string",
  "tx": "string"
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/supplies/reward/calculate`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**lending** (`CalculateSupplyRewardsInput!`)

```json
{
  "amount": 0,
  "id": 0
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/supplies/rewards/calculate`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**lending** (`CalculateAllSuppliesRewardsInput!`)

```json
{
  "address": "string",
  "poolId": 0
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