---
title: Mailing
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


## Mailing

### `Send email`

Send an email containing all asset's static and dynamic data to audit company, in order to either verify or reject the claim.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/send-email`

**Request Body**

```json
{
  "email": "nal@noctocode.com",
  "entryFormId": "e6fe36fc-6d48-4029-8d44-15dbf960fe10"
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "sendEmail": true
}
```
