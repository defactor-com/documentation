---
id: smart-contracts-overview
title: Smart Contracts Overview
sidebar_position: 1
---

The **Engage Smart Contracts** provide a foundational layer for decentralized community operations and ecosystem alignment across the Defactor platform. These contracts enable transparent, auditable, and automated management of core economic mechanisms, including incentives, governance, and scheduled distributions.

This smart contract layer is modular by design, enabling projects to activate only the components they need, while ensuring interoperability with broader DeFi tooling. Each module automates a specific function critical to maintaining an efficient and community-driven decentralized finance (DeFi) protocol.

Key contract modules include:

- [**Staking**](staking-contract/staking-contract-overview) – automated reward distribution with customizable lockups
- [**Buyback**](buyback-contract/buyback-contract-overview) – market-driven token repurchase logic
- [**Vesting**](vesting-contract/vesting-contract-overview) – scheduled token release for teams and stakeholders

These contracts are tightly integrated with the Engage frontend and are designed to interoperate with WalletConnect-compatible wallets. The logic powering these modules has been externally audited to ensure safety and reliability.

---

## Smart Contract Capabilities

Each module provides distinct programmatic capabilities:

- **Permissioned Setup**: Admin roles can configure initial parameters (e.g., durations, schedules, thresholds).
- **Non-Custodial**: All logic executes on-chain without centralized token custody.
- **Auditability**: Activity is traceable via transaction logs and block explorers.
- **EVM Compatibility**: Deployed on Ethereum, Polygon, Base, and BNB Chain.
- **Upgradeable Paths**: Support for modular upgrades while preserving data state.

---

## Integration with Engage UI

While this documentation focuses on the underlying smart contract architecture, the full Engage experience includes:

- On-chain contract execution via MetaMask, Trust Wallet, or WalletConnect
- Real-time feedback for staking rewards, vote outcomes, and vesting schedules
- Dashboard interfaces for contract interactions and event history

For details on how to deploy and interact with these contracts, refer to each module’s subpage.
