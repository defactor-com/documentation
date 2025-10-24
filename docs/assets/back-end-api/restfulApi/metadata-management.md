---
title: Metadata Management
sidebar_position: 6
---

# Metadata Management

### v1/post-metadata-template

**Methods:** `POST`

**URL:** `v1/post-metadata-template`

#### Input Parameters

**template_name** (`String`)

**description** (`String`)

**creator** (`String`)

**isDerived** (`Boolean`)

**isCommunity** (`Boolean`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-metadata-template

**Methods:** `GET`

**URL:** `v1/get-metadata-template`

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

### v1/get-metadata-templates

**Methods:** `GET`

**URL:** `v1/get-metadata-templates`

#### Input Parameters

**creator** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/update-metadata-template

**Methods:** `POST`

**URL:** `v1/update-metadata-template`

#### Input Parameters

**id** (`uuid`)

**description** (`String`)

**template_name** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-metadata-template

**Methods:** `DELETE`

**URL:** `v1/delete-metadata-template`

#### Input Parameters

**metadata_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/post-metadata-template-field

**Methods:** `POST`

**URL:** `v1/post-metadata-template-field`

#### Input Parameters

**field_length** (`global_field_size_enum`)

**field_name** (`String`)

**field_type** (`global_field_type_enum`)

**is_dynamic** (`Boolean`)

**is_required** (`Boolean`)

**is_tooltip** (`Boolean`)

**metadata_id** (`uuid`)

**placeholder** (`String`)

**position_in_metadata** (`Int`)

**suffix** (`global_suffix_enum`)

**tooltip_text** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/update-metadata-template-field

**Methods:** `POST`

**URL:** `v1/update-metadata-template-field`

#### Input Parameters

**id** (`uuid`)

**field_length** (`global_field_size_enum`)

**field_name** (`String`)

**field_type** (`global_field_type_enum`)

**is_dynamic** (`Boolean`)

**is_required** (`Boolean`)

**is_tooltip** (`Boolean`)

**metadata_id** (`uuid`)

**placeholder** (`String`)

**position_in_metadata** (`Int`)

**suffix** (`global_suffix_enum`)

**tooltip_text** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-metadata-template-fields-by-template-id

Delete all metadata template fields using their template ID

**Methods:** `DELETE`

**URL:** `v1/delete-metadata-template-fields-by-template-id`

#### Input Parameters

**metadata_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/post-metadata-entry

**Methods:** `POST`

**URL:** `v1/post-metadata-entry`

#### Input Parameters

**asset_id** (`uuid`)

**status** (`global_metadata_status_enum`)

**metadata_id** (`uuid`)

**creator** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-metadata-entry

**Methods:** `GET`

**URL:** `v1/get-metadata-entry`

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

### v1/get-metadata-entry-by-asset-id

**Methods:** `GET`

**URL:** `v1/get-metadata-entry-by-asset-id`

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

### v1/get-metadata-template-id-by-entry-id

**Methods:** `GET`

**URL:** `v1/get-metadata-template-id-by-entry-id`

#### Input Parameters

**entryId** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/post-metadata-entry-field

**Methods:** `POST`

**URL:** `v1/post-metadata-entry-field`

#### Input Parameters

**entry_metadata_id** (`uuid`)

**field_id** (`uuid`)

**value** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/update-metadata-entry-field

**Methods:** `POST`

**URL:** `v1/update-metadata-entry-field`

#### Input Parameters

**uuid** (`uuid`)

**value** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/update-metadata-status

**Methods:** `POST`

**URL:** `v1/update-metadata-status`

#### Input Parameters

**metadata_id** (`uuid`)

**newStatus** (`global_metadata_status_enum`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-entry-metadata-history

**Methods:** `GET`

**URL:** `v1/get-entry-metadata-history`

#### Input Parameters

**metadata_entry_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-entry-metadata-history-id

**Methods:** `GET`

**URL:** `v1/get-entry-metadata-history-id`

#### Input Parameters

**metadata_entry_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-entry-metadata-field-history

**Methods:** `GET`

**URL:** `v1/get-entry-metadata-field-history`

#### Input Parameters

**metadata_entry_history_id** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-entry-metadata-history

**Methods:** `DELETE`

**URL:** `v1/delete-entry-metadata-history`

#### Input Parameters

**metadata_entry_id** (`uuid!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-field-history

**Methods:** `DELETE`

**URL:** `v1/delete-field-history`

#### Input Parameters

**history_id** (`uuid!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-audit-name-by-enrey-id

**Methods:** `GET`

**URL:** `v1/get-audit-name-by-enrey-id`

#### Input Parameters

**entryId** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---