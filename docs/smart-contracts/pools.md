# Defactor Pools Documentation

## Overview

`Pools.sol` is a smart contract for managing pools in a decentralized finance (DeFi) ecosystem. This contract allows users to create, manage, and interact with funding pools using ERC20, ERC721, and ERC1155 tokens.

## Pool

The pool is a structure that keeps track of total committed, total rewarded, borrower (pool creator), between other that are essential for the proper functioning of the flow.

This pool has some important characteristics:

- Every pool has a soft cap, hard cap and a deadline. The soft cap will be the minimum amount of funds that the pool must reach to be considered `ACTIVE`. The hard cap will be the maximum amount of funds that the pool can reach. The deadline will be the maximum time that the pool will be open to receive funds and be rewarded by the borrower. If the pool owner (the borrower) try to collect the pool before reaching the soft cap, the contract will return an error reverting the transaction but it will also no only restrict the pool owner of collecting the funds but also the lender if they try to un-commit from the pool before it reaches the soft cap. In the other hand, the hard cap will be used to revert transactions if a lender tries to commit to a pool and it overpasses the hard cap. The deadline will be used to revert transactions if someone tries to collect, archive, commit, un-commmit in a wrong time.
- This pool has the advantage to receive 3 types of tokens as collaterals that follows the `ERC721`, `ERC1155` and `ERC20`. The pool owner is allowed to provide collaterals with this three standards at the same time.
- By default, the pool status when it is created is `CREATED`. When the pool reaches the soft cap and the owner collect it, the pool status will be changed to `ACTIVE`. When the owner decides to close it, the pool status will be updated to `CLOSED` and finally, when the pool is archived, the pool status will be `ARCHIVED`.

## Roles

The smart contract caters to three types of users: the infrastructure provider which is the admin of the contract that, the pool owner that can be interpreted as the borrower and the lender that is the account who lends money to the pool owner.

### admin

When a new instance of this contract is created, the creator will be by default the admin of the contract and will have the ability to collect the fees that the contract generates, withdraw all USDC funds the contract has and pause and unpause the contract for security reasons.

### pool owner

It's in charged of managing its own pool. It can create a new pool, collect the funds from the pool, close the pool and archive the pool. It can also deposit rewards to the pool.

#### collect a pool

This action allows the pool owner to collect the funds from the pool. This action can only be performed once when the pool status is `CREATED` and the pool has reached the soft cap. If the pool owner tries to collect the funds before reaching the soft cap or collecting it twice, the transaction will be reverted.

#### deposit rewards

After the collecting phase, the borrower (pool owner) will have to pay the rewards to the lenders. This action is made for that purpose when the pool status is still `ACTIVE`.

#### close a pool

A pool owner can close the pool anytime if and only if two conditions are meet:

- Pool must be `ACTIVE`.
- The total committed to the pool must be equal or greater than the total rewards.

#### archive a pool

A pool can be archived by two roles, the pool owner and the contract admin but for both cases the pool needs to be `CLOSED` or `CREATED`. If the pool status is `CLOSED`, then a minimum of `pool close time + 60 days` needs to be passed to archive the pool. If the pool status is `CREATED`, then a minimum of `pool deadline + 60 days` needs to be passed to archive the pool, otherwise the transaction will be reverted.

### lender

It's in charged of lending money to the pools. It can commit to a pool, un-commit from a pool and claim rewards from a pool.

#### commit to a pool

This action allows the lender (investor) to commit to a pool. This action can only be performed when the pool status is `CREATED` and the pool has not reached the hard cap. If the lender tries to commit to a pool that has reached the hard cap or the pool status is not `CREATED`, the transaction will be reverted.

#### un-commit from a pool

This action allows the lender (investor) to un-commit from a pool. This action can only be performed when the pool status is `CREATED` and the pool has not reached the soft cap. If the lender tries to un-commit from a pool that has reached the soft cap or the pool status is not `CREATED`, the transaction will be reverted.

The lender is only allowed to un-commit from the pool during the period of `deadline and deadline + 60 days`. Out of this time, the lender will not be able to un-commit from the pool and any fund lent will be lost.

#### claim rewards

Once the owner has collected the funds from the pool, the lender will be able to claim the rewards. This action can only be performed when the pool status is `CLOSED` or `ACTIVE`. To calculate the rewards, the contract will use the following formula:

```solidity
((pool.totalRewards * poolCommit.amount) / pool.totalCommitted) - poolCommit.claimedAmount
```

In simple words it means, the rewards is equal the percentage of the amount lent times the total rewards minus the amount already claimed.

## Technical Description

### In-depth Actions

The flow starts when the borrower creates a new pool setting as collateral one or multiple assets that follows the `ERC20`, `ERC721` or `ERC1155` standards, once the pool is created and the collateral has been successfully transferred from the borrower's wallet to the contract, then the pool will be marked as `CREATED` that means it is ready to start receiving funds from the investors. The pool was configured initially with a soft and hard cap, when the total amount committed to the pool reaches at least the soft cap the borrower (pool owner) can decide whether to collect the funds or wait until the hard cap is reached. After the owner collected the raised capital, no new commits or un-commit are allowed to the pool this is because the borrower has already took the funds and the investors will need to wait until the rewards start coming in.

As long as the pool is active, the borrower can deposit the rewards in any frequency they want the only to allow the investors to claim their rewards.

Once the pool owner completes their goal by creating the pool and decides to close it, the investors will have to claim their reward in the following 60 days because later the pool can be archived and therefore no other action will be allowed. Any leftover reward will be will be accredited to the contract as a fee collected.

## Dependencies

- OpenZeppelin Contracts (Upgradeable)
- `Pools.storage.sol` for storage-related operations

## Contract: Pools

- Inherits:

  - `PoolsStorage`
  - `AccessControlUpgradeable`
  - `PausableUpgradeable`
  - `IERC721ReceiverUpgradeable`
  - `IERC1155ReceiverUpgradeable`

- Uses `SafeERC20Upgradeable` for ERC20 token operations.

### Constants

- `POOL_FEE`: Fixed fee for pool creation.
- `LOAN_TAKEN_FEE_PERCENTAGE`: Fee percentage for taken loans.
- `MIN_POOL_CLOSED_TIME`: Minimum time before a pool can be closed.
- `COLLECT_POOL_MAX_TIME`: Maximum time for collecting funds from a pool.

### Functions

- `__Pools_init`: Initializes the contract with USDC token.
- `getPool`: Retrieves a pool by index.
- `createPool`: Creates a new funding pool.
- `collectPool`: Collects funds from a pool that has reached its goal.
- `depositRewards`: Deposits rewards into an active pool.
- `closePool`: Closes an active pool.
- `archivePool`: Archives a pool.
- `commitToPool`: Commits funds to a pool.
- `uncommitFromPool`: Uncommits funds from a pool.
- `claim`: Claims rewards from a pool.
- `withdrawFeesCollected`: Withdraws collected fees by the admin.
- `adminWithdrawAll`: Allows admin to withdraw all funds when paused.
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

## Notes

- This contract uses OpenZeppelin's upgradeable contracts to ensure future compatibility and improvements.
- It has multiple functionalities related to pool management, such as creating pools, committing to pools, and handling pool rewards.
