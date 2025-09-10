---
id: cp-pools-frontend-supplied
title: Supplied
sidebar_position: 3
---

The Supplied page displays all pools that you have committed funds to on the CP Pools platform. It serves as your investment portfolio view, showing your participation in various crowd-pooled investment opportunities.

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-supplied-empty.png) -->

---

## Empty State Display

### No Pools to Display

**Visual Indicator**
- Database icon with checkmark indicating data readiness
- Clean, minimalist design focusing user attention on next steps

**Primary Message**
- "No pools to display" - Clear status communication
- Explanatory text: "Pools that you have committed to will be shown here"

**Call to Action**
- **Create a new pool** button prominently displayed
- Alternative entry point to pool creation workflow
- Encourages user engagement when no investments exist

**Navigation Consistency**
- **Create a new pool** button also available in top navigation
- Multiple access points for pool creation functionality

---

## Pool Creation Interface

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-create-form.png) -->

### Create Pool Form

**Basic Information**
- **Pool Name** - Required field for pool identification
- **Description** - Multi-line text area for detailed pool explanation

**Financial Parameters**

**Funding Thresholds**
- **Pool Soft Cap** - Minimum funding threshold with info tooltip
- **Pool Hard Cap** - Maximum funding limit with info tooltip

**Timeline Configuration**
- **Deadline** - Pool funding deadline with date picker (10/10/2025)
- **Liquidation Deadline** - Pool closure date with date picker (11/10/2025)

**Online Presence**
- **Website** - URL field for pool website
- **Twitter handle** - Social media verification field with "Verify" button

**Return Parameters**
- **Expected APR** - Projected annual return rate
- **Minimum APR** - Guaranteed minimum return rate
- **Expected Term** - Duration of pool operation

**Visual Assets**
- **Photo Upload** - Drag and drop interface
- File support: PNG, JPG, SVG up to 10MB
- Visual branding for pool presentation

### Collateral Management

**Collateral Warning**
- "No collateral tokens selected yet" alert message
- Required step before pool creation completion

**Collateral Section**
- Dedicated collateral configuration area
- **Add** button to configure collateral requirements

### Transaction Requirements

**Pool Creation Fee**
- **200 USDC** non-refundable creation fee
- USDC spending approval required first
- Fee applicable to all pool creation requests

**Action Buttons**
- **Close** - Cancel pool creation process
- **Approve USDC** - Required for fee payment

---

## Collateral Selection Modal

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-collateral-selection.png) -->

### Choose Collateral Interface

**Token Selection Table**

**Column Structure**
- **Checkbox** - Selection indicator for each token
- **Name** - Full token name
- **Symbol** - Token ticker symbol
- **Token ID** - Contract identifier
- **Type** - Token standard (ERC20)
- **Balance** - Available token amount

**Available Collateral Options**
- **USDC** - USD Coin stablecoin
- **Defactor: FACTR Token** - Platform native token
- **sdvsv** - Custom token option
- **USD Coin** - Alternative USDC listing
- **Sharing Utility Token** - Platform utility token
- **Defactor** - REAL token option

**Selection Process**
- Multiple token selection supported
- Balance verification for selected tokens
- Token type validation (ERC20 standard)

**Modal Actions**
- **Cancel** - Close without selecting collateral
- **Add Collateral** - Confirm selected tokens

---

## Pool States and Lifecycle

### Pre-Creation State
- Empty state with creation encouragement
- Direct path to pool creation workflow
- Educational messaging about pool display

### Creation Process
- Comprehensive form with all required parameters
- Collateral selection and configuration
- Fee payment and approval process

### Post-Creation Display
- Portfolio view of committed pools
- Investment tracking and performance monitoring
- Pool status and participation details

---

## User Experience Features

### Guidance and Onboarding
- **Empty State Messaging** - Clear explanation of page purpose
- **Form Validation** - Required field indicators and tooltips
- **Progressive Disclosure** - Step-by-step pool creation process

### Risk Management
- **Collateral Requirements** - Mandatory collateral configuration
- **Fee Transparency** - Clear creation cost disclosure
- **Timeline Validation** - Logical deadline sequencing

### Accessibility
- **Multiple Entry Points** - Various paths to pool creation
- **Visual Feedback** - Icons and status indicators
- **Clear Actions** - Prominent buttons with descriptive labels

---

## Workflow Benefits

### For Pool Creators
- **Streamlined Creation** - Guided form with all necessary fields
- **Flexible Configuration** - Customizable parameters and timelines
- **Collateral Management** - Comprehensive token selection options

### For Investors
- **Portfolio Overview** - Clear view of all committed pools
- **Investment Tracking** - Monitor participation across pools
- **Easy Access** - Quick path to create additional pools

### Platform Features
- **Fee Structure** - Transparent pricing model
- **Token Integration** - Support for various collateral types
- **Social Verification** - Twitter handle verification system