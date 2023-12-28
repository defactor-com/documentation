---
id: rwa-use-case-aurus
title: Use Case
sidebar_position: 2
---

Aurus Protocol stands as a solution strategically constructed atop the open infrastructure provided by Defactor. This innovative solution capitalizes on the implementation of the ERC20 token standard and the sophisticated logic embedded within Smart Contracts. The core mechanism involves creating secure pools with collateralized tokens during borrowing and subsequently returning these tokens upon loan repayment. In essence, Aurus depends on the following components to execute this solution:

1. ERC20CollateralPool contract instance (facilitated by Defactor).
2. Frontend application (developed and supplied by Aurus).

> Note: Defactor provides a general frontend application template to get started quick and easy.

## Key Concepts

**Collateral Token**: A token that is used as backup to secure a loan. In the case of Aurus, the collateral token is the `GOLD` token.

**Pool**: A pool that'll hold the collateral tokens and track every loan made.

**Investor**: A user who funds the pool with `USDC` token.

**Borrower**: A user who borrows `USDC` token from the pool by depositing collateral tokens (`GOLD`).

**Loan**: A loan is a transaction that involves the transfer of `USDC` token from the pool to the borrower. The borrower deposits collateral tokens (`GOLD`) to the pool as a guarantee for the loan. The borrower can repay the loan by depositing `USDC` token to the pool.

**Loan Fee**: A fee that is charged to the borrower for every loan made. The fee is a percentage of the loan amount.

## How to Interact with the Contract?

The interactions are facilitated through a frontend application, serving as an intermediary that communicates with the contract. This application enables administrative actions by an authorized admin user, facilitates funding from an investor, and facilitates the borrowing and repayment of loans by a borrower.

Additionally, the smart contract exposes specific public views, allowing users to access information about pools and loans, enhancing transparency and accessibility.

## Use Case Example

## Sequence Diagram

![RWA Use Case](/img/flowchart/aurus-sequencediagram.png)
