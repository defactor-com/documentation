---
title: Buyback Contract Configuration
sidebar_position: 1
---

# BuyBack Contract Configuration

This guide provides the configuration parameters required to set up and deploy a **Buyback Contract** in the Defactor Engage platform.

## New Buyback Contract Configuration

For creating a new buyback plan apart from the default plans, the following parameters need to be defined:

### **BuyBack Configuration Parameters**

| Parameter                | Type        | Description                                                                  |
| ------------------------ | ----------- | ---------------------------------------------------------------------------- |
| **recoverer**            | `address`   | Address authorized to recover stuck tokens from the contract.                |
| **buyFrequency**         | `uint`      | Cooldown period between consecutive buybacks (in seconds).                   |
| **vaults**               | `address[]` | Array of vault addresses to distribute purchased FACTR tokens (typically 4). |
| **maxLiquiditySlippage** | `uint16`    | Maximum allowed slippage (in basis points) during token swap.                |
| **uniswapRouter**        | `address`   | Uniswap v3 router address used to execute swaps.                             |
| **factr**                | `address`   | FACTR token address to be bought back.                                       |
| **usdc**                 | `address`   | USDC token address used to purchase FACTR.                                   |
| **weth**                 | `address`   | WETH token used as an intermediate route in the swap.                        |
| **quoter**               | `address`   | Contract address to fetch swap quotes without executing them.                |

---

## Example Configuration

```yaml
buybackContract:
  recoverer: "0x1234567890abcdef1234567890abcdef12345678" # Address allowed to recover stuck tokens
  buyFrequency: 86400 # Cooldown period between consecutive buybacks (in seconds)
  vaults: # Addresses where purchased FACTR tokens will be distributed
    - "0xVaultAddress1abcdefabcdefabcdefabcdefabcdef01"
    - "0xVaultAddress2abcdefabcdefabcdefabcdefabcdef02"
    - "0xVaultAddress3abcdefabcdefabcdefabcdefabcdef03"
    - "0xVaultAddress4abcdefabcdefabcdefabcdefabcdef04"
  maxLiquiditySlippage: 100 # Maximum slippage allowed during token swap (in basis points, 100 = 1%)
  uniswapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564" # Uniswap v3 router address
  factrToken: "0xF4c5AF7e0A695e2b3832d203a9522A1D77b40F76" # FACTR token address to be bought back
  usdcToken: "0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" # USDC token address used to buy FACTR
  wethToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" # WETH token used as swap intermediary
  quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6" # Uniswap Quoter contract for fetching swap quotes
```
