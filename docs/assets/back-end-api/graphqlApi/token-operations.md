---
id: graphql-api-token-operations
title: Token Operations
sidebar_position: 9
---

# Token Operations

### approveToken

approveToken

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-approve-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`BuildTransactionInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "chainId": 0,
    "contractAddress": "string",
    "from": "string",
    "to": "string"
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

### burnERC20

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-burn-erc20-token-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`BurnInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "chainId": 0,
    "contractAddress": "string",
    "from": "string"
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

### burnERC3643

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-burn-erc3643-token-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`BurnInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "chainId": 0,
    "contractAddress": "string",
    "from": "string"
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

### createERC20Token

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-erc20-creation-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`CreateTokenInput!`)

```json
{
  "transaction": {
    "chainId": 0,
    "contractAddress": "string",
    "creator": "string",
    "decimals": 0,
    "dynamic_data": "string",
    "name": "string",
    "static_data": "string",
    "supply": "string",
    "symbol": "string"
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

### createERC3643Token

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-erc3643-creation-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`CreateTokenInput!`)

```json
{
  "transaction": {
    "chainId": 0,
    "contractAddress": "string",
    "creator": "string",
    "decimals": 0,
    "dynamic_data": "string",
    "name": "string",
    "static_data": "string",
    "supply": "string",
    "symbol": "string"
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

### mintERC3643Tokens

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-erc3643-mint-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`MintTokensInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "asset_id": "string",
    "chainId": 0,
    "contractAddress": "string",
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

### transferToken

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/build-transfer-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**transaction** (`BuildTransactionInput!`)

```json
{
  "transaction": {
    "amount": "string",
    "chainId": 0,
    "contractAddress": "string",
    "from": "string",
    "to": "string"
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

### tokenAllowance

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/token-allowance`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Input Parameters

**owner** (`String!`)

**spender** (`String!`)

**chainId** (`Int!`)

**token** (`String!`)

#### Response

**Type:** `JSON!`

---

### tokenBalance

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/token-balance`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Input Parameters

**owner** (`String!`)

**chainId** (`Int!`)

**token** (`String!`)

#### Response

**Type:** `JSON!`

---

### tokenTotalSupply

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/token-total-supply`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Input Parameters

**chainId** (`Int!`)

**contract_address** (`String!`)

#### Response

**Type:** `JSON!`

---