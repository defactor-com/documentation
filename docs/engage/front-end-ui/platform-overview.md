---
title: Platform Overview
sidebar_position: 1
---

## Introduction

The platform provides a modular and extensible infrastructure tailored for decentralized finance (DeFi) applications, with a particular focus on the tokenization, governance, and utilization of real-world assets (RWA). By combining critical components such as staking, governance, buybacks, and vesting within a single architecture, the platform enables efficient on-chain financial operations aligned with regulatory and community-driven frameworks.

The Engage Toolkit consists of several integrated modules designed to streamline token utility and life cycle management while supporting decentralized governance and community incentives. Each module operates independently but can be used in combination to support more complex use cases, including liquidity provisioning, project fundraising, and structured token distribution.

Key modules include:

- **Staking** – incentivize and engage communities
- **Governance** – on-chain proposal and voting systems
- **Buybacks** – deflationary token mechanics
- **Vesting** – structured token releases
- **Admin Section** – manage system parameters and users

These modules are accessible via a clean, responsive frontend, compatible across devices and optimized for MetaMask, Trust Wallet, and WalletConnect.

## UI Technology Stack

Defactor's frontend architecture is designed to deliver performance, security, and flexibility:

- **Frontend Framework**: React (Next.js)
- **Styling**: TailwindCSS + ShadCN UI
- **State Management**: Zustand + React Context
- **Wallet Integration**: Wagmi + RainbowKit (EVM-compatible wallets)
- **API Layer**: GraphQL + REST (Node/Express backend)
- **Smart Contract Interaction**: Ethers.js
- **Tested With**: Playwright + Jest + Cypress

## Mobile & Wallet Compatibility

The UI is responsive and works across modern browsers and mobile devices.

- **Chains Supported**: Ethereum, Polygon, Base, BNB Chain, Algorand
- **Wallets**: MetaMask, Trust Wallet, WalletConnect

## Available Modules

Explore individual feature documentation for deeper insights:

- [Staking](staking.md)
- [Governance](governance.md)
- [Buybacks](buyback.md)
- [Vesting](vesting.md)
- [Admin Section](admin-section.md)
