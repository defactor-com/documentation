---
id: graphql-api-identity-management
title: Identity Management
sidebar_position: 5
---

# Identity Management

### checkIdentityForToken

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/check-for-identity-on-token`

**Action Type:** `mutation`

**Permissions:** `guest`, `user`

#### Input Parameters

**walletAddress** (`String!`)

**tokenContract** (`String!`)

**chainId** (`Int!`)

#### Response

**Type:** `Boolean`

---

### checkWalletIdentity

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/check-for-wallet-identity`

**Action Type:** `mutation`

**Permissions:** `guest`, `user`

#### Input Parameters

**walletAddress** (`String!`)

**chainId** (`Int!`)

#### Response

**Type:** `Boolean`

---

### deployIdentity

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/deploy-identity`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`DeployIdentityInput!`)

```json
{
  "transaction": {
    "chainId": 0,
    "walletAddress": "string"
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

### registerIdentity

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/register-identity`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`RegisterIdentityInput!`)

```json
{
  "transaction": {
    "chainId": 0,
    "creator": "string",
    "tokenAddress": "string",
    "walletAddress": "string"
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