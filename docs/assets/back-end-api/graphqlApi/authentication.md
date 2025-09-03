---
id: graphql-api-authentication
title: Authentication
sidebar_position: 1
---

# Authentication

### generateNonce

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/nonce`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Response

**Type:** `JSON!`

---

### getSession

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/session`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Response

**Type:** `JSON!`

---

### verifySignature

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/verify-sig`

**Action Type:** `mutation`

**Permissions:** `user`, `guest`

#### Input Parameters

**input** (`VerifySignatureInput!`)

```json
{
  "input": {
    "address": "string",
    "chainId": 0,
    "message": "string",
    "signature": "string"
  }
}
```

#### Response

**Type:** `JSON!`

---