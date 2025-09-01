---
id: rest-api-utilities
title: Utilities
sidebar_position: 9
description: REST API endpoints for utility operations in Defactor Engage platform
keywords: [utilities, rest, api, engage, backend, config, supply, price]
tags: [utilities, engage, backend, rest]
---

# Utilities API

## getConfig

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

## v1GetCirculatingSupply

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-circulating-supply`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**global** (`CirculatingSupplyInput`)

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

## v1GetTokenPrice

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-token-price`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**symbol** (`String!`)

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---