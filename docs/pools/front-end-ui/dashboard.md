---
id: pools-frontend-dashboard
title: Dashboard
sidebar_position: 2
---

The Pools Dashboard provides a comprehensive overview of your lending and borrowing activities on the Defactor platform. It serves as your main control center for DeFi pool management, displaying key financial metrics and providing quick access to supply and borrow functions.

![External Links](../../../static/img/front-end/pools/pools-dash.png)  

---

## Key Metrics Overview

### Total Value Locked (TVL)

**Primary Metric Display**
- Large numerical display showing total value locked
- Central position emphasizes this key performance indicator
- Reflects the total value of assets you have supplied to pools

### Pool Utilization Chart

**Interactive Time Series Visualization**
- Multi-line chart showing pool utilization trends over time
- Time period filters: **1D**, **1W**, **1M**, **1Y**

**Chart Legend**
- **Supplied** (green line) - Assets you've provided to pools
- **Borrowed** (red/pink line) - Assets borrowed from pools  
- **Available** (blue line) - Available liquidity in pools

### Pool Activity Summary

**Three Key Metrics Panel**

**Available**
- Current amount
- Represents liquidity available for borrowing
- Green indicator for healthy availability

**Historically Borrowed**
- Total amount
- Shows cumulative borrowing activity
- Red indicator reflecting borrowed positions

**Historically Supplied**
- Total amount
- Shows total supplied assets over time
- Blue indicator for supply activity

---

## Statistics Panel

### Personal Performance Metrics

**Active Borrows**
- Current count
- Shows number of active borrowing positions
- Quick reference for portfolio complexity

**Positions Repaid**
- Total count
- Historical view of completed loan positions
- Indicates borrowing experience and activity

**Interest Earned**
- Current amount
- Real-time earnings from supplied assets
- Reflects lending yield performance

**Collateralization Ratio**
- Current ratio
- Critical metric for borrowing safety
- Shows health of collateral backing borrowed assets

---

## Pools Management Section

### Status Tabs
- **Active** - Currently operational pools
- **Closed** - Inactive or completed pools

### Active Pools Table

![External Links](../../../static/img/front-end/pools/pools-table-active-pools.png)  

**Column Structure:**
- **Pool Name** - Pool identifier and branding
- **Collateral** - Accepted collateral types
- **Chain** - Blockchain network (showing various chain icons)
- **APR** ↓ - Annual Percentage Rate (sortable column)
- **Available** ↓ - Available liquidity for borrowing (sortable column)
- **Completion** - Pool timeline and progress
- **Actions** - Available user actions (Supply/Borrow)

## Pool Interaction Workflow

![External Links](../../../static/img/front-end/pools/pools-open-position.png)  

**Supply Process**
1. Click the “Supply / Borrow” button.
2. Select the Supply option.
3. Enter the desired supply amount (within the allowed limits).
4. Confirm transaction.

**Borrow Process**
1. Click the “Supply / Borrow” button.
2. Select the Borrow option.
3. Enter the desired borrow amount (within the allowed limits).
4. Confirm transaction.

## Dashboard Benefits

- **Comprehensive Portfolio View** - All positions visible at a glance
- **Risk Assessment Tools** - Collateralization ratio and health monitoring
- **Yield Optimization** - APR comparison across pools
- **Historical Analysis** - Track performance over time through charts
- **Multi-pool Management** - Manage multiple positions from single interface
- **Real-time Liquidity** - Instant visibility of available borrowing capacity