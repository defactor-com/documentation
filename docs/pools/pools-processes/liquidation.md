---
id: pool-liquidation-process
title: Pool Liquidation Process
sidebar_position: 3
---

## Introduction to Liquidation

Liquidation is an essential process in lending activities. It occurs when a lending pool reaches its maturity date, but some loans are still outstanding. The liquidation process ensures that lenders can recover their funds even if borrowers fail to repay their loans on time.

#### For the Borrower

If the pool’s maturity date passes and you have not paid back your borrowed amount, then you will have to wait until the pool is liquidated to collect back the remainder of your collateral once your loan has been liquidated. A part of your collateral will be sold to the liquidator to cover the borrowed amount, the required interest, and any additional fees that will be required to cover the cost of liquidation. Once the remainder of your collateral is available to be reclaimed you will be notified through the portal.

#### For the Supplier

If you have supplied liquidity to a pool that has some unpaid loans by the maturity date then you may not be able to collect your collateral right away. However, do not worry, Pools guarantees that your liquidity is borrowed against over-collateralized loans. This means that there is always sufficient collateral to cover your supplied liquidity. Your liquidity will be available once the pool has been liquidated by external agents that will buy the collateral in the pool by paying the outstanding balances and any additional interest required. Once the liquidation is executed, your liquidity and all additional rewards that have been accrued will be made available and you will be notified through the system.

#### For the Liquidator

As a liquidator, you interact directly with POOLS smart contract to learn about possible liquidation opportunities. Once you identify a liquidation opportunity you need to learn how much you need to pay in order to cover outstanding loans plus interest and how much collateral you should expect to receive by the end of the operation. All this information is supplied by querying the smart contract. If you believe that the liquidation opportunity is sufficiently interesting for you then you send the required payment to the smart contract directly and receive the collateral on the blockchain address you choose.
