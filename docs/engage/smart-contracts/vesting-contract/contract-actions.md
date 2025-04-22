---
id: vesting-contract-actions
title: Contract Actions
sidebar_position: 2
tags:
  - Contract Actions
---

## Overview

`ERC20LazyVesting.sol` is a smart contract for token vesting that utilizes off-chain Merkle proofs and on-chain validation to efficiently manage scalable vesting schedules. It allows beneficiaries or operators to claim vested tokens over time, based on predefined parameters encoded in Merkle trees.

## Dependencies

- OpenZeppelin Contracts:
  - `AccessControl`
  - `ReentrancyGuard`
  - `Pausable`
  - `SafeERC20`
- `ERC20LazyVesting.interface.sol` – Interface for defining the `VestingSchedule` struct and external function signatures.

## Contract: ERC20LazyVesting

- Inherits:

  - `AccessControl`
  - `ReentrancyGuard`
  - `Pausable`

- Uses `SafeERC20` for secure ERC20 operations.

### Functions

- `release`: Releases vested tokens to the beneficiary or an operator, based on a valid Merkle proof.
- `getReleasedAmount`: Returns how many tokens have already been released for a given schedule.
- `getReleasableAmount`: Calculates how many tokens are currently available for release based on time and schedule configuration.
- `addValidMerkletreeRoot`: Allows an operator to mark a Merkle root as valid (enables vesting for related schedules).
- `revokeSchedules`: Allows an operator to revoke one or more Merkle leaves, disabling further releases for them.
- `requestWithdraw`: Admin function to initiate the withdrawal process for any tokens remaining in the contract (starts a 30-day timer).
- `withdraw`: Admin function to execute withdrawal of tokens after the cooldown period ends.
- `pause`: Admin-only function to pause contract operations.
- `unpause`: Admin-only function to resume contract operations.

### Internal / Private Functions

- `_validateVestingSchedule`: Validates a vesting schedule by computing and verifying its Merkle proof and root.
- `_computeRoot`: Computes the Merkle root based on a leaf and a proof path.
- `_getReleasableAmount`: Internal logic to calculate vested tokens depending on cliff, start, duration, and number of completed time slices.

### Events

- `Released`: Emitted when tokens are released to a beneficiary.
- `MerkletreeRootAdded`: Emitted when a Merkle root is added or removed.
- `SchedulesRevoked`: Emitted when one or more vesting schedules are revoked.
- `AnnounceTokensWithdrawal`: Emitted when a withdrawal is requested.
- `TokensWithdrawn`: Emitted when tokens are successfully withdrawn after the announcement period.

### Custom Errors / Validations

- Only the `beneficiary` or an account with `OPERATOR_ROLE` can call `release`.
- Schedules must pass Merkle proof validation and must not be revoked.
- Withdrawals can only occur 30 days after `requestWithdraw` is called.
- Only `DEFAULT_ADMIN_ROLE` can manage withdrawal, pause, or unpause.

## Notes

- Merkle tree-based design enables massive scalability for vesting schedules while keeping on-chain storage low.
- Supports revocable vesting and secure operator-controlled execution.
- Time-based vesting ensures fairness and compliance with distribution strategies.
- The contract can be paused by admins in case of emergencies.
