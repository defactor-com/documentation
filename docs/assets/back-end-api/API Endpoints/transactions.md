---
title: Transactions
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


## Transactions


### `Get wallet assets`

Fetches all assets and their information of a given user address.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/my-wallet-assets`

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
  "myWalletAssets": [
    {
      "id": "9839c4b5...",
      "amount": "300000000000000000000000",
      "price": "0.001",
      "name": "Asset 1",
      "chain_id": 1,
      "ticker": "AS1",
      "asset_type": "erc20",
      "asset_category": "realEstate",
      "asset_icon": "icon.png"
    }
  ]
}
```


### `Get user's transactions`

Fetches all transactions of a specific asset that a given user has created within the app.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-user-transactions`

**Request Body**

```json
{
  "sender": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
  "asset_id": "b12f4b60-91c7-4d8e-b7db-c76fd4c8b2f6"
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "global_transaction": [
    {
      "id": "bc0fb597...",
      "chain": 11155111,
      "asset_id": "9839c4b5...",
      "hash": null,
      "mined_at": "2024-09-04T08:07:27.490199+00:00",
      "receiver": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
      "state": "failed",
      "type": "deploy",
      "value": "0"
    }
  ]
}
```

### `Get contact name`

Fetches the contact name of a wallet address for a specific creator.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-contact-name`

**Request Body**

```json
{
  "creator": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
  "wallet": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1"
}

```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "global_contact": [
    {
      "name": "John"
    }
  ]
}
```

### `Get token balance`

Fetches the balance for a specific token from the blockchain.

**HTTP Request Method**: GET

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-token-balance`

**Request Body**

```json
{
  "chainId": 1,
  "owner": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "token": "0x0000000000000000000000000000000000000000"
}

```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "tokenBalance": {
    "balance": "5238581881319468928"
  }
}
```

### `Update transaction hash`

Updates hash of a transaction object. 

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/update-transaction-hash`

**Request Body**

```json
{
  "hash": "0xf671...",
  "id": "e4902bb0..."
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "updateTransactionHash": true
}
```

### `Process webhook notification`

Process transaction finality upon receiving webhook notification from Alchemy.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/post-webhook-notification`

**Request Body**

Request body depends on the transaction and as such may have different structures. For more information, check the [Alchemy documentation](https://docs.alchemy.com/reference/notify-api-quickstart).

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "processWebhookNotification": {
    "success": true
  }
}
```

### `After sending transaction processing`

Set the correct states in the db after broadcasting transaction via the frontend.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/send-transaction`

**Request Body**

```json
{
    "chainId": 1,
    "sender": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
    "value": "10000000000000000",
    "type": "transaction",
    "assetId": "eb60b6d7...",
    "receiver": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2"
}
```
**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "sendTransaction": {
    "insert_global_transaction": {
      "returning": [
        {
          "id": "6d325474..."
        }
      ]
    }
  }
}
```

### `Build create ERC3643 token transaction`

Creates a transaction for creating user's ERC3643 tokens.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/create-erc3643`

**Request Body**

```json
{
  "creator": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "name": "My token 1",
  "symbol": "TT1",
  "decimals": 18,
  "supply": "100000000000000000000000000",
  "static_data": "0x0000000000000000000000000000000000000000000000000000000000000001",
  "contractAddress": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2",
  "chainId": 1
}
```
**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "createERC3643Token": {
    "data": "0xae...",
    "to": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2",
    "from": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1"
  }
}
```

### `Build create ERC20 token transaction`

Creates a transaction for creating user's ERC20 tokens.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/create-erc20`

**Request Body**

```json
{
  "creator": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "name": "My token 1",
  "symbol": "TT1",
  "decimals": 18,
  "supply": "100000000000000000000000000",
  "static_data": "0x0000000000000000000000000000000000000000000000000000000000000001",
  "contractAddress": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2",
  "chainId": 1
}
```
**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "createERC20Token": {
    "data": "0xae...",
    "to": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2",
    "from": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1"
  }
}
```

### `Build burn ERC3643 token transaction`

Creates a transaction for burning user's ERC3643 tokens.

> Note: Only contract owner can burn user's tokens.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/burn-erc3643-tokens`

**Request Body**

```json
{
  "from": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "amount": "100000000000000000000",
  "contractAddress": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2",
  "chainId": 1
}
```
**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "burnERC3643": {
    "data": "0x9dc29fac...",
    "to": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
    "from": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2"
  }
}
```

### `Build burn ERC20 token transaction`

Creates a transaction for burning user's ERC20 tokens.

> Note: Only contract owner can burn user's tokens.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/burn-erc20-tokens`

**Request Body**

```json
{
  "from": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "amount": "100000000000000000000",
  "contractAddress": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2",
  "chainId": 1
}
```
**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "burnERC20": {
    "data": "0x9dc29fac...",
    "to": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
    "from": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2"
  }
}
```

### `Build transfer transaction`

Creates a transaction for burning user's ERC20 tokens.

> Note: Only contract owner can burn user's tokens.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/build-transfer-transaction`

**Request Body**

```json
{
  "to": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "from": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2",
  "amount": "100000000000000000000",
  "contractAddress": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "chainId": 1
}
```
**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "transferToken": {
    "data": "0xa9059cbb...",
    "to": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
    "from": "0x18983Fe59b2F08F9F1B3E833c5D47B256F7FE0d2"
  }
}
```

### `Check wallet identity`

Checks if wallet identity contract is already deployed for a given user.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/check-wallet-identity`

**Request Body**

```json
{
  "walletAddress": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "chainId": 1
}
```
**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "checkWalletIdentity": false
}
```

### `Check token identity`

Checks if token already has identity contract associated with it.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/check-identity-for-token`

**Request Body**

```json
{
  "walletAddress": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "tokenContract": "0xe2cEEfA9b6301280D785652C62cfbcf4d0B48283",
  "chainId": 1
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "checkIdentityForToken": true
}
```

### `Deploy token identity`

Deploys new identity contract for the user.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/deploy-identity`

**Request Body**

```json
{
  "walletAddress": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "chainId": 1
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "deployIdentity": {
    "data": "0x3e8e6e8b0...",
    "to": "0xe2cEEfA9b6301280D785652C62cfbcf4d0B48283",
    "from": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1"
  }
}
```

### `Register identity`

Registers the new identity contract in the protocol.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/register-identity`

**Request Body**

```json
      {
  "creator": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "tokenAddress": "0xe2cEEfA9b6301280D785652C62cfbcf4d0B48283",
  "walletAddress": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "chainId": 1
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "registerIdentity": {
    "data": "0x454a03e...",
    "to": "0xe2cEEfA9b6301280D785652C62cfbcf4d0B48283",
    "from": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1"
  }
}
```

### `Build mint ERC3643 token transaction`

Creates a transaction for burning user's ERC3643 tokens.

**HTTP Request Method**: POST

**Roles**: User

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/register-identity`

**Request Body**

```json
      {
  "creator": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "tokenAddress": "0xe2cEEfA9b6301280D785652C62cfbcf4d0B48283",
  "walletAddress": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1",
  "chainId": 1
}
```

**Response**

Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:

```json
{
  "registerIdentity": {
    "data": "0x454a03e...",
    "to": "0xe2cEEfA9b6301280D785652C62cfbcf4d0B48283",
    "from": "0xb8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d1"
  }
}
```
