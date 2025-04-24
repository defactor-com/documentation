---
id: engage-frontend-overview
title: Platform Overview
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
    <a href="engage-staking-module" className="pagination-nav__label">Staking Module</a>
    <a href="engage-governance-module" className="pagination-nav__label">Governance Module</a>
    <a href="engage-buyback-module" className="pagination-nav__label">BuyBack Module</a>
  </div>

  <div style={{
    flex: '1 1 280px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    alignItems: 'flex-start',
    textDecoration: 'underline'
  }}>
    <a href="engage-vesting-module" className="pagination-nav__label">Vesting Module</a>
    <a href="engage-ecosystem-module" className="pagination-nav__label">Engage Ecosystem</a>
    <a href="andmin-section" className="pagination-nav__label">Admin Section</a>
  </div>
</div>

## Introduction

The platform provides a modular and extensible infrastructure tailored for decentralized finance (DeFi) applications, with a particular focus on the tokenization, governance, and utilization of real-world assets (RWA). By combining critical components such as staking, governance, buybacks, and vesting within a single architecture, the platform enables efficient on-chain financial operations aligned with regulatory and community-driven frameworks.

The Engage Toolkit consists of several integrated modules designed to streamline token utility and life cycle management while supporting decentralized governance and community incentives. Each module operates independently but can be used in combination to support more complex use cases, including liquidity provisioning, project fundraising, and structured token distribution.

Key modules include:

- [**Staking**](engage-staking-module) – incentivize and engage communities
- [**Governance**](engage-governance-module) – on-chain proposal and voting systems
- [**Buybacks**](engage-buyback-module) – deflationary token mechanics
- [**Vesting**](engage-vesting-module) – structured token releases
- [**Admin Section**](andmin-section) – manage system parameters and users

These modules are accessible via a clean, responsive frontend, compatible across devices and optimized for MetaMask, Trust Wallet, and WalletConnect (via RainbowKit).

## UI Technology Stack

The Engage documentation frontend is built with the following technologies:

- **Documentation Framework**: Docusaurus 3
- **Frontend Library**: React 19
- **Styling**: Default Docusaurus theme (with customizations)
- **Syntax Highlighting**: Prism-react-renderer
- **State Management**: Native React state management
- **Build System**: Docusaurus CLI (start, build, serve)
- **Package Management**: npm / yarn (Node 18+)

For decentralized application (dApp) frontends related to Engage, the actual production UI uses Material UI components, integrated wallet connectors (e.g., WalletConnect), and smart contract interactions based on ethers.js — but this documentation site is focused solely on technical references and guidance.

## Mobile & Wallet Compatibility

The UI is responsive and works across modern browsers and mobile devices.

- **Chains Supported**: Ethereum, Polygon, Base, BNB Chain
- **Wallets**: MetaMask, Trust Wallet, WalletConnect

> Note: The UI is fully white-labeled, clients can apply their own custom branding and use their own domain or subdomain to run their instance of Engage.
