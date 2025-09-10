---
id: cp-pools-frontend-dashboard
title: Dashboard
sidebar_position: 2
---

The CP Pools Dashboard provides a comprehensive overview of pool creation and management activities on the Defactor platform. It serves as your main control center for creating new pools, managing existing pools, and monitoring global pool statistics and performance.

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-dashboard.png) -->

---

## Global Stats Overview

### Total Value Locked (TVL)

**Primary Metric Display**
- Large numerical display showing platform-wide total value locked
- Central position emphasizes this key performance indicator
- Reflects aggregate value across all pools on the platform

**Pool Status Breakdown**
Visual indicators showing pool creation activity:
- **Created** (green) - Total number of pools created
- **Active** (blue) - Currently operational pools  
- **Repaid** (red) - Completed/closed pools

**Circular Progress Visualization**
- Donut chart displaying total value locked
- Central value showing aggregate TVL amount
- Visual representation of platform health and activity

### Rewards Section

**Total Rewards Paid Out**
- Aggregate rewards distributed to all participants
- Denominated in USDC
- Platform-wide reward distribution metric

**Expected Rewards**
- Projected future rewards to be distributed
- Forward-looking reward calculations
- Denominated in USDC

---

## Top Pools Section

### Featured Pool Cards

**Pool Display Format**
Each pool card shows essential information:
- **Pool Name** - Descriptive identifier
- **Funding Progress** - Current funding status (e.g., 711/500 USDC)
- **Creator Badge** - "Created" status indicator
- **Creator Handle** - Pool creator's username with verification badge

**Pool Examples Shown**
- **REIT for Apartment Buildings** - Real estate investment pool
- **Yellow** - Generic pool example  
- **Brickwise Collective** - Community investment pool
- **ArtVault Collective** - Art-focused investment pool

**Verification Indicators**
- Blue verification badges for authenticated creators
- Creator handles displayed with @ symbol
- Trust indicators for pool legitimacy

---

## Pool Management Table

### Status Filter Tabs

**Pool Status Categories**
- **Open** - Currently accepting participants (default view)
- **Funded** - Fully funded and operational pools
- **Repaid** - Completed pools with successful closure

### Pool Creation Action

**Create a New Pool Button**
- Prominent blue button for pool creation
- Primary call-to-action for new pool creators
- Direct access to pool creation workflow

### Active Pools Table

**Column Structure**
- **Name** - Pool identifier and title
- **Verified** - Verification status with blue badges
- **APR** - Annual percentage rate offered
- **Utilization Rate** - Current funding utilization
- **Status** - Pool operational status
- **Actions** - Available management options (three-dot menu)

**Pool Entry Examples**
- Various pool names with different APR rates (0%, 1%, 7%)
- Utilization rates showing funding progress (0/10 USDC, 100/11 USDC)
- All showing "Created" status with green indicators
- Action menus for pool management options

### Action Menu Options

**Pool Management Functions**
Available through three-dot menu (⋯):
- **View Details** - Access comprehensive pool information
- **Deposit** - Add funds to the pool (when applicable)
- Additional context-sensitive options based on pool status

---

## Pool Creation Workflow

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-create-form.png) -->

### Pool Configuration Form

**Basic Information**
- **Description** - Text area for detailed pool explanation
- **Pool Soft Cap** - Minimum funding threshold with info tooltip
- **Pool Hard Cap** - Maximum funding limit with info tooltip

**Timeline Settings**
- **Deadline** - Pool funding deadline with date picker
- **Liquidation Deadline** - Pool closure date with date picker

**Online Presence**
- **Website** - Pool website URL field
- **Twitter Handle** - Social media verification with verify button

**Financial Parameters**
- **Expected APR** - Projected annual return rate
- **Minimum APR** - Guaranteed minimum return rate  
- **Expected Term** - Duration of pool operation

**Visual Assets**
- **Photo Upload** - Drag and drop file upload
- Support for PNG, JPG, SVG up to 10MB
- Visual representation for pool branding

### Collateral Configuration

**Collateral Requirements**
- **No Collateral Tokens Selected** warning message
- **Collateral Section** with Add button
- Required for pool risk management

**Pool Creation Fee**
- **200 USDC** non-refundable creation fee notice
- USDC spending approval requirement
- Fee applicable to all pool creation requests

### Form Completion

**Action Buttons**
- **Close** - Cancel pool creation
- **Connect Wallet** - Required for transaction processing

---

## Dashboard Benefits

### For Pool Creators
- **Comprehensive Pool Management** - All created pools in single dashboard
- **Performance Tracking** - Monitor funding progress and utilization rates
- **Financial Oversight** - Track APR performance and reward distributions
- **Easy Pool Creation** - Streamlined creation workflow with guided forms

### For Platform Overview
- **Global Statistics** - Platform-wide TVL and activity metrics
- **Top Pools Discovery** - Featured successful pools for inspiration
- **Market Intelligence** - APR rates and utilization patterns across pools
- **Verification System** - Trust indicators and creator authentication

### User Experience
- **Intuitive Navigation** - Clear status tabs and filtering options
- **Visual Data Presentation** - Charts and progress indicators
- **Quick Actions** - Easy access to creation and management functions
- **Real-time Updates** - Live data reflecting current pool states