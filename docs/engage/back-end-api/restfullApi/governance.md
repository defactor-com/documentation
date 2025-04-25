---
id: restfull-api-governance
title: Governance
sidebar_position: 4
---

## `Get Proposals`

**HTTP Request Method**: POST

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-proposals`

**Request Body**

```json
{}
```

## List Proposals

**Endpoint**: `/listProposals`

**HTTP Method**: `GET`

### Description

This endpoint makes an HTTP GET request to retrieve a list of proposals. The request does not contain a request body.

### Response

The response returns a status code of 200 along with an array of objects, each representing a proposal. Each proposal object includes the following properties:

- id (string): The unique identifier of the proposal.
- index (number): The index of the proposal.
- title (string): The title of the proposal.
- description (string): The description of the proposal.
- closedDate (string): The date when the proposal was closed.
- votesFor (number): The number of votes in favor of the proposal.
- votesAgainst (number): The number of votes against the proposal.
- status (string): The status of the proposal.

## Get Proposal Details

**Endpoint**: `/getProposalDetails/{proposalID}`

**HTTP Method**: `GET`

### Description

This endpoint retrieves the details of a specific proposal identified by its unique ID.
The request does not require a request body.

### Response

The response will have a status code of 200 and will include the details of the proposal in the following format:

```json
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

## List Votes

**Endpoint**: `/listVotes/{proposalID}`

**HTTP Method**: `GET`

### Description

This endpoint makes an HTTP GET request to retrieve a list of votes associated with the provided ID. The request does not include a request body.

### Response

The response to the last execution of this request had a status code of 200, and it returned a JSON object containing an array of "votes" along with a "count" of the total number of votes.

The "votes" array includes objects with properties such as "\_id", "voting", "wallet", "chain", "vote", "signature", "signedTimestamp", "createdAt", "updatedAt", "\_\_v", and "value".

## Insert User Vote

**Endpoint**: `/insertUserVote`

**HTTP Method**: `POST`

**Params**:

```json
{
  "votingId": "656f0922bec8be21ab10716e",
  "wallet": "0x9f8...2bbbc",
  "chain": "Polygon",
  "vote": true,
  "signature": "0xf01646656af60cd7ebb1987c45005d56b44a9319a3882daf951cda2140ec8e326ef7417d436891f5e0773756ffa1b6506fe48724093cd9a6629aba070d766a101c",
  "signedTimestamp": 1702575555557
}
```

### Description

This endpoint allows you to insert a user's vote.

### Response
