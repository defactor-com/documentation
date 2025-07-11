---
id: smart-contract-erc20-collateral-pool-technical-aspects
title: Technical Aspects
sidebar_position: 2
tags:
  - Technical Aspects
---

## Contract Modules

- **ERC20CollateralPool.sol**: Main contract.
- **ERC20CollateralPool.interface.sol**: Interface for contract structures and events.
- **ERC20CollateralPool.storage.sol**: Storage contract for state management.
- **AggregatorV3Interface.sol**: Interface for Chainlink price feeds.

---

## Key Components

### Constants

- `LIQUIDATION_PROTOCOL_FEE`: A fixed fee charged by the contract during liquidation.
- `LIQUIDATION_FEE`: A fee awarded to the liquidator as an incentive for carrying out liquidations.
- `LIQUIDATION_MARGIN_FACTOR`: Factor that determines whether the position is liquidatable.
- `MAX_LTV_PERCENTAGE`: The highest [loan-to-value (LTV) ratio](/docs/resources/glossary#loan-to-value-ltv-ratio-also-called-collateral-token-percentage) that can be set for a pool.
- `ONE_YEAR`: One year in seconds.
- `BPS_DIVIDER`: Basis point divider.

### Initialization

- `__ERC20CollateralPool_init`: Initialize the contract with admin, USDC token, and pools.

### Pool Management

- `addPool`: Add a new pool.
- `announceEditPool`: Announce upcoming pool edits.
- `commitEditPool`: Commit announced pool edits.
- `cancelEditPool`: Cancel announced pool edits.

### Contract Control

- `pause` / `unpause`: Pause or unpause contract operations.
- `withdrawProtocolRewards`: Allows admin to withdraw protocol fees.

### User Interactions

- `lend`: Supply USDC to a pool.
- `borrow`: Borrow USDC against collateral.
- `repay`: Repay borrowed USDC with interest.
- `claim`: Withdraw supplied USDC with rewards.
- `changeCollateralAmount`: Change the collateral amount of a borrow position.
- `liquidate`: Liquidate borrow positions that are liquidatable.
- `claimCollateral`: Allow to withdraw supply positions, receiving their rewards in collateral tokens by liquidate borrow positions.  

### Calculation Utilities

- `calculateRepayInterest`: Calculate repayment interest.
- `calculateCollateralTokenAmount`: Calculate required collateral token amount.
- `isPositionLiquidatable`: Calculate is a borrow position is liquidatable.

### View Functions

- `getPools`: Get details of all pools.
- `getPool`: Get details of one pool.
- `getLendPosition`: Get details of one supply.
- `getAllLendPositions`: Get all user supply position in the given pool.
- `getBorrowPosition`: Get details of one borrow.
- `getAllBorrowPositions`: Get all user borrow position in the given pool.
- `getCollateralTokens`: Get the list of all collateral tokens.
- `getCollateralTokenProtocolFee`: Get protocol fees for collateral token.
- `getAvailableAmountsInPool`: Get available USDC and collateral token amount in a given pool.

### Error Handling

Defined errors for exceptional scenarios, like `PoolEndsAtIsInThePast` and `AdminMustNotBeZeroAddress`.

### Event Logging

Events like `newLend`, `newBorrow`, `Repaid`, `RewardsClaimed`, `AddedCollateral`, `RemovedCollateral`, and `UserPositionLiquidated` for activity tracking.

### Security Features

- **Pausable**: Stop activities in emergencies.
- **Access Control**: Restricted functions for specific roles.
- **Chainlink Integration**: For accurate price information.

### Dependencies

Uses OpenZeppelin's `SafeERC20Upgradeable`, `AccessControlUpgradeable`, `PausableUpgradeable`, and math utilities.

### Upgradeability

Designed with OpenZeppelin's upgradeable contracts framework.

### Important Considerations

- **Precision and Rounding**: While mathematical calculations are handled accurately, slight discrepancies may arise due to rounding and the use of different timestamps for calculating suppliers' and borrowers' rewards.
- **Time Dependencies**: Time-sensitive functions need careful handling.
- **Security**: Regular audits and reviews are recommended.
