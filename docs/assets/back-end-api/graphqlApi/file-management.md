---
title: File Management
sidebar_position: 4
---

# File Management

### v1GetFile

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/ipfs/get-file`

**Action Type:** `mutation`

**Permissions:** `guest`, `user`

#### Input Parameters

**hash** (`String!`)

**encoding** (`String`)

#### Response

**Type:** `DataBinOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1UploadFile

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/ipfs/upload-file`

**Action Type:** `mutation`

**Permissions:** `user`

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

### v1UploadFormFolder

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/upload-form-folder`

**Action Type:** `mutation`

**Permissions:** `guest`, `user`

#### Input Parameters

**metadataEntryFieldId** (`String`)

**folderName** (`String`)

**folder** (`[UploadIpsFileInput!]`)

#### Response

**Type:** `FormFileUploadOutput`

```json
{
  "res": "value",
  "success": false
}
```

---