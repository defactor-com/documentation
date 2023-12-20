# API Endpoints
1. User Authentication
Endpoint: /api/auth/login
Method: POST
Request:
```json

{
  "username": "string",
  "password": "string"
}
```

Response:
```json

{
  "token": "string"
}
```

2. Create Lease Agreement
Endpoint: /api/lease
Method: POST
Request:

```json

{
  "lesseeDetails": {},
  "vehicleDetails": {},
  "leaseTerms": {},
  "paymentInfo": {}
}
```

Response:

```json

{
  "leaseId": "string",
  "message": "Lease agreement created successfully"
}
```

3. Get Lease Agreement Details
Endpoint: /api/lease/{leaseId}
Method: GET
Response:

```json
{
  "leaseDetails": {}
}
```

4. Update Lease Agreement
Endpoint: /api/lease/{leaseId}
Method: PUT
Request:
```json
{
  "lesseeDetails": {},
  "vehicleDetails": {},
  "leaseTerms": {},
  "paymentInfo": {}
}
```
Response:
```json

{
  "message": "Lease agreement updated successfully"
}
```

5. Delete Lease Agreement
Endpoint: /api/lease/{leaseId}
```

Method: DELETE
Response:

```json
{
  "message": "Lease agreement deleted successfully"
}
```

6. List All Lease Agreements
Endpoint: /api/lease
Method: GET
Response:

```json
{
  "leases": [{}]
}
```
