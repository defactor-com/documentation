---
id: backend-overview
title: Pools Backend Overview
sidebar_position: 1
---

The **Pools Backend** includes a full set of APIs and SDK modules to interact with Defactor’s pools infrastructure. These tools enable developers to integrate borrowing, supply, collateral management, and liquidation flows into their applications with ease.

This backend layer supports both **ERC-20 Collateral Pools** and **Counterparty Pools**, offering flexibility for open and permissioned pools models.

---

## API Access

The Pools APIs provide programmatic access to lending pool data, loan management functions, and real-time system states.

Use APIs to:

- Query pool and loan information
- Trigger actions like borrowing or repaying
- Monitor status updates and metrics
- Automate backend processes and alerts

Explore available endpoints:

- [Collateral Pool API](api/erc20CollateralToken/restful.md)
- [Counterparty Pool API](api/counterpartyPools/restful.md)
- [IPFS Integration](api/ipfs/restful.md)

These APIs are suitable for teams building custom interfaces, automations, or analytics solutions on top of Pools.

---

## SDK Modules

Defactor’s SDKs are optimized for TypeScript/JavaScript environments and provide utility modules to simplify smart contract interaction, transaction formatting, and wallet integration.

Use SDKs to:

- Integrate on-chain logic into dApps
- Estimate gas and prepare transactions
- Wrap and abstract smart contracts into simple functions

Available modules:

- [**Collateral Pool SDK**](sdk/collateral-pool.md): Manage ERC-20 token collateralization, borrowing, and repayment.
- [**Counterparty Pool SDK**](sdk/counterparty-pool.md): Handle permissioned supply flows, lender matching, and custom loan terms.

SDKs are ideal for developers looking to integrate directly into web apps and smart contract frontends.

---

## Key Capabilities

- Create and manage lending pools
- Borrow and supply using on-chain collateral
- Monitor loan status, interest accrual, and repayment
- Handle automatic liquidations and risk triggers
- Integrate with wallet providers and frontends

---

## Get Started

1. Choose your integration type: [API](api/counterpartyPools/restful.md) or [SDK](sdk/counterparty-pool.md)
2. Connect your Web3 wallet or backend provider
3. Start building supply, borrow, and liquidation flows
