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

**Collateral Token**: A token that is used as backup to secure a loan. In the case of Aurus, the collateral token is the `AU` token.

**Pool**: A pool that'll hold the collateral tokens and track every loan made.

**Investor**: A user who funds the pool with `USDC` token.

**Borrower**: A user who borrows `USDC` token from the pool by depositing collateral tokens (`AU`).

**Loan**: A loan is a transaction that involves the transfer of `USDC` token from the pool to the borrower. The borrower deposits collateral tokens (`AU`) to the pool as a guarantee for the loan. The borrower can repay the loan by depositing `USDC` token to the pool.

**Loan Fee**: A fee that is charged to the borrower for every loan made. The fee is a percentage of the loan amount.

## How to Interact with the Contract?

The interactions are facilitated through a frontend application, serving as an intermediary that communicates with the contract. This application enables administrative actions by an authorized admin user, facilitates funding from an investor, and facilitates the borrowing and repayment of loans by a borrower.

Additionally, the smart contract exposes specific public views, allowing users to access information about pools and loans, enhancing transparency and accessibility.

## Use Case Example

Let's explore this fictional scenario involving Alice and the Aurus solution:

Alice possesses three physical ingots of `GOLD`, securely stored in a vault to mitigate the risk of loss or theft.

Upon discovering the innovative solution offered by Aurus, Alice decides to tokenize her gold holdings, resulting in the creation of a digital representation in the form of ERC-20 tokens equivalent to her three `GOLD` ingots in `USD` value. These tokens are now residing in the blockchain and are denominated in `AU` tokens.

Facing rejection from a traditional bank due to a lack of credit history, Alice leverages her digital `GOLD` tokens to secure a loan from a pool previously invested in by Bob. She provides a certain quantity of `AU` tokens as collateral, successfully obtaining the loan, and utilizes the acquired `USDC` for her financial needs.

Through this narrative, it's possible to distill the following key points:

1. **Tokenization Benefits:** Alice's decision to tokenize her `GOLD` ingots enhances security by reducing the risk associated with physical holdings while leveraging the advantages offered by the Aurus solution.

2. **Borrowing from a Pool:** Despite facing traditional credit challenges, Alice taps into the decentralized lending ecosystem facilitated by the Aurus protocol, borrowing from a pool in which Bob has invested.

3. **Flexible Usage:** Alice can freely utilize the borrowed `USDC` for her various financial needs, showcasing the flexibility and utility of the Aurus solution.

Upon completing her endeavors, Alice only needs to repay the loan along with the fees stipulated by the pool, allowing her to retrieve the collateralized tokens. This scenario exemplifies how Aurus empowers individuals like Alice to unlock the value of their physical assets, navigate credit challenges, and benefit from the security and flexibility of decentralized lending.

## Sequence Diagram

![RWA Use Case](/img/flowchart/aurus-sequencediagram.png)
