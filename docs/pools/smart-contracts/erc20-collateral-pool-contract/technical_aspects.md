---
id: smart-contract-erc20-collateral-pool-technical-aspects
title: Technical Aspects
sidebar_position: 2
tags:
  - Technical Aspects
#   - Collateral Pool
---

## Contract Modules

- **ERC20CollateralPool.sol**: Main contract.
- **ERC20CollateralPool.interface.sol**: Interface for contract structures and events.
- **ERC20CollateralPool.storage.sol**: Storage contract for state management.
- **AggregatorV3Interface.sol**: Interface for Chainlink price feeds.

---

## Key Components

### Constants

- `LIQUIDATION_PROTOCOL_FEE`: Fixed fee for liquidation.
- `LIQUIDATION_FEE`: Additional liquidation fee.
- `OZ_IN_G`: Ounces to grams conversion constant.
- `ONE_YEAR`: One year in seconds.
- `HOUNDRED`: Constant for percentage calculations.

### Initialization

- `__ERC20CollateralPool_init`: Initialize the contract with admin, USDC token, and pools.

### Pool Management

- `addPool`: Add a new pool.
- `announceEditPool`: Announce upcoming pool edits.
- `commitEditPool`: Commit announced pool edits.
- `cancelEditPool`: Cancel announced pool edits.

### Contract Control

- `pause` / `unpause`: Pause or unpause contract operations.

### User Interactions

- `lend`: Lend USDC to a pool.
- `borrow`: Borrow USDC against collateral.
- `repay`: Repay borrowed USDC with interest.
- `claimRewards`: Claim rewards after pool closure.
- `claimUnliquidatedCollateral`: Claim back collateral if not repaid.
- `liquidatePool`: Liquidate a pool after closure.

### Calculation Utilities

- `calculateRepayInterest`: Calculate repayment interest.
- `calculateCollateralTokenAmount`: Calculate required collateral token amount.

### View Functions

- `getPools`: Get details of all pools.

### Error Handling

Defined errors for exceptional scenarios, like `PoolEndsAtIsInThePast` and `AdminMustNotBeZeroAddress`.

### Event Logging

Events like `LendEvent`, `BorrowEvent`, and `RepayEvent` for activity tracking.

### Security Features

- **Pausable**: Stop activities in emergencies.
- **Access Control**: Restricted functions for specific roles.
- **Chainlink Integration**: For accurate price information.

### Dependencies

Uses OpenZeppelin's `SafeERC20Upgradeable`, `AccessControlUpgradeable`, `PausableUpgradeable`, and math utilities.

### Upgradeability

Designed with OpenZeppelin's upgradeable contracts framework.

### Important Considerations

- **Precision and Rounding**: Handle mathematical calculations accurately.
- **Time Dependencies**: Time-sensitive functions need careful handling.
- **Security**: Regular audits and reviews are recommended.
