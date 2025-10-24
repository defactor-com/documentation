---
title: Mixer Operations
sidebar_position: 7
---

# Mixer Operations

### v1/build-burn-erc20-mixer-transaction

**Methods:** `POST`

**URL:** `v1/build-burn-erc20-mixer-transaction`

#### Input Parameters

**creator** (`String!`)

**arteId** (`String!`)

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

### v1/build-mint-erc20-mixer-transaction

**Methods:** `POST`

**URL:** `v1/build-mint-erc20-mixer-transaction`

#### Input Parameters

**creator** (`String!`)

**arteId** (`String!`)

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

### v1/create-erc20-mixer

**Methods:** `POST`

**URL:** `v1/create-erc20-mixer`

#### Input Parameters

**creator** (`String!`)

**name** (`String!`)

**symbol** (`String!`)

**icon** (`String!`)

**mixedTokens** (`[MixedToken!]!`)

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

### v1/get-arte-count

**Methods:** `GET`

**URL:** `v1/get-arte-count`

#### Input Parameters

**creator** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-arte-details

**Methods:** `GET`

**URL:** `v1/get-arte-details`

#### Input Parameters

**uuid** (`uuid!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-arte-list

**Methods:** `GET`

**URL:** `v1/get-arte-list`

#### Input Parameters

**creator** (`String!`)

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