---
id: smart-contract-erc20-collateral-pool-example
title: Example
sidebar_position: 3
tags:
  - Borrow
  - Lend
---

## In-depth Actions

The happy path for this Smart Contract begins with the initialization of a pool and the lender engages with the contract to lend money to the pool to allow the borrower interact with the contract by borrowing according to the amount of money they need from the pool. A question that may arise in this point is what happen if the borrower decides to steal the loan (to not repay it), to avoid this scenario the borrower must provide collateral tokens that back up the loan they are requesting.

The borrower is required to repay the loan with interest before the pool's term concludes to avoid liquidation. If the borrower fails to repay the loan, the pool will utilize the collateral to cover the outstanding amount, and the surplus will be liquidated. Any remaining funds can be claimed by the borrower based on the value of their collateral token.

Once the pool reaches the end of its active period, the lenders can claim their rewards.

Every time someone lends, a function runs in the background to update some variables values of the contract that matter to the lenders.

This function is responsible for updating the following variables: `rewardPerToken`, `rewardRate`, and `lastUpdated`. All of them are used to calculate the rewards for the lenders. This is how this function looks:

```solidity
pool.rewardPerToken += ((block.timestamp - pool.lastUpdated) *
            pool.rewardRate);
pool.rewardRate =
    ((pool.borrowed - pool.repaid) * pool.interest * 1e18) /
    (pool.lended * ONE_YEAR * HOUNDRED);
pool.lastUpdated = uint48(block.timestamp);
```

As an example, the first time someone lends to the pool, the `rewardPerToken` will be `0`, the `rewardRate` will be the interest rate of the pool, and the `lastUpdated` will be the timestamp of the block when the first lender lent to the pool. The next time someone lends to the pool, the `rewardPerToken` will be updated based on the time passed since the last time someone lent, the `rewardRate` will be updated based on the amount of money borrowed, and the `lastUpdated` will be updated to the timestamp of the block when the last lender lent, and so forth until the pool finishes its active time.

Let's consider the following example to better understand how this flow works:

## Pool lifecycle

- Event #1 -> _Contract is initialized with one pool having gold as collateral and USDC as the lending token_.
- Event #2 -> Alice lends $100k to the pool.
- Event #3 -> Bob borrows $10k from the pool.
- Event #4 -> After 10 days, Bob repays the loan.
- Event #5 -> After 30 days, Alice can claims her rewards.

In this example, the information is focus on how the contract behaves in the previous events.

### Event #1 (contract initialization)

- The contract is initialized by setting the admin, the USDC token, and the pools.

### Event #2 (lending)

- Only existing and active pools will allow the process to go through the rest of the flow.

- The contract will ask for USDC token approval to transfer the USDC tokens from the user's wallet to the pool.

- The update reward method is called.

- A lending record is added to save the lending information.

- An event `LendEvent` is emitted.

This is how it looks before and after the `lend` function call.

Pool before lending:

```json
{
  "lended": 0,
  "borrowed": 0,
  "repaid": 0,
  "rewards": 0,
  "collateralTokenAmount": 0,
  "liquidatedCollateral": 0,
  "collateralTokenAmountAtLiquidation": 0,
  "rewardPerToken": 0,
  "rewardRate": 0,
  "lastUpdated": 0,
  "endTime": 1704920451,
  "collateralDetails": {
    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    "collateralTokenFactor": 115,
    "collateralTokenPercentage": 60
  },
  "interest": 10,
  "liquidated": false
}
```

Pool after lending:

```json
{
  "lended": 100000000000,
  "borrowed": 0,
  "repaid": 0,
  "rewards": 0,
  "collateralTokenAmount": 0,
  "liquidatedCollateral": 0,
  "collateralTokenAmountAtLiquidation": 0,
  "rewardPerToken": 0,
  "rewardRate": 0,
  "lastUpdated": 1702328455,
  "endTime": 1704920451,
  "collateralDetails": {
    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    "collateralTokenFactor": 115,
    "collateralTokenPercentage": 60
  },
  "interest": 10,
  "liquidated": false
}
```

There are some attributes to track like `lended`, `lastUpdated`, `rewardPerToken` and `rewardRate`. On the first call when someone lends, the current values of the pool are making them to have a value of 0 which seems like no update happened on them.

### Event #3 (borrowing)

- Only existing and active pools will allow the process to go through the rest of the flow.

- To be able to borrow, the pool should have enough funds to cover the loan that is equivalent to `lent + repaid + rewards - borrowed) < amount_to_borrow`.

- The contract will calculate the collateral based on the amount to borrow and the collateral price using the `chainlink` price feed (oracle), once all values are calculated, the contract will ask for token transfer from the collateral address, for this example it can be GOLD and SILVER but the contract allows any contract that follows the `ERC20` standard.

- When the collateral tokens are transferred to the contract, a borrowing record is added to save the borrowing information and some pool values updates will occur like the amount the pool has lent and the new total collateral token amount the pool has.

- A last safe USDC token transfer is made to the borrower which represent the amount the pool is lending.

- The update reward method is called.

- An event `BorrowEvent` is emitted.

This is how it looks after the `borrow` function call.

The before pool state is the same as the last object.

Pool after borrowing:

```json
{
  "lended": "100000000000",
  "borrowed": "10000000000",
  "repaid": "0",
  "rewards": "0",
  "collateralTokenAmount": "310005811536712244302",
  "liquidatedCollateral": "0",
  "collateralTokenAmountAtLiquidation": "0",
  "rewardPerToken": "0",
  "rewardRate": "317097919",
  "lastUpdated": 1702329114,
  "endTime": 1704921108,
  "collateralDetails": {
    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    "collateralTokenFactor": 115,
    "collateralTokenPercentage": 60
  },
  "interest": 10,
  "liquidated": false
}
```

### Event #4 (repaying)

- Only existing and active pools will allow the process to go through the rest of the flow.

- To repay a loan there are two main criterias the contract will check to validate if the borrower can repay it, the first one is to confirm that the pool is still in its active period, if not, then the pool will use the collateral token to covert any outstanding amount, and the second validation is if the loan has not been already paid.

- Once the validations are passed, the contract will calculate the interest for the lent amount the borrow will need to pay.

- The contract will ask for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. Once it has finished, the contract will return the collateral tokens to the borrower.

- The update reward method is called.

- An event `RepayEvent` is emitted.

The before pool state is the same as the last object.

Pool after repaying:

```json
{
  "lended": "100000000000",
  "borrowed": "10000000000",
  "repaid": "10000000000",
  "rewards": "27397355",
  "collateralTokenAmount": "0",
  "liquidatedCollateral": "0",
  "collateralTokenAmountAtLiquidation": "0",
  "rewardPerToken": "273973553309757",
  "rewardRate": "0",
  "lastUpdated": 1703196299,
  "endTime": 1704924290,
  "collateralDetails": {
    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    "collateralTokenFactor": 115,
    "collateralTokenPercentage": 60
  },
  "interest": 10,
  "liquidated": false
}
```

Now the repaid total amount is updated after the user repays the loan leaving the pool with the full lent amount available to lend.

### Event #5 (claiming)

- Only existing and active pools will allow the process to go through the rest of the flow.

- In order to claim the rewards, the pool active period should be over and not completed (liquidated collateral equal to cero and collateral token amount different from 0 and not liquidated).

- Once the validations are done, the contract will pay the rewards that belongs to the lender. This is calculated with the following formula:

  ```plaintext
  lent amount + ( ( reward per token - reward per token ignored ) * lent amount ) / 1e18 )
  ```

- An event `ClaimRewardsEvent` is emitted.

The before pool state is the same as the last object.

Pool after claiming:

```json
{
  "lended": "100000000000",
  "borrowed": "10000000000",
  "repaid": "10000000000",
  "rewards": "27397355",
  "collateralTokenAmount": "0",
  "liquidatedCollateral": "0",
  "collateralTokenAmountAtLiquidation": "0",
  "rewardPerToken": "273973553309757",
  "rewardRate": "0",
  "lastUpdated": 1703199699,
  "endTime": 1704927690,
  "collateralDetails": {
    "collateralToken": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    "collateralTokenChainlink": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    "collateralTokenFactor": 115,
    "collateralTokenPercentage": 60
  },
  "interest": 10,
  "liquidated": false
}
```

It's the same, that's because the only data that is updated is the lending information and after claiming, this object looks like this:

```json
{
  "amount": "100000000000",
  "rewardPerTokenIgnored": "0",
  "claimed": true
}
```

Since no other user lent money to the pool the `rewardPerTokenIgnored` for Alice is 0 allowing her to claim the full reward.
