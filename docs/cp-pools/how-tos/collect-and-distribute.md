---
id: cp-pool-collect-and-distribute
title: How to Collect and Distribute Funds
sidebar_position: 6
---

This guide explains how to **collect funds** from a successfully completed Counterparty (CP) Pool and **distribute profits** among contributors.

![Pool Overview](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-overview.png)

In this example, the pool is considered **successful** because the funding target has been met:  
- **Target:** 50 USDC  
- **Raised:** 50 USDC  

This view shows the pool details from the **perspective of the pool owner**. Once the pool reaches its goal, the **Collect** button becomes available on the right-hand side, allowing the owner to initiate the collection process.

![Pool Data Overview](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-data-overview.png)

The pool summary section provides an at-a-glance view of the key parameters:  
- **Min / Max USDC** → Defines the minimum and maximum allowed contributions.  
- **USDC Deposited / Total Committed** → Shows how much has already been contributed and the total commitment.  
- **Deadlines** → Pool deadline for contributions and liquidation deadline for repayments.  
- **APR and Term** → Expected APR, minimum APR accepted, and the agreed duration of the pool.  

These details confirm that the pool conditions have been satisfied and that funds can now be collected by the owner.

## Collecting Funds (Pool Owner)

Once the pool has successfully reached its target, the **Collect** button becomes active for the pool owner.

![Collect Button](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-collect-button.png)

Clicking the button opens a wallet confirmation request. In this case, the transaction is initiated via MetaMask:

![Collect Transaction](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-collect-transaction.png)

- Verify the transaction details.  
- Confirm the network fee (gas cost).  
- Approve the transaction to proceed with collection.  

After confirming, the button changes state to indicate that funds are being collected:

![Collecting Loading](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-collecting-loading.png)

At this stage, the transaction is processing on-chain. Once confirmed, the funds are transferred to the pool owner’s wallet for further distribution.

## After Collect (Investor View)

Once the pool owner has collected the committed funds, investors will see the updated pool status in their interface.

![Investor View After Collect](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-after-collect-user-view.png)

From the **investor perspective**:  
- The pool is now marked as **Active**.  
- The **Total Rewards** field still shows `0 USDC`, because the pool owner has not yet deposited rewards for distribution.  
- On the right-hand side, the **Claim** section indicates:  
  - **Available: 0 USDC** → no rewards are ready to claim yet.  
  - **Claimed: 0 USDC** → the investor has not received any rewards yet.  
- The **History** section confirms that the pool has moved into the *Collected* state, showing the transaction where the owner retrieved the pool’s committed funds.  

At this stage, investors must wait for the pool owner to **deposit rewards**, which will then become available for claiming.

## After Collect (Pool Owner View)

After collecting the pool funds, the **pool owner** sees an updated view that includes the option to deposit rewards.

![Pool Owner After Collect](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-after-collect-admin-of-pool-view.png)

From the **owner perspective**:  
- The pool status is shown as **Active**.  
- The **Total Rewards** field is still `0 USDC` because rewards have not yet been deposited.  
- A new input field and button appear on the right-hand side, allowing the owner to **deposit rewards** into the pool.

![Deposit Rewards](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-after-collect-admin-of-pool-view-deposit-rewards.png)

Here, the owner specifies the **reward amount** to be distributed among investors and confirms the transaction on-chain.  
Once rewards are deposited, they become visible to investors under the **Available** balance in the Claim section.

## Collect Result (Pool Owner Balance)

When the pool reaches its target and the **Collect** action is confirmed, the committed funds are transferred to the **pool owner’s wallet**.

In this example:  
- **Total Committed:** 50 USDC  
- **Collected by Owner:** 49 USDC  

The difference of **1 USDC** represents the **platform fee** that is charged during pool collection.  
- The pool owner receives the remaining **49 USDC**.  
- Investors do not directly get these funds. Instead, they wait for the owner to **deposit rewards**, which will later appear in the Claim section.  

This ensures that the platform fee is accounted for while still enabling the reward distribution process to investors.

## Depositing Rewards (Pool Owner)

After collecting the committed funds, the **pool owner** must deposit back the principal and the promised rewards so that investors can claim their share.

### How much to deposit?

The total deposit amount consists of:

1. **Principal (Committed Amount)**  
   The total contributions originally raised from investors.  

2. **Rewards (Profit / APR)**  
   The interest or profit promised to investors, calculated based on the expected APR and the pool term.  

**Formula:**
Total Deposit = Principal + (Principal × APR × (Term / 12))


### Example

- Principal = **50 USDC**  
- Expected APR = **18.25 %**  
- Expected Term = **1 month (1/12 year)**  

Reward = 50 × 0.1825 × (1/12) ≈ 0.76 USDC
Total Deposit ≈ 50.76 USDC


In this case, the pool owner would enter **50.76 USDC** into the deposit field.  
For simplicity, the amount can also be rounded (e.g., **51 USDC**) to ensure investors receive their due rewards.

### Approving USDC

Before depositing, the owner must first approve the contract to use the required USDC amount.

![Approve USDC](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-approve-usdc-set-2.png)

In your wallet, confirm the **spending cap request** that matches the deposit amount (e.g., 50.76 USDC).

### Deposit Rewards

Once approved, the **Deposit Rewards** button becomes active.  
Enter the required amount and confirm the transaction.

![Deposit Rewards Step](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-deposit-set-1.png)

![Deposit Rewards Confirm](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-deposit-rewards-step-3.png)


### Confirmation

After successful deposit, the UI updates to show the deposited amount and the status of rewards.

![Deposit Confirmation](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pool-collect-and-distribute-owner-deposited.png)

- Investors will now see their **Available** rewards in the Claim section.  
- The pool status reflects that rewards have been deposited.  
- Each investor can proceed to **Claim** their proportional share.






