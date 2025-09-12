---
id: cp-pool-creation
title: How to Create a CP Pool
sidebar_position: 5
---

This comprehensive guide walks users through the process of creating Counterparty (CP) Pools on the Defactor platform, enabling decentralized lending and borrowing with tokenized asset collateral.

---

## Step 1: Access CP Pool Creation

There are multiple ways to access the CP Pool creation interface:

![CP Pool Dashboard](../../../../documentation/static/img/front-end/cp-pools/how-tos/cp-pools-how-tos-dashboard.png)

**Option A: Dashboard Access**
- Navigate to the **CP Pools** dashboard from the main menu
- Click the **"Create Pool"** or **"Create a new pool"** button prominently displayed
- Or use the **"Create a new pool"** button in the Top Pools section

**Option B: Direct Creation**
- Access via the **"Create a new pool"** button when no pools exist
- Follow the guided message: "You can create a new pool by clicking on 'Create a new pool' button and following the next steps"

## Step 2: Configure Pool Basic Information

### Pool Identity Settings

**Pool Name** *(Required)*
Enter a descriptive name for your counterparty pool that clearly identifies its purpose.

**Description**
Provide detailed information about the pool's terms, conditions, and intended use case.

### Pool Capacity Configuration

**Pool Soft Cap** *(Required)*
Set the target funding amount for your pool. This represents the desired liquidity level.

**Pool Hard Cap** *(Required)*  
Define the maximum funding limit. Once reached, the pool will stop accepting new deposits.

### Timeline Settings

**Deadline** *(Required)*
Set the funding deadline when the pool will close for new participants.

**Liquidation Deadline** *(Required)*
Define when assets can be liquidated if loan terms are not met.

### Social & Web Presence

**Website**
Add your project's website URL for additional credibility and information.

**Twitter Handle**
Enter your Twitter handle for social verification (includes "Verify" functionality).

### Financial Parameters

**Expected APR** *(Required)*
Set the expected Annual Percentage Rate that lenders can anticipate.

**Minimum APR** *(Required)*
Define the minimum acceptable return rate for the pool.

**Expected Term** *(Required)*
Specify the loan duration or investment period.

**Photo**
Upload a representative image for your pool (PNG, JPG, SVG up to 10MB).

## Step 3: Add Collateral Assets

### Collateral Selection Process

**Available Assets**
The system displays all available tokenized assets that can be used as collateral, including:
- Asset name and symbol
- Token ID and type (ERC20)
- Current balance available
- Token details

**Adding Collateral**
1. Browse the list of available tokenized assets
2. Select desired assets by checking the boxes
3. Click **"Add Collateral"** to include selected assets in your pool

### Collateral Management

**Amount Configuration**
- Set the specific amount of each collateral asset
- Use "Max" button to utilize full available balance
- Adjust amounts based on pool requirements and risk management

**Collateral Overview**
Each added collateral displays:
- Name and symbol
- Token ID and type
- Current balance
- Amount allocated to the pool
- Action options (delete if needed)

## Step 4: Pool Creation Fee and Deployment

### Important Fee Information
**Pool Creation Fee: 200 USDC**
- Non-refundable fee applicable to all pool creation requests
- Requires USDC spending approval before pool creation
- Fee helps maintain platform operations and pool infrastructure

### Blockchain Approval Process

**USDC Spending Approval**
1. System requests permission to withdraw tokens from your account
2. Approve the spending cap (200 USDC for pool creation)
3. Confirm the transaction in your wallet
4. Wait for blockchain confirmation

### Final Pool Creation

**Create Pool**
- Review all configuration settings
- Ensure collateral assets are properly configured
- Click **"Create Pool"** to deploy on blockchain
- Confirm transaction and wait for deployment completion

The pool creation process combines traditional DeFi lending mechanics with tokenized real-world assets, creating new opportunities for asset-backed lending and borrowing in the decentralized finance ecosystem.