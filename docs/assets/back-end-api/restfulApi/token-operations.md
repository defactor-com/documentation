---
title: Token Operations
sidebar_position: 10
---

# Token Operations

### v1/create-erc20

**Methods:** `POST`

**URL:** `v1/create-erc20`

#### Input Parameters

**symbol** (`String`)

**supply** (`String`)

**dynamic_data** (`String`)

**static_data** (`String`)

**name** (`String`)

**decimals** (`Int`)

**creator** (`String`)

**contractAddress** (`String`)

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

### v1/create-erc3643

**Methods:** `POST`

**URL:** `v1/create-erc3643`

#### Input Parameters

**symbol** (`String`)

**supply** (`String`)

**dynamic_data** (`String`)

**static_data** (`String`)

**name** (`String`)

**decimals** (`Int`)

**creator** (`String`)

**contractAddress** (`String`)

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

### v1/burn-erc20-tokens

**Methods:** `POST`

**URL:** `v1/burn-erc20-tokens`

#### Input Parameters

**from** (`String`)

**contractAddress** (`String`)

**amount** (`String`)

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

### v1/burn-erc3643-tokens

**Methods:** `POST`

**URL:** `v1/burn-erc3643-tokens`

#### Input Parameters

**from** (`String`)

**contractAddress** (`String`)

**amount** (`String`)

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

### v1/mint-erc3643-tokens

**Methods:** `POST`

**URL:** `v1/mint-erc3643-tokens`

#### Input Parameters

**creator** (`String`)

**asset_id** (`String`)

**contractAddress** (`String`)

**amount** (`String`)

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

### v1/get-token-allowance

**Methods:** `GET`

**URL:** `v1/get-token-allowance`

#### Input Parameters

**chainId** (`Int!`)

**owner** (`String!`)

**spender** (`String!`)

**token** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-token-balance

**Methods:** `GET`

**URL:** `v1/get-token-balance`

#### Input Parameters

**chainId** (`Int!`)

**owner** (`String!`)

**token** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-token-total-supply

**Methods:** `GET`

**URL:** `v1/get-token-total-supply`

#### Input Parameters

**chainId** (`Int!`)

**contract_address** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---