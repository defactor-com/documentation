---
title: Notifications
sidebar_position: 8
---

# Notifications

### v1/post-webhook-notification

This endpoint is triggered when Alchemy webhook sends a notification.

**Methods:** `POST`

**URL:** `v1/post-webhook-notification`

#### Input Parameters

**webhookId** (`String`)

**id** (`String`)

**createdAt** (`String`)

**event** (`Event`)

```json
{
  "activity": "value",
  "data": "string",
  "network": "string",
  "sequenceNumber": "string"
}
```

**type** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/send-email

**Methods:** `POST`

**URL:** `v1/send-email`

#### Input Parameters

**email** (`String!`)

**entryFormId** (`String!`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---