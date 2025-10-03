---
id: cp-pool-min-apr-not-met-flow
title: Managing a CP Pool - Principal Returned, No Rewards (Liquidation)
sidebar_position: 8
---

This guide explains what happens when a CP Pool reaches its funding target, the owner collects funds, but returns only the principal without rewards. Since the Minimum APR is not met, the collateral enters liquidation and a voting process begins.

---

## 1. Owner Flow

### 1.1 Pool Successfully Funded

The pool successfully reached its funding target:

![Pool Overview](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-collect-overview.png)

### 1.2 Collecting Funds

The Collect button becomes available:

![Collect Button](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-collect.png)

### 1.3 Collection Complete

After confirmation, the pool status changes to Active:

![Pool After Collect](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-collected-overview.png)

Key changes:
- Status: Active
- Total Rewards: 0 USDC
- History shows "Collected" event: 68.6 USDC on Oct 3rd, 2025 10:10

The owner collected 68.6 USDC out of 70 USDC committed. The difference (1.4 USDC) represents the platform fee.

### 1.4 Business Outcome & Owner's Decision

The owner used the collected funds (68.6 USDC) to purchase and resell a mini house. The sale generated 70 USDC - enough to cover the principal, but not enough for rewards.

Required repayment:
- Principal: 70 USDC
- Minimum rewards: 70 × 0.30 × (1/12) ≈ 1.75 USDC
- Total required: 71.75 USDC
- Owner has available: 70 USDC

The owner decides to return only the principal:

![Owner Returns Principal](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-owner-returns-principal.png)

![Owner Returns Principal Overview](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-deposited-principal.png)

---

## 2. Investor Flow

### 2.1 After Owner Deposits Principal

When the owner deposits 70 USDC (principal only, no rewards), investors can claim their share:

![Investor View Available to Claim](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-investor-claim.png)

Key information:
- Status: **Active**
- **Total Rewards:** 70 USDC
- **Available:** 70 USDC
- **Claimed:** 0 USDC
- **USDC Deposited:** 30 USDC (this investor's contribution)

The Claim button is active, allowing investors to withdraw their principal.

### 2.2 System Detects APR Shortfall

The system automatically calculates:
- Actual APR = 0% (no rewards deposited)
- Minimum APR required = 30%
- **Shortfall detected:** 0% < 30%

This triggers the collateral liquidation process.

### 2.3 Claiming Principal

Investor clicks the Claim button to withdraw their principal share.

![Investor After Claim](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-investor-claimed.png)

After claiming:
- **Available:** 0 USDC
- **Claimed:** 70 USDC
- Claim button is disabled

**History shows:**
- **Claimed:** 70 USDC on Oct 3rd, 2025 10:31
- **Rewards:** 70 USDC deposited on Oct 3rd, 2025 10:24

### 2.4 Voting for Collateral Liquidation

After the Liquidation Deadline passes and the system detects the APR shortfall, investors can vote for a liquidator.

![Vote for Liquidator Panel](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-inverstor-vote.png)

**Voting interface shows:**
- **Vote for liquidator** section
- **Voting Power: 100%** (proportional to investor's contribution)
- Input field for liquidator wallet address
- **Vote** button

**How voting works:**
- Each investor's voting power is proportional to their contribution
- Investor enters a wallet address that will execute the liquidation
- This can be their own address or another trusted party
- Multiple investors can vote for the same liquidator to pool voting power

![After Voting](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-inverstor-voted.png)

After voting, the interface updates to show the liquidator address and liquidation button becomes available.

**Liquidation Votes section displays:**

| Supplier | Date | Liquidator | Voting Power |
|----------|------|------------|--------------|
| 0x4af7...62ff | Oct 3rd, 2025 10:50 | 0x4af7...62ff | 100.00 % |

This table shows:
- **Supplier:** Investor who cast the vote
- **Date:** When the vote was cast
- **Liquidator:** Address voted for
- **Voting Power:** Percentage of total pool commitment

### 2.5 Executing Liquidation

Once a liquidator receives sufficient voting power (typically > 50%), they can execute the liquidation.

![Liquidate Button](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-min-apr-not-met-inverstor-liquidated.png)

**Liquidation interface shows:**
- **Collateral will be transferred to:** 0x4af7...62ff
- **Liquidate** button (active for the chosen liquidator)

**Liquidation process:**
1. The liquidator clicks the **Liquidate** button
2. Wallet confirmation appears (MetaMask)
3. After confirmation, smart contract executes:
   - Transfers all collateral tokens to the liquidator's address
   - Pool status changes to **Liquidated**
   - Event is logged in History

**Collateral transferred:**
- Sharing Utility Token: 9 tokens (ERC20)
- Defactor (REAL): 32 tokens (ERC20)

**Liquidator's responsibility:**
The liquidator must then distribute the collateral proportionally to all investors based on their contribution percentage to compensate for the missing rewards.
