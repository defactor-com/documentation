---
id: smart-contract-erc20-collateral-pool
title: Introduction
sidebar_position: 1
tags:
  - ERC20
  - Collateral Pool
---

The `ERC20CollateralPool` smart contract is designed for EVM-based blockchains and manages pools of collateralized loans using the `ERC20` standard token. It facilitates supply, borrow, and reward distribution in a decentralized finance (DeFi) ecosystem.

---

## Pool

The pool is a structure that keeps track of suppliers, borrowers, and total balance for USDC and collateral tokens.

Some important characteristics:

- The pool has a maximum pool capacity and minimum amounts required for supplying and borrowing. 
- It has an end time, referred to in this document as the `active period time of the pool`. Once this period concludes, neither supply nor borrow are allowed.
- The pool has a variable reward rate that depends on the volume of supply and borrow transactions during its active period.
- This contract is primarily designed to support any contract that adheres to the `ERC20` token standard for supply and borrow. Additionally, each pool can only have one `ERC20` as a collateral token.
- The pool has a `collateral token percentage` that is used to calculate the amount of collateral token a borrower will need to provide to borrow from the pool.
- The pools allow to withdrawn partially or completely the supplied amount anytime meanwhile there are enough USDC funds in the pools to return the amount plus the rewards. The contract also support partially or completely repays and liquidation.

---

## Roles

The smart contract serves two types of users: the administrator (`admin`), who is responsible for managing the contract by pausing it and overseeing pool-related duties; and the pool users (`user`), who can supply, borrow, repay, and claim rewards.

### admin

- The address specified in the contract initialization will be the admin for the contract.
- Will be responsible for pausing and un-pausing the contract if any risk is detected.
- Can add new pools after the initialization of the contract, announce a pool edit, commit the edit or cancel the edit.

![ERC20CollateralPool Initialize](/img/flowchart/ERC20CollateralPool_initialize.png)

![ERC20CollateralPool Create Pool](/img/flowchart/ERC20CollateralPool_createnewpool.png)

### user

The contract provides a set of actions for users, enabling them to interact with it. User can supply, borrow, repay, claim rewards, and retrieve unliquidated collateral, among other functionalities.

#### lend

When a user supplies funds to the pool, the contract requests approval for the transfer of USDC tokens from the user's wallet to the pool.

Each pool has a minimum amount to lend and maximum USDC capacity.

![ERC20CollateralPool Lend](/img/flowchart/ERC20CollateralPool_lend.png)

#### borrow

When the user borrows from a given pool, the contract asks for a certain amount of collateral assets as a safe mechanism to ensure the borrower will come back and pay the borrow position. The borrower can indicate how much collateral token provide with the restriction that the [loan-to-value (LTV) ratio](/docs/resources/glossary#loan-to-value-ltv-ratio-also-called-collateral-token-percentage) is less than pool max ltv configured. 

Once the position is open if the LTV increase and reach the liquidation threshold the borrow position become liquidatable. To avoid getting liquidated, the borrower must pay the borrow position with interest or increase the collateral amount of the borrow position.

![ERC20CollateralPool Borrow](/img/flowchart/ERC20CollateralPool_borrow.png)

#### repay

The borrower can pay the position anytime. The contract asks for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. The interest and the amount of USDC tokens to be paid is calculated by the contract, so the borrower decides how much of the taken amount will be return, and according to the time since the position was open it will be the interest amount to pay. Each pool has a different interest rate that is calculated based on the pool the user is interacting with. The interest to pay is calculated as `(pool.interest * borrowObj.amount * (block.timestamp - borrowObj.borrowTime)) / (ONE_YEAR * BPS_DIVIDER)`.

To break this formula down into something easier to read, we can say: the amount to pay is the interest accrued on a borrowed amount over a period of time, considering the interest rate of the pool.

![ERC20CollateralPool Repay](/img/flowchart/ERC20CollateralPool_repay.png)

#### withdraw and claim rewards

The pool allows suppliers to claim rewards based on the amount they have supplied plus a reward per token, which is calculated based on the supply and borrow activity on the pool. Additionally, the contract allows partial withdraws meanwhile it is enough USDC in the pool. 

![ERC20CollateralPool_claim_rewards](/img/flowchart/ERC20CollateralPool_claim_rewards.png)

#### change collateral amount

Borrowers can increase or decrease the collateral amount of their positions, if the collateral token price decreased they can increase the amount in order to avoid a liquidation, otherwise, if the price increase they can decrease the amount, ensuring they do not over-collateralize their position.

![ERC20CollateralPool_change_collateral](/img/flowchart/ERC20CollateralPool_change_collateral.png)

#### liquidate

When the loan-to-value (LTV) ratio of a borrow position exceeds the configured liquidation threshold, the position becomes liquidatable. To prevent liquidation, borrowers can increase the amount of collateral they have provided. Alternatively, any user can liquidate the position by paying the required USDC fees, in exchange receiving the collateral amount.

> ⚠️ It's important to note that there is always a risk of fund loss associated with market volatility for the collateralized assets.

![ERC20CollateralPool_liquidate](/img/flowchart/ERC20CollateralPool_liquidate.png)
