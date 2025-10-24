---
title: Transaction Operations
sidebar_position: 12
---

# Transaction Operations

### v1/send-transaction

**Methods:** `POST`

**URL:** `v1/send-transaction`

#### Input Parameters

**sender** (`String!`)

**chainId** (`Int!`)

**value** (`String!`)

**receiver** (`String!`)

**assetId** (`String`)

**arteId** (`String`)

**type** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/update-transaction-hash

**Methods:** `POST`

**URL:** `v1/update-transaction-hash`

#### Input Parameters

**hash** (`String!`)

**id** (`uuid!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/send-faucet-tokens

**Methods:** `POST`

**URL:** `v1/send-faucet-tokens`

#### Input Parameters

**userAddress** (`String!`)

**chainId** (`Int!`)

**tokenAddress** (`String!`)

**amount** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-user-transactions

**Methods:** `GET`

**URL:** `v1/get-user-transactions`

#### Input Parameters

**asset_id** (`uuid`)

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

### v1/get-user-transactions-count

**Methods:** `GET`

**URL:** `v1/get-user-transactions-count`

#### Input Parameters

**sender** (`String`)

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