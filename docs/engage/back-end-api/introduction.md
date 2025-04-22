---
title: Engage Backend API Overview
sidebar_position: 1
---

## Introduction

The **Engage Backend API** is the engine behind Defactor's governance, staking, vesting, and KYC systems. It enables platforms and applications to programmatically interact with the Engage module, allowing for fully integrated community participation, compliance workflows, and token utility tracking.

The API supports both **GraphQL** and **RESTful** interfaces, providing flexibility for different development stacks and use cases.

## API Interfaces

- [**GraphQL API**](graphqlApi/stakingv1.md)  
  Best for frontend apps requiring flexible queries and real-time data (e.g., dashboards, user portals).  
  Includes: staking (v1/v2), vesting, authentication, utilities

- [**RESTful API**](restfullApi/stakingv1.md)  
  Ideal for backend systems handling structured workflows or automation.  
  Includes: KYC (start, get, add), governance, buybacks, staking, vesting

## What You Can Do

- **Staking** – Create staking plans, track locked balances, and manage user positions
- **Governance** – Submit proposals, cast votes, and fetch results
- **Vesting** – View token distribution schedules for users and teams
- **KYC** – Register, initiate, and verify wallet identity checks
- **Buyback** – Access configuration for automated token repurchase logic
- **Utilities** – Retrieve static settings and environment metadata
- **Authentication** – Manage sessions and API access securely

## Integration Tips

- Authentication is required for most endpoints (OAuth or Bearer Token)
- Rate limits apply per environment
- Sandbox credentials are available upon request

## Get Started

1. Choose your API type: [GraphQL](graphqlApi/stakingv1.md) or [RESTful](restfullApi/stakingv1.md)
2. Authenticate and initialize your environment
3. Begin integrating your governance, staking, or compliance flows
