---
title: Authentication
sidebar_position: 6
---

## `Login`

Retrieve an access token with the role of the user and a refresh token to regenerate a new access token.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1/login`

**Params**:

```json
{
  "session": {
    "data": {
      "message": "https://localhost:3000 wants you to sign in with your Ethereum account: 0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5  Sign in with Ethereum to the app.  URI: https://localhost:3000 Version: 1 Chain ID: 1 Nonce: V4953jdM8Y5ljtOvZ Issued At: 2024-09-14T20:44:31.764Z Expiration Time: 2024-09-14T20:49:31.761Z",
      "signature": "0x81596c2af98457f7621455ca947db35cad201cb96ced9b34a4b2403fea35c01431f7bca6db5fc5ffdb92b42c3cd0ae0c5b21cc24099ce6e630f0966e3fa544701c"
    }
  }
}
```

**Response**

```json
{
  "v1Login": {
    "res": {
      "accessToken": "",
      "refreshToken": ""
    },
    "success": true
  }
}
```

## `Restore Session`

Retrieve a new access token with the role of the user and a refresh token to regenerate a new access token.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1/restore-session`

**Params**:

```json
{
  "session": {
    "data": {
      "refreshToken": "00000000-0000-0000-0000-000000000000"
    }
  }
}
```

**Response**

```json
{
  "v1Loding": {
    "res": {
      "accessToken": "",
      "refreshToken": ""
    },
    "success": true
  }
}
```

## `Update Account`

Update the metadata of an existing account in multiple networks using the address.

**HTTP Method**: POST

**Roles**: User Admin

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1/update-account`

**Params**:

```json
{
  "account": {
    "data": {
      "networks": ["{{NETWORK_ETHEREUM}}", "{{NETWORK_POLYGON}}"],
      "name": "name.eth",
      "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5"
    }
  }
}
```

**Response**

```json
{
  "v1UpdateAccount": {
    "res": {
      "updatedIn": ["ethereum"]
    },
    "success": true
  }
}
```
