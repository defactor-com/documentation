---
title: Pools Client Onboarding
sidebar_position: 2
---

## Introduction

**POOLS** is Defactor’s decentralized lending infrastructure that allows businesses to launch and manage custom lending environments using tokenized or real-world assets. Whether you're looking to unlock liquidity or create institutional lending agreements, POOLS offers flexible, secure, and on-chain functionality.

This guide outlines the essential details required to configure your pool smart contracts and onboard successfully.

## Onboarding Checklist

### Pool Configuration

**Pool Type**

- Choose between:
  - **ERC-20 Collateral Pool**: open participation, permissionless setup.
  - **Counterparty Pool**: permissioned structure, predefined roles.

**Blockchain**

- Specify the network for deployment (e.g., Ethereum, Polygon, Base, BNB Chain).
- Provide the token addresses for both collateral and loan assets.

**General Parameters**

- Pool Name and Description
- Logo or branding asset (optional)
- Minimum and maximum loan sizes (if applicable)
- Interest rate (fixed or variable)
- Maturity duration (e.g., 30, 90, 180 days)
- Collateral-to-debt ratio (LTV)

### Counterparty Settings _(if applicable)_

**Borrower Address**

- Wallet address for the designated borrower(s)

**Loan Terms**

- Agreed loan amount
- Repayment deadline
- Interest terms

**Collateral Settings**

- Accepted token
- Wallet address for deposits

### Liquidation Setup

**Conditions**

- Define liquidation triggers:
  - Missed repayment
  - LTV breach

**Liquidator Access**

- Open to public or restricted to a specific address

### Admin Settings

**Admin Wallet**

- Address with permission to pause/resume the pool and manage updates

**Testing & Deployment**

- Confirm deployment network
- Ensure access to gas fees and final review of all parameters

_See [Smart Contract Configuration Guide](https://defactor.dev/docs/pools/smart-contract-config) for deployment details._

---

## Live customer examples

[RealtyX Lending Pools](https://www.defactor.com/case-studies#realtyx)  
[LandX Lending Pools](https://www.defactor.com/case-studies#landx)  
[Libertum Pools](https://www.defactor.com/case-studies#libertum)
