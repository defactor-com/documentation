---
id: staking-contract-overview
title: Staking Contract Overview
sidebar_position: 1
tags:
  - Staking
---

`Staking.sol` is a modular, upgradeable smart contract that allows users to stake ERC20 tokens in predefined plans to earn rewards over time. It supports multiple staking strategies, lock periods, and dynamic reward distribution via token ratio tracking.

---

## Contract Versions

This contract is in production and supports upgradeable functionality using OpenZeppelin’s proxy patterns. Future iterations may include auto-compounding features and integrations with governance mechanisms.

---

## Staking Smart Contract Documentation

### Overview

The Staking contract enables users to deposit ERC20 tokens into various staking plans. Each plan has its own configuration for lock duration, minimum and maximum staking amounts, and reward APY. Users can stake, unstake, restake, and claim rewards, with support for dynamic APY changes through token ratios.

### Dependencies

- `IERC20Upgradeable`: Interface for ERC20 tokens.
- `SafeERC20Upgradeable`: Secure ERC20 operations.
- `AccessControlUpgradeable`: Role-based access.
- `PausableUpgradeable`: Emergency pause mechanism.
- `ReentrancyGuardUpgradeable`: Prevents re-entrancy attacks.
- `StakingStorage.sol`: Internal storage and struct declarations.

### Constants

- `BPS_DIVIDER`: Basis point calculation (10,000).
- `RATIO_DECIMALS_DIVIDER`: Ratio precision scaling (1e18).

### Roles

- **DEFAULT_ADMIN_ROLE**: Can add/edit plans, pause/unpause, and update reward ratios.

### Staking

Each stake is associated with a plan and contains:

- `stakedAmount`: Total amount staked.
- `claimedAmount`: Total rewards claimed.
- `stakeTime`: Timestamp of staking.
- `unstakeTime`: Timestamp of unstaking.
- `planId`: ID of the selected plan.
- `unstaked`: Whether the stake has been withdrawn.
- `claimed`: Whether all rewards have been claimed.

Plans contain configuration such as:

- `stakingToken`: Token being staked.
- `rewardToken`: Token used for rewards.
- `maxStaked` / `minStakeAmount`
- `stakingEndTime` / `rewardEndTime`
- `lockDuration`: Time funds are locked before unstaking.
- `apy` and `apyAfterUnlock`: Reward APY before/after lock.

### Withdrawals

Users can unstake funds and claim rewards after lock duration:

- `unstake`: Withdraws principal and optionally rewards.
- `claimRewards`: Claims rewards for one stake.
- `claimAllRewards`: Claims rewards across all stakes.
- Rewards are calculated based on APY and historical token ratios.

### Functions

#### Core Functions

- `stake`: Stakes tokens into a selected plan.
- `unstake`: Withdraws staked tokens and optionally rewards.
- `restake`: Moves funds (and possibly rewards) to a new plan.
- `claimRewards`: Claims rewards for one stake.
- `claimAllRewards`: Batch claim across user stakes.

#### Admin

- `addPlan`: Adds a new staking plan.
- `editPlan`: Updates an existing plan.
- `changeTokenRatioForPlan`: Adjusts reward ratio mid-plan.
- `pause`: Halts staking/unstaking/claiming.
- `unpause`: Resumes contract activity.

#### View Functions

- `balanceOf`: Total stake + rewards.
- `calculateStakeRewardByIndex`: Returns reward for a specific stake.
- `calculateStakeRewardsForUser`: Returns all computed rewards.
- `getUserStakes`: Returns all stakes for a user.
- `getPlans`: Returns all active plans.
- `getPlanTokenRatios`: Returns token reward ratio changes per plan.

### Events

- `Staked`: Emitted when tokens are staked.
- `Unstaked`: Emitted when tokens and rewards are withdrawn.
- `UnstakedWithoutRewards`: Emitted when only principal is returned.
- `Claimed`: Emitted when rewards are claimed.
- `PlanAdded`: New staking plan added.
- `PlanEdited`: Existing plan updated.
- `TokenRatioChanged`: Reward ratio adjusted.

### Custom Errors

- `StakeAmountTooLow`: Stake doesn't meet minimum.
- `StakingHasEnded`: Cannot stake after end time.
- `StakeIsLocked`: Lock period not yet completed.
- `StakeAlreadyUnstaked`: Stake already withdrawn.
- `RestakedWithWrongToken`: Mismatched token in restake.
- `InvalidStakeIndex`: Stake index doesn't exist.
- `InvalidPlan`: Plan does not exist.
- `PlanAlreadyExists`: Duplicate plan configuration.
- `RewardAlreadyClaimed`: Rewards already withdrawn.
- `NotEnoughTokensToRepayReward`: Insufficient contract balance.
- `RewardEndTimeTooLow`: Reward end must exceed stake+lock time.
- `TimestampInThePast`: Plan dates cannot be in the past.
- `TokenRatioChangedTooManyTimes`: Max ratio changes reached.
- `RewardEndTimePassed`: Can't modify expired plans.
- `MaxStakedReached`: Plan staking cap reached.

### Security Considerations

- **Upgradeable Design**: Uses OpenZeppelin Initializable to support contract upgrades.
- **Dynamic APY**: Supports reward strategy changes through token ratios.
- **Time-Based Logic**: Lock and reward windows enforced via timestamps.
- **Role-Based Permissions**: Admin-only access for sensitive functions.
- **Token Accounting**: Ensures sufficient balance for reward payouts.

> 📌 *The staking contract is designed for flexibility across use cases, including variable lock periods, restaking strategies, and APY management.*
