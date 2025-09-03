---
id: graphql-api-asset-management
title: Asset Management
sidebar_position: 3
---

# Asset Management

### buildUpdateDynamicDataTransaction

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-update-dynamic-data-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`BuildUpdateDynamicDataInputTransaction!`)

```json
{
  "transaction": {
    "chainId": 0,
    "comment": "string",
    "from": "string",
    "metadata_entry_id": "value",
    "updated_fields": [
      {
        "metadata_entry_field_id": "value",
        "value": "string"
      }
    ]
  }
}
```

#### Response

**Type:** `BuiltTransaction`

```json
{
  "data": "string",
  "from": "string",
  "to": "string"
}
```

---

### updateAssetDynamicData

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/update-asset-dynamic-data`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`UpdateAssetDynamicDataInput!`)

```json
{
  "transaction": {
    "chainId": 0,
    "comment": "string",
    "metadata_entry_id": "value",
    "updated_fields": [
      {
        "metadata_entry_field_id": "value",
        "value": "string"
      }
    ]
  }
}
```

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---