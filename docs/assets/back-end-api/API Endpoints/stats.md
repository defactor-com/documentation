---
title: Stats
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


## Stats

### `Get my wallet stats`

Fetches numeric stats of how many tokens user minted, what their price is, and how many tokens he/she is currently holding.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-my-wallet-stats`

**Request Body**

```json
{
  "userAddress": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5"
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "myWalletStats": {
    "averagePrice": "0.001",
    "totalHolding": "300000000000000000000000",
    "totalMinted": "1000000000000000000000000",
    "totalPrice": "1000"
  }
}
```

### `Get global daily stats`

Fetches asset count based on their status for the last 24 hours.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/global-stats-day`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "globalStatsDay": {
    "2024-10-03T10:00:00": {
      "createdCount": 0,
      "inCreationAssets": 1,
      "minted": "0",
      "mintedAssets": 1,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2024-10-03T12:00:00": {
      "createdCount": 0,
      "inCreationAssets": 1,
      "minted": "0",
      "mintedAssets": 1,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2024-10-03T14:00:00": {
      "createdCount": 0,
      "inCreationAssets": 1,
      "minted": "0",
      "mintedAssets": 1,
      "mintedCount": 0,
      "transfers": "0"
    },
    ...
  }
}
```

### `Get global weekly stats`

Fetches asset count based on their status for the last 7 days.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/global-stats-week`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "globalStatsWeek": {
    "2024-09-28": {
      "createdCount": 0,
      "inCreationAssets": 1,
      "minted": "0",
      "mintedAssets": 1,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2024-09-29": {
      "createdCount": 0,
      "inCreationAssets": 1,
      "minted": "0",
      "mintedAssets": 1,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2024-09-30": {
      "createdCount": 0,
      "inCreationAssets": 1,
      "minted": "0",
      "mintedAssets": 1,
      "mintedCount": 0,
      "transfers": "0"
    },
    ...
  }
}
```

### `Get global monthly stats`

Fetches asset count based on their status for the last 30 days.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/global-stats-month`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "globalStatsMonth": {
    "2024-09-04": {
      "createdCount": 2,
      "inCreationAssets": 2,
      "minted": "0",
      "mintedAssets": 0,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2024-09-05": {
      "createdCount": 0,
      "inCreationAssets": 2,
      "minted": "0",
      "mintedAssets": 0,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2024-09-06": {
      "createdCount": 0,
      "inCreationAssets": 2,
      "minted": "0",
      "mintedAssets": 0,
      "mintedCount": 0,
      "transfers": "0"
    },
    ...
  }
}
```

### `Get global yearly stats`

Fetches asset count based on their status for the last 12 months.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/global-stats-year`

**Request Body**

```json
{}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "globalStatsYear": {
    "2023-11": {
      "createdCount": 0,
      "inCreationAssets": 0,
      "minted": "0",
      "mintedAssets": 0,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2023-12": {
      "createdCount": 0,
      "inCreationAssets": 0,
      "minted": "0",
      "mintedAssets": 0,
      "mintedCount": 0,
      "transfers": "0"
    },
    "2024-01": {
      "createdCount": 0,
      "inCreationAssets": 0,
      "minted": "0",
      "mintedAssets": 0,
      "mintedCount": 0,
      "transfers": "0"
    },
    ...
  }
}
```
