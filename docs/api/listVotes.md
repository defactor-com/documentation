---
sidebar_position: 2
---

# List Votes

**Endpoint**: `/listVotes/{proposalID}`

**HTTP Method**: `GET`

## Description

This endpoint makes an HTTP GET request to retrieve a list of votes associated with the provided ID. The request does not include a request body.

## Response

The response to the last execution of this request had a status code of 200, and it returned a JSON object containing an array of "votes" along with a "count" of the total number of votes.

The "votes" array includes objects with properties such as "_id", "voting", "wallet", "chain", "vote", "signature", "signedTimestamp", "createdAt", "updatedAt", "__v", and "value".