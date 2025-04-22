---
title: Pools Backend Overview
sidebar_position: 1
---

## Introduction

The **Pools Backend** includes a full set of APIs and SDK modules to interact with Defactor’s lending infrastructure. These tools enable developers to integrate borrowing, lending, collateral management, and liquidation flows into their applications with ease.

This backend layer supports both **ERC-20 Collateral Pools** and **Counterparty Pools**, offering flexibility for open and permissioned lending models.

## API Access

The Pools backend exposes both **GraphQL** and **RESTful** APIs for integration with frontend dashboards, monitoring tools, or automation systems.

- [**GraphQL API**](api/engagegraphql.md)  
  Used for dynamic queries, metadata access, and state tracking  
  Supports real-time access to pool configuration, transactions, and statuses

- [**RESTful API**](api/engagerestful.md)  
  Ideal for server-side operations, triggering actions, and syncing data  
  Useful for managing interactions with smart contracts and orchestrating workflows

Additional APIs exist for:

- [**Counterparty Pools**](api/counterpartyPools/restful.md)
- [**ERC-20 Collateral Pools**](api/erc20CollateralToken/restful.md)
- [**IPFS Integration**](api/ipfs/restful.md) (for off-chain metadata)

## SDK Modules

For direct integration into JavaScript/TypeScript environments, the Pools SDK provides ready-to-use modules with contract wrappers and utility functions.

- [**Collateral Pool SDK**](sdk/collateral-pool.md)  
  Manage ERC-20 token collateralization, borrowing, repayment, and reward logic

- [**Counterparty Pool SDK**](sdk/counterparty-pool.md)  
  Handle lender/borrower matching, custom loan terms, and permissioned flows

These SDKs abstract low-level contract interactions and provide utilities for gas estimation, transaction formatting, and wallet connection.

## Key Capabilities

- Create and manage lending pools
- Borrow and lend using on-chain collateral
- Monitor loan status, interest accrual, and repayment
- Handle automatic liquidations and risk triggers
- Integrate with wallet providers and frontends

## Getting Started

1. Choose your integration type: [API](api/engagerestful.md) or [SDK](sdk/collateral-pool.md)
2. Connect your Web3 wallet or backend provider
3. Start building lending, borrowing, and liquidity flows
