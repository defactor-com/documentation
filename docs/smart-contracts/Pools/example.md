---
id: smart-contract-erc20-collateral-pool-example
title: Example
sidebar_position: 3
tags:
  - Borrow
  - Lend
---

## In-depth Actions

The flow starts when the borrower creates a new pool setting as collateral one or multiple assets that follows the `ERC20`, `ERC721` or `ERC1155` standards, once the pool is created and the collateral has been successfully transferred from the borrower's wallet to the contract, then the pool will be marked as `CREATED` that means it is ready to start receiving funds from the investors. The pool was configured initially with a soft and hard cap, when the total amount committed to the pool reaches at least the soft cap the borrower (pool owner) can decide whether to collect the funds or wait until the hard cap is reached. After the owner collected the raised capital, no new commits or un-commit are allowed to the pool this is because the borrower has already took the funds and the investors will need to wait until the rewards start coming in.

As long as the pool is active, the borrower can deposit the rewards in any frequency they want the only to allow the investors to claim their rewards.

Once the pool owner completes their goal by creating the pool and decides to close it, the investors will have to claim their reward in the following 60 days because later the pool can be archived and therefore no other action will be allowed. Any leftover reward will be will be accredited to the contract as a fee collected.

Lets consider the following example to better understand how this flow works:

Event #1 -> _The contract is initialized with the USDC address that will be used for lending money_.
Event #2 -> Bob creates a new pool with a soft cap of 1000 USDC and a hard cap of 2000 USDC, using 100 tokens of GOLD as collateral.
Event #3 -> Alice commits 1100 USDC to the pool.
Event #4 -> Bob collects the funds from the pool.
Event #5 -> After 30 days, Bob deposits 1100 USDC as rewards into the pool.
Event #6 -> After 60 days, Alice claims 1100 USDC as rewards from the pool.
Event #7 -> Bob closes the pool.

Let's break down what is under the hood of each event:

### Event #1 (contract initialization)

- The contract is initialized with the USDC address that will be used for lending money, and the initializer will be the admin of the contract.

### Event #2 (create a pool)

- Anyone can create a pool; the contract only requests a fee of 200 USDC, so Bob must have at least 200 USDC tokens.

- The pool will be created with a soft cap of 1000 USDC and a hard cap of 2000 USDC.

- A pool instance is created with the collateral tokens provided by Bob.

- The pool status will be marked with the status CREATED.

- Transfer Bob's GOLD collateral tokens from his wallet to the contract.

- Emit the event PoolCreated.

### Event #3 (commit to a pool)

- The commits to the pool can happen only when the pool status is `CREATED` and the pool has not reached the hard cap.

- 1100 USDC is committed to the pool total committed amount.

- Add the 1100 USDC to the commits that Alice has made to the pool.

- Make the transfer of 1100 USDC from Alice's wallet to the contract.

- Emit the event `CommittedToPool`.

### Event #4 (collect from pool)

- This can only be done by the pool owner, for this example, it would be Bob.

- Since bob's pool has already reached the soft cap of 1000 USDC, Bob is allowed to collect the pool.

- The contract will charge a 2% fee on the total amount committed to the pool, in this case, 22 USDC.

- This fee amount is then added to the contract's collected fee.

- The pool status will be marked with the status `ACTIVE`.

- Make the transfer of `total commited to pool - 2% contract fee` USDC from the contract to Alice's wallet.

- Emit the event `PoolCollected`.

### Event #5 (deposit rewards)

- This can only be done by the pool owner, in this case, it would be Bob.

- The amount of 1100 USDC is deposited to the pool as rewards.

- Make the transfer of 1100 USDC from Bob's wallet to the contract.

- Emit the event `RewardsDeposited`.

### Event #6 (claim rewards)

- This can only be done when the pool status is `CLOSED` or `ACTIVE`.

- Alice can now claim the total rewards as she was the only one who committed to the pool.

- The rewards are calculated as follows:

```solidity
((pool.totalRewards * poolCommit.amount) / pool.totalCommitted) - poolCommit.claimedAmount
```

- The rewards are then added to the Alice's total claimed amount and then added to the rewards paid out by the pool.

- Make the transfer of `total rewards` USDC from the contract to Alice's wallet.

- Emit the event `RewardsClaimed`.

### Event #7 (close pool)

- This can only be done by the pool owner, in this case, it would be Bob.

- The pool status will be marked with the status `CLOSED`.

- Return the pool owner's collateral tokens from the contract to Bob's wallet.

- Emit the event `PoolClosed`.