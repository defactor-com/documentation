---
id: rest-api-utils
title: Utilities
sidebar_position: 5
description: REST API endpoints for utility operations in Defactor Pools platform
keywords: [utilities, rest, api, pools, backend, config, ipfs, pools, statistics]
tags: [utilities, pools, backend, rest]
---

# Utilities API

## /config

**Handler URL:** `{{BASE_RESTFUL_URL}}/config`

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

## v1/create-pool

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/create-pool`

**Action Type:** `mutation`

### Input Parameters

**pool** (`CreatePoolInput!`)

```json
{
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

## v1/get-pool

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-pool`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**pool** (`GetPoolInput!`)

```json
{
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

## v1/get-pools

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-pools`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**pool** (`PaginationInput!`)

```json
{
  "contractName": "string",
  "limit": "string",
  "network": "string",
  "offset": "string"
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-total-pools`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**data** (`DefaultInput!`)

```json
{
  "contractName": "string",
  "network": "string"
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-usdc`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**data** (`DefaultInput!`)

```json
{
  "contractName": "string",
  "network": "string"
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

## v1/ipfs/get-file

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/ipfs/get-file`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**hash** (`String!`)

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1/ipfs/upload-file

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/ipfs/upload-file`

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

## v2GetHistoricalBalance

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/get-historical-balance`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**stats** (`GetHistoricalBalanceInput!`)

```json
{
  "filterBy": "string",
  "networks": [
    "string"
  ]
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/get-total-collateral-locked`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**stats** (`GetTotalCollateralLockedInput!`)

```json
{
  "networks": [
    "string"
  ]
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

## v2UpdatePoolMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/pools/update-metadata`

**Action Type:** `mutation`

**Permissions:** `admin`

### Input Parameters

**pool** (`UpdatePoolMetadataInput!`)

```json
{
  "collateralToken": {
    "logo": "string"
  },
  "description": "string",
  "id": 0,
  "logo": "string",
  "name": "string",
  "poolVisibility": "string",
  "termsConditions": {
    "label": "string",
    "url": "string"
  },
  "txHash": "string"
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