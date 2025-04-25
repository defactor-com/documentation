---
id: vesting-contract-overview
title: Vesting Contract Overview
sidebar_position: 1
tags:
  - Vesting
---

`ERC20LazyVesting.sol` is a smart contract that enables scalable, secure, and flexible token vesting using off-chain Merkle proofs and on-chain validation. Beneficiaries claim tokens progressively based on vesting schedules validated through Merkle roots.

## Contract Versions

This contract currently exists in a single production version, with potential improvements in UI integrations and audit tooling planned for the future.

## Vesting Smart Contract Documentation

### Overview

The Lazy Vesting contract allows for the release of vested tokens over time through on-chain validation of off-chain Merkle proofs. Vesting schedules include cliffs, durations, initial amounts, and are stored as Merkle tree leaves off-chain. This model is gas-efficient and scalable for high-volume distributions.

### Dependencies

- `IERC20`: Interface for ERC20 token transfers.
- `SafeERC20`: Wrapper for secure token interactions.
- `AccessControl`: Role-based permission system.
- `ReentrancyGuard`: Prevents reentrancy attacks.
- `Pausable`: Enables pausing the contract in emergencies.

### Constants

There are no named public constants, but key timing behaviors include:

- **30-day delay**: Required after `requestWithdraw` before `withdraw` is permitted.
- **Merkle Proofs**: Used to validate schedules without storing them on-chain.

### Roles

- **DEFAULT_ADMIN_ROLE**: Can pause/unpause the contract, request/execute withdrawals, and assign roles.
- **OPERATOR_ROLE**: Can register valid Merkle roots and revoke schedules.

### Vesting

Each vesting schedule is uniquely identified and validated using Merkle proofs. The structure includes:

- `cliff`: Time before vesting starts.
- `start`: Vesting schedule start time.
- `duration`: Total duration for full vesting.
- `secondsPerSlice`: Interval between vesting unlocks.
- `beneficiary`: Address eligible to claim tokens.
- `tokenAddress`: ERC20 token being vested.
- `amount`: Total amount vesting over time.
- `initialAmount`: Tokens released at `start`.

Schedules are grouped into Merkle trees whose roots must be pre-approved by an operator.

### Withdrawals

Admins can request and execute token withdrawals from the contract under strict rules.

- `requestWithdraw`: Starts a 30-day cooldown to allow transparency and dispute handling.
- `withdraw`: After 30 days, transfers any unallocated tokens to a specified recipient.

### Functions

#### Core Functions

- `release`: Transfers vested tokens to the beneficiary after validating the Merkle proof.
- `getReleasedAmount`: Returns the total amount already claimed by the beneficiary.
- `getReleasableAmount`: Returns the total claimable amount at the current time.

#### Admin & Operator

- `addValidMerkletreeRoot`: Marks a Merkle root as valid or invalid.
- `revokeSchedules`: Revokes vesting schedules (Merkle leaves) to block further claims.
- `pause`: Emergency pause on `release`.
- `unpause`: Resumes contract operations.

#### Withdraw Functions

- `requestWithdraw`: Announces intent to withdraw tokens (starts 30-day timer).
- `withdraw`: Executes token withdrawal after 30 days.

### Internal Logic

- `_validateVestingSchedule`: Confirms Merkle proof validity and computes the root.
- `_getReleasableAmount`: Determines tokens available based on current time and schedule state.
- `_computeRoot`: Rebuilds Merkle root from a given leaf and proof using `keccak256`.

### Events

- `Released`: Emitted when tokens are released to a beneficiary.
- `MerkletreeRootAdded`: Emitted when a new Merkle root is marked valid.
- `SchedulesRevoked`: Emitted when vesting schedules are revoked.
- `AnnounceTokensWithdrawal`: Emitted upon withdrawal request.
- `TokensWithdrawn`: Emitted when tokens are withdrawn by the admin.

### Security Considerations

- **Merkle Proofs**: Off-chain generation and on-chain verification reduce storage cost while ensuring data integrity.
- **Revocation Mechanism**: Allows operators to cancel schedules for security or business logic purposes.
- **30-Day Withdrawal Delay**: Ensures transparency and reduces risks of misuse by requiring early announcement.
- **Access Control**: Role-based architecture isolates permissions between admins and operators.

> Note: All schedules are validated via off-chain computed Merkle trees. This approach is optimized for mass distributions and minimizes on-chain complexity.
