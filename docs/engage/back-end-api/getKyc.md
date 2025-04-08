---
sidebar_position: 6
---

# Get Kyc

**Endpoint**: `/getKyc`

**HTTP Method**: `GET`

**Params**: `wallet=0xd198...ce351`

## Description

This endpoint makes an HTTP GET request to retrieve Know Your Customer (KYC) information for a specific wallet. The wallet parameter in the query string should be provided to specify the wallet for which the KYC information is being requested.

## Response

Upon a successful execution, the endpoint returns a status code of 200 along with an empty JSON response.

```json
{
  "wallet": ""
}
```
