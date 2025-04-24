---
id: backend-overview
title: Assets Backend API Overview
sidebar_position: 1
---

<div style={{ display: 'flex', flexWrap: 'wrap', color: '#eb9f00', gap: '1rem' }}>
  <div style={{
    flex: '1 1 280px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    alignItems: 'flex-start',
    textDecoration: 'underline',
  }}>
    <a href="API-Endpoints/api-authentication" className="pagination-nav__label">ERC-20</a>
  </div>
</div>

## Introduction

The **Assets Backend API** enables secure and programmable interaction with Defactor’s tokenization infrastructure. It provides endpoints for asset creation, identity and compliance integration, transaction management, analytics, and third-party system coordination.

This API layer is designed for developers and platform integrators looking to automate and manage tokenized real-world assets (RWAs) through backend services.

This section provides an overview of the API and links to specific endpoint categories.

## Assets API

The Assets API exposes endpoints grouped by function, allowing seamless coordination between asset issuance, metadata storage, user communication, and operational analytics.

Available modules:

- [**Authentication**](API-Endpoints/api-authentication)  
  Token-based access control for platforms and users.

- [**Form API**](API-Endpoints/api-form)  
  Process structured submissions used in onboarding and verification.

- [**IPFS Integration**](API-Endpoints/api-ipfs)  
  Upload and link off-chain metadata/documents on IPFS.

- [**Mailing API**](API-Endpoints/api-mailing)  
  Trigger automated emails for onboarding and platform events.

- [**Stats API**](API-Endpoints/api-sats)  
  Query analytics and operational metrics from the platform.

- [**Transactions API**](API-Endpoints/api-transactions)  
  View historical transaction data between smart contracts and wallets.

## Key Capabilities

- Automate the creation and management of tokenized assets
- Enforce compliance via structured KYC form workflows
- Store and retrieve metadata using decentralized IPFS integration
- Monitor platform-wide metrics and transaction histories
- Enable platform notifications via customizable email triggers
- Authenticate platform components and manage user roles securely

## Get Started

Before integrating with any modules, it's essential to ensure your client is authenticated. This includes access to the `/assets` module, which requires a valid token.

1. [Authenticate your client](API-Endpoints/api-authentication)
2. Start integrating with relevant modules (e.g., IPFS, stats, transactions)
3. Use `/form` and `/mailing` to automate user onboarding and communication
4. Query `/stats` and `/transactions` for operational insights and transparency
