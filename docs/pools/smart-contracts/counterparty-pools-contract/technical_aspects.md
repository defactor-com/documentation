---
id: counterparty-pools-technical-aspects
title: Technical Aspects
sidebar_position: 2
tags:
  - Technical Aspects
---

## Dependencies

- OpenZeppelin Contracts (Upgradeable)
- `Pools.storage.sol` for storage-related operations

---

## Contract: Pools

- Inherits:

  - `PoolsStorage`
  - `AccessControlUpgradeable`
  - `PausableUpgradeable`
  - `ReentrancyGuardUpgradeable`
  - `IERC721ReceiverUpgradeable`
  - `IERC1155ReceiverUpgradeable`

- Uses `SafeERC20Upgradeable` for ERC20 token operations.

### Constants

- `POOL_FEE`: Fixed fee for pool creation.
- `LOAN_TAKEN_FEE_PERCENTAGE`: Fee percentage for taken loans.
- `MIN_POOL_CLOSED_TIME`: Minimum time before a pool can be archived.
- `COLLECT_POOL_MAX_TIME`: Maximum time for collecting funds from a pool.
- `INTEREST_DECIMAL_PLACES`: Use to adjust the decimals in the interest rate calculation.

### Functions

- `__Pools_init`: Initializes the contract with USDC token.
- `getPool`: Retrieves a pool by index.
- `createPool`: Create a new funding pool, pool status default is CREATED.
- `commitToPool`: Commits funds to a pool, only available for pools with CREATED status.
- `collectPool`: Collects funds from a pool that has reached its goal, changes pool status to ACTIVE.
- `depositRewards`: Deposits rewards into an active pool.
- `closePool`: Closes an active pool.
- `archivePool`: Archives a pool.
- `uncommitFromPool`: Un-commit funds from a pool.
- `claim`: Claims rewards from a pool.
- `withdrawFeesCollected`: Withdraws collected fees by the admin.
- `adminWithdrawAll`: Allows admin to withdraw all funds when paused.
- `claimRewardsForUsers`: Allows pool owner or admin to claim rewards for user if more than 60 days has passed from pool closing.
- `uncommitForUsers`: Allows pool owner or admin to uncommit for user if more than 60 days has passed from pool deadline.
- `pause`: Pauses the contract.
- `unpause`: Unpauses the contract.
- Private helper functions for token transfers.

### Events

- `PoolCreated`
- `CommittedToPool`
- `UncommittedFromPool`
- `PoolCollected`
- `RewardsDeposited`
- `PoolClosed`
- `RewardsClaimed`
- `PoolArchived`

### Custom Errors

- `PoolDoesNotExists`
- `SoftCapMustBeLessThanHardCap`
- `DeadlineMustBeInFuture`
- `PoolStatusMustBeCreated`
- `PoolStatusMustBeActive`
- `MustDepositAtleastCommittedAmount`
- `PoolDeadlineReached`
- `PoolDeadlineNotReached`
- `PoolHardCapReached`
- `MustBePoolOwner`
- `PoolSoftCapNotReached`
- `CannotCollect30DaysAfterDeadline`
- `PoolStatusMustBeClosedForAtLeast60Days`
- `PoolStatusMustBeEitherClosedOrCreated`
- `PoolStatusMustBeEitherClosedOrActive`
- `PoolStatusMustBeAtLeast60DaysPastDeadline`
- `CannotBeZeroAddress`
- `DeadlineMustNotBeMoreThan1YearInTheFuture`
- `MustBePoolOwnerOrAdmin`
- `PoolIsNotEmpty`
- `PoolOwnerCannotCommitToHisOwnPool`
- `PoolSoftCapReached`
- `PoolStatusMustBeClosed`
- `RewardsHaveNotYetBeenPaidOut`

---

## Notes

- This contract uses OpenZeppelin's upgradeable contracts to ensure future compatibility and improvements.
- It has multiple functionalities related to pool management, such as creating pools, committing to pools, and handling pool rewards.
