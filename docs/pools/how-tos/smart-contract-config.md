---
id: pools-smart-contracts-configuration
title: Pools Contract Configuration
sidebar_position: 3
---

## Contract Requirements and Parameters

### **ERC20 Collateral Pool Contract**

**General Setup**

- **Admin Address**: Ethereum address for the administrator.
- **USDC Address**: Ethereum address of the `ERC20` base token (e.g., USDC).

**Optional Pools Configuration**  
Define pools with the following parameters:

````yaml
- minLended: number # Minimum amount required for lending.
- minBorrow: number # Minimum borrowable amount.
- maxPoolCapacity: number # Maximum amount that can be supply.
- endTime: UTC Date # Pool closing date.
- collateralToken: eth address # Address of the ERC20 collateral token contract.
- collateralTokenPriceOracle: eth address # Chainlink price feed address for collateral token valuation.
- collateralTokenSequencerOracle: eth address # Sequencer oracle address for collateral token valuation.
- collateralTokenFactor: number # Risk factor multiplier in bps for collateral token.
- collateralTokenLTVPercentage: number # Loan-to-value (LTV) percentage in bps.
- interest: number # Interest rate applied to loans.

#### **ERC20 Token Configuration**
```yaml
name: string         # Token name (e.g., "Defactor Token")
symbol: string       # Token symbol (e.g., "FACTR")
decimals: number     # Token precision (e.g., 6)
````

### **Counter Party Pool Configuration**

- **USD Token Address**: Ethereum address of the base token.

**Pool Setup Parameters**

```yaml
- softCap: number # Minimum funding goal.
- hardCap: number # Maximum funding goal.
- deadline: UTC Date # Deadline for pool contributions.
- collateralTokens:
    - contractAddress: eth address # Address of collateral token contract.
    - amount: number # Required collateral amount.
    - id: number # Collateral token ID (for NFTs).
```
