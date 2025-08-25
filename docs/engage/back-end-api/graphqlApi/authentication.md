---
id: graphql-api-authentication
title: Authentication
sidebar_position: 2
---

## Security Details

To secure the API access control, all requests are made through [Hasura](https://hasura.io/) which provides secure GraphQL, and RESTful endpoints restricted by a role-based authorization system.

Those endpoints that return public blockchain data do not require authentication for use. Query type requests are opened under the `guest` role, while mutation type needs a token with `admin` role.

For those that can modify data the API expects a valid authorization header containing a bearer token. These tokens are implemented as JSON Web Tokens (JWTs) issued by the server.

The security of the JWT is because it is signed by a secret key and has a configurable expiration time, which by default is 60 minutes.

Upon receiving a request, Hasura decodes and validates the JWT, which contains user account data, and their corresponding role. If the role lacks the necessary permissions or the token is invalid, expired or missing, the request is promptly rejected.

---

# Authentication Actions

## v1Login

**Handler URL:** `{{BASE_RESTFUL_URL}}/login`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**session** (`LoginInput!`)

```json
{
  "session": {
    "message": "string",
    "signature": "string"
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

## v1RestoreSession

**Handler URL:** `{{BASE_RESTFUL_URL}}/restore-session`

**Action Type:** `mutation`

**Permissions:** `guest`

### Input Parameters

**session** (`RestoreSessionInput!`)

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
```
