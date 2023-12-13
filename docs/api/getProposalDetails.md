---
sidebar_position: 3
---

# Get Proposal Details

**Endpoint**: `/getProposalDetails/{proposalID}`

**HTTP Method**: `GET`

## Description

This endpoint retrieves the details of a specific proposal identified by its unique ID.
The request does not require a request body.

## Response

The response will have a status code of 200 and will include the details of the proposal in the following format:

``` json
{
    "proposal": {
        "id": "",
        "index": 0,
        "title": "",
        "description": "",
        "closedDate": "",
        "votesFor": 0,
        "votesAgainst": 0,
        "status": ""
    }
}
```