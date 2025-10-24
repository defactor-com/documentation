---
title: Admin
sidebar_position: 6
description: REST API endpoints for admin operations in Defactor Engage platform
keywords: [admin, rest, api, engage, backend, accounts, tokens, plans, ecosystem]
tags: [admin, engage, backend, rest]
---

# Admin API

## v1UpdateAccount

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/update-account`

**Action Type:** `mutation`

### Input Parameters

**account** (`UpdateAccountInput!`)

```json
{
  "data": {
    "address": "string",
    "name": "string",
    "networks": [
      "string"
    ]
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1UpdateGlobalTokenMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/update-global-token-metadata`

**Action Type:** `mutation`

### Input Parameters

**token** (`GlobalTokenMetadataInput!`)

```json
{
  "data": {
    "metadata": {
      "logo": "string",
      "price": 0
    },
    "token": {
      "name": "string",
      "precision": 0,
      "symbol": "string",
      "tokenId": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1UpdatePlanMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/update-plan-metadata`

**Action Type:** `mutation`

### Input Parameters

**plan** (`PlanMetadataInput!`)

```json
{
  "contractName": "string",
  "data": {
    "logo": "string",
    "name": "string",
    "planId": "string",
    "txHash": "string"
  },
  "network": "string"
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1UpdateTokenMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/update-token-metadata`

**Action Type:** `mutation`

### Input Parameters

**token** (`TokenMetadataInput!`)

```json
{
  "contractName": "string",
  "data": {
    "logo": "string",
    "price": 0
  },
  "network": "string"
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1DeleteEcosystemWallet

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/delete-ecosystem-wallet`

**Action Type:** `mutation`

### Input Parameters

**wallet** (`DeleteEcosystemWalletInput!`)

```json
{
  "address": "string",
  "contractName": "string",
  "network": "string"
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1UpsertEcosystemWallet

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/upsert-ecosystem-wallet`

**Action Type:** `mutation`

### Input Parameters

**wallet** (`UpsertEcosystemWalletInput!`)

```json
{
  "contractName": "string",
  "data": {
    "address": "string",
    "iconUrl": "string",
    "initialAmount": 0,
    "label": "string"
  },
  "network": "string"
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---