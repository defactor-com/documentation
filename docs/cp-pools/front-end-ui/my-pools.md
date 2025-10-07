---
id: cp-pools-frontend-my-pools
title: My Pools
sidebar_position: 3
---

The My Pools page displays all pools that you have created on the CP Pools platform. It serves as your pool management dashboard, allowing you to monitor and manage the investment pools you've established for other users to participate in.

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-my-pools-empty.png) -->

---

## Empty State Display

### No Pools to Display

**Visual Indicator**
- Database icon with checkmark indicating system readiness
- Clean, minimalist design focusing user attention on pool creation

**Primary Message**
- "No pools to display" - Clear status communication
- Explanatory text: "Pools that you have created will be shown here"

**Call to Action**
- **Create a new pool** button prominently displayed in center
- Alternative **Create a new pool** button in top navigation
- Multiple access points encouraging pool creation

---

## Pool Creation Interface

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-create-form-detailed.png) -->

### Comprehensive Create Pool Form

**Basic Pool Information**
- **Pool Name** - Required field for pool identification
- **Description** - Multi-line text area for detailed pool explanation and investment thesis

**Financial Configuration**

**Funding Parameters**
- **Pool Soft Cap** - Minimum funding threshold with info tooltip
- **Pool Hard Cap** - Maximum funding capacity with info tooltip

**Timeline Management**
- **Deadline** - Pool funding deadline with date picker interface
- **Liquidation Deadline** - Pool closure/exit date with date picker

**Online Presence and Verification**
- **Website** - URL field for pool's official website
- **Twitter handle** - Social media account with "Verify" button for authentication

**Return Structure**
- **Expected APR** - Projected annual percentage return for investors
- **Minimum APR** - Guaranteed minimum return commitment
- **Expected Term** - Duration of pool operation in specified time units

**Visual Branding**
- **Photo Upload** - Drag and drop file upload interface
- Supported formats: PNG, JPG, SVG up to 10MB
- Visual representation for pool marketing and identification

### Risk Management Requirements

**Collateral Configuration**
- "No collateral tokens selected yet" warning indicator
- **Collateral** section with **Add** button
- Mandatory collateral selection before pool finalization

---

## Collateral Selection System

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-collateral-modal.png) -->

### Choose Collateral Modal

**Token Selection Interface**

**Available Token Options**
- **USDC** - USD Coin stablecoin (ERC20)
- **Defactor: FACTR Token** - Platform native governance token
- **sdvsv** - Custom token with symbol "grdsfr"
- **USD Coin** - Alternative USDC implementation
- **Sharing Utility Token** - Platform utility token
- **Defactor** - REAL token for asset backing

**Token Information Display**
- **Name** - Full token name
- **Symbol** - Trading ticker symbol
- **Token ID** - Contract address identifier
- **Type** - Token standard (all ERC20)
- **Balance** - Available token amount in wallet

**Selection Process**
- Checkbox selection for multiple tokens
- Balance verification for selected collateral
- Real-time availability checking

**Modal Actions**
- **Cancel** - Close without selecting collateral
- **Add Collateral** - Confirm selected tokens and proceed

---

## Pool Creation Transaction Flow

### Fee Structure and Payment

**Pool Creation Fee**
- **200 USDC** non-refundable creation fee
- Transparent fee disclosure with warning notice
- USDC spending approval required first

**Transaction Steps**
1. Complete pool configuration form
2. Select and configure collateral tokens
3. Approve USDC spending for fee payment
4. Submit pool creation transaction

**Action Buttons**
- **Close** - Cancel pool creation process
- **Approve USDC** - Required fee payment authorization

---

## Post-Creation Pool Management

### Pool Portfolio View
- List display of all created pools
- Pool status indicators and progress tracking
- Performance metrics and participation statistics

### Management Functions
- Edit pool parameters (where applicable)
- Monitor funding progress and participant activity
- Access detailed analytics and reporting
- Manage pool lifecycle and closure processes

---

## Creator Benefits and Features

### Pool Creation Tools
- **Comprehensive Configuration** - All necessary parameters in single form
- **Risk Management** - Mandatory collateral requirements
- **Verification System** - Social media authentication options
- **Visual Branding** - Custom photo upload for pool identity

### Management Dashboard
- **Portfolio Overview** - All created pools in centralized view
- **Performance Tracking** - Monitor pool success and participant engagement
- **Financial Control** - Set and manage return parameters
- **Timeline Management** - Control funding and liquidation schedules

### Platform Integration
- **Fee Transparency** - Clear cost structure disclosure
- **Token Support** - Multiple collateral token options
- **Verification Features** - Twitter handle authentication
- **User Experience** - Guided creation process with validation

---

## User Experience Features

### Onboarding and Guidance
- **Empty State Education** - Clear explanation of page purpose
- **Progressive Forms** - Step-by-step pool creation process
- **Validation Feedback** - Real-time form validation and error prevention

### Risk and Compliance
- **Collateral Requirements** - Mandatory risk management through token backing
- **Fee Structure** - Transparent pricing with upfront disclosure
- **Timeline Validation** - Logical deadline sequencing and validation

### Accessibility and Usability
- **Multiple Entry Points** - Various paths to pool creation
- **Visual Indicators** - Clear status messages and progress tracking
- **Responsive Actions** - Prominent buttons with descriptive labels