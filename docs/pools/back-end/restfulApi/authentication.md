---
id: rest-api-authentication
title: Authentication
sidebar_position: 2
description: REST API endpoints for authentication operations in Defactor Pools platform
keywords: [authentication, rest, api, pools, backend, login, logout, session]
tags: [authentication, pools, backend, rest]
---

# Authentication API

## v1AuthLogin

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/auth/login`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**session** (`AuthLoginInput!`)

```json
{
  "address": "string"
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/auth/logout`

**Action Type:** `mutation`

**Permissions:** `user`

### Input Parameters

**session** (`AuthLogoutInput!`)

```json
{
  "refreshToken": "string"
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/auth/restore-session`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**session** (`AuthRestoreSessionInput!`)

```json
{
  "refreshToken": "string"
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