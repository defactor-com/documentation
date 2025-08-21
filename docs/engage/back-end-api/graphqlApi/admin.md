---
id: engage-graphql-api-admin
title: Admin
sidebar_position: 1
description: GraphQL API endpoints for administrative operations in Defactor Engage platform
keywords: [admin, administration, graphql, api, engage, backend, management, governance]
tags: [admin, engage, backend, graphql]
---


# Admin Actions

## v1UpdateAccount

**Handler URL:** `{{BASE_RESTFUL_URL}}/global/update-account`

**Action Type:** `mutation`

**Permissions:** `user-admin`

### Input Parameters

**account** (`UpdateAccountInput!`)

```json
{
  "account": {
    "data": {
      "address": "string",
      "name": "string",
      "networks": [
        "string"
      ]
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

## v1UpdateGlobalTokenMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/global/update-token-metadata`

**Action Type:** `mutation`

**Permissions:** `user-admin`

### Input Parameters

**token** (`GlobalTokenMetadataInput!`)

```json
{
  "token": {
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/plan/update-plan-metadata`

**Action Type:** `mutation`

**Permissions:** `user-admin`

### Input Parameters

**plan** (`PlanMetadataInput!`)

```json
{
  "plan": {
    "contractName": "string",
    "data": {
      "logo": "string",
      "name": "string",
      "planId": "string",
      "txHash": "string"
    },
    "network": "string"
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

## v1UpdateTokenMetadata

**Handler URL:** `{{BASE_RESTFUL_URL}}/token/update-token-metadata`

**Action Type:** `mutation`

**Permissions:** `user-admin`

### Input Parameters

**token** (`TokenMetadataInput!`)

```json
{
  "token": {
    "contractName": "string",
    "data": {
      "logo": "string",
      "price": 0
    },
    "network": "string"
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
## v1UpsertEcosystemWallet

**Handler URL:** `{{BASE_RESTFUL_URL}}/wallet/upsert-ecosystem-wallet`

**Action Type:** `mutation`

**Permissions:** `user-admin`

### Input Parameters

**wallet** (`UpsertEcosystemWalletInput!`)

```json
{
  "wallet": {
    "contractName": "string",
    "data": {
      "address": "string",
      "iconUrl": "string",
      "initialAmount": 0,
      "label": "string"
    },
    "network": "string"
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

## v1DeleteEcosystemWallet

**Handler URL:** `{{BASE_RESTFUL_URL}}/wallet/delete-ecosystem-wallet`

**Action Type:** `mutation`

**Permissions:** `user-admin`

### Input Parameters

**wallet** (`DeleteEcosystemWalletInput!`)

```json
{
  "wallet": {
    "address": "string",
    "contractName": "string",
    "network": "string"
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
