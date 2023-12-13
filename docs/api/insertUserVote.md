---
sidebar_position: 10
---

# Insert User Vote

**Endpoint**: `/insertUserVote`

**HTTP Method**: `POST`

**Params**: 
``` json
{
    "votingId": "64ad3c1fc1d8dec244b69b9f",
    "wallet": "0xd198...ce351",
    "chain": "Ethereum",
    "vote": true,
    "signature": "signature",
    "signedTimestamp": 100000000
}
```

## Description

This endpoint allows you to insert a user's vote.

## Response