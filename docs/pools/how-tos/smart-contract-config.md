---
title: Pools Contract Configuration
sidebar_position: 2
---

## Contract Requirements and Parameters

## **ERC20 Collateral Pool Contract**

**General Setup**

- **Admin Address**: Ethereum address for the administrator.
- **USDC Address**: Ethereum address of the base token (e.g., USDC).

**Optional Pools Configuration**  
Define pools with the following parameters:

````yaml
- maxLended: number # Maximum amount allowed for lending.
- minLended: number # Minimum amount required for lending.
- minBorrow: number # Minimum borrowable amount.
- endTime: UTC Date # Pool closing date.
- collateralToken: eth address # Address of the collateral token contract.
- collateralTokenChainlink: eth address # Chainlink price feed address for collateral token valuation.
- collateralTokenFactor: number # Risk factor multiplier for collateral token.
- collateralTokenPercentage: number # Percentage of collateral required.
- interest: number # Interest rate applied to loans.

#### **ERC20 Token Configuration**
```yaml
name: string         # Token name (e.g., "Defactor Token")
symbol: string       # Token symbol (e.g., "FACTR")
decimals: number     # Token precision (e.g., 6)
````

## **Counter Party Pool Configuration**

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
