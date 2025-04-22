---
title: Assets Backend API Overview
sidebar_position: 1
---

## Introduction

The **Assets Backend API** enables secure and programmable interaction with Defactor’s tokenization infrastructure. It provides endpoints for asset creation, identity and compliance integration, transaction management, analytics, and third-party system coordination.

This API layer is designed for developers and platform integrators looking to automate and manage tokenized real-world assets (RWAs) through backend services.

This section provides an overview of the API and links to specific endpoint categories.

## Core Capabilities

The API is structured to support core backend functions required to operate tokenized asset platforms:

- **Authentication**  
  Securely authenticate users and systems using token-based access.  
  → [View Authentication Endpoints](API%20Endpoints/authentication.md)

- **Form Submissions**  
  Handle structured form inputs for onboarding or KYC workflows.  
  → [View Form API](API%20Endpoints/form.md)

- **IPFS Integration**  
  Upload and reference metadata or documents on IPFS through the API.  
  → [View IPFS API](API%20Endpoints/ipfs.md)

- **Mailing Services**  
  Trigger email notifications for platform events (e.g., onboarding, alerts).  
  → [View Mailing API](API%20Endpoints/mailing.md)

- **Platform Statistics**  
  Retrieve key metrics and analytics about users, assets, and operations.  
  → [View Stats API](API%20Endpoints/stats.md)

- **Transactions Management**  
  Access transaction logs and operational flows between wallets and contracts.  
  → [View Transactions API](API%20Endpoints/transactions.md)

## Authentication & Access

The API requires authenticated access via bearer tokens or OAuth flows. Admin, issuer, and viewer roles can be configured depending on the endpoint access level.

Please contact the Defactor team to obtain:

- API keys or OAuth credentials
- Sandbox environment access
- Technical integration support

## API Format

- **Base URL**: `https://api.defactor.network` _(example only)_
- **Format**: JSON over HTTPS (RESTful)
- **Rate Limiting**: Applied per key/session
- **Error Codes**: Standardized HTTP error responses (4xx/5xx)

## Getting Started

1. [Authenticate your client](API%20Endpoints/authentication.md)
2. Start integrating with relevant modules (e.g., IPFS, stats, transactions)
3. Use `/form` and `/mailing` to automate user onboarding and communication
4. Query `/stats` and `/transactions` for operational insights and transparency
