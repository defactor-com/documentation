---
id: graphql-api-utils
title: Utilities
sidebar_position: 5
description: GraphQL API utility endpoints for Defactor Pools platform including configuration and helper functions
keywords: [utilities, utils, graphql, api, pools, backend, configuration, helpers]
tags: [utilities, pools, backend, graphql]
---

# Utilities Actions

## getConfig

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/config`

**Action Type:** `query`

**Permissions:** `guest`

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetFile

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/ipfs/get-file`

**Action Type:** `mutation`

### Input Parameters

**hash** (`String!`)

**encoding** (`String`)

### Response

**Type:** `DataBinOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1UploadFile

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/ipfs/upload-file`

**Action Type:** `mutation`

### Input Parameters

**file** (`bytea!`)

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1CreatePool

**Handler URL:** `{{BASE_RESTFUL_URL}}/pool/create-pool`

**Action Type:** `mutation`

### Input Parameters

**pool** (`CreatePoolInput!`)

```json
{
  "pool": {
    "contractName": "string",
    "data": {
      "collateralDetails": "value",
      "endTime": "string",
      "hardCap": "string",
      "interest": 0,
      "softCap": "string"
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

## v1GetPool

**Handler URL:** `{{BASE_RESTFUL_URL}}/pool/get-pool`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**pool** (`GetPoolInput!`)

```json
{
  "pool": {
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

## v1GetPools

**Handler URL:** `{{BASE_RESTFUL_URL}}/pool/get-pools`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**pool** (`PaginationInput!`)

```json
{
  "pool": {
    "contractName": "string",
    "limit": "string",
    "network": "string",
    "offset": "string"
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

## v1GetTotalPools

**Handler URL:** `{{BASE_RESTFUL_URL}}/data/get-total-pools`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**data** (`DefaultInput!`)

```json
{
  "data": {
    "contractName": "string",
    "network": "string"
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

## v1GetUsdc

**Handler URL:** `{{BASE_RESTFUL_URL}}/data/get-usdc`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**data** (`DefaultInput!`)

```json
{
  "data": {
    "contractName": "string",
    "network": "string"
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

## v2GetHistoricalBalance

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v2/global/get-historical-balance`

**Action Type:** `query`

**Permissions:** `ADMIN`, `guest`

### Input Parameters

**stats** (`GetHistoricalBalanceInput!`)

```json
{
  "stats": {
    "filterBy": "string",
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

## v2GetTotalCollateralLocked

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v2/global/get-total-collateral-locked`

**Action Type:** `query`

**Permissions:** `ADMIN`, `guest`

### Input Parameters

**stats** (`GetTotalCollateralLockedInput!`)

```json
{
  "stats": {
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

## v2GetWithdrawableFees

**Handler URL:** `{{BASE_RESTFUL_URL}}/admin/get-withdrawable-fees`

**Action Type:** `query`

**Permissions:** `ADMIN`

### Input Parameters

**stats** (`GetWithdrawableFeesInput`)

```json
{
  "stats": {
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
