---
id: cp-pool-how-tos-overview
title: How-to Guides Overview
sidebar_position: 5
---

This section provides step-by-step guides for all essential operations in the CP Pools platform, covering both pool owner and investor workflows from creation through completion or default scenarios.

---

## For Pool Owners

### Creating and Managing Pools

**[How to Create a CP Pool](cp-pool-creation.md)**  
Complete walkthrough of the pool creation process, including:
- Configuring funding parameters (soft cap, hard cap)
- Setting timelines and return rates (APR, terms, deadlines)
- Adding collateral tokens for investor protection
- Paying the 200 USDC creation fee
- Deploying your pool on-chain

**[Managing a Successful CP Pool](cp-pool-success-flow.md)**  
Learn how to manage a pool that reaches its funding target:
- Collecting committed funds from investors
- Calculating and depositing principal + rewards
- Understanding platform fees
- Completing the pool lifecycle successfully

### Handling Edge Cases

**[Managing a Failed CP Pool](cp-pool-failure-flow.md)**  
What happens when funding doesn't reach the minimum threshold:
- Why pools fail (below soft cap by deadline)
- How investors get full refunds
- Owner limitations when pools fail
- Transparency and audit trails

**[Managing a Defaulted CP Pool](cp-pool-default-flow.md)**  
Understanding the default scenario when owners fail to repay:
- What triggers a default (missing liquidation deadline)
- How collateral liquidation works
- Investor voting process for liquidators
- Responsibilities of designated liquidators

**[Principal Returned, No Rewards (Liquidation)](cp-pool-min-apr-not-met-flow.md)**  
Handling the case when only principal is returned:
- What happens when minimum APR isn't met
- How the system detects APR shortfalls
- Collateral liquidation triggering automatically
- Voting and executing liquidation for partial defaults

---

## For Investors

### Participating in Pools

**[Managing a Successful CP Pool](cp-pool-success-flow.md)**  
How to participate in and claim returns from successful pools:
- Understanding the investor dashboard
- Monitoring pool status and available rewards
- Claiming your proportional share of principal + rewards
- Viewing transaction history

### Understanding Your Rights

**[Managing a Failed CP Pool](cp-pool-failure-flow.md)**  
Your rights when pools don't reach funding targets:
- How to withdraw your full deposit
- Step-by-step refund process
- No penalties or loss of principal
- Complete transparency through history logs

**[Managing a Defaulted CP Pool](cp-pool-default-flow.md)**  
Protecting your investment when owners default:
- Understanding collateral protection
- Voting for liquidators (proportional to investment)
- How liquidation proceeds are distributed
- Your role in the recovery process

**[Principal Returned, No Rewards](cp-pool-min-apr-not-met-flow.md)**  
What to do when minimum returns aren't met:
- Claiming your principal portion
- Participating in liquidation voting
- Understanding APR shortfall calculations
- Expected outcomes from collateral liquidation

---

## Pool Lifecycle States

Understanding the different states your pool can be in:

| Status | Description | Owner Actions | Investor Actions |
|--------|-------------|---------------|------------------|
| **Created** | Pool is open for deposits | Monitor funding progress | Deposit USDC |
| **Active** | Funding collected, awaiting repayment | Deposit principal + rewards | Wait for rewards deposit |
| **Closed** | Successfully completed with full repayment | None (completed) | Claim rewards |
| **Failed** | Didn't reach soft cap by deadline | None (cannot collect) | Withdraw full deposit |
| **Liquidated** | Default or minimum APR not met | None (in default) | Vote and claim from liquidation |
| **Archived** | Pool manually archived by owner | None (archived) | View historical data only | Retry |

---

## Key Concepts

### For Pool Owners

- **Soft Cap**: Minimum funding needed for pool to activate
- **Hard Cap**: Maximum funding the pool can accept
- **Expected APR**: Target return rate you plan to deliver
- **Minimum APR**: Threshold below which collateral liquidates
- **Liquidation Deadline**: Final date to repay principal + minimum rewards
- **Platform Fee**: 200 USDC to create pool + percentage of collected funds

### For Investors

- **Commitment**: USDC you deposit into a pool
- **Available**: Rewards ready to claim
- **Claimed**: Total you've already withdrawn
- **Voting Power**: Your claim percentage based on contribution size
- **Liquidator**: Trusted party voted to distribute collateral proceeds

---

## Quick Navigation

- **New to CP Pools?** Start with [How to Create a CP Pool](cp-pool-creation.md)
- **Pool reached target?** See [Managing a Successful CP Pool](cp-pool-success-flow.md)
- **Deadline passed without funding?** Check [Managing a Failed CP Pool](cp-pool-failure-flow.md)
- **Owner missed repayment?** Review [Managing a Defaulted CP Pool](cp-pool-default-flow.md)
- **Only principal returned?** Read [Principal Returned, No Rewards](cp-pool-min-apr-not-met-flow.md)

---

## Need Help?

Each guide includes:
- ✅ Step-by-step instructions with screenshots
- ✅ Real-world examples and calculations
- ✅ Wallet transaction confirmations
- ✅ Expected outcomes and next steps
- ✅ Complete transparency through history logs

All operations are recorded on-chain, ensuring full transparency and auditability of every action taken within the CP Pools ecosystem.