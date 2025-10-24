---
id: graphql-api-vesting
title: Vesting
sidebar_position: 7
---

# Vesting Actions

## v1CreateSchedule

**Handler URL:** `{{BASE_RESTFUL_URL}}/schedule/create-schedule`

**Action Type:** `mutation`

**Permissions:** `user-admin`

### Input Parameters

**schedule** (`CreateScheduleInput!`)

```json
{
  "schedule": {
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

**Handler URL:** `{{BASE_RESTFUL_URL}}/release/get-historical-emissions`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**release** (`HistoricalEmissionsInput!`)

```json
{
  "release": {
    "contractName": "string",
    "data": {
      "networks": [
        "string"
      ]
    },
    "dateRange": "string"
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

## v1GetVestingStatsByUser

**Handler URL:** `{{BASE_RESTFUL_URL}}/schedule/get-vesting-stats-by-user`

**Action Type:** `query`

**Permissions:** `user-admin`, `guest`

### Input Parameters

**schedule** (`VestingStatsByUserInput!`)

```json
{
  "schedule": {
    "contractName": "string",
    "data": {
      "address": "string",
      "networks": [
        "string"
      ]
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
