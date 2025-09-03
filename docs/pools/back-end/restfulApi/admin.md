---
id: rest-api-admin
title: Admin
sidebar_position: 1
description: REST API endpoints for administrative operations in Defactor Pools platform
keywords: [admin, rest, api, pools, backend, fees, accounts, tokens, metadata]
tags: [admin, pools, backend, rest]
---

# Admin API

## v2GetWithdrawableFees

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/admin/get-withdrawable-fees`

**Action Type:** `query`

**Permissions:** `admin`

### Input Parameters

**stats** (`GetWithdrawableFeesInput`)

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

## v2UpdateAccount

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/admin/update-account`

**Action Type:** `mutation`

**Permissions:** `admin`

### Input Parameters

**account** (`UpdateAccountInput!`)

```json
{
  "address": "string",
  "name": "string",
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

## v2UpdateTokenMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/v2/admin/update-token-metadata`

**Action Type:** `mutation`

**Permissions:** `admin`

### Input Parameters

**token** (`UpdateTokenMetadataInput!`)

```json
{
  "address": "string",
  "logo": "string",
  "metadataId": 0,
  "network": "string",
  "price": 0
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