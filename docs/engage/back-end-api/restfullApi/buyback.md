---
id: restfull-api-buyback
title: BuyBack
sidebar_position: 6
---

## `Get Buyback Aggregate`

Retrieve the total buy and send amount from the buyback contract.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-buyback-aggregate`

**Request Body**

```json
{}
```

**Response**

```json
{
  "global_buyback_view_aggregate": {
    "aggregate": {
      "sum": {
        "buy_amount": 3.047851264858275e23,
        "spend_amount": 5000000000
      }
    }
  }
}
```
