---
id: smart-contract-staking-technical-aspects
title: Technical Aspects
sidebar_position: 1
tags:
  - Technical Aspects
---

## Overview

`Staking.sol` is a smart contract for staking tokens in a DeFi environment. It allows users to stake tokens in different plans with various lock durations and APYs (Annual Percentage Yields).

## Dependencies

- OpenZeppelin Contracts (Upgradeable)
- `Staking.storage.sol` for storage operations

## Contract: Staking

- Inherits:

  - `StakingStorage`
  - `AccessControlUpgradeable`
  - `PausableUpgradeable`

- Uses `SafeERC20Upgradeable` for safe ERC20 token operations.

### Constants

- `PERCENTAGE_MULTIPLIER`: Used for APY calculations.
- `MIN_STAKE_AMOUNT`: Minimum staking amount required.

### Functions

- `__Staking_init`: Initializes the contract with token, staking, and rewards end time.
- `stake`: Allows users to stake tokens in a specific plan.
- `unstake`: Unstakes tokens and claims rewards.
- `restake`: Restakes tokens with earned rewards into a new plan.
- `claimRewards`: Claims rewards for a specific stake.
- `balanceOf`: Returns the total balance (staked amount + rewards) of a user.
- `getUserStakes`: Retrieves all stakes of a user.
- `getPlans`: Returns all available staking plans.
- `addPlan`: Allows admin to add a new staking plan.
- `pause`: Pauses the contract (admin only).
- `unpause`: Unpauses the contract (admin only).
- `withdraw`: Withdraws a specified ERC20 token to a given address (admin only).
- `setDates`: Sets staking and rewards end times (admin only).
- Private helper functions for stake retrieval and reward calculation.

### Events

- `Staked`
- `Unstaked`
- `Claimed`

### Custom Errors

- `StakingCantBeLessThanRewardsEnd`
- `StakeAlreadyUnstaked`
- `InvalidStakeIndex`
- `StakeAmountTooLow`
- `StakingHasEnded`
- `StakeIsLocked`
- `InvalidPlan`

## Notes

- The contract uses OpenZeppelin's upgradeable contracts for future compatibility.
- It provides flexibility in staking with different plans and lock periods.
- The contract ensures safe handling of staking, unstaking, and claiming rewards.
