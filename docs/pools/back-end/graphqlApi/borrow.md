---
id: graphql-api-borrow
title: Borrow
sidebar_position: 3
---

# Borrow Actions

## v1Borrow

**Handler URL:** `{{BASE_RESTFUL_URL}}/borrow/borrow`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**borrow** (`BorrowInput!`)

```json
{
  "borrow": {
    "contractName": "string",
    "data": {
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

## v1GetBorrow

**Handler URL:** `{{BASE_RESTFUL_URL}}/borrow/get-borrow`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**borrow** (`GetBorrowInput!`)

```json
{
  "borrow": {
    "borrowId": "string",
    "borrowerAddress": "string",
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

## v1GetBorrowsByBorrower

**Handler URL:** `{{BASE_RESTFUL_URL}}/borrow/get-borrows-by-borrower`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**borrow** (`GetBorrowsByBorrowerInput!`)

```json
{
  "borrow": {
    "borrowerAddress": "string",
    "contractName": "string",
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

## v1GetTotalBorrows

**Handler URL:** `{{BASE_RESTFUL_URL}}/borrow/get-total-borrows`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**borrow** (`GetTotalBorrowsInput!`)

```json
{
  "borrow": {
    "borrowerAddress": "string",
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

## v2CalculateCollateralChangeAdjustment

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v2/borrows/collateral-adjustment/calculate`

**Action Type:** `query`

**Permissions:** `guest`, `ADMIN`

### Input Parameters

**borrow** (`CalculateCollateralChangeAdjustmentInput!`)

```json
{
  "borrow": {
    "collateralAmount": 0,
    "expectedLtv": 0,
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

---

## v2CalculateCollateralTokenAmount

**Handler URL:** `{{BASE_RESTFUL_URL}}/borrows/collateral-token-amount/calculate`

**Action Type:** `query`

**Permissions:** `ADMIN`, `guest`

### Input Parameters

**borrow** (`CalculateCollateralTokenAmountInput!`)

```json
{
  "borrow": {
    "amountToBorrow": 0,
    "ltv": 0,
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

## v2CalculateLiquidationStats

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v2/borrows/liquidation-stats/calculate`

**Action Type:** `query`

**Permissions:** `ADMIN`, `guest`

### Input Parameters

**borrow** (`CalculateLiquidationStatsInput!`)

```json
{
  "borrow": {
    "amountToLiquidate": 0,
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

---

## v2CalculateRepayInterest

**Handler URL:** `{{BASE_RESTFUL_URL}}/borrows/repay-interest/calculate`

**Action Type:** `query`

**Permissions:** `ADMIN`, `guest`

### Input Parameters

**borrow** (`CalculateRepayInterestInput!`)

```json
{
  "borrow": {
    "amountToRepay": 0,
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
