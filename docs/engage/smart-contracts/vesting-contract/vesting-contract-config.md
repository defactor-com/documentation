---
id: vesting-contract-configuration
title: Vesting Contract Config
sidebar_position: 3
---

# Vesting Contract Configuration

This guide provides the configuration parameters required to set up and deploy a **Vesting Contract** in the Defactor Engage platform.

---

## Requirements for Vesting Setup

### **Admin and Operator Roles**

- **Admin Address**

  - **Purpose**: Controls administrative actions such as pausing/unpausing the contract and authorizing withdrawals.
  - **Type**: `eth address`

- **Operator Address**
  - **Purpose**: Manages valid Merkle roots and can revoke vesting schedules.
  - **Type**: `eth address`

---

## New Vesting Schedules Configuration

To create a new vesting schedule validated via Merkle tree, the following parameters must be included in the Merkle tree leaves:

### **Vesting Schedule Parameters**

| Parameter           | Type          | Description                                                               |
| ------------------- | ------------- | ------------------------------------------------------------------------- |
| **cliff**           | `uint64`      | The earliest timestamp at which tokens start vesting.                     |
| **start**           | `uint64`      | The vesting start timestamp.                                              |
| **duration**        | `uint64`      | The total duration (in seconds) over which the tokens will vest.          |
| **secondsPerSlice** | `uint64`      | The interval for calculating vesting slices (e.g. daily = 86400 seconds). |
| **beneficiary**     | `eth address` | The wallet address of the token recipient.                                |
| **tokenAddress**    | `eth address` | The ERC20 token to be vested.                                             |
| **amount**          | `uint256`     | The total amount of tokens to be vested over time (excluding initial).    |
| **initialAmount**   | `uint256`     | The amount of tokens that become claimable immediately at `start`.        |

---

## Example Configuration

```yaml
vestingContract:
  admin: "0xABCDEF1234567890ABCDEF1234567890ABCDEF12" # Admin address with permissions to pause, withdraw, and manage the contract
  operator: "0x1234567890ABCDEF1234567890ABCDEFABCDEF34" # Operator address with permissions to update Merkle roots and handle revocations

vestingSchedules:
  - beneficiary: "0xFEDCBA9876543210FEDCBA9876543210FEDCBA98" # Address receiving the vested tokens
    tokenAddress: "0x0ABCDEF1234567890ABCDEF1234567890ABCDEF0" # ERC20 token address to be vested
    amount: 500000000000000000000 # Total amount of tokens to be vested (500 tokens, assuming 18 decimals)
    initialAmount: 50000000000000000000 # Amount released immediately at vesting start (50 tokens)
    start: 1712700000 # Vesting start time (April 10, 2024 12:00 UTC)
    cliff: 1715388400 # Cliff time (first date tokens start becoming claimable — May 10, 2024 12:00 UTC)
    duration: 31536000 # Total vesting duration in seconds (365 days)
    secondsPerSlice: 86400 # Vesting interval in seconds (daily slices)
```
