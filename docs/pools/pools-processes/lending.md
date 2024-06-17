---
title: Pool Lending Process 
sidebar_position: 2
---

## Introduction to Lending

Once a pool is set up, you can offer incentives to your community to become liquidity providers by depositing stable coins (e.g., USDC) into your supply pools, offering them a return on their investment. This process allows stable coin holders to earn revenue with relatively low risk by providing secured loans to different borrowers.

### How it works: Supplying liquidity into the Pool

To supply liquidity into the pool you are interested in, simply connect your wallet to the platform, navigate to the tab of the pool of your choice and select the supply/borrow button on the home page or navigate to the pool page and select supply in the top left corner from your screen. Choose the amount you would like to supply into the pool and sign the transactions from your wallet. Once this is done you can continuously monitor the rewards accrued on your position by going to the page of the pool where you made the deposits or by simply visiting the supplied tab.

### When can I collect my rewards and capital?

Once a pool matures no further loans can be taken from the available funds. If all previously made loans are repaid before the maturity date then your supplied funds and rewards will be available for collection immediately. However, if the pool requires liquidation, you would need to wait until the liquidation action has taken place, and only after that your funds will be available for withdrawal.

### How are my rewards calculated once I deposit into a POOL?

The rewards on your pools deposits are calculated by taking into account three different variables:

- **The Duration of your deposit:** The duration of your deposit refers to the time between your deposit action and the time the pool matures  ( (Pool maturity date) - ( Deposit date)) measured in minutes to accurately capture the time your deposit has been sitting in the pool.
- **The interest rate of the pool:** Reflected in the pool metric calculated on a per minute basis. APY/(360 Days*24 Hours*60 Minutes).
- **The utilisation ratio:** Measures the effectiveness of the capital deposited in the pool. This metric reflects how much of the capital deposited in the pool is being utilised by active loans and is measured as (Borrowed Pool capital)/ (Total supplied pool capital).

The effective reward function becomes: Capital deposited in the Pool * Duration * Interest rate * utilisation ratio.
