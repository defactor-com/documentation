---
id: cp-pools-frontend-supplied
title: Supplied
sidebar_position: 3
---

The Supplied page displays all pools that you have committed funds to on the CP Pools platform. It serves as your investment portfolio view, showing your participation in various crowd-pooled investment opportunities.

![CP Pools Supplied Overview](../../../static/img/front-end/cp-pools/cp-pools-dash-supplied-overview.png)

---

## Empty State Display

### No Pools to Display

![CP Pools Supplied Empty State](../../../static/img/front-end/cp-pools/cp-pools-dash-supplied-empty.png)

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

## Pool Creation Interface

### Create Pool Form

![Create Pool Form Filled](../../../static/img/front-end/cp-pools/cp-pools-create-a-pool-form-filled.png)

The **Create Pool** form allows users to configure a new investment pool by entering basic details, funding limits, deadlines, and expected returns.

**Main Sections**
- **Basic Info:** Pool name and description  
- **Funding:** Soft and hard cap with tooltips  
- **Timeline:** Deadline and liquidation deadline with date pickers  
- **Links:** Website and Twitter handle verification  
- **Returns:** Expected APR, Minimum APR, Expected Term  
- **Visuals:** Upload pool image (PNG, JPG, SVG up to 10MB)

**Collateral**
- Initially empty with an “Add” button to select tokens  
- Required before pool creation can proceed  

**Fees**
- A non-refundable **200 USDC** creation fee  
- Requires **USDC approval** before submission

### Collateral Selection Modal

![Choose Collateral Modal](../../../static/img/front-end/cp-pools/cp-pools-create-a-pool-form-choose-collateral.png)

The **Choose Collateral** modal lists available tokens for selection.

**Columns**
- Checkbox, Name, Symbol, Token ID, Type, Balance  

**Actions**
- Select multiple tokens  
- Click **Add Collateral** to confirm or **Cancel** to exit

### Create Pool – Empty State

![Empty Create Pool Form](../../../static/img/front-end/cp-pools/cp-pools-create-a-pool-form-empty.png)

Displays an empty form with disabled submission and alerts:
- “No collateral tokens selected yet”  
- Reminder about 200 USDC creation fee

Buttons:
- **Close**  
- **Approve USDC**

### Create Pool – After Collateral Approval

![Approved Collateral Form](../../../static/img/front-end/cp-pools/cp-pools-create-a-pool-form-after-approved-collateral.png)

After approving collateral, the **Create Pool** button becomes active.  
All fields are validated, and the pool can be deployed on-chain.

**Workflow Summary**
1. Fill out pool details  
2. Add and approve collateral  
3. Approve USDC fee  
4. Create pool

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