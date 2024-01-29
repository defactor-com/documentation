---
sidebar_position: 1
---

# List Proposals

**Endpoint**: `/listProposals`

**HTTP Method**: `GET`

## Description

This endpoint makes an HTTP GET request to retrieve a list of proposals. The request does not contain a request body.

## Response

The response returns a status code of 200 along with an array of objects, each representing a proposal. Each proposal object includes the following properties:

- id (string): The unique identifier of the proposal.
- index (number): The index of the proposal.
- title (string): The title of the proposal.
- description (string): The description of the proposal.
- closedDate (string): The date when the proposal was closed.
- votesFor (number): The number of votes in favor of the proposal.
- votesAgainst (number): The number of votes against the proposal.
- status (string): The status of the proposal.
