---
id: staking-smart-contract
title: Introduction
sidebar_position: 1
tags:
  - Staking
---

`Staking.sol` this contract allows users to create, manage, and interact with stakes to pools using `ERC20` tokens standard.

## Contract versions

This contract has one audited version, but there are some development in progress to use the same base contract but with a variable reward rate.

For this first iteration, the contract will only have a fixed reward rate and in future versions, the variable reward rate will be integrated.

## Staking Smart Contract Documentation

### Overview

The Staking contract allows users to stake ERC20 tokens and earn rewards based on predefined plans or new plans created by the admin.

### Dependencies

- `SafeERC20Upgradeable`: Safe operations for ERC20 tokens.
- `AccessControlUpgradeable`: Role-based access control.
- `PausableUpgradeable`: Emergency stop mechanism.

### Constants

- `PERCENTAGE_MULTIPLIER`: Multiplier for percentage calculations (100).
- `MIN_STAKE_AMOUNT`: Minimum amount required to stake (1000 ether).

### Roles

Staking contract has two main roles:

#### Admin

Responsible for managing the contract. The admin can add new plans, pause and unpause the contract for any security reason, withdraw funds from the contract and set staking end dates and rewards.

#### Client

The client can stake tokens, un-stake tokens, claim rewards, re-stake and withdraw the earnings.

### Plan

The contract supports multiple staking plans. Each plan has a unique id, lock duration, and apy. Every stakes must be associated with a plan. Interactions with the plans are limited by the global values of `stakingEndTime` and `rewardsEndTime`, for example, no stakes are allowed if `stakingEndTime` is in the past.

When the contract is instantiated, by default, three plans are created with 0, 90 and 180 lock duration with 5, 10 and 25 apy configuration respectively.

The values for a plan are:

- `id`: Unique identifier for the plan.
- `lockDuration`: Duration in seconds for the stake to be locked.
- `apy`: Annual percentage yield for the plan.
- `status`: Status of the plan (active or inactive). The state of the plans can change if `setDates` function is called.

### Stake

By default, when a user stakes, its status is `STAKED` (locked). After the lock duration ends, the status changes to `UNLOCKED`. The user can then claim rewards, optionally, the user can un-stake.

- `planId`: The plan the stake will belong.
- `amount`: The amount of tokens to stake.
- `claimed`: The amount of tokens claimed.
- `status`: The status of the stake (STAKED, UNLOCKED, UNSTAKED).
- `unstaked`: A flag to indicate if the stake was un-staked.
- `stakeTime`: The time the stake was created.

### Functions

#### Admin

- `addPlan`: Add a new plan to the contract.
- `setDates`: Set the staking end time and rewards end time. If dates are set in the past, `stake` and `restake` functions will start reverting with the error `StakingHasEnded`.
- `pause`: Pause the contract. If paused, the contract will revert all transactions for `stake`, `unstake`, `restake` and `claimRewards`.
- `unpause`: Unpause the contract.
- `withdraw`: Withdraw tokens from the contract.

#### User

- `stake`: Stake tokens. The user must approve the contract to spend the tokens.
- `unstake`: Un-stake tokens. The user can only un-stake after the lock duration ends and the stake is not already un-staked.
- `restake`: Re-stake tokens. The user can only re-stake after the lock duration ends and the stake is not already un-staked. This action is equivalent to un-stake and stake again.

### Rewards

Every stake will earn rewards based on the plan's apy, even if the stake plan period is over it will keep earning rewards using the 5 apy from the default first plan that is created when the contract is instantiated. The rewards are calculated based on the time the stake was created. The rewards are calculated using the following formula:

```solidity
plan_rewards = (staked_amount * apy * time) / (100 * 365 days)
after_plan_rewards = (staked_amount * 5 * time_after) / (100 * 365 days) // 5 is the default apy

rewards = plan_rewards + after_plan_rewards - claimed
```

> Note: Some attributes and status in plan and stake entities are extended by the backend to give a more precise information.
