---
title: Smart Contract Configuration
sidebar_position: 2
---

# Staking Contract Configuration

This guide provides the configuration parameters required to set up and deploy a **Staking Contract** in the Defactor Engage platform. The staking contract allows users to stake tokens and earn rewards based on predefined plans and parameters.

---

## Requirements for Staking Setup

### **Admin Address**
- **Purpose**: The admin address is required to manage the staking contract, configure parameters, and make updates.  
- **Type**: `eth address` (Ethereum-compatible address)

---

## New Staking Plans Configuration

For creating a new staking plan apart from the default plans, the following parameters need to be defined:

### **Staking Configuration Parameters**
| Parameter               | Type           | Description                                                                                  |
|-------------------------|----------------|----------------------------------------------------------------------------------------------|
| **stakingToken**         | `eth address`  | The contract address of the token that will be staked.                                       |
| **rewardToken**          | `eth address`  | The contract address of the token used for rewards.                                          |
| **maxStaked**            | `number`       | Maximum amount of tokens that can be staked in this plan.                                    |
| **minStakeAmount**       | `number`       | Minimum amount of tokens required to participate in staking.                                 |
| **initialRatio**         | `number`       | The initial ratio of rewards distributed per staked token.                                   |
| **stakingEndTime**       | `UTC Date`     | The date and time (in UTC) when staking will end.                                            |
| **rewardEndTime**        | `UTC Date`     | The date and time (in UTC) when reward distribution ends.                                    |
| **lockDuration**         | `number`       | The duration (in seconds) for which staked tokens are locked and cannot be withdrawn.        |
| **apy**                  | `number`       | The annual percentage yield (APY) applied during the staking period before unlocking.        |
| **apyAfterUnlock**       | `number`       | The annual percentage yield (APY) applied after the staking period has ended and is unlocked.|

---

## Example Configuration 

```yaml
adminAddress: "0x1234567890abcdef1234567890abcdef12345678"  # Admin address for contract management
stakingPlans:
  - stakingToken: "0xabcdef1234567890abcdef1234567890abcdef12"   # Staking token address
    rewardToken: "0x1234567890abcdef1234567890abcdef12345678"   # Reward token address
    maxStaked: 100000                                          # Maximum staked amount
    minStakeAmount: 100                                        # Minimum stake amount
    initialRatio: 1.2                                          # Initial reward ratio
    stakingEndTime: "2024-12-31T23:59:59Z"                     # Staking end time in UTC
    rewardEndTime: "2025-01-31T23:59:59Z"                      # Reward end time in UTC
    lockDuration: 2592000                                      # Lock duration (30 days in seconds)
    apy: 12.5                                                  # APY percentage before unlock
    apyAfterUnlock: 5.0                                        # APY percentage after unlock
```