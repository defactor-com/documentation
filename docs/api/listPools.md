---
sidebar_position: 5
---

# List Pools

**Endpoint**: `/listPools`

**HTTP Method**: `GET`

**Params**:
- `poolIds=pool id`
- `chain=Ethereum`

## Description

This endpoint makes an HTTP GET request to fetch a list of pools based on the provided pool IDs and chain. The request should include the query parameters "poolIds" and "chain" to specify the pool IDs and the blockchain network, respectively.
The request body for this endpoint is undefined and should be left empty.

## Response

The response to this request will have a status code of 200, and it will return an empty array "[]" containing the list of pools that match the specified pool IDs and chain.