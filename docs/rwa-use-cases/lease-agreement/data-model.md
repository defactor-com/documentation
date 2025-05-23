---
id: lease-agreement-database
title: Lease Agreement Database
sidebar_position: 3
---

## User

- `username`: String
- `passwordHash`: String
- `email`: String
- `role`: String

---

## Lease Agreement

- `leaseId`: ObjectId
- `lesseeDetails`:
  - `name`: String
  - `address`: String
  - `contactInfo`: String
- `vehicleDetails`:
  - `make`: String
  - `model`: String
  - `year`: Number
  - `color`: String
  - `vin`: String
- `leaseTerms`:
  - `duration`: Number (months)
  - `monthlyRate`: Number
  - `mileageAllowance`: Number
- `paymentInfo`:
  - `initialPayment`: Number
  - `monthlyPayments`: Number
- `status`: String (e.g., "active", "completed", "terminated")

---

## Payment

- `paymentId`: ObjectId
- `leaseId`: ObjectId (Reference to Lease Agreement)
- `amount`: Number
- `dueDate`: Date
- `paidDate`: Date
- `status`: String (e.g., "pending", "paid", "overdue")
