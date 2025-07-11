---
id: smart-contract-erc20-collateral-pool-example
title: Example
sidebar_position: 3
tags:
  - ERC20
  - Collateral Pool
  - Borrow
  - Supply
---

## In-depth Actions

The happy path for this Smart Contract begins with the initialization of a pool, where suppliers provide funds, allowing borrowers to interact with the contract as needed. A common concern is what happens if a borrower fails to repay the loan. To mitigate this risk, borrowers must provide collateral tokens that secure the amount they are requesting. They are required to repay the loan with interest before it become liquidatable and be liquidated by another user.

Each time USDC is transferred, an internal function is triggered to update the variables that calculate rewards for the suppliers. This function updates the following variables: `rewardPerToken`, `rewardRate`, and `lastUpdated`. Here's how this function looks:

```solidity
pool.rewardPerToken += ((block.timestamp - pool.lastUpdated) * pool.rewardRate);
pool.rewardRate = (pool.lended - pool.claimed) > 0 ?
    (((pool.borrowed - pool.repaid) * pool.interest * 1e18) /
    ((pool.lended - pool.claimed) * ONE_YEAR * BPS_DIVIDER)) : 0;
pool.lastUpdated = uint48(block.timestamp);
```

For example, when someone first supplies to the pool, the `rewardPerToken` will be `0`, the `rewardRate` will reflect the pool's interest rate, and `lastUpdated` will be set to the timestamp of the block when the first lender contributed. The next time someone lends to the pool, `rewardPerToken` will be updated based on the time elapsed since the last lending event, `rewardRate` will adjust according to the amount borrowed, and `lastUpdated` will be updated to the timestamp of the most recent lending event. This process continues until the pool's active period concludes.

### Pool Lifecycle

- **Event #1**: _Contract is initialized with one pool using gold as collateral and USDC as the base token_.
- **Event #2**: Alice supplies $100,000 to the pool.
- **Event #3**: Bob borrows $10,000 from the pool.
- **Event #4**: After 10 days, Bob repays the loan.
- **Event #5**: After 30 days, Alice withdraws her funds and claims her rewards.

This example illustrates how the contract behaves during these events.

### Event #1: Contract Initialization

- The contract is initialized by setting the admin, the USDC token, and the pools.

### Event #2: Supplying Funds

- Only existing and active pools will allow the process to proceed.

- Each pool has a minimum supply amount and a maximum USDC capacity, ensuring that the total supplied amount plus the repaid amount minus the borrowed amount does not exceed the capacity:

```solidity
lended + usdcAmount + repaid - borrowed <= maxPoolCapacity
```

- The contract requests USDC token approval to transfer the tokens from the user's wallet to the pool.

- The reward update method is called.

- A lending record is created to store the supply information.

- An event `newLend` is emitted.

Here's how the pool amounts look before and after the `lend` function call:

**Before Lending:**

```json
{
  "lended": 0,
  "borrowed": 0,
  "repaid": 0,
  "rewards": 0,
  "collateralTokenAmount": 0,
  "rewardPerToken": 0,
  "rewardRate": 0,
  "lastUpdated": 0,
  "interest": 10
}
```

**After Lending:**

```json
{
  "lended": 100000000000,
  "borrowed": 0,
  "repaid": 0,
  "rewards": 0,
  "collateralTokenAmount": 0,
  "rewardPerToken": 0,
  "rewardRate": 0,
  "lastUpdated": 1702328455,
  "interest": 10
}
```

Key attributes to track include `lended`, `lastUpdated`, `rewardPerToken`, and `rewardRate`. Initially, these values are set to 0, indicating no updates have occurred.

### Event #3: Borrowing Funds

- Only existing and active pools will allow the process to proceed.

- Each pool has a minimum borrowing amount, and to borrow, the pool must have sufficient funds to cover the amount, which is equivalent to:

\[
(lended + repaid + rewards - withdrawn - borrowed - claimedRewards) < amount\_to\_borrow
\]

- The contract calculates the minimum collateral required based on the pool's [loan-to-value (LTV) ratio](/docs/resources/glossary#loan-to-value-ltv-ratio-also-called-collateral-token-percentage), using an oracle to obtain the collateral token price. It then verifies that the provided collateral exceeds this minimum.

- When collateral tokens are transferred to the contract, a borrowing record is created to store the borrowing information, and pool values are updated accordingly.

- A final USDC token safe transfer is made to the borrower, representing the borrowed amount.

- The reward update method is called.

- An event `newBorrow` is emitted.

Here's how the pool amounts look after the `borrow` function call:

**After Borrowing:**

```json
{
  "lended": "100000000000",
  "borrowed": "10000000000",
  "repaid": "0",
  "rewards": "0",
  "collateralTokenAmount": "310005811536712244302",
  "rewardPerToken": "0",
  "rewardRate": "317097919",
  "lastUpdated": 1702329114,
  "interest": 10
}
```

### Event #4: Repaying the Loan

- Only existing pools will allow the process to proceed. It doesn't matter if the pool endtime already passed.

- To repay a loan, the contract checks that the loan has not already been paid by the borrower or a liquidator. Once validated, the contract calculates the interest for the repayment.

- Borrowers can repay a loan partially; for instance, Bob could repay $5,000 of the $10,000 loan and return later to pay the remainder.

- The contract requests USDC token approval to transfer the tokens from the user's wallet to the pool. Once completed, the contract returns the collateral tokens to the borrower.

- The reward update method is called.

- An event `Repaid` is emitted.

Here's how the pool amounts look after repaying:

**After Repaying:**

```json
{
  "lended": "100000000000",
  "borrowed": "10000000000",
  "repaid": "10000000000",
  "rewards": "27397355",
  "collateralTokenAmount": "0",
  "rewardPerToken": "273973553309757",
  "rewardRate": "0",
  "lastUpdated": 1703196299,
  "interest": 10
}
```

The total repaid amount is updated after the borrower repays the loan, leaving the pool with the full supply amount available for borrowing or withdrawal.

### Event #5: Claiming Rewards

- Only existing pools will allow the process to proceed. It doesn't matter if the pool endtime already passed.

- To withdraw and claim rewards, the pool must have sufficient funds to return the amount plus the rewards.

- The contract allows partial withdrawals, enabling suppliers to withdraw and claim rewards whenever they wish, provided validations are met.

- Once validations are complete, the contract pays the rewards owed to the supplier, calculated using the following formula:

```solidity
supplied amount + ( ( ( reward per token - reward per token ignored ) * supplied amount ) / 1e18 )
```

- An event `RewardsClaimed` is emitted.

Here's how the pool looks after withdrawal:

**After Withdrawal:**

```json
{
  "lended": "100000000000",
  "borrowed": "10000000000",
  "repaid": "10000000000",
  "rewards": "27397355",
  "collateralTokenAmount": "0",
  "rewardPerToken": "273973553309757",
  "rewardRate": "0",
  "lastUpdated": 1703199699,
  "interest": 10
}
```

The state remains unchanged because only the supply information is updated. After claiming, the object looks like this:

```json
{
  "amount": "100000000000",
  "rewardPerTokenIgnored": "0",
  "usdcAmount": "100000000000"
}
```

Since no other user supplied funds to the pool, the `rewardPerTokenIgnored` for Alice is 0, allowing her to claim the full reward.