---
title: Utilities
sidebar_position: 5
---

## Token

### `Update Global Token Metadata`

Update the metadata of the contract token.

**HTTP Method**: POST

**Roles**: Admin\*\_Request Body\_\_\*\_The token attribute is an object which identies in a unique way the token to update, it could be the tokenId or an object with the name, symbol, and precision of the erc20 token`json{    "metadata": {       "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"    },    "token": {       "tokenId": "66d65ef0-5d57-4199-83ac-e7961949f420"    }}`

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**Params**:

```json
{
  "token": {
    "data": {
      "metadata": {
        "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
      },
      "token": {
        "tokenId": "b1c7d7c9-6f31-44de-9eb2-ab052fca7504"
      }
    }
  }
}
```

**Response**

```json
{
  "v1UpdateGlobalPlanMetadata": {
    "res": {
      "id": "f8f6925d-f20a-40a6-bb57-40bed4de188e"
    },
    "success": true
  }
}
```

### `Token Price`

**HTTP Method**: POST

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**Params**:

```json
{
  "symbol": "FACTR"
}
```

## `Config`

**HTTP Method**: POST

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**Params**:

```json
{}
```

## `Get Circulating Supply`

**HTTP Method**: POST

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**Params**:

```json
{
  "global": {
    "networks": ["{{NETWORK_BASE}}"]
  }
}
```
