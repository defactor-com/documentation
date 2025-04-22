---
title: Smart Contracts Overview
sidebar_position: 1
---

## Introduction

The **Assets Smart Contracts** provide the infrastructure for compliant and scalable tokenization of real-world assets (RWAs) within the ecosystem. These contracts allow issuers to create, manage, and control digital asset representations on the blockchain, aligned with industry standards and regulatory requirements.

The contracts are designed to support varying levels of complexity—ranging from simple fungible token issuance to full compliance-based lifecycle control.

Key smart contract modules include:

- [**ERC-20 Contracts**](ERC-20/factory.md) – lightweight contracts for general-purpose token issuance
- [**ERC-3643 Contracts**](ERC-3643/introduction.md) – advanced contracts for regulated, permissioned tokens

These contracts are directly accessible via the Assets platform UI and are compatible with standard Ethereum tooling and wallet providers.

## Smart Contract Capabilities

Each contract type supports a range of programmable features for asset lifecycle management:

- **Token Issuance** – mint asset-backed tokens with defined supply and metadata
- **Transfer Logic** – permissionless (ERC-20) or controlled (ERC-3643) transfers
- **Compliance Enforcement** – KYC/AML checks and whitelisting for ERC-3643 tokens
- **Mint/Burn Support** – manage supply over time with on-chain authorization
- **Auditability** – full transparency via on-chain logs and wallet-level traceability
- **Multi-chain Deployment** – contracts are available on Ethereum, Polygon, and compatible EVM chains

## Platform Integration

All Assets smart contracts are deployed and managed via the Defactor Assets platform. This includes:

- Template-driven token creation
- Wallet-based mint/burn functionality
- User and compliance identity management
- Dashboard views for token tracking and controls

These contracts interact seamlessly with other modules like Pools for liquidity and lending scenarios.
