---
id: cp-pools-graphql
title: Pools
sidebar_position: 1
---


### createPool

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/create-pool`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**owner** (`String!`)

**name** (`String!`)

**description** (`String!`)

**apr** (`numeric!`)

**minApr** (`numeric!`)

**term** (`Int!`)

**deadline** (`timestamptz!`)

**liquidationDeadline** (`timestamptz!`)

**chainId** (`Int!`)

**hardCap** (`String!`)

**softCap** (`String!`)

**twitter** (`String`)

**website** (`String`)

**photo** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### editPool

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/edit-pool`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**id** (`String!`)

**name** (`String!`)

**photo** (`String!`)

**description** (`String!`)

**apr** (`numeric!`)

**term** (`Int!`)

**twitter** (`String`)

**website** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### getConfig

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/config`

**Action Type:** `query`

**Permissions:** `guest`

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### getFile

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/ipfs/get-file`

**Action Type:** `query`

**Permissions:** `user`, `guest`

#### Input Parameters

**hash** (`String!`)

**encoding** (`String`)

#### Response

**Type:** `DataBinOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### getPools

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/get-pools`

**Action Type:** `query`

**Permissions:** `user`, `guest`

#### Input Parameters

**poolId** (`String`)

**owner** (`String`)

**chainId** (`Int`)

**status** (`[String]`)

**wallet** (`String`)

**offset** (`Int`)

**limit** (`Int`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### getPoolsCount

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/get-pools-count`

**Action Type:** `query`

**Permissions:** `user`, `guest`

#### Input Parameters

**poolId** (`String`)

**owner** (`String`)

**chainId** (`Int`)

**status** (`[String]`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### getTokenBalances

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/get-balances`

**Action Type:** `query`

**Permissions:** `user`, `guest`

#### Input Parameters

**wallet** (`String!`)

**chainId** (`Int!`)

**nfts** (`Boolean`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### processWebhookNotification

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/transaction-hook`

**Action Type:** `mutation`

**Permissions:** `user`, `guest`

#### Input Parameters

**arg1** (`WebhookInput!`)

```json
{
  "arg1": {
    "createdAt": "string",
    "event": {
      "activity": "value",
      "data": "string",
      "network": "string",
      "sequenceNumber": "string",
      "source": "string"
    },
    "id": "string",
    "type": "string",
    "webhookId": "string"
  }
}
```

#### Response

**Type:** `WebhookOutput`

```json
{
  "success": false
}
```

---

### saveNewTransaction

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/save-new-transaction`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**chainId** (`Int!`)

**sender** (`String!`)

**txHash** (`String!`)

**poolId** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### uploadFile

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/ipfs/upload-file`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**file** (`bytea!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---
