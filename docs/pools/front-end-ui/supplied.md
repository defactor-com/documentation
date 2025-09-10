---
id: pools-frontend-supplied
title: Supplied
sidebar_position: 3
---

The Supplied page provides a comprehensive view of all your lending positions across pools on the Defactor platform. It serves as your portfolio management hub for tracking supplied assets, earned rewards, and managing supply positions.

![External Links](../../../static/img/front-end/pools/pools-supplied.png)

---

## Overview Metrics

### Total Supplied

**Primary Metric Display**
- Large numerical display showing total supplied amount
- Denominated in USDC
- Represents aggregate value across all pool positions

### Supply vs Rewards by Pools

**Horizontal Bar Chart**
- Visual comparison of supplied amounts versus rewards earned
- Pool-by-pool breakdown showing performance
- Two-color visualization:
  - **Supply** (green bar) - Principal amount supplied to each pool
  - **Rewarded** (blue bar) - Rewards earned from each pool

**Chart Scale**
- X-axis showing dollar amounts from $0.00 to maximum values
- Easy comparison across different pools and reward levels

---

## Position Status Overview

### My Positions by Status

**Circular Progress Chart**
- Visual representation of position health
- **100%** indicating all positions are active
- **Active** status with green indicator
- Clean, easy-to-read status overview

---

## Supply Stats Panel

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

---

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

---

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

---

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

---

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

---

## Workflow Benefits

- **Single Dashboard**: All supply activities centralized
- **Reward Optimization**: Compare performance across pools
- **Flexible Management**: Partial or full withdrawals available
- **Historical Tracking**: Complete