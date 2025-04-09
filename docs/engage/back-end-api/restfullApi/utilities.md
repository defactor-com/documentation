---
title: Utilities
sidebar_position: 7
---

## Token

### `Update Global Token Metadata`

Update the metadata of the contract token.

**HTTP Method**: POST

**Roles**: Admin\*\_Request Body\_\_\*\_The token attribute is an object which identies in a unique way the token to update, it could be the tokenId or an object with the name, symbol, and precision of the erc20 token`json{    "metadata": {       "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"    },    "token": {       "tokenId": "66d65ef0-5d57-4199-83ac-e7961949f420"    }}`

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1/update-global-token-metadata`

**Params**:

```json
{
  "token": {
    "data": {
      "metadata": {
        "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648",
        "price": 0.02
      },
      "token": {
        "tokenId": "57d31729-85f9-461f-b748-fb83dee71671"
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

### `Get Token Price`

Get the current instance configuration.

**HTTP Method**: GET

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1/get-token-price`

**Params**:

```json
{
  "symbol": "FACTR"
}
```

**Response**

```json
{
    "token_price": [
        "price": 0.02,
        "symbol": "FACTR",
        "date": "2025-03-07T00:00:00.000Z"
     ]
}
```

## `config`

Get the current instance configuration.

**HTTP Method**: GET

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/config`

**Params**:

```json
{}
```

**Response**

```json
{
    "getConfig": {
      "res": {
        "inactiveNetworks": [
          "polygon",
          "base",
          "bsc"
        ],
        "networks": [
          {
            "contracts": [
              {
                "abi": [...],
                "address": "0x",
                "name": "STAKING",
                "params": {
                  "fromBlock": 0,
                  "nextBlock": 1000,
"lastHistoricalValueLockedUpdate": "2024-01-01T00:00:00.000Z",
                  "nextTimeTokenPrice": "2024-01-01T100:00:00.000Z"
                }
              }
            ],
            "inactiveContracts": [],
            "name": "ethereum",
            "providerHttps": "provider",
            "services": [
              "LISTENER"
            ],
            "tokensInfo": [
              {
                "isCoingeckoEnabled": true,
                "name": "defactor",
                "symbol": "FACTR"
              }
            ],
            "workers": [
              "BLOCK CATCHER",
              "TOKEN PRICE FETCHER",
              "EVENT MATURITY",
              "HISTORICAL VALUE LOCKED UPDATER"
            ]
          }
        ]
      },
      "success": true
    }
  }
```

## `v1 Get Circulating Supply`

**Description**:

This endpoint makes an HTTP GET request to retrieve the circulating supply. The request does not include a request body.


**HTTP Method**: GET

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1-get-circulating-supply`

**Params**:

```json
{
  "global": {
    "networks": ["{{NETWORK_BASE}}"]
  }
}
```
**Response**

Upon the last execution, the server responded with a status code of 200 and the circulating supply value of 111083061.0.
