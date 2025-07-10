---
id: restfull-api-vesting
title: Vesting
sidebar_position: 5
---

## Schedules

### `Create Schedule`

Add a new batch schedule with vesting schedules and their beneficiaries.

**HTTP Method**: POST

**Roles**: User Admin

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1/create-schedule`

**Params**:

```json
{
  "schedule": {
    "network": "{{NETWORK_POLYGON}}",
    "contractName": "{{VESTING}}",
    "batchName": "batch",
    "schedules": [
      {
        "startTime": "2025-07-05T19:44:48+00:00",
        "durationSec": 16,
        "secondsPerSlice": 5,
        "tokenAddress": "0x7D5c1468D8bE9f0F4FaD26F2Cb7e6b2ed9042577",
        "amount": "1",
        "initialAmount": "10",
        "beneficiaries": [
          {
            "beneficiary": "0xa8983Fe59b2F08F9F1B3E833c5D47B256F7FE0d5",
            "label": "abc"
          }
        ]
      }
    ]
  }
}
```

**Response**

```json
{
  "v1CreateSchedule": {
    "res": {
      "batchId": "e319082e-b7c1-4095-b257-70c3f4243284",
      "merkleRoot": "0xcf3af4c07afaaffbdeb94b7a2ca8d7eb90c2946fd3a8f56c8ac4e2803f7e76fd",
      "onChain": false
    },
    "success": true
  }
}
```

### `Get Vesting Stats By User`

Get the vesting stats by user. The result can be filtered by network.

**HTTP Request Method**: GET

**Roles**: Guest

**Request URL**: `{{BASE_RESTFUL_URL}}/v1/get-vesting-stats-by-user`

**Request Body**:

```json
{
  "schedule": {
    "contractName": "{{VESTING}}",
    "data": {
      "address": "0xd198F7a8C953AC47dfd0F6a0267e4d19c67ce351",
      "networks": ["{{NETWORK_ETHEREUM}}"]
    }
  }
}
```

**Response**

```json
{
  "v1GetVestingStatsByUser": {
    "res": {
      "currentLockedAmount": 6000000,
      "pendingClaimAmount": 1000000,
      "totalVested": 1000000
    },
    "success": true
  }
}
```

---

## Releases

### `Get Historical Emissions`

Retrieve the historical emissions from the day group by date.

**HTTP Method**: POST

**Roles**: Guest

**Endpoint**: `{{BASE_RESTFUL_URL}}/v1/get-historical-emissions`

**Params**:

```json
{
  "release": {
    "contractName": "{{VESTING}}",
    "data": [
      {
        "networks": ["{{NETWORK_POLYGON}}"]
      }
    ]
  }
}
```

**Response**

```json
{
  "data": {
    "v1GetHistoricalEmissions": {
      "res": {
        "1741294800": [
          {
            "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
            "tokenAddress": "0x8574299682D036F88195a2685601D90300E21Bca"
          },
          {
             "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
           "tokenAddress":"0xa6da8c8999c094432c77e7d318951d34019af24b"
          }
        ],
        ...
        "1741366800": [
          {
            "amount": 1000000000000000000,
            "fluctuation": 1,
            "fluctuationValue": 0,
            "schema": "polygon",
            "tokenAddress": "0x8574299682D036F88195a2685601D90300E21Bca"
          },
          {
             "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
           "tokenAddress":"0xa6da8c8999c094432c77e7d318951d34019af24b"
          }
        ],
        "1741381200": [
          {
            "amount": 0,
            "fluctuation": -1,
            "fluctuationValue": -1000000000000000000,
            "schema": "polygon",
            "tokenAddress": "0x8574299682D036F88195a2685601D90300E21Bca"
          },
          {
             "amount": 0,
            "fluctuation": 0,
            "fluctuationValue": 0,
            "schema": "polygon",
           "tokenAddress":"0xa6da8c8999c094432c77e7d318951d34019af24b"
          }
        ]
      },
      "success": true
    }
  }
}
```
