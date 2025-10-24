---
id: restful-api-asset-management
title: Asset Management
sidebar_position: 2
---

# Asset Management

### v1/post-asset

**Methods:** `POST`

**URL:** `v1/post-asset`

#### Input Parameters

**asset_type** (`global_asset_type_enum`)

**asset_icon** (`String`)

**supply** (`String`)

**status** (`String`)

**spf** (`String`)

**price** (`String`)

**description** (`String`)

**chain_id** (`Int`)

**asset_name** (`String`)

**asset_category** (`global_asset_category_enum`)

**creator** (`String`)

**asset_symbol** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-asset

**Methods:** `GET`

**URL:** `v1/get-asset`

#### Input Parameters

**uuid** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/update-asset

**Methods:** `POST`

**URL:** `v1/update-asset`

#### Input Parameters

**uuid** (`uuid`)

**status** (`String`)

**asset_icon** (`String`)

**asset_type** (`global_asset_type_enum`)

**price** (`String`)

**supply** (`String`)

**description** (`String`)

**spf** (`String`)

**chain_id** (`Int`)

**asset_name** (`String`)

**asset_category** (`global_asset_category_enum`)

**creator** (`String`)

**asset_symbol** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-asset-and-related-data

**Methods:** `DELETE`

**URL:** `v1/delete-asset-and-related-data`

#### Input Parameters

**asset_id** (`uuid`)

**entry_metadata_id** (`uuid`)

**template_metadata_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-assets-by-status

**Methods:** `GET`

**URL:** `v1/get-assets-by-status`

#### Input Parameters

**creator** (`String`)

**limit** (`Int`)

**offset** (`Int`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-global-assets-by-status

**Methods:** `GET`

**URL:** `v1/get-global-assets-by-status`

#### Input Parameters

**limit** (`Int`)

**offset** (`Int`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/verify-asset

**Methods:** `POST`

**URL:** `v1/verify-asset`

#### Input Parameters

**id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/reject-asset

**Methods:** `POST`

**URL:** `v1/reject-asset`

#### Input Parameters

**id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### update-asset-status

updates asset status

**Methods:** `POST`

**URL:** `v1/update-asset-status`

#### Input Parameters

**uuid** (`uuid`)

**status** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-asset-links

**Methods:** `GET`

**URL:** `v1/get-asset-links`

#### Input Parameters

**asset_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/post-asset-link

**Methods:** `POST`

**URL:** `v1/post-asset-link`

#### Input Parameters

**asset_id** (`uuid`)

**url** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-asset-links

**Methods:** `DELETE`

**URL:** `v1/delete-asset-links`

#### Input Parameters

**asset_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/update-asset-dynamic-data

**Methods:** `POST`

**URL:** `v1/update-asset-dynamic-data`

#### Input Parameters

**comment** (`String`)

**metadata_entry_id** (`uuid!`)

**chainId** (`Int!`)

**updated_fields** (`[UpdatedField!]!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---