---
id: lease-agreement-api
title: Lease Agreement API Endpoints
sidebar_position: 2
---

## User Authentication

**Endpoint:** `/api/auth/login`

**Method:** POST

**Request:**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "token": "string"
}
```

## Create Lease Agreement

**Endpoint:** `/api/lease`

**Method:** POST

**Request:**

```json
{
  "lesseeDetails": {},
  "vehicleDetails": {},
  "leaseTerms": {},
  "paymentInfo": {}
}
```

**Response:**

```json
{
  "leaseId": "string",
  "message": "Lease agreement created successfully"
}
```

## Get Lease Agreement Details

**Endpoint:** `/api/lease/{leaseId}`

**Method:** GET

**Response:**

```json
{
  "leaseDetails": {}
}
```

## Update Lease Agreement

**Endpoint:** `/api/lease/{leaseId}`

**Method:** PUT

**Request:**

```json
{
  "lesseeDetails": {},
  "vehicleDetails": {},
  "leaseTerms": {},
  "paymentInfo": {}
}
```

**Response:**

```json
{
  "message": "Lease agreement updated successfully"
}
```

## Delete Lease Agreement

**Endpoint:** `/api/lease/{leaseId}`

**Method:** DELETE

**Response:**

```json
{
  "message": "Lease agreement deleted successfully"
}
```

## List All Lease Agreements

**Endpoint:** `/api/lease`

**Method:** GET

\***\*Response:\*\***

```json
{
  "leases": [{}]
}
```
