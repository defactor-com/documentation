---
id: graphql-api-governance
title: Governance
sidebar_position: 4
---

# Governance Actions

## v1GetActiveProposals

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-active-proposals`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalsInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "forUserAddress": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0,
      "where": {
        "space_in": [
          "string"
        ]
      },
      "withoutUserAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetActiveProposalsCount

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-active-proposals-count`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalsInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "forUserAddress": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0,
      "where": {
        "space_in": [
          "string"
        ]
      },
      "withoutUserAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetAllProposals

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-all-proposals`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalsInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "forUserAddress": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0,
      "where": {
        "space_in": [
          "string"
        ]
      },
      "withoutUserAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetAllProposalsCount

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-all-proposals-count`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalsInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "forUserAddress": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0,
      "where": {
        "space_in": [
          "string"
        ]
      },
      "withoutUserAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetClosedProposals

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-closed-proposals`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalsInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "forUserAddress": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0,
      "where": {
        "space_in": [
          "string"
        ]
      },
      "withoutUserAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetClosedProposalsCount

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-closed-proposals-count`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalsInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "forUserAddress": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0,
      "where": {
        "space_in": [
          "string"
        ]
      },
      "withoutUserAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetProposal

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-proposal`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalInput!`)

```json
{
  "governance": {
    "data": {
      "id": "string",
      "userAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetProposals

**Handler URL:** ``

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetProposalsInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "forUserAddress": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0,
      "where": {
        "space_in": [
          "string"
        ]
      },
      "withoutUserAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetSpace

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-space`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetSpaceInput!`)

```json
{
  "governance": {
    "data": {
      "id": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetVotes

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-votes`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetVotesInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "id": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetVotesCount

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-votes-count`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetVotesInput!`)

```json
{
  "governance": {
    "data": {
      "first": 0,
      "id": "string",
      "orderBy": "string",
      "orderDirection": "string",
      "skip": 0
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

## v1GetVotingPower

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/v1/governance/get-voting-power`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**governance** (`GetVotingPowerInput!`)

```json
{
  "governance": {
    "data": {
      "proposal": "string",
      "space": "string",
      "userAddress": "string"
    }
  }
}
```

### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```
