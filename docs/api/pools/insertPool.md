---
sidebar_position: 2
---

# Insert Pool

**Endpoint**: `/insertPool`

**HTTP Method**: `POST`

**Params**:

```json
{
  "poolId": 1,
  "name": "test pool",
  "description": "test pool",
  "image": "",
  "website": "test.com",
  "twitter": "test.com",
  "collateralTokens": [
    {
      "tokenImage": "",
      "tokenName": "name",
      "tokenContract": "0xF01192C27567aCf58D503Ff45C9275d96a7199fB",
      "tokenId": "1",
      "tokenAmount": "115"
    }
  ],
  "chain": "Ethereum"
}
```

## Description

The request should include a payload in the raw request body type with parameters such as poolId, name, description, image, website, twitter, collateralTokens, and chain.

## Response

- `chain` (string): The chain of the pool.
- `poolId` (number): The ID of the pool.
- `_id` (string): The ID of the pool.
- `collateralTokens` (array): An array of collateral tokens with the following properties:
  - `tokenImage` (string): The image of the token.
  - `tokenName` (string): The name of the token.
  - `tokenContract` (string): The contract address of the token.
  - `tokenId` (string): The ID of the token.
  - `tokenAmount` (string): The amount of the token.
  - `_id` (string): The ID of the token.
- `name` (string): The name of the pool.
- `description` (string): The description of the pool.
- `image` (string): The image of the pool.
- `website` (string): The website of the pool.
- `twitter` (string): The Twitter handle of the pool.
- `createdAt` (string): The timestamp of creation.
- `updatedAt` (string): The timestamp of the last update.
- `__v` (number): Version key.
