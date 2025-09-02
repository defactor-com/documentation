---
id: backend-overview
title: Engage Backend API Overview
sidebar_position: 1
---

The **Engage Backend API** is the engine behind Defactor's governance, staking, vesting, and KYC systems. It enables platforms and applications to programmatically interact with the Engage module, allowing for fully integrated community participation, compliance workflows, and token utility tracking.

The API supports both **GraphQL** and **RESTful** interfaces, providing flexibility for different development stacks and use cases.

---

## GraphQL API

The GraphQL API is best suited for applications requiring flexible querying and fast, dynamic data rendering — ideal for dashboards, wallets, and community frontends.

Use GraphQL to:

- Perform administrative tasks like managing accounts, token metadata, and ecosystem wallets
- Authenticate users and manage sessions for secure frontend interactions
- Access governance data including proposals, votes, voting power, and space management
- Retrieve comprehensive staking information including positions, rewards, TVL, and dynamic APR calculations
- Monitor vesting schedules, historical emissions, and token distribution statistics
- Query buyback data and ecosystem wallet configurations
- Access system utilities like configuration and circulating supply data

Available modules:

- [Admin](graphqlApi/admin) - Administrative operations for accounts, token metadata, plans, and ecosystem wallets
- [Authentication](graphqlApi/authentication) - User login and session management
- [Buybacks](graphqlApi/buybacks) - Token buyback operations and ecosystem wallet management
- [Governance](graphqlApi/governance) - Proposal creation, voting, and governance space management
- [Staking](graphqlApi/staking) - Staking v1 and v2 operations, rewards, and position management
- [Vesting](graphqlApi/vesting) - Token vesting schedules and historical emissions
- [Utilities](graphqlApi/utilities) - Configuration, circulating supply, and general utilities

---

## RESTful API

The RESTful API is designed for backend systems and structured workflows. It is ideal for tasks like wallet verification, KYC compliance, or automating staking and governance operations.

Use RESTful API to:

- Manage administrative operations like account updates and metadata configuration
- Authenticate users through wallet signature verification
- Access comprehensive staking operations including plan creation, position management, and rewards tracking
- Create and monitor token vesting schedules and historical emissions
- Configure token buybacks and retrieve ecosystem wallet data
- Access system utilities like configuration, token pricing, and supply metrics

Available endpoints:

- [Admin](restfullApi/admin) - Account management, token metadata, plan metadata, and ecosystem wallet operations
- [Authentication](restfullApi/authentication) - Login endpoints with wallet signature authentication
- [Buybacks](restfullApi/buybacks) - Token buyback aggregate data and statistics
- [Staking](restfullApi/staking) - Complete staking v1 and v2 operations including plan management, position tracking, rewards, and TVL analytics
- [Vesting](restfullApi/vesting) - Vesting schedule creation, user statistics, and historical emissions tracking
- [Utilities](restfullApi/utilities) - System configuration, token pricing, and circulating supply data

---

## Key Capabilities

- **Administrative Control**: Manage user accounts, update token metadata, configure staking plans, and handle ecosystem wallet operations
- **Authentication & Security**: Secure wallet-based authentication using signature verification and JWT token management
- **Comprehensive Staking**: Launch flexible staking programs with v1 and v2 support, dynamic APR calculations, position management, and detailed reward tracking
- **Governance Integration**: Access decentralized governance features including proposal management, voting mechanisms, voting power calculations, and governance space administration
- **Vesting Management**: Create and track token vesting schedules, monitor historical emissions, and manage beneficiary distributions
- **Buyback Operations**: Configure and monitor token buyback activities with ecosystem wallet management
- **Data Analytics**: Access comprehensive statistics including TVL, rewards, emissions, and supply metrics across multiple networks

---

## Get Started

Before integrating with any modules, it's essential to ensure your client is authenticated. This includes access to the `/engage` module, which requires a valid token.

1. Choose your API type: [GraphQL](graphqlApi/authentication) or [RESTful](restfullApi/authentication)
2. Authenticate and initialize your environment using wallet signature verification
3. Begin integrating with the specific modules you need: admin operations, staking, governance, vesting, buybacks, or utilities
