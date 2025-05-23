---
id: staking-v2-contract-actions
title: Contract Actions
sidebar_position: 2
tags:
  - Contract Actions
---

`Staking.sol` is a modular, upgradeable smart contract that enables users to stake ERC20 tokens in predefined plans to earn rewards over time. Each plan has configurable parameters such as lock duration, APY, staking and reward tokens, and staking caps. Rewards are calculated dynamically and can be claimed at any time or upon unstaking.

---

## Dependencies

- OpenZeppelin Contracts (Upgradeable):
  - `AccessControlUpgradeable`
  - `PausableUpgradeable`
  - `ReentrancyGuardUpgradeable`
  - `SafeERC20Upgradeable`
- Internal:
  - `StakingStorage.sol` – Storage structure for plans, stakes, and token ratios

---

## Contract: Staking

- Inherits:

  - `StakingStorage`
  - `AccessControlUpgradeable`
  - `PausableUpgradeable`
  - `ReentrancyGuardUpgradeable`

- Uses `SafeERC20Upgradeable` for secure token transfers and `AccessControl` for permissioned actions.

### Functions

#### Initialization

- `__Staking_init`: Initializes the contract and assigns the admin role.

#### Core Staking Actions

- `stake`: Stakes a specified amount in a selected plan. Verifies plan validity and minimum amount.
- `unstake`: Allows users to withdraw staked tokens after lock period and optionally claim rewards.
- `restake`: Re-stakes principal and optional rewards into a new plan.
- `claimRewards`: Claims rewards from a single stake.
- `claimAllRewards`: Iterates over all user stakes and claims all available rewards.

#### Read Functions

- `balanceOf`: Returns the total staked amount and claimable rewards for a specific token.
- `calculateStakeRewardByIndex`: Returns the computed reward for a stake at a specific timestamp.
- `calculateStakeRewardsForUser`: Returns all rewards across user stakes at a given time.
- `getUserStakes`: Returns all stakes for a user.
- `getUserStake`: Returns a specific stake for a user.
- `getPlans`: Returns all staking plans.
- `getPlanTokenRatios`: Returns the token ratio history for a given plan.

#### Admin Functions

- `addPlan`: Adds a new staking plan with configurable parameters and an initial reward ratio.
- `editPlan`: Updates parameters of an existing plan (e.g., cap, lock duration, APY).
- `changeTokenRatioForPlan`: Appends a new token reward ratio entry for dynamic reward calculation.
- `pause`: Pauses all staking operations.
- `unpause`: Unpauses the contract and resumes operations.

### Internal Logic

- `_getUserStake`: Returns a reference to a stake from storage and reverts if index is invalid.
- `_calculateStakeReward`: Computes the full reward amount for a given stake across historical token ratios.
- `_calculatePartialReward`: Helper function for reward calculation during a time window using APY and ratio.
- `_checkIfPlanAlreadyExists`: Prevents duplicate plans with identical parameters.
- `_checkIfEnoughTokensToPayRewards`: Verifies sufficient reward token balance exists for payouts.

### Events

- `Staked`: Emitted when a user stakes into a plan.
- `Unstaked`: Emitted when a user unstakes and receives rewards.
- `UnstakedWithoutRewards`: Emitted when unstaking occurs but no reward payout is possible.
- `Claimed`: Emitted when rewards are claimed.
- `PlanAdded`: Emitted when a new staking plan is created.
- `PlanEdited`: Emitted when an existing plan is modified.
- `TokenRatioChanged`: Emitted when a new token ratio is added to a plan.

### Custom Errors / Validations

- `StakeAmountTooLow`
- `StakingHasEnded`
- `StakeIsLocked`
- `StakeAlreadyUnstaked`
- `RestakedWithWrongToken`
- `InvalidStakeIndex`
- `InvalidPlan`
- `PlanAlreadyExists`
- `RewardAlreadyClaimed`
- `NotEnoughTokensToRepayReward`
- `RewardEndTimeTooLow`
- `TimestampInThePast`
- `TokenRatioChangedTooManyTimes`
- `RewardEndTimePassed`
- `MaxStakedReached`

---

## Notes

- Staking plans are highly configurable and support dynamic token ratios for flexible reward structures.
- All staking logic is backed by safety checks and customizable error handling.
- Modular and upgradeable for evolving token economics and governance requirements.
- Built-in slippage resistance through strict token balance validations for reward payouts.
