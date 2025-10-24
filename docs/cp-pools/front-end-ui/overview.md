---
id: cp-pools-frontend-overview
title: CP Pools Frontend UI Overview
sidebar_position: 1
---

The **CP Pools Frontend UI** provides a comprehensive interface for creating, managing, and participating in counterparty pools on the Defactor platform.  
It enables pool creators to launch crowd-pooled investment opportunities and allows investors to supply liquidity in exchange for yield-generating returns.

This ensures transparency, efficient fund management, and seamless interaction across the entire pool lifecycle—from creation and funding to collection, reward distribution, and liquidation.

---

## Key Features  

- **Dashboard** – Monitor global and personal pool statistics including Total Value Locked (TVL), pool lifecycle status, and rewards distribution.  
- **My Pools** – Manage pools you created with tools for collecting funds, depositing rewards, and tracking performance.  
- **Supplied** – View and manage pools where you've supplied liquidity, track investments, and claim earned rewards.  
- **Pool Details Page** – Access comprehensive information about individual pools including metrics, collateral, deposit/withdraw functionality, and transaction history.  
- **Pool Creation** – Guided workflow to design, configure, and launch new investment pools with custom parameters and collateral.  
- **Rewards Management** – Transparent system for depositing rewards and enabling proportional claims by investors.  
- **Liquidation & Voting** – Automated processes for handling pools that fail to meet minimum APR requirements, including investor voting for liquidators.  

## Frontend Modules  

The CP Pools UI is organized into several modules, each focused on a key area of pool management and participation:  

### Core Interface Modules

- **[Dashboard](/docs/cp-pools/front-end-ui/cp-pools-frontend-dashboard#)** – Central hub displaying platform-wide TVL, pool status breakdown, and personalized statistics for created and supplied pools.  
- **[My Pools](/docs/cp-pools/front-end-ui/cp-pools-frontend-my-pools#)** – Management interface for pools you created, with actions for collecting funds, paying suppliers, closing, and archiving pools.  
- **[Supplied](/docs/cp-pools/front-end-ui/cp-pools-frontend-supplied#)** – Portfolio view of pools where you supplied liquidity, showing committed amounts, claimed rewards, and withdrawal options.  
- **[Pool Details Page](/docs/cp-pools/front-end-ui/cp-pools-frontend-pool-details#)** – Detailed view of individual pools including header information, metrics bar, deposit/withdraw panel, collaterals table, and transaction history.  

### How-To Guides

- **[Pool Creation](/docs/cp-pools/how-tos/cp-pool-creation#)** – Step-by-step process to create new pools with configuration for funding limits, APR, collateral selection, and timeline parameters.  
- **[Success Flow](/docs/cp-pools/how-tos/cp-pool-success-flow#)** – Complete workflow for managing successfully funded pools including fund collection by owners and reward claiming by investors.  
- **[Min APR Not Met Flow](/docs/cp-pools/how-tos/cp-pool-min-apr-not-met-flow#)** – Liquidation process when pools return principal but fail to meet minimum APR requirements, triggering collateral voting and distribution.  
- **[Failure Flow](/docs/cp-pools/how-tos/cp-pool-failure-flow#)** – Refund process when pools fail to reach minimum funding target by deadline, returning full deposits to investors.  
- **[Default Flow](/docs/cp-pools/how-tos/cp-pool-default-flow#)** – Handling scenarios where pool owners collect funds but fail to repay principal and rewards, triggering collateral liquidation.   

## User Roles  

The CP Pools interface serves two primary user roles with distinct workflows:  

### Pool Owner (Creator)  
- Creates pools with custom parameters (APR, funding targets, deadlines, collateral)  
- Collects committed funds when pools reach funding targets  
- Deposits rewards (principal + interest) to enable investor claims  
- Manages pool lifecycle through status transitions  
- Monitors performance via "My Pools" dashboard  

### Pool Investor (Supplier)  
- Browses and evaluates available investment opportunities  
- Deposits USDC into pools to earn APR-based yields  
- Tracks investments and rewards via "Supplied" dashboard  
- Claims proportional rewards when deposited by pool owners  
- Withdraws funds based on pool status and conditions  
- Participates in liquidation voting when minimum APR is not met  

## Pool Lifecycle States  

Pools transition through several states, each with specific actions available:  

- **Created** – Pool initialized and accepting deposits; investors can withdraw before activation  
- **Active** – Pool funded and operational; owner has collected funds; investors await reward deposits  
- **Closed** – Pool ended or terminated; final settlements available  
- **Liquidated** – Pool fully settled with collateral distributed (if applicable)  
- **Archived** – Pool moved to historical records  
- **Failed** – Pool did not reach minimum funding target by deadline; full refunds issued  

## Core Workflows  

### Creating a Pool  
1. Access creation form from Dashboard, My Pools, or Supplied empty state  
2. Configure pool parameters (name, description, funding caps, deadlines)  
3. Set expected APR, minimum APR, and term duration  
4. Select and approve collateral tokens  
5. Approve 200 USDC creation fee  
6. Submit transaction to deploy pool on-chain  

### Investing in a Pool  
1. Browse available pools in Supplied section or Pool Details page  
2. Review pool metrics, APR, collateral, and timeline  
3. Enter deposit amount (within min/max USDC limits)  
4. Confirm transaction and commit funds  
5. Track investment in Supplied table with real-time updates  

### Managing Successful Pools  
**Owner Actions:**  
1. Collect funds when pool reaches target  
2. Receive committed USDC minus platform fee  
3. Deposit rewards (principal + APR-based interest)  
4. Enable investor claims through reward distribution  

**Investor Actions:**  
1. Monitor pool status transition to Active  
2. Wait for owner to deposit rewards  
3. Claim proportional share when available  
4. View transaction history for transparency  

### Handling Liquidation (Min APR Not Met)  
1. Owner deposits only principal without sufficient rewards  
2. System detects APR shortfall after liquidation deadline  
3. Investors vote for liquidator using proportional voting power  
4. Liquidator executes collateral transfer when sufficient votes obtained  
5. Collateral distributed to investors to compensate for missing rewards  

## Dashboard Components  

### Global Stats Overview  
- **Total Value Locked (TVL)** – Aggregate value across all platform pools  
- **Pool Status Breakdown** – Created, Active, and Repaid pool counts  
- **Circular Progress Chart** – Visual representation of TVL with interactive tooltips  
- **Rewards Section** – Total rewards paid out and expected future rewards  

### My Stats Overview  
Toggle between two personalized views:  

**My Supplied Liquidity:**  
- Total value of liquidity supplied to other pools  
- Donut chart showing distribution across pool statuses  
- Rewards received and expected from supplied positions  

**My Pools:**  
- Total value locked in pools you created  
- Circular chart visualizing TVL across your created pools  
- Rewards paid out to participants and expected future payouts  

## Table Interfaces  

### My Pools Table  
- **Name** – Pool identifier with logo  
- **Verified** – Blue checkmark for verified pools  
- **APR** – Expected return rate  
- **Utilization Rate** – Current/total USDC committed  
- **Total Rewards** – Amount distributed to investors  
- **Status** – Visual badge (Created/Active/Closed)  
- **Actions** – Dropdown menu with management options  

### Supplied Table  
- **Name** – Pool identifier with logo  
- **Verified** – Blue checkmark for verified pools  
- **APR** – Expected return rate  
- **Utilization Rate** – Current/total USDC committed  
- **Committed** – Your investment amount  
- **Claimed** – Amount you've withdrawn  
- **Status** – Visual badge (Created/Active/Closed)  
- **Actions** – Withdraw, Claim, and options menu  

## Pool Details Components  

### Pool Header  
- Pool name and current status  
- Owner wallet address  
- Website and social media links  
- Descriptive text about pool purpose and goals  

### Metrics Bar  
- Min/Max USDC deposit limits per user  
- USDC deposited and total committed amounts  
- Creation timestamp  
- Pool deadline and liquidation deadline  
- Expected APR, Minimum APR, and term duration  

### Deposit & Withdraw Panel  
- Input field for USDC deposit amount  
- Deposit button (enabled when valid amount entered)  
- Display of deposited amount  
- Withdraw All button for removing committed funds  

### Collaterals Table  
- Token name, symbol, and type (ERC20, ERC721, etc.)  
- Token ID and contract address  
- Amount of collateral tokens committed  
- Security backing for investor deposits  

### History Table  
- Event type (Deposited, Collected, Claimed, Liquidated)  
- Timestamp of each transaction  
- User wallet address  
- Amount involved in transaction  
- Complete audit trail for transparency  

## Key Design Principles  

### Transparency  
- All transactions logged in blockchain-backed history  
- Real-time balance and status updates  
- Clear visual status indicators  
- Visible fees, calculations, and APR methodologies  

### User Control  
- Multiple entry points for common actions  
- Confirmation steps for all blockchain transactions  
- Ability to withdraw before pool activation  
- Toggle views for personalized data display  

### Risk Management  
- Collateral requirements for pool creation  
- Minimum APR thresholds protecting investors  
- Liquidation mechanisms for underperforming pools  
- Voting systems for decentralized collateral distribution  

### Consistency  
- Uniform table layouts across modules  
- Standard button patterns and states  
- Repeated visual language (badges, charts, tooltips)  
- Predictable navigation flows  

> The **CP Pools Frontend UI** empowers both pool creators and investors to participate in decentralized crowd-pooled investments with full transparency, robust risk management, and streamlined operations across the entire pool lifecycle.