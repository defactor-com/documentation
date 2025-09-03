---
id: graphql-api-mixer-operations
title: Mixer Operations
sidebar_position: 6
---

# Mixer Operations

### buildBurnERC20MixerTransaction

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-erc20-mixer-burn-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`BuildBurnERC20MixerTransactionInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "arteId": "string",
    "creator": "string"
  }
}
```

#### Response

**Type:** `BuiltTransaction`

```json
{
  "data": "string",
  "from": "string",
  "to": "string"
}
```

---

### buildMintERC20MixerTransaction

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-erc20-mixer-mint-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`BuildMintERC20MixerTransactionInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "arteId": "string",
    "creator": "string"
  }
}
```

#### Response

**Type:** `BuiltTransaction`

```json
{
  "data": "string",
  "from": "string",
  "to": "string"
}
```

---

### createERC20Mixer

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-erc20-mixer-creation-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`CreateERC20MixerInput!`)

```json
{
  "transaction": {
    "chainId": 0,
    "creator": "string",
    "icon": "string",
    "mixedTokens": [
      {
        "asset_id": "string",
        "ratio": "string"
      }
    ],
    "name": "string",
    "symbol": "string"
  }
}
```

#### Response

**Type:** `BuiltArteTransaction`

```json
{
  "arteId": "string",
  "data": "string",
  "from": "string",
  "to": "string"
}
```

---