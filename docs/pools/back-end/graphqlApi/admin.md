---
id: graphql-api-admin
title: Admin
sidebar_position: 1
---

# Admin Actions

## v2UpdateAccount

**Handler URL:** `{{BASE_RESTFUL_URL}}/admin/update-account`

**Action Type:** `mutation`

**Permissions:** `ADMIN`

### Input Parameters

**account** (`UpdateAccountInput!`)

```json
{
  "account": {
    "address": "string",
    "name": "string",
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

## v2UpdatePoolMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/pools/update-metadata`

**Action Type:** `mutation`

**Permissions:** `ADMIN`

### Input Parameters

**pool** (`UpdatePoolMetadataInput!`)

```json
{
  "pool": {
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/admin/update-token-metadata`

**Action Type:** `mutation`

**Permissions:** `ADMIN`

### Input Parameters

**token** (`UpdateTokenMetadataInput!`)

```json
{
  "token": {
    "address": "string",
    "logo": "string",
    "metadataId": 0,
    "network": "string",
    "price": 0
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
