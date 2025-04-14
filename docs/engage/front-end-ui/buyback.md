---
title: BuyBack Module
sidebar_position: 4
---

The BuyBack module provides full transparency into Defactor’s deflationary token strategy. It allows users to track buyback activity where ecosystem revenue is used to repurchase $FACTR tokens from the open market.

## How It Works

- Usage fees (paid in USDC) from platform modules are aggregated.
- These funds are used to automatically **buy $FACTR on the open market**.
- Purchased tokens are **locked for 12 months**, reducing circulating supply.

## Features

- View **total FACTR bought back** in real time
- Explore **personal buyback history** under "My Buybacks"
- Monitor **frequency and volume** of market buybacks

## Dashboard Elements

- **Total Bought Back** – Cumulative amount of tokens repurchased
- **Latest Buybacks** – Time-stamped records of recent buybacks
- **My Buybacks** – History of individual user contributions and allocations
- **Buyback Form** – Interface (if enabled) to trigger manual buybacks

## QA Checklist

- Buyback data loads in real time
- “Latest Buybacks” reflects accurate timestamps and volumes
- “My Buybacks” displays user-specific transactions
- Locked tokens are reflected in smart contract balances
- Buyback contract interaction works across supported chains
