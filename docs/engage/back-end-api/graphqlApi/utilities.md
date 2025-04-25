---
id: graphql-api-utilities
title: Utilities
sidebar_position: 5
---

## Token

### `Update Global Token Metadata`

Update the metadata of the contract token.

**HTTP Method**: POST

**Roles**: Admin

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
mutation ($token: GlobalTokenMetadataInput!) {
  v1UpdateGlobalTokenMetadata(token: $token) {
    res
    success
  }
}
```

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

**GraphQL Body**

```graphql
query getTokenPrice($symbol: String!) {
  token_price: global_latest_token_price(where: { symbol: { _eq: $symbol } }) {
    price
    symbol
    date
  }
}
```

**Params**:

```json
{
  "symbol": "FACTR"
}
```

## `Config`

**HTTP Method**: POST

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query getConfig {
  getConfig {
    res
    success
  }
}
```

**Params**:

```json
{}
```

## `Get Circulating Supply`

**HTTP Method**: POST

**Endpoint**: `{{BASE_URL}}/v1/graphql`

**GraphQL Body**:

```graphql
query v1GetCirculatingSupply($global: CirculatingSupplyInput) {
  v1GetCirculatingSupply(global: $global) {
    res
    success
  }
}
```

**Params**:

```json
{
  "global": {
    "networks": ["{{NETWORK_BASE}}"]
  }
}
```
