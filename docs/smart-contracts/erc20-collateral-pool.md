---
sidebar_position: 2
---
# ERC20CollateralPool Smart Contract

## Overview

The `ERC20CollateralPool` smart contract, designed for the EVM based blockchains, manages a pool of collateralized loans using ERC20 tokens. It facilitates lending, borrowing, and reward distribution in a decentralized finance (DeFi) ecosystem.

## Pool

The pool is a structure that keeps track of lenders, borrowers, and total balance for USDC and collateral tokens, which are essential for the proper functioning of the flow.

This pool has some important characteristics:

- It has an end time, referred to in this document as the `active period time of the pool`. Once this period concludes, neither lending nor borrowing will be allowed.
- The pool has a variable reward rate that depends on the volume of lending and borrowing transactions during its active period.
- This pool is primarily designed to support USDC tokens for lending and borrowing, but it can accommodate any other contract that adheres to the ERC20 token standard with a `token precision of 6`. It also supports any other ERC20 token as collateral, regardless of precision.
- The pool has a collateral token factor, which is used to calculate the amount of collateral token a borrower will need to provide to borrow from the pool.
- A pool can only have one type of collateral token.

## Roles

The smart contract caters to two types of users: the administrator (`admin`), responsible for managing the contract by pausing it and overseeing pool-related duties; and the pool users (`client`), who can lend, borrow, repay, and claim rewards.

### admin

- The address specified in the contract initialization will be the admin for the contract.
- Will be responsible for pausing and un-pausing the contract if any risk is detected.
- Can add new pools after the initialization of the contract, announce a pool edit, commit the edit or cancel the edit.

<img src="../../../../docs/images/flowchart/ERC20CollateralPool_initialize.png" alt="Admin Flowchart" style="{{max-width:300px;}}"/>

<br/>

<img src="../../../../docs/images/flowchart/ERC20CollateralPool_createnewpool.png" alt="Admin Flowchart" style="{{max-width:300px;}}"/>

### client

The contract provides a set of actions for clients, enabling them to interact with it. Clients can lend, borrow, repay, claim rewards, and retrieve unliquidated collateral, among other functionalities.

#### lend

When the user lends their money to the pool, the contract asks for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. A registry is added to the pool to represent the amount of USDC tokens the user have lent to the pool.

<img src="../../../../docs/images/flowchart/ERC20CollateralPool_lend.png" alt="Admin Flowchart" style="{{max-width:300px;}}"/>

#### borrow

When the user borrows from a given pool, the contract asks for a certain amount of collateral assets as a safe mechanism to ensure the borrower will come back and pay the loan; otherwise, the pool will use the collateralized amount to pay the loan, and the rest will be liquidated. To avoid getting liquidated, the borrower must pay the loan with interest (due to the time the pool has lent money) before the pool ends.

<img src="../../../../docs/images/flowchart/ERC20CollateralPool_borrow.png" alt="Admin Flowchart" style="{{max-width:300px;}}"/>

#### repay

The borrower can pay the loan anytime before the pool's time ends to avoid getting liquidated. The contract asks for USDC token approval to transfer the USDC tokens from the user's wallet to the pool. The contract calculates the interest and the amount of USDC tokens to be paid, so the borrower will have to pay the exact amount of USDC tokens lent plus an interest of the amount the loan has been taken in terms of time. Every pool has a different interest rate, so the interest rate is calculated based on the pool the user is interacting with. The interest to pay is calculated as `(pool.interest * borrowObj.amount * (block.timestamp - borrowObj.borrowTime)) / (ONE_YEAR * HOUNDRED)`.

To break this formula down into something easier to read, we can say: the amount to pay is the interest accrued on a borrowed amount over a period of time, considering the interest rate of the pool.

<img src="../../../../docs/images/flowchart/ERC20CollateralPool_repay.png" alt="Admin Flowchart" style="{{max-width:300px;}}"/>

#### claim rewards and claim multiple

The pool allows lenders to claim rewards based on the amount they have lent plus a reward per token, which is calculated based on the lend and borrow activity on the pool. To do so, the pool must have finished the active period.

The other action the user can interact with is `claim multiple`, it's the same as claim rewards with a minor difference. Instead of only claiming the rewards for a lending position, it'll claim all the rewards for all the lending positions the user has on the specified pool.

<img src="../../../../docs/images/flowchart/ERC20CollateralPool_claim_rewards.png" alt="Admin Flowchart" style="{{max-width:300px;}}"/>

#### claim unliquidated collateral

To reduce the risk of losing funds for lenders and keeping the pool as healthy as possible, the pools have the collateral tokens every borrower puts into them. If a borrower doesn't pay the loan, the pool will use the collateral to pay it, and the rest will be liquidated. If there is any left, the borrower can claim it back based on the amount of their collateral.

> There is always a risk of losing funds tied to the market volatility for the collateralized assets.

<img src="../../../../docs/images/flowchart/ERC20CollateralPool_claimunliquidatedcollateral.png" alt="Admin Flowchart" style="{{max-width:300px;}}"/>

## Technical Description

### In-depth Actions

The happy path for this Smart Contract begins with the initialization of a pool and then a lender engages with the contract to lend money to the pool to allow a borrower interacts with the contract by borrowing according to the amount of money they need from the pool. A question that may arise in this point is what happen if the borrower decide to steal the loan (do not repay it), to avoid this scenario the borrower must provide collateral tokens that support the loan they are taking.

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

As an example, the first time someone lends to the pool, the `rewardPerToken` will be `0`, the `rewardRate` will be the interest rate of the pool, and the `lastUpdated` will be the timestamp of the block when the first lender lends to the pool. The next time someone lends to the pool, the `rewardPerToken` will be updated based on the time passed since the last time someone lent to the pool, the `rewardRate` will be updated based on the amount of money borrowed, and the `lastUpdated` will be updated to the timestamp of the block when the last lender lends to the pool, and so forth until the pool finishes its active time.

Lets consider the following example to better understand how this flow works:

### Pool lifecycle

Event #1 -> _Contract is initialized with one pool having gold as collateral and USDC as the lending token_.
Event #2 -> Alice lends $100k to the pool.
Event #3 -> Bob borrows $10k from the pool.
Event #4 -> After 10 days, Bob repays the loan.
Event #5 -> After 30 days, Alice can claims her rewards.

In this example, the information is focus on how the contract behaves in the previous events.

#### Event #1 (contract initialization)

- The contract is initialized by setting the admin, the USDC token, and the pools.

#### Event #2 (lending)

- Only existing and active pools will allow the process to go through the rest of the flow.

- The contract will ask for USDC token approval to transfer the USDC tokens from the user's wallet to the pool.

- The update reward method is called.

- A lending record is added to save the lending information.

- An event `LendEvent` is emitted.

- This is how it looks before and after the `lend` function call.

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

There are some attributes to track like `lended` and `lastUpdated` that are updated but not only them were updated the variables `rewardPerToken` and `rewardRate` were also updated, what happened is that in the first call when someone lends, the current values of the pool are making them to have a value of 0 which seems like there were no update on them.

#### Event #3 (borrowing)

- Only existing and active pools will allow the process to go through the rest of the flow.

  To be able to borrow, the pool should have enough funds to cover the loan which should be `lended + repaid + rewards - borrowed) < amount_to_borrow`.

- The contract will calculate the collateral based on the amount to borrow and the collateral price using the `chainlink` price feed (oracle), once all values are calculated, the contract will ask of token transfer from the collateral address, for this example it can be GOLD and SILVER but the contract allows any contract that follows the ERC20 standard.

- When the collateral tokens are transferred to the contract, a borrowing record is added to save the borrowing information and some pool values updates will occur like the amount the pool has lended and the new total collateral token amount the pool has.

- A last safe USDC token transfer is made to the borrower which represent the amount the pool is lending to the borrower.

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

#### Event #4 (repaying)

- Only existing and active pools will allow the process to go through the rest of the flow.

- To repay a loan there are two main criteria the contract will check to allow the borrower to repay it, the first one is to check if the pool is still in its active period, if not, then the pool will use the collateral token to covert any outstanding amount, the second validation is if the loan has not been already paid.

- Once the validations are passed, the contract will calculate the interest for the lent amount the borrow will need to pay.

- The contract will ask for USDC token approval to transfer the USDC tokens from the user's wallet to the pool once it's finished the contract will return the collateral tokens to the borrower.

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

Now the repaid total amount is updated after the user repays the loan leaving the pool with the full lended amount available to lend.

#### Event #5 (claiming)

- Only existing and active pools will allow the process to go through the rest of the flow.

- In order to claim the rewards, the pool active period should be over and not completed (liquidated collateral equal to cero and collateral token amount different from 0 and not liquidated).

- Once the validations are done, then the contract will pay the rewards that belongs to the lender. This is calculated with the following formula:

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

It's the same, that's because the only data that is updated is the lending information and after claim, this object looks like this:

```json
{
  "amount": "100000000000",
  "rewardPerTokenIgnored": "0",
  "claimed": true
}
```

Since no other user lent money to the pool the `rewardPerTokenIgnored` for Alice is 0 allowing her to claim the full reward.

## Technical Aspects

### Contract Modules

- **ERC20CollateralPool.sol**: Main contract.
- **ERC20CollateralPool.interface.sol**: Interface for contract structures and events.
- **ERC20CollateralPool.storage.sol**: Storage contract for state management.
- **AggregatorV3Interface.sol**: Interface for Chainlink price feeds.

### Key Components

#### Constants

- `LIQUIDATION_PROTOCOL_FEE`: Fixed fee for liquidation.
- `LIQUIDATION_FEE`: Additional liquidation fee.
- `OZ_IN_G`: Ounces to grams conversion constant.
- `ONE_YEAR`: One year in seconds.
- `HOUNDRED`: Constant for percentage calculations.

#### Initialization

- `__ERC20CollateralPool_init`: Initialize the contract with admin, USDC token, and pools.

#### Pool Management

- `addPool`: Add a new pool.
- `announceEditPool`: Announce upcoming pool edits.
- `commitEditPool`: Commit announced pool edits.
- `cancelEditPool`: Cancel announced pool edits.

#### Contract Control

- `pause` / `unpause`: Pause or unpause contract operations.

#### User Interactions

- `lend`: Lend USDC to a pool.
- `borrow`: Borrow USDC against collateral.
- `repay`: Repay borrowed USDC with interest.
- `claimRewards`: Claim rewards after pool closure.
- `claimUnliquidatedCollateral`: Claim back collateral if not repaid.
- `liquidatePool`: Liquidate a pool after closure.

#### Calculation Utilities

- `calculateRepayInterest`: Calculate repayment interest.
- `calculateCollateralTokenAmount`: Calculate required collateral token amount.

#### View Functions

- `getPools`: Get details of all pools.

#### Error Handling

Defined errors for exceptional scenarios, like `PoolEndsAtIsInThePast` and `AdminMustNotBeZeroAddress`.

#### Event Logging

Events like `LendEvent`, `BorrowEvent`, and `RepayEvent` for activity tracking.

#### Security Features

- **Pausable**: Stop activities in emergencies.
- **Access Control**: Restricted functions for specific roles.
- **Chainlink Integration**: For accurate price information.

#### Dependencies

Uses OpenZeppelin's `SafeERC20Upgradeable`, `AccessControlUpgradeable`, `PausableUpgradeable`, and math utilities.

#### Upgradeability

Designed with OpenZeppelin's upgradeable contracts framework.

#### Important Considerations

- **Precision and Rounding**: Handle mathematical calculations accurately.
- **Time Dependencies**: Time-sensitive functions need careful handling.
- **Security**: Regular audits and reviews are recommended.
