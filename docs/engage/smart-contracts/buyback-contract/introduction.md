---
id: buyback-smart-contract
title: Introduction
sidebar_position: 1
tags:
  - Buyback
---

`Buyback.sol` is a smart contract designed to automate the repurchase of FACTR tokens from the open market using USDC. These repurchased tokens are locked and later distributed to designated vaults or custom addresses.

## Contract Versions

This contract has an audited version, with future iterations potentially expanding its flexibility, efficiency, and support for multi-chain integrations.

## Buyback Smart Contract Documentation

### Overview

The Buyback contract enables automated and custom buybacks of FACTR tokens using USDC, leveraging Uniswap V3 swaps and a cooldown mechanism to ensure stability and prevent market manipulation. After a 1-year lock-up period, the repurchased FACTR is distributed to vaults or user-defined addresses.

### Dependencies

- `IERC20`: Interface for interacting with ERC20 tokens.
- `ISwapRouter`: Uniswap V3 router interface for token swaps.
- `OracleLibrary`: Uniswap V3 price oracle for TWAP (time-weighted average price).
- `IUniswapV3Factory`, `IUniswapV3Pool`: Uniswap V3 pool discovery and interaction.

### Constants

- `ONE_THOUSAND`: Minimum USDC required for a buyback (1,000 USDC).
- `TEN_THOUSAND`: Basis points constant (10,000).
- `BUY_FREQUENCY`: Cooldown duration between buybacks.
- `POOL_1_FEE`, `POOL_2_FEE`: Fee tiers for USDC-WETH and WETH-FACTR pools.
- `THREE_HUNDRED`: Swap deadline time buffer (in seconds).

### Roles

This contract doesn’t implement a granular role-based system but does include privileged functions callable only by the designated `RECOVERER` address.

### Buyback

Two buyback mechanisms exist:

#### Normal Buyback

Executes a FACTR buyback using available USDC. Ensures optimal pricing via TWAP checks, and records swap details in a structured array (`buybacks`).

- **coolDownElapsed modifier**: Prevents execution if a cooldown period has not passed.
- **\_sandwichProtectionCheck**: Checks if current prices deviate by more than 1% from TWAP.
- **calculateOptimalAmount**: Calculates max amount to swap that meets price criteria.

#### Custom Buyback

Allows any user to initiate a buyback by transferring at least 1,000 USDC and specifying a distribution of the resulting FACTR.

- Distribution must sum to 10000 bps.
- Tokens are locked for 1 year before being claimable.

### Withdrawals

FACTR tokens are distributed **after a 1-year lock** via the `buybackWithdraw` or `customBuybackWithdraw` functions.

#### Vaults (Normal Buybacks)

FACTR is distributed equally among four vault addresses.

#### Custom Addresses (Custom Buybacks)

FACTR is split according to the predefined bps (basis points) distribution array.

### Functions

#### Core Functions

- `buyback`: Executes a standard buyback using contract-held USDC.
- `customBuyback`: Executes a user-funded buyback and stores custom distribution logic.
- `buybackWithdraw`: Unlocks FACTR from a normal buyback after 1 year.
- `customBuybackWithdraw`: Unlocks FACTR from a custom buyback after 1 year.
- `fetchActiveLocks`: Returns an array of normal buybacks pending withdrawal.
- `fetchActiveCustomLocks`: Returns an array of custom buybacks pending withdrawal.

#### Internal Logic

- `_sandwichProtectionCheck`: Reverts if price deviation exceeds 1%.
- `_executeSwap`: Handles Uniswap V3 swap execution with slippage protections.
- `calculateOptimalAmount`: Determines optimal swap amount using TWAP.
- `getOptimalTwapAmountThreshold`: Calculates TWAP-based minimum output for a given input.

#### Admin Utility

- `recoverERC20`: Allows recovery of tokens (excluding FACTR and USDC) stuck in the contract.

### Events

- `BuybackCall`: Emitted after a normal buyback.
- `CustomBuybackCall`: Emitted after a custom buyback.
- `Withdraw`: Emitted when FACTR is distributed from a normal buyback.
- `CustomWithdraw`: Emitted when FACTR is distributed from a custom buyback.
- `ERC20Recovered`: Emitted on recovery of any ERC20 tokens.

### Security Considerations

- **Audit**: Contract was audited by Zokyo Security and passed with a 95/100 score. No critical issues were found. Minor findings were acknowledged or resolved.
- **TWAP checks**: Ensures price stability against MEV or price manipulation attacks.
- **1-Year Lock**: Prevents immediate token release post-buyback, enhancing tokenomics design.
- **Fallback Protection**: Ensures that even if users delay custom withdraws, tokens remain locked safely.

> Note: All buyback data is stored on-chain and accessible via public getters or events. Future UI integrations (e.g., Engage dashboard) are expected to display this information transparently.
