---
id: backend-overview
title: Assets Backend API Overview
sidebar_position: 1
---


---

## Introduction

The **Assets Backend API** enables secure and programmable interaction with Defactor’s tokenization infrastructure. It provides endpoints for asset creation, identity and compliance integration, transaction management, analytics, and third-party system coordination.

This API layer is designed for developers and platform integrators looking to automate and manage tokenized real-world assets (RWAs) through backend services.

This section provides an overview of the API and links to specific endpoint categories.

---

## Assets API

The Assets API exposes endpoints grouped by function, allowing seamless coordination between asset issuance, metadata storage, user communication, and operational analytics.

Available modules:

### GraphQL API Endpoints

- [**Authentication**](graphqlApi/authentication)  
  Token-based access control and nonce generation.

- [**Asset Management**](graphqlApi/asset-management)  
  Asset creation, updates, and dynamic data management.

- [**File Management**](graphqlApi/file-management)  
  IPFS integration for file upload and retrieval.

- [**Identity Management**](graphqlApi/identity-management)  
  Identity verification and token-based checks.

- [**Mixer Operations**](graphqlApi/mixer-operations)  
  Privacy-focused transaction operations and mixer functionality.

- [**Notifications**](graphqlApi/notifications)  
  Webhook processing and notification management.

- [**Statistics**](graphqlApi/statistics)  
  Analytics and operational metrics from the platform.

- [**Token Operations**](graphqlApi/token-operations)  
  Token approval, transfer, and management operations.

- [**Transactions**](graphqlApi/transactions)  
  Transaction building, sending, and management.

### RESTful API Endpoints

- [**Authentication**](restfulApi/authentication)  
  RESTful authentication endpoints and token management.

- [**Asset Management**](restfulApi/asset-management)  
  RESTful asset creation and management operations.

- [**Contact Management**](restfulApi/contact-management)  
  Contact information and communication management.

- [**File Management**](restfulApi/file-management)  
  File upload, storage, and retrieval services.

- [**Identity Management**](restfulApi/identity-management)  
  Identity verification and compliance checks.

- [**Metadata Management**](restfulApi/metadata-management)  
  Asset metadata creation and management.

- [**Mixer Operations**](restfulApi/mixer-operations)  
  Privacy-focused transaction operations.

- [**Notifications**](restfulApi/notifications)  
  Email notifications and communication triggers.

- [**Statistics**](restfulApi/statistics)  
  Platform analytics and metrics via RESTful endpoints.

- [**Token Operations**](restfulApi/token-operations)  
  Token management and operations.

- [**Transaction Building**](restfulApi/transaction-building)  
  Transaction construction and preparation.

- [**Transaction Operations**](restfulApi/transaction-operations)  
  Transaction execution and management.

- [**User Management**](restfulApi/user-management)  
  User account creation and management.

---

## Key Capabilities

- Automate the creation and management of tokenized assets
- Enforce compliance via structured KYC form workflows
- Store and retrieve metadata using decentralized IPFS integration
- Monitor platform-wide metrics and transaction histories
- Enable platform notifications via customizable email triggers
- Authenticate platform components and manage user roles securely

---

## Get Started

Before integrating with any modules, it's essential to ensure your client is authenticated. This includes access to the `/assets` module, which requires a valid token.

1. Authenticate your client using the [Authentication endpoints](restfulApi/authentication)
2. Start integrating with relevant modules (e.g., IPFS, stats, transactions)
3. Use `/form` and `/mailing` to automate user onboarding and communication
4. Query `/stats` and `/transactions` for operational insights and transparency
