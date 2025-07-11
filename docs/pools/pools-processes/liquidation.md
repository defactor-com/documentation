---
id: pool-liquidation-process
title: Pool Liquidation Process
sidebar_position: 3
---

## Introduction to Liquidation

Liquidation is an essential process in lending activities. It occurs when a lending pool reaches its maturity date, but some loans are still outstanding. The liquidation process ensures that lenders can recover their funds even if borrowers fail to repay their loans on time.

#### For the Borrower

If the loan's [loan-to-value (LTV) ratio](/docs/resources/glossary#loan-to-value-ltv-ratio-also-called-collateral-token-percentage) exceeds the liquidation threshold any user will be able to liquidate it. The borrower can provide more collateral in order to decrease the LTV and avoid liquidation. If there is any remaining collateral after a liquidation the borrower is going to received it.

#### For the Supplier

If you have supplied liquidity to a pool that has some unpaid loans and nobody had liquidated it. Do not worry, you can withdraw your position and claim rewards in collateral tokens instead. You can liquidate the loans by providing the borrowed amount and your receive the equivalent collateral tokens. 

#### For the Liquidator

As a liquidator, you use the [API](/docs/pools/back-end/api/erc20CollateralToken/restful#get-liquidation-stats) to retrieve the loans information or interact directly with POOLS smart contract to learn about possible liquidation opportunities. Once you identify a liquidation opportunity you need to learn how much you need to pay in order to cover outstanding loans plus interest and how much collateral you should expect to receive by the end of the operation. All this information is supplied by querying the smart contract. If you believe that the liquidation opportunity is sufficiently interesting for you then you send the required payment to the smart contract directly and receive the collateral on the blockchain address you choose.
