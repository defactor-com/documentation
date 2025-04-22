---
title: Smart Contracts Overview
sidebar_position: 1
---

## Introduction

## Introduction

The **Pools Smart Contracts** module underpins Defactor's decentralized lending infrastructure. It consists of multiple contract implementations tailored to support a range of financial and regulatory requirements.

These contracts are responsible for enabling over-collateralized lending, counterparty agreement tracking, interest accrual, and automated liquidation logic—all on-chain and fully auditable.

Two core implementations are currently supported:

- [**ERC-20 Collateral Pools**](erc20-collateral-pool-contract/introduction.md) – for permissionless, token-based collateralized lending
- [**Counterparty Pools**](counterparty-pools-contract/introduction.md) – for structured deals with whitelisted borrower and lender roles

## Smart Contract Capabilities

Each contract type supports key features for decentralized loan lifecycle management:

- **Collateral Management** – lock and release tokens based on borrowing terms and repayment status
- **Loan Issuance & Repayment** – handle issuance, interest accrual, and repayments programmatically
- **Utilization Tracking** – monitor pool usage and calculate yield in real time
- **Liquidation Logic** – automatically enforce repayment deadlines and liquidate overdue positions
- **Auditability** – full on-chain history of deposits, loans, repayments, and liquidations
- **Multi-chain Deployment** – available on Ethereum, Polygon, Base, and other EVM-compatible networks

## Platform Integration

Pools smart contracts are deployed and managed via the [Defactor Pools](https://www.defactor.com/pools) platform. Through the UI, users can:

- Create new lending pools with configurable terms
- Supply capital or borrow assets via Web3 wallets
- Track positions, pool status, and rewards in real time
- Automatically engage with liquidation events and repayment workflows

These contracts work in coordination with other modules such as **Assets** for collateral tokenization and **Engage** for governance and rewards alignment.
