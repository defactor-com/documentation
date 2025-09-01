---
id: rest-api-vesting
title: Vesting
sidebar_position: 8
description: REST API endpoints for vesting operations in Defactor Engage platform
keywords: [vesting, rest, api, engage, backend, schedules, emissions]
tags: [vesting, engage, backend, rest]
---

# Vesting API

## v1CreateSchedule

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/create-schedule`

**Action Type:** `mutation`

### Input Parameters

**schedule** (`CreateScheduleInput!`)

```json
{
  "batchName": "string",
  "contractName": "string",
  "network": "string",
  "schedules": [
    {
      "amount": "string",
      "beneficiaries": [
        "string"
      ],
      "cliffTime": "string",
      "durationSec": 0,
      "initialAmount": "string",
      "secondsPerSlice": 0,
      "startTime": "string",
      "tokenAddress": "string"
    }
  ]
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

## v1GetVestingStatsByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-vesting-stats-by-user`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**schedule** (`VestingStatsByUserInput!`)

```json
{
  "contractName": "string",
  "data": {
    "address": "string",
    "networks": [
      "string"
    ]
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

## v1GetHistoricalEmissions

**Handler URL:** `{{BASE_RESTFUL_URL}}/v1/get-historical-emissions`

**Action Type:** `query`

**Permissions:** `guest`

### Input Parameters

**release** (`HistoricalEmissionsInput!`)

```json
{
  "contractName": "string",
  "data": {
    "networks": [
      "string"
    ]
  },
  "dateRange": "string"
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