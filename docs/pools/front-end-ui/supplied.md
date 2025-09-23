---
id: pools-frontend-supplied
title: Supplied
sidebar_position: 3
---

The Supplied page provides a comprehensive view of all your lending positions across pools on the Defactor platform. It serves as your portfolio management hub for tracking supplied assets, earned rewards, and managing supply positions.

---

## Dashboard Overview  

![Pools Dashboard Overview](../../../static/img/front-end/pools/pools-supplied.png)

The dashboard provides:  
- **Total Supplied** – Aggregate value of all assets currently supplied across pools  
- **Supply vs Rewards by Pools** – Bar chart comparing supplied amounts against rewards earned for each pool  
- **My Positions by Status** – Circular chart showing the health and activity of your supply positions  
- **Supply Stats Panel** – Key performance metrics including active supplies, claimed supplies, liquidation alerts, and total rewards earned  
- **My Supplies Table** – Detailed view of each supply position with sortable columns and management actions  

## Overview Metrics  

### Total Supplied

![Pools Total Supplied](../../../static/img/front-end/pools/pools-supplied-metrics-total-supplied.png)

**Primary Metric Display**
- Large numerical display showing total supplied amount
- Denominated in USDC
- Represents aggregate value across all pool positions

### Supply vs Rewards by Pools  

![Pools Bar Chart](../../../static/img/front-end/pools/pools-supplied-metrics-bar-chart.png)

The **Supply vs Rewards** chart compares the amount of assets you’ve supplied to each pool against the rewards those supplies have generated.  

**Horizontal Bar Chart**  
- Provides a side-by-side view of **supply amounts** versus **rewards earned**  
- Breaks down performance **pool by pool**  
- Uses a two-color visualization:  
  - **Supply** (green bar) – Principal amount supplied into each pool  
  - **Rewarded** (blue bar) – Rewards earned from that supply  

**Tooltip Details**  

When hovering over a pool, the tooltip displays:  
- **Supply** – The exact USDC amount currently supplied
- **Rewarded** – The rewards earned from that supply

> This chart makes it easy to evaluate the effectiveness of your supplies by comparing how much you’ve committed to each pool against the rewards it has generated.  

### My Positions by Status  

The **My Positions by Status** chart gives a snapshot of the overall state of your supply positions. It shows how many are currently active and how many have been withdrawn or closed.  

![My Positions by Status](../../../static/img/front-end/pools/pools-supplied-metrics-my-positions-by-status.png)

**Circular Progress Chart**  
- Displays the proportion of positions by status (e.g., Active, Withdrawn)  
- Each status is represented by a **distinct color** for easy differentiation  

**Tooltip Details**  
When hovering over the chart, tooltips display the exact counts:  
- **Active** – Number of positions currently open and earning rewards  
- **Withdrawn** – Number of positions that have been closed or exited  

> This chart provides a quick health check of your portfolio, letting you see at a glance whether most of your supplies are still active or if a portion has already been withdrawn.

### Key Performance Metrics

**Active Supplies**
- Current count of active supply positions
- Quick reference for portfolio complexity

**Claimed Supplies**
- Total number of completed/claimed positions
- Historical activity indicator

**Positions to Liquidate**
- Current count of at-risk positions
- Risk management alert (showing 0 for healthy portfolio)

**Total Rewards Earned**
- Cumulative rewards in USDC
- Real-time earnings from all supply positions

## My Supplies Management

### Action Buttons

**Withdraw All**
- Bulk withdrawal option for all positions
- Streamlined exit strategy

**Supply**
- Quick access to create new supply position
- Direct path to pool participation

### Supply Positions Table

**Column Structure**
- **Pool Name** - Pool identifier with logo/branding
- **Initial Amount** ↓ - Original supply amount (sortable)
- **Outstanding Amount** ↓ - Current position value (sortable)
- **Rewarded** ↓ - Earned rewards amount (sortable)
- **Start Time** ↓ - Position creation timestamp (sortable)
- **End Time** ↓ - Position maturity date (sortable)
- **Status** - Current position state
- **Actions** - Available position actions

**Position Entry Example**
- **Pool**: Pool identifier with logo
- **Initial Amount**: Original USDC supplied
- **Outstanding Amount**: Current USDC value
- **Rewarded**: Earned USDC rewards
- **Start Time**: Position creation date and time
- **End Time**: Position end date (if applicable)
- **Status**: "In Progress" with progress indicator
- **Action**: "Withdraw" button for position management

### Table Controls

**Pagination**
- Navigation for multiple positions
- Configurable rows per page display
- Page indicators and navigation arrows

## Supply Pool Modal

<!--  ![External Links](../../../static/img/front-end/pools/pools-supply-modal.png) -->

### Pool Selection

**Chain Selection**
- Dropdown for blockchain network selection
- Currently showing available chains (e.g., Base Testnet)

**Pool Selection**
- Dropdown for available pools on selected chain
- Pool-specific information display

### Pool Information Display

**Key Metrics**
- **APR**: Annual percentage rate for rewards
- **End Date**: Pool maturity/closure date
- **Wallet**: Connected wallet address (truncated)

### Supply Amount Configuration

**Amount Input**
- Numerical input field for supply amount
- Min/Max buttons for quick selection
- Minimum and maximum limits display
- Current wallet balance display

**Transaction Details**
- Real-time calculation of supply parameters
- Balance verification before transaction

**Supply Button**
- Confirmation action to execute supply
- Validates amount and wallet balance

## Withdraw Modal

<!-- ![External Links](../../../static/img/front-end/pools/pools-withdraw-modal.png) -->

### Position Information

**Pool Details**
- Pool name and chain information
- Current position amount display

### Withdrawal Configuration

**Amount to Withdraw**
- Input field for withdrawal amount
- Half/Max buttons for quick selection
- Available balance display

### Transaction Summary

**Financial Breakdown**
- **Amount to Withdraw**: Principal withdrawal amount
- **Rewards**: Earned rewards to be claimed
- **Remaining Balance**: Position balance after withdrawal

**Action Buttons**
- **Cancel**: Close modal without action
- **Withdraw**: Execute withdrawal transaction

## Key Features

### Portfolio Management
- **Comprehensive Overview**: All supply positions in single view
- **Performance Tracking**: Visual charts showing supply vs rewards
- **Status Monitoring**: Real-time position health indicators

### Risk Management
- **Position Liquidation Alerts**: Early warning system
- **Outstanding Amount Tracking**: Monitor position values
- **Reward Accumulation**: Track earnings across all positions

### User Experience
- **Sortable Tables**: Organize positions by any metric
- **Quick Actions**: Fast access to supply and withdraw functions
- **Modal Interfaces**: Streamlined transaction flows
- **Real-time Updates**: Live data reflecting current position states

## Workflow Benefits

- **Single Dashboard**: All supply activities centralized
- **Reward Optimization**: Compare performance across pools
- **Flexible Management**: Partial or full withdrawals available
- **Historical Tracking**: Complete