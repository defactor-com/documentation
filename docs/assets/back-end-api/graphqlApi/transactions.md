---
title: Transactions
sidebar_position: 10
---

# Transactions

### sendTransaction

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/send-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`TransactionInput!`)

```json
{
  "transaction": {
    "arteId": "string",
    "assetId": "string",
    "chainId": 0,
    "receiver": "string",
    "sender": "string",
    "type": "string",
    "value": "string"
  }
}
```

#### Response

**Type:** `JSON`

---

### updateTransactionHash

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/update-transaction-hash`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`TransactionHashInput!`)

```json
{
  "transaction": {
    "hash": "string",
    "id": "value"
  }
}
```

#### Response

**Type:** `Boolean`

---

### sendFaucetTokens

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/send-faucet-tokens`

**Action Type:** `query`

**Permissions:** `user`

#### Input Parameters

**transaction** (`SendFaucetTokensInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "chainId": 0,
    "tokenAddress": "string",
    "userAddress": "string"
  }
}
```

#### Response

**Type:** `SendFaucetTokensOutput`

```json
{
  "res": "value",
  "success": false
}
```

---