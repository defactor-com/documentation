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

## Step 1: Collect Funds

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
