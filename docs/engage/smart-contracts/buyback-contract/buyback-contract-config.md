---
id: buyback-contract-configuration
title: Buyback Contract Config
sidebar_position: 3
---

This guide provides the configuration parameters required to set up and deploy a **Buyback Contract** in the Defactor Engage platform.

---

## Buyback Contract Configuration

Unlike other modules, Buyback Contracts in Engage do not rely on pre-defined plans. Instead, each contract operates autonomously based on its configuration.

The core function of a Buyback Contract is to receive USDC, periodically convert it into FACTR tokens via a swap on the open market, and then lock the purchased FACTR for one year. After the lock period, the tokens are distributed to a set of predefined vault addresses.

This mechanism supports Defactor’s circular token economy by reducing circulating supply and reinforcing long-term value through time-locked distribution:

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
  recoverer: "0x1234567890ABCDEF1234567890ABCDEF12345678" # Address allowed to recover stuck tokens
  buyFrequency: 86400 # Buyback cooldown period (in seconds)
  vaults: # Vault addresses to distribute purchased FACTR
    - "0xABCDEF1234567890ABCDEF1234567890ABCDEF01"
    - "0xABCDEF1234567890ABCDEF1234567890ABCDEF02"
    - "0xABCDEF1234567890ABCDEF1234567890ABCDEF03"
    - "0xABCDEF1234567890ABCDEF1234567890ABCDEF04"
  maxLiquiditySlippage: 100 # 1% slippage (100 basis points)
  uniswapRouter: "0xE592427A0AECE92DE3EDEE1F18E0157C05861564" # Uniswap V3 router
  factrToken: "0xF4C5AF7E0A695E2B3832D203A9522A1D77B40F76" # FACTR token address
  usdcToken: "0xA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48" # USDC token address
  wethToken: "0xC02AA39B223FE8D0A0E5C4F27EAD9083C756CC2" # WETH intermediary
  quoter: "0xB27308F9F90D607463BB33EA1BEBB41C27CE5AB6" # Uniswap Quoter contract
```
