---
id: restful-api-authentication
title: Authentication
sidebar_position: 1
---

# Authentication

### v1/generate-nonce

**Methods:** `GET`

**URL:** `v1/generate-nonce`

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-session

**Methods:** `GET`

**URL:** `v1/get-session`

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/verify-signature

**Methods:** `POST`

**URL:** `v1/verify-signature`

#### Input Parameters

**address** (`String!`)

**chainId** (`Int!`)

**message** (`String!`)

**signature** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---