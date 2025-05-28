---
id: smart-contract-erc20-collateral-pool
title: Introduction
sidebar_position: 1
tags:
  - ERC20
  - Collateral Pool
---

The `ERC20CollateralPool` smart contract, designed for EVM based blockchains, manages pools of collateralized loans using `ERC20` standard token. It facilitates lending, borrowing, and reward distribution in a decentralized finance (DeFi) ecosystem.

---

## Pool

The pool is a structure that keeps track of lenders, borrowers, and total balance for USDC and collateral tokens.

Some important characteristics:

- It has an end time, referred to in this document as the `active period time of the pool`. Once this period concludes, neither lending nor borrowing are allowed.
- The pool has a variable reward rate that depends on the volume of lending and borrowing transactions during its active period.
- This pool is primarily designed to support USDC tokens for lending and borrowing, but it can accommodate any other contract that adheres to the `ERC20` token standard with a `token precision of 6`. It also supports `ERC20` tokens as collateral, regardless of precision.
- The pool has a `collateral token percentage` that is used to calculate the amount of collateral token a borrower will need to provide to borrow from the pool.
- A pool can only have one type of collateral token.

---

## Roles

The smart contract caters to two types of users: the administrator (`admin`), responsible for managing the contract by pausing it and overseeing pool-related duties; and the pool users (`client`), who can lend, borrow, repay, and claim rewards.

### admin

- The address specified in the contract initialization will be the admin for the contract.
- Will be responsible for pausing and un-pausing the contract if any risk is detected.
- Can add new pools after the initialization of the contract, announce a pool edit, commit the edit or cancel the edit.

![ERC20CollateralPool Initialize](/img/flowchart/ERC20CollateralPool_initialize.png)

![ERC20CollateralPool Create Pool](/img/flowchart/ERC20CollateralPool_createnewpool.png)

### client

The contract provides a set of actions for clients, enabling them to interact with it. Clients can lend, borrow, repay, claim rewards, and retrieve unliquidated collateral, among other functionalities.

#### lend

When the user lends their money to the pool, the contract asks for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. A registry is added to the pool to represent the amount of USDC tokens the user have lent to the pool.

![ERC20CollateralPool Lend](/img/flowchart/ERC20CollateralPool_lend.png)

#### borrow

When the user borrows from a given pool, the contract asks for a certain amount of collateral assets as a safe mechanism to ensure the borrower will come back and pay the loan; otherwise, the pool will use the collateralized amount to pay the loan, and the rest will be liquidated. To avoid getting liquidated, the borrower must pay the loan with interest (due to the time the pool has lent money) before the pool ends.

![ERC20CollateralPool Borrow](/img/flowchart/ERC20CollateralPool_borrow.png)

#### repay

The borrower can pay the loan anytime before the pool's time ends to avoid getting liquidated. The contract asks for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. The interest and the amount of USDC tokens to be paid is calculated by the contract, so the borrower will have to return the exact amount of USDC tokens lent plus an interest of the amount the loan has been taken in terms of time. Every pool has a different interest rate that is calculated based on the pool the user is interacting with. The interest to pay is calculated as `(pool.interest * borrowObj.amount * (block.timestamp - borrowObj.borrowTime)) / (ONE_YEAR * HOUNDRED)`.

To break this formula down into something easier to read, we can say: the amount to pay is the interest accrued on a borrowed amount over a period of time, considering the interest rate of the pool.

![ERC20CollateralPool Repay](/img/flowchart/ERC20CollateralPool_repay.png)

#### claim rewards and claim multiple

The pool allows lenders to claim rewards based on the amount they have lent plus a reward per token, which is calculated based on the lend and borrow activity on the pool. To do so, the pool must have finished the active period.

The other action the user can interact with is `claim multiple`, it's the same as claim rewards with a minor difference. Instead of only claiming the rewards for a lending position, it'll claim the reward for all the lending positions the user has on the specified pool.

![ERC20CollateralPool_claim_rewards](/img/flowchart/ERC20CollateralPool_claim_rewards.png)

#### claim unliquidated collateral

To mitigate the risk of fund loss for lenders and maintain the health of the pool, collateral tokens are required from every borrower. In the event of a borrower's default on the loan, the pool will utilize the collateral to cover it, and any remaining amount will be liquidated. If there is a surplus after liquidation, the borrower can reclaim it based on the value of their collateral.

> ⚠️ It's important to note that there is always a risk of fund loss associated with market volatility for the collateralized assets.

![ERC20CollateralPool Claim Unliquidated Collateral](/img/flowchart/ERC20CollateralPool_claimunliquidatedcollateral.png)
