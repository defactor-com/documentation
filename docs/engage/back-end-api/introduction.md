---
id: backend-overview
title: Engage Backend API Overview
sidebar_position: 1
---

## Introduction

The **Engage Backend API** is the engine behind Defactor's governance, staking, vesting, and KYC systems. It enables platforms and applications to programmatically interact with the Engage module, allowing for fully integrated community participation, compliance workflows, and token utility tracking.

The API supports both **GraphQL** and **RESTful** interfaces, providing flexibility for different development stacks and use cases.

## GraphQL API

The GraphQL API is best suited for applications requiring flexible querying and fast, dynamic data rendering — ideal for dashboards, wallets, and community frontends.

Use GraphQL to:

- Fetch staking plans, user positions, and rewards in real-time
- View vesting schedules and token unlocks
- Retrieve governance proposals, votes, and participation data
- Authenticate users and sessions for frontend interactions

Available modules:

- [Staking v1](graphqlApi/graphql-api-staking-v1)
- [Staking v2](graphqlApi/graphql-api-staking-v2)
- [Vesting](graphqlApi/graphql-api-vesting)
- [Authentication](graphqlApi/graphql-api-authentication)
- [Utilities](graphqlApi/graphql-api-utilities)

## RESTful API

The RESTful API is designed for backend systems and structured workflows. It is ideal for tasks like wallet verification, KYC compliance, or automating staking and governance operations.

Use RESTful API to:

- Start and verify KYC processes for wallet addresses
- Access governance proposal creation and voting endpoints
- Monitor and configure token buybacks
- Retrieve static platform settings and user token metadata

Available endpoints:

- [Start KYC](restfullApi/restfull-api-start-kyc)
- [Get KYC](restfullApi/restfull-api-get-kyc)
- [Add KYC Wallet](restfullApi/restfull-api-add-kyc)
- [Governance](restfullApi/restfull-api-governance)
- [Buyback](restfullApi/restfull-api-buyback)
- [Staking v1](restfullApi/restfull-api-staking-v1)
- [Staking v2](restfullApi/restfull-api-staking-v2)
- [Vesting](restfullApi/restfull-api-vesting)
- [Authentication](restfullApi/restfull-api-authentication)
- [Utilities](restfullApi/restfull-api-utilities)

## Key Capabilities

- Launch and manage flexible staking programs
- Register and verify wallets through KYC workflows
- Implement decentralized governance with proposal creation and voting
- Track token vesting and distribution across users and teams
- Monitor and configure token buyback activities
- Enable secure user authentication and metadata access

## Get Started

Before integrating with any modules, it's essential to ensure your client is authenticated. This includes access to the `/engage` module, which requires a valid token.

1. Choose your API type: [GraphQL](graphqlApi/graphql-api-staking-v1) or [RESTful](restfullApi/restfull-api-staking-v1)
2. Authenticate and initialize your environment
3. Begin integrating your governance, staking, or compliance flows
