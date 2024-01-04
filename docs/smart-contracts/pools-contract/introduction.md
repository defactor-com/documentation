---
id: smart-contract-erc20-collateral-pool
title: Introduction
sidebar_position: 1
tags:
  - ERC20
  - Collateral Pool
---

`Pools.sol` this contract allows users to create, manage, and interact with funding pools using `ERC20`, `ERC721`, and `ERC1155` tokens.

## Pool

The pool is a structure that keeps track of total committed, total rewarded, who the borrower is (pool creator), and other information that are essential for the proper functioning of the contract.

The pool has some important characteristics:

- Every pool has a soft cap, hard cap and a deadline. The soft cap will be the minimum amount of funds that the pool must reach to be considered `ACTIVE`. The hard cap will be the maximum amount of funds that the pool can reach and the deadline is the maximum time that the pool can be open to receive funds and be rewarded by the borrower. If the pool owner (the borrower) try to collect the pool before reaching the soft cap, the contract will return an error reverting the transaction but it will also no only restrict the pool owner of collecting the funds but also the lender if they try to un-commit from the pool before it reaches the soft cap. In the other hand, the hard cap will be used to revert transactions if a lender tries to commit to a pool and it overpasses the hard cap and also the deadline will be used to revert transactions if someone tries to collect, archive, commit, un-commit in a wrong time.
- This pool has the advantage to receive 3 types of tokens as collaterals that follows the `ERC20`, `ERC721` and `ERC1155` standards. The pool owner can provide as much collaterals as they want at the same time to the same pool.
- When a pool is created its default status is `CREATED`, and then when it reaches the soft cap and the owner collects it, the pool status will be changed to `ACTIVE`, later when the owner decides to close it, the pool status will be updated to `CLOSED` and finally, when the pool is archived, the pool status will be `ARCHIVED`. All of these statuses changes are made by trigger events.

## Roles

The smart contract caters to three types of users: the infrastructure provider which is the admin of the contract, the pool owner that can be interpreted as the borrower and the lender that is the account that lends the money to the pool.

### admin

When a new instance of this contract is deployed, the sender will be by default the admin of the contract and will have the responsibility to collect the fees that the contract collects, withdraw all USDC funds the contract has and pause and unpause the contract for security reasons.

### pool owner (borrower)

It's in charged of managing its own pool. It can create a new pool, collect the funds from the pool, close the pool and archive the pool. It can also deposit rewards to the pool.

#### create a pool

Every user can create a pool and will be considered as the pool owner. A charge of $200 is required to cover the fees for the infrastructure maintenance.

![Pools Create Pool](/img/flowchart/Pools_createpool.png)

#### collect a pool

This action allows the pool owner to collect the funds from the pool. A pool can only be colleted once when the pool status is still `CREATED` and it has reached the soft cap. If the pool owner tries to collect the funds before reaching the soft cap or collecting it twice, the transaction will be reverted.

![Pools Collect Pool](/img/flowchart/Pools_collectpool.png)

#### deposit rewards

When the collection phase is over, the borrower (pool owner) will have to pay the taken loan by depositing the rewards to the pool when the pool status is still `ACTIVE`.

![Pools Deposit Rewards](/img/flowchart/Pools_depositrewards.png)

#### close a pool

A pool owner can close the pool anytime if and only if two conditions are meet:

- Pool is `ACTIVE`.
- The total committed to the pool must be equal or greater than the total rewards.

![Pools Close Pool](/img/flowchart/Pools_closepool.png)

#### archive a pool

A pool can be archived by two roles, the pool owner and the contract admin but for both roles the pool needs to be `CLOSED` or `CREATED`. If the pool status is `CLOSED`, then a minimum of `pool close time + 60 days` needs to be passed to archive the pool. If the pool status is `CREATED`, then a minimum of `pool deadline + 60 days` needs to be passed to archive the pool, otherwise the transaction will be reverted.

![Pools Archive Pool](/img/flowchart/Pools_archivepool.png)

### lender (investor)

It's in charged of lending money to the pools. It can commit to a pool, un-commit from a pool and claim rewards from a pool.

#### commit to a pool

This action allows the lender to invest in a pool and is only available when the pool status is `CREATED` and the pool has not reached the hard cap. If the lender tries to commit to a pool that has reached the hard cap or the pool status is not `CREATED`, the transaction will be reverted.

![Pools Commit To Pool](/img/flowchart/Pools_committopool.png)

#### un-commit from a pool

It allows the lender (investor) to un-commit from a pool and is only available when the pool status is `CREATED` and the pool has not reached the soft cap. If the lender tries to un-commit from a pool that has reached the soft cap or the pool status is not `CREATED`, the transaction will be reverted.

The lender is only allowed to un-commit from the pool if `deadline + 60 days is greater than the current time`, out of this period, the lender will not be able to un-commit if the soft cap is less or equal to the total amount committed and any fund lent will be lost.

![Pools Un-Commit From Pool](/img/flowchart/Pools_uncommitfrompool.png)

#### claim rewards

Once the owner has collected the funds from the pool, the lender will be able to claim the rewards. This action can only be called when the pool status is `CLOSED` or `ACTIVE`. To calculate the rewards, refer to the following formula:

```solidity
((pool.totalRewards * poolCommit.amount) / pool.totalCommitted) - poolCommit.claimedAmount
```

In simple words it means, the rewards is equal the percentage of the amount lent times the total rewards minus the amount already claimed.

![Pools Claim](/img/flowchart/Pools_claim.png)
