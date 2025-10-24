---
title: File Management
sidebar_position: 4
---

# File Management

### v1/ipfs/get-file

**Methods:** `POST`

**URL:** `v1/ipfs/get-file`

#### Input Parameters

**hash** (`String!`)

**encoding** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/ipfs/upload-file

**Methods:** `POST`

**URL:** `v1/ipfs/upload-file`

#### Input Parameters

**file** (`bytea!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### uploadFormFolder

**Methods:** `POST`

**URL:** `v1/upload-form-folder`

#### Input Parameters

**metadataEntryFieldId** (`String!`)

**folderName** (`String!`)

**folder** (`[UploadIpsFileInput!]`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---