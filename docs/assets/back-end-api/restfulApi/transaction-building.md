---
id: restful-api-transaction-building
title: Transaction Building
sidebar_position: 11
---

# Transaction Building

### v1/build-approve-transaction

**Methods:** `POST`

**URL:** `v1/build-approve-transaction`

#### Input Parameters

**amount** (`String!`)

**contractAddress** (`String!`)

**from** (`String!`)

**to** (`String!`)

**chainId** (`Int!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/build-transfer-transaction

**Methods:** `POST`

**URL:** `v1/build-transfer-transaction`

#### Input Parameters

**amount** (`String!`)

**contractAddress** (`String!`)

**from** (`String!`)

**to** (`String!`)

**chainId** (`Int!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/build-update-dynamic-data-transaction

**Methods:** `POST`

**URL:** `v1/build-update-dynamic-data-transaction`

#### Input Parameters

**from** (`String`)

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