---
id: graphql-api-utilities
title: Utilities
sidebar_position: 6
---

# Utilities Actions

## getConfig

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/config`

**Action Type:** `query`

**Permissions:** `guest`, `user-admin`

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

**Handler URL:** `{{BASE_RESTFUL_URL}}/global/circulating-supply`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**global** (`CirculatingSupplyInput`)

```json
{
  "global": {
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
