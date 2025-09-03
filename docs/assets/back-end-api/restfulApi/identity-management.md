---
id: restful-api-identity-management
title: Identity Management
sidebar_position: 5
---

# Identity Management

### v1/check-identity-for-token

**Methods:** `POST`

**URL:** `v1/check-identity-for-token`

#### Input Parameters

**walletAddress** (`String!`)

**tokenContract** (`String!`)

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

### v1/check-wallet-identity

**Methods:** `POST`

**URL:** `v1/check-wallet-identity`

#### Input Parameters

**walletAddress** (`String!`)

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

### v1/deploy-identity

**Methods:** `POST`

**URL:** `v1/deploy-identity`

#### Input Parameters

**walletAddress** (`String`)

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

### v1/register-identity

**Methods:** `POST`

**URL:** `v1/register-identity`

#### Input Parameters

**creator** (`String`)

**tokenAddress** (`String`)

**walletAddress** (`String`)

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