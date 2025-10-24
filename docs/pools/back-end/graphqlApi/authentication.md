---
id: graphql-api-authentication
title: Authentication
sidebar_position: 2
description: GraphQL API authentication endpoints for Defactor Pools platform including login and user management
keywords: [authentication, auth, login, jwt, graphql, api, pools, backend, security]
tags: [authentication, pools, backend, graphql]
---

# Authentication Actions

## v1AuthLogin

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/auth/login`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**session** (`AuthLoginInput!`)

```json
{
  "session": {
    "address": "string"
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

## v1AuthLogout

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/auth/logout`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**session** (`AuthLogoutInput!`)

```json
{
  "session": {
    "refreshToken": "string"
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

## v1AuthRestoreSession

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/auth/refresh-token`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**session** (`AuthRestoreSessionInput!`)

```json
{
  "session": {
    "refreshToken": "string"
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
