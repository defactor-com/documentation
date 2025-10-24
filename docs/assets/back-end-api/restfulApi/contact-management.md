---
id: restful-api-contact-management
title: Contact Management
sidebar_position: 3
---

# Contact Management

### v1/post-contact

Create contact entry with creator, name and wallet parameters

**Methods:** `POST`

**URL:** `v1/post-contact`

#### Input Parameters

**creator** (`String`)

**name** (`String`)

**wallet** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-contacts-by-creator

Get request to receive uuid, name and wallet from contact table by creator wallet address

**Methods:** `GET`

**URL:** `v1/get-contacts-by-creator`

#### Input Parameters

**creator** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/get-contact-name

**Methods:** `GET`

**URL:** `v1/get-contact-name`

#### Input Parameters

**creator** (`String`)

**wallet** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-contact-by-uuid

Delete contact entry using uuid

**Methods:** `DELETE`

**URL:** `v1/delete-contact-by-uuid`

#### Input Parameters

**uuid** (`uuid`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---

### v1/delete-contacts-by-creator

Remove contact table entries by creator wallet address

**Methods:** `DELETE`

**URL:** `v1/delete-contacts-by-creator`

#### Input Parameters

**creator** (`String`)

#### Response

**Type:** `DataOutput`

```json
{
  "res": "value",
  "success": false
}
```

---