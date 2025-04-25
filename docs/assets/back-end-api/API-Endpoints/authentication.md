---
id: api-authentication
title: Authentication
sidebar_position: 1
---

The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.

---

## Security Details

To secure the API access control, all requests are made through [Hasura](https://hasura.io/) which provides secure GraphQL, and RESTful endpoints restricted by a role-based authorization system.

Those endpoints that return public data do not require authentication for use. Query type requests are opened under the `guest` role, while mutation type needs a token with `user` role.

For those that can modify data the API expects a valid authorization header containing a bearer token. These tokens are implemented as JSON Web Tokens (JWTs) issued by the server.

The security of the JWT is because it is signed by a secret key and has a configurable expiration time, which by default is 240 minutes.

Upon receiving a request, Hasura decodes and validates the JWT, which contains user account data, and their corresponding role. If the role lacks the necessary permissions or the token is invalid, expired or missing, the request is promptly rejected.

## Authentication

### `Login`

Return a JSON Web Token (JWT) access token. By default, the access token has maturity of 240 minutes, but it may vary depending on the server configuration.

**HTTP Request Method**: POST

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/verify-signature`

**Request Body**

```json
{
  "message": "defactor.com wants you to sign in with your Ethereum account...",
  "signature": "0xe117ad63b517e7b6823e472b...",
  "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
  "chainId": 1
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the generated access token. This object encompasses the following attributes:

```json
{
  "verifySignature": {
    "jwtToken": "<jwt>"
  }
}
```

### `Generate nonce`

Return a generated random string, using the SIWE library.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/generate-nonce`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the generated nonce. This object encompasses the following attributes:

```json
{
  "generateNonce": {
    "nonce": "1234567890"
  }
}
```

### `Get session`

Return user's login information, that were used to generate the JWT token, which has to be attached in the header.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-session`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200 along with a JSON object encapsulating the decoded user login information. This object encompasses the following attributes:

```json
{
  "getSession": {
    "address": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
    "chainId": 1,
    "role": "user"
  }
}
```
