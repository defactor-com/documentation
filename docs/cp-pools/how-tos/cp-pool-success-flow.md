---
id: cp-pool-success-flow
title: Managing a Successful CP Pool (Owner & Investor Guide)
sidebar_position: 6
---

This guide explains how to **collect funds** from a successfully completed Counterparty (CP) Pool and **distribute profits** among contributors.  
It covers two perspectives:

- **Owner Flow** → steps performed by the pool creator/owner  
- **Investor Flow** → steps performed by contributors/investors  

---

## 1. Owner Flow

### 1.1 Collecting Funds

In this example, the pool is considered **successful** because the funding target has been met:  
- **Target:** 50 USDC  
- **Raised:** 50 USDC  

![Pool Overview](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-overview.png)

This view shows the pool details from the **perspective of the pool owner**. Once the pool reaches its goal, the **Collect** button becomes available on the right-hand side, allowing the owner to initiate the collection process.

![Pool Data Overview](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-data-overview.png)

The pool summary section provides an at-a-glance view of the key parameters:  
- **Min / Max USDC** → Minimum and maximum allowed contributions  
- **USDC Deposited / Total Committed** → Amount already contributed vs total commitment  
- **Deadlines** → Contribution deadline and liquidation deadline for repayments  
- **APR and Term** → Expected APR, minimum APR accepted, and pool duration  

These details confirm that the pool conditions have been satisfied and that funds can now be collected by the owner.

![Collect Button](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-collect-button.png)

Clicking the button opens a wallet confirmation request (e.g., MetaMask):

![Collect Transaction](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-collect-transaction.png)

Steps:
- Verify the transaction details.  
- Confirm the network fee (gas cost).  
- Approve the transaction to proceed with collection.  

After confirming, the button changes state to indicate that funds are being collected:

![Collecting Loading](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-collecting-loading.png)

At this stage, the transaction is processing on-chain. Once confirmed, the funds are transferred to the pool owner’s wallet.

### 1.2 Collect Result (Owner Balance)

When the pool reaches its target and the **Collect** action is confirmed, the committed funds are transferred to the **pool owner’s wallet**.

Example:  
- **Total Committed:** 50 USDC  
- **Collected by Owner:** 49 USDC  

The difference of **1 USDC** represents the **platform fee**.  
- The pool owner receives the remaining **49 USDC**.  
- Investors do not directly get these funds. They wait for the owner to deposit rewards.  

This ensures that the platform fee is accounted for while still enabling the reward distribution process.

### 1.3 After Collect (Owner View)

After collecting, the pool owner sees an updated view that includes the option to deposit rewards.

![Pool Owner After Collect](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-after-collect-admin-of-pool-view.png)

From the owner perspective:  
- Status is now **Active**  
- **Total Rewards** = 0 USDC (no rewards yet)  
- A new input field and button appear to **deposit rewards**

![Deposit Rewards](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-after-collect-admin-of-pool-view-deposit-rewards.png)

### 1.4 Depositing Rewards

#### 1.4.1 How much to deposit?

The total deposit amount = **Principal + Rewards**

1. **Principal** → Total contributions raised from investors  
2. **Rewards (Profit / APR)** → Interest promised, based on APR × term  

**Formula:**  
Total Deposit = Principal + (Principal × APR × (Term / 12))

**Example**:  
- Principal = 50 USDC  
- Expected APR = 18.25%  
- Expected Term = 1 month (1/12 year)  

Reward = 50 × 0.1825 × (1/12) ≈ 0.76 USDC  
Total Deposit ≈ 50.76 USDC  

The pool owner would enter **50.76 USDC** (or round to **51 USDC** for simplicity).

#### 1.4.2 Approving USDC

Before depositing, the owner must approve the contract to use the required USDC.

![Approve USDC](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-approve-usdc-set-2.png)

Confirm the **spending cap request** in your wallet.

#### 1.4.3 Deposit Rewards

Once approved, the **Deposit Rewards** button becomes active.  
Enter the required amount and confirm the transaction.

![Deposit Rewards Step](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-deposit-set-1.png)  
![Deposit Rewards Confirm](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-deposit-rewards-step-3.png)

#### 1.4.4 Confirmation

After successful deposit, the UI updates:

![Deposit Confirmation](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-deposited.png)

- Investors will now see their **Available** rewards  
- Pool status reflects deposited rewards  
- Each investor can proceed to **Claim** their proportional share  

---

## 2. Investor Flow

### 2.1 After Collect (Investor View)

Once the pool owner has collected the funds, investors see:

![Investor View After Collect](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-after-collect-user-view.png)

- Pool status: **Active**  
- **Total Rewards** = 0 USDC (no deposit yet)  
- **Claim panel** shows Available = 0, Claimed = 0  
- **History** shows the “Collected” event  

At this stage, investors must wait for the owner to deposit rewards.

### 2.2 Claiming Rewards

#### 2.2.1 Investor Dashboard

When rewards are deposited, the Claim panel updates:

![Investor Pool Overview](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-investor-avaliable-to-claim-overview.png)

![Claim Panel](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-investor-avaliable-to-claim.png)

- **Available** → USDC available to claim  
- **Claimed** → Total already withdrawn  
- **Claim Button** → Starts claim transaction  

**Example:**  
Investor contributed 25 USDC into a pool with 50 USDC total.  
Owner deposited 50.76 USDC back.  

Share = (25 / 50) × 50.76 ≈ **25.38 USDC**  
This appears under **Available**.

#### 2.2.2 Claim Process

Steps for claiming:

1. Check **Available** balance  
2. Click **Claim**  
3. Wallet confirmation opens (e.g., MetaMask)  
   - Verify claim amount  
   - Confirm transaction (incl. gas fee)  
4. After confirmation:  
   - **Available** decreases  
   - **Claimed** increases  
   - Transaction logged in **History**  

#### 2.2.3 After a Successful Claim

After claiming, the panel shows:

![Claimed Panel](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-investor-claimed.png)

- **Available** = 0 USDC  
- **Claimed** = 25.38 USDC  
- Claim button is disabled  

History logs the claim:

![Claimed History](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-investor-claimed-history-table.png)

This ensures full transparency for deposits, collections, rewards, and claims.
