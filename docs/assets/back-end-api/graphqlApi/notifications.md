---
id: graphql-api-notifications
title: Notifications
sidebar_position: 7
---

# Notifications

### processWebhookNotification

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/transaction-hook`

**Action Type:** `mutation`

**Permissions:** `user`, `guest`

#### Input Parameters

**arg1** (`WebhookInput!`)

```json
{
  "arg1": {
    "createdAt": "string",
    "event": {
      "activity": "value",
      "data": "string",
      "network": "string",
      "sequenceNumber": "string"
    },
    "id": "string",
    "type": "string",
    "webhookId": "string"
  }
}
```

#### Response

**Type:** `WebhookOutput`

```json
{
  "success": false
}
```

---

### sendEmail

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/send-email`

**Action Type:** `mutation`

**Permissions:** `user`

#### Input Parameters

**email** (`String!`)

**entryFormId** (`String!`)

#### Response

**Type:** `Boolean`

---