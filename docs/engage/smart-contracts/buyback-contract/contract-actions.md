---
id: buyback-v2-contract-actions
title: Contract Actions
sidebar_position: 2
tags:
  - Contract Actions
---

`Buyback.sol` is an upgradeable smart contract used to repurchase $FACTR tokens using USDC via Uniswap V3. It supports standard and custom buybacks, applies TWAP-based price checks, and locks acquired FACTR for 1 year before distribution to either predefined vaults or custom addresses.

---

## Dependencies

- OpenZeppelin Contracts:
  - `Initializable`
- Uniswap V3:
  - `ISwapRouter`
  - `IUniswapV3Factory`
  - `IUniswapV3Pool`
  - `OracleLibrary`
- Custom:
  - `BuybackStorage.sol`
  - `IERC20`

---

## Contract: Buyback

- Inherits:

  - `BuybackStorage`
  - `Initializable`

- Uses `IERC20` and Uniswap V3 router for token swaps.
- All FACTR acquired through buybacks is subject to a **1-year lockup**.

### Functions

#### Initialization

- `initialize`: Sets up key contract parameters (e.g., vaults, tokens, routers, cooldowns). Called only once due to `Initializable`.

#### Standard Buyback

- `buyback`: Swaps contract-held USDC for FACTR. Can be called after cooldown. Verifies price using TWAP and handles slippage.
- `buybackWithdraw`: Distributes locked FACTR equally across 4 vaults after a 365-day lock.

#### Custom Buyback

- `customBuyback`: Allows anyone to perform a USDC-to-FACTR buyback with a custom distribution array. Enforces cooldown and TWAP constraints.
- `customBuybackWithdraw`: Distributes locked FACTR to predefined accounts based on basis points after 1 year.

#### Data Retrieval

- `fetchActiveLocks`: Returns all standard buybacks pending withdrawal.
- `fetchActiveCustomLocks`: Returns all custom buybacks pending withdrawal.

#### Utility (Internal)

- `_sandwichProtectionCheck`: Ensures current pool price doesn't deviate >1% from TWAP to prevent sandwich attacks.
- `getOptimalTwapAmountThreshold`: Calculates minimum expected output (FACTR) from swap, based on TWAP.
- `calculateOptimalAmount`: Iteratively finds the optimal USDC input amount for a swap that satisfies TWAP conditions.
- `_executeSwap`: Swaps USDC to FACTR using Uniswap router and defined path.
- `estimateAmountOut`: Returns average price quote from Uniswap based on historical ticks.

#### Admin Utility

- `recoverERC20`: Allows `RECOVERER` to recover non-FACTR and non-USDC tokens mistakenly sent to the contract.

### Events

- `BuybackCall`: Emitted after a standard buyback is completed.
- `CustomBuybackCall`: Emitted after a custom buyback is completed.
- `Withdraw`: Emitted after locked FACTR from a standard buyback is distributed.
- `CustomWithdraw`: Emitted after locked FACTR from a custom buyback is distributed.
- `ERC20Recovered`: Emitted when admin recovers unrelated tokens from the contract.

### Custom Errors / Validations

- Cooldown check via `coolDownElapsed` modifier.
- Buybacks require minimum 1000 USDC.
- Slippage and TWAP thresholds must be met or revert.
- Custom distribution arrays must sum to 10,000 bps.
- Withdrawals are only allowed after 365 days have passed.
- `recoverERC20` rejects recovery of FACTR or USDC.

---

## Notes

- This contract ensures secure, automated buybacks that support token value via liquidity removal and delayed distribution.
- TWAP-based slippage validation minimizes the risk of manipulation and price impact.
- Custom buybacks make the contract suitable for DAO-driven or on-demand token redistribution.
