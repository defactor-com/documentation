---
id: smart-contract-erc20-collateral-pool-example
title: Example
sidebar_position: 3
tags:
  - Borrow
  - Lend
---

## In-depth Actions

The flow starts when the borrower creates a new pool giving as collateral one or multiple assets that follows the `ERC20`, `ERC721` or `ERC1155` standards. Once the pool is created and the collateral has been successfully transferred from the borrower's wallet to the contract, the pool will be marked as `CREATED` that means it is ready to start receiving funds from the investors. The pool was configured initially with a soft and hard cap, when the total amount committed to the pool reaches at least the soft cap the borrower (pool owner) can decide whether to collect the funds or wait until the hard cap is reached. When the owner collects the raised capital, no new commits or un-commit are allowed to the pool this is because the borrower has already took the funds and the investors will need to wait until the rewards start coming in.

As long as the pool is active, the borrower can deposit the rewards in any frequency they want, when the loan is paid (partial or complete) the investors are the only one allowed to claim the rewards.

Once the pool owner completes their goal by creating the pool and decides to close it, the investors will have to claim their reward in the following 60 days because later the pool can be archived and therefore no other action will be allowed to that specific pool. Any leftover reward will be will be accredited to the contract as a fee collected.

Lets consider the following example to better understand how this flow works:

## Pool lifecycle

- Event #1 (initialize contract) -> _The contract is initialized with the USDC address that will be used for lending money_.
- Event #2 (create a pool) -> Bob creates a new pool with a soft cap of 1000 USDC and a hard cap of 2000 USDC, using 100 tokens of GOLD as collateral.
- Event #3 (commit to a pool) -> Alice commits 1100 USDC to the pool.
- Event #4 (collect from pool) -> Bob collects the funds from the pool.
- Event #5 (deposit rewards) -> After 30 days, Bob deposits 1100 USDC as rewards into the pool.
- Event #6 (claim rewards) -> After 60 days, Alice claims 1100 USDC as rewards from the pool.
- Event #7 (close pool) -> Bob closes the pool.

Let's break this down to know what is under the hood of each event:

### Event #1 (initialize contract)

- The contract is initialized with the USDC token address that will be used for lending money, and the initializer will be the admin of the contract.

### Event #2 (create a pool)

- Anyone can create a pool; the contract only requests a fee of 200 USDC, so Bob must have at least 200 USDC tokens in his wallet.

- The pool is created with a soft cap of 1000 USDC and a hard cap of 2000 USDC.

- A pool instance is created with the collateral tokens provided by Bob.

- The pool status will be marked as `CREATED`.

- Transfer Bob's GOLD collateral tokens from his wallet to the contract.

- Emit the event PoolCreated.

Before the pool is created:

```json
{}
```

After the pool is created:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "0",
  "totalRewards": "0",
  "rewardsPaidOut": "0",
  "createdAt": "1707768289",
  "deadline": "1708632286",
  "closedTime": "0",
  "poolStatus": 0,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

The pools status is set to 0 which represents `CREATED`.

### Event #3 (commit to a pool)

- The commits to the pool can happen only when the pool status is `CREATED` and the pool has not reached the hard cap.

- 1100 USDC is committed to the pool and added to the total committed amount.

- Add the 1100 USDC to the commits that Alice has made to the pool.

- Make the transfer of 1100 USDC from Alice's wallet to the contract.

- Emit the event `CommittedToPool`.

Before the investor commits to the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "0",
  "totalRewards": "0",
  "rewardsPaidOut": "0",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 0,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

After the investor commits to the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "0",
  "rewardsPaidOut": "0",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 0,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

Lending data:

```json
{ "amount": "1100000000", "claimedAmount": "0" }
```

The pool information is updated to reflect the new total committed amount.

### Event #4 (collect from pool)

- This can only be done by the pool owner, for this example, it would be Bob.

- Since bob's pool has already reached the soft cap of 1000 USDC, Bob is allowed to collect the pool.

- The contract will charge a 2% fee on the total amount committed to the pool, in this case, 22 USDC.

- This fee amount is then added to the contract's collected fee.

- The pool status will be marked with the status `ACTIVE`.

- Make the transfer of `total committed to pool - 2% contract fee` USDC tokens from the contract to Bob's wallet.

- Emit the event `PoolCollected`.

Before the borrower collects the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "0",
  "rewardsPaidOut": "0",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 0,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

After the borrower collects the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "0",
  "rewardsPaidOut": "0",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 1,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

Lending data:

```json
{ "amount": "1100000000", "claimedAmount": "0" }
```

When the owner collected the pool, the pool status is set to 1 which represents `ACTIVE`.

### Event #5 (deposit rewards)

- This can only be done by the pool owner, in this case, it would be Bob.

- The amount of 1100 USDC is deposited to the pool as rewards.

- Make the transfer of 1100 USDC from Bob's wallet to the contract.

- Emit the event `RewardsDeposited`.

Before the borrower deposit to the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "0",
  "rewardsPaidOut": "0",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 1,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

After the borrower deposit to the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "1100000000",
  "rewardsPaidOut": "0",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 1,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

Lending data:

```json
{ "amount": "1100000000", "claimedAmount": "0" }
```

Now that the borrower has paid the loan, the total rewards is updated with the amount deposited, for this specific example, the amount is equal to the amount lent.

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

Before the investor claims from the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "1100000000",
  "rewardsPaidOut": "0",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 1,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

After the investor claims from the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "1100000000",
  "rewardsPaidOut": "1100000000",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 1,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

Lending data:

```json
{ "amount": "1100000000", "claimedAmount": "1100000000" }
```

The investor has claimed their rewards, and the total rewards paid out have been updated to reflect the claimed amount. In this example, as there is only one investor, the 100% of the rewards is disbursed to a single address.

### Event #7 (close pool)

- This can only be done by the pool owner, in this case, it would be Bob.

- The pool status will be marked with the status `CLOSED`.

- Return the pool owner's collateral tokens from the contract to Bob's wallet.

- Emit the event `PoolClosed`.

Before the borrower closes the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "1100000000",
  "rewardsPaidOut": "1100000000",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "0",
  "poolStatus": 1,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

After the borrower closes the pool:

```json
{
  "softCap": "1000000000",
  "hardCap": "2000000000",
  "totalCommitted": "1100000000",
  "totalRewards": "1100000000",
  "rewardsPaidOut": "1100000000",
  "createdAt": "1707768557",
  "deadline": "1708632554",
  "closedTime": "1712952564",
  "poolStatus": 2,
  "poolOwner": "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
}
```

Lending data:

```json
{ "amount": "1100000000", "claimedAmount": "1100000000" }
```

The pool status is set to 2 which represents `CLOSED` and the closed time is set to the current block timestamp.
