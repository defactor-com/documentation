---
id: rest-api-borrow
title: Borrow
sidebar_position: 4
description: REST API endpoints for borrowing operations in Defactor Pools platform
keywords: [borrow, lending, rest, api, pools, backend, loans, collateral, liquidation, repay]
tags: [borrow, pools, backend, rest]
---

# Borrow API

## v1/borrow

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/borrow`

**Action Type:** `mutation`

### Input Parameters

**borrow** (`BorrowInput!`)

```json
{
  "contractName": "string",
  "data": {
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

## v1/get-borrow

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-borrow`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**borrow** (`GetBorrowInput!`)

```json
{
  "borrowId": "string",
  "borrowerAddress": "string",
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

## v1/get-borrows-by-borrower

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-borrows-by-borrower`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**borrow** (`GetBorrowsByBorrowerInput!`)

```json
{
  "borrowerAddress": "string",
  "contractName": "string",
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

## v1/get-total-borrows

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-total-borrows`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**borrow** (`GetTotalBorrowsInput!`)

```json
{
  "borrowerAddress": "string",
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

## v1/repay

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/repay`

**Action Type:** `mutation`

### Input Parameters

**loan** (`RepayInput!`)

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

## v2CalculateCollateralChangeAdjustment

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/borrows/collateral-adjustment/calculate`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**borrow** (`CalculateCollateralChangeAdjustmentInput!`)

```json
{
  "collateralAmount": 0,
  "expectedLtv": 0,
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

## v2CalculateCollateralTokenAmount

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/borrows/collateral-token-amount/calculate`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**borrow** (`CalculateCollateralTokenAmountInput!`)

```json
{
  "amountToBorrow": 0,
  "ltv": 0,
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

---

## v2CalculateLiquidationStats

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/borrows/liquidation-stats/calculate`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**borrow** (`CalculateLiquidationStatsInput!`)

```json
{
  "amountToLiquidate": 0,
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

## v2CalculateRepayInterest

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/borrows/repay-interest/calculate`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**borrow** (`CalculateRepayInterestInput!`)

```json
{
  "amountToRepay": 0,
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