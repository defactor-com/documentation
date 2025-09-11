---
id: engage-frontend-buyback
title: BuyBack
sidebar_position: 5
---

The **BuyBack Module** enables token holders and ecosystem participants to repurchase tokens from the market, supporting token scarcity and long-term value. This module provides tools for executing both regular and custom buyback programs while tracking all buyback activity transparently.

Users can initiate buybacks, monitor their transaction history, and view ecosystem-wide buyback metrics that contribute to token economics and protocol sustainability.

## Dashboard Overview

![BuyBack Dashboard](../../../static/img/front-end/engage/buyback-dash.png)

The buyback dashboard displays **Buyback Metrics** at the top, followed by two main table views:

- **Latest Buybacks** – Recent buyback transactions across the ecosystem
- **My Buybacks** – Personal buyback history and user-initiated transactions

Users can seamlessly switch between the Latest and My Buybacks tables to monitor ecosystem-wide buyback activity and track their personal contribution to token repurchasing programs. The buyback metrics section provides an overview of total tokens bought back and their allocation across different ecosystem categories.

## Buyback Metrics

The dashboard displays comprehensive buyback statistics:

### Total Sharing Bought Back

![BuyBack Dashboard](../../../static/img/front-end/engage/buyback-metrics-bought-back.png)

- **Total tokens repurchased** – Shows the aggregate amount of Sharing tokens bought back from the market
- **USD equivalent value** – Displays the total USDC spent on all buyback operations
- **Chain Distribution** – Breakdown of buyback activity across supported blockchain networks with percentage allocation

You're absolutely right. Here's the revised version with a clear indication that these are examples:

### Ecosystem Allocation Breakdown

![BuyBack Dashboard](../../../static/img/front-end/engage/buyback-metrics-allocation-breakdown.png)

The buyback metrics show how repurchased tokens are distributed across different ecosystem categories. These categories are configured and managed by administrators in the **Admin Section → Buyback** settings.

**Example categories may include:**

- **Contributors** – Tokens allocated to project contributors and team members
- **Foundation** – Tokens designated for foundation operations and governance  
- **Liquidity** – Tokens reserved for liquidity provision and market making
- **Staking Rewards** – Tokens allocated for staking reward distribution
- **Other** – Tokens assigned to miscellaneous ecosystem needs and future initiatives

Each category is defined with a specific icon and label that can be customized through the admin interface. Administrators can modify these categories, add new ones, or adjust their designations to match the project's evolving needs.

## Latest Buybacks

The Latest Buybacks section shows real-time ecosystem activity:

### Transaction Details
- **Transaction Date** – When the buyback was executed
- **Bought** – Amount of Sharing tokens purchased (with $ indicator)
- **Spent** – USDC amount used for the buyback
- **Chain** – Blockchain network where transaction occurred
- **Recipient** – Number of recipients receiving the bought tokens
- **Time Remaining** – Days until tokens become available/unlocked
- **Action** – Available actions (Withdraw when eligible)

### Example Transactions
Recent buyback activity shows consistent market participation:
- 880.87 Sharing bought for 1000 USDC (Sep 5, 2025)
- 4.51K Sharing bought for 5000 USDC (Aug 21, 2025)
- 1.15K Sharing bought for 1200 USDC (Aug 14, 2025)

## My Buybacks

![My Buybacks](../../../static/img/front-end/engage/buyback-my-buybacks.png)

The My Buybacks section provides personalized tracking:

### Personal Transaction History
- **User-Specific Transactions** – Only displays buybacks initiated by the connected wallet
- **Withdrawal Status** – Shows when tokens become available for withdrawal
- **Transaction Details** – Complete record of personal buyback activity

### Transaction Management
- **Withdraw Function** – Claim purchased tokens when lock period expires
- **Time Tracking** – Monitor remaining days until withdrawal eligibility
- **Action Buttons** – Intuitive interface for managing buyback positions

## Initiating a Buyback

### Regular Buyback Process

Users can execute standard buybacks through a streamlined interface:

1. **Select Buyback Type** – Choose between Regular or Custom Buyback
2. **Network Selection** – Pick target blockchain (e.g., Base Testnet)
3. **Configure Parameters** – Set amount and allocation preferences

### Regular Buyback Configuration

**Amount Settings:**
- **Spending Amount** – Enter USDC amount to spend
- **Balance Display** – Shows available wallet balance
- **Min/Max Limits** – Optimal amount suggestions (100.00 USDC minimum)

**Buyback Allocation:**
- **Contributors** – 25%
- **Foundation** – 25%
- **Liquidity & Growth** – 25%
- **Staking** – 25%

### Custom Buyback Options

For advanced users requiring specific allocation:

**Recipient Management:**
- **Add Recipients** – Specify custom wallet addresses
- **Amount Allocation** – Set individual buyback amounts per recipient
- **Wallet Verification** – Ensure valid recipient addresses

**Custom Configuration:**
- **Recipient Details** – Label recipients (e.g., "Marketing Budget Wallet")
- **Amount Distribution** – Flexible allocation across multiple wallets
- **Total Amount Tracking** – Real-time calculation of total buyback cost

## Transaction Lifecycle

### Execution Phase
- **Parameter Setting** – Configure buyback amount and recipients
- **Transaction Submission** – Sign blockchain transaction to execute buyback
- **Market Purchase** – Tokens are bought from available liquidity

### Lock Period
- **Time Lock** – Purchased tokens enter a lock period (typically 300+ days)
- **Progress Tracking** – Daily countdown until withdrawal eligibility
- **Status Monitoring** – Real-time updates on lock status

### Withdrawal Phase
- **Eligibility Check** – Verify lock period completion
- **Withdrawal Action** – Claim purchased tokens to wallet
- **Transaction Completion** – Tokens become fully available for use

## Core Benefits

- **Token Scarcity** – Reduces circulating supply through market repurchases
- **Price Support** – Buyback activity can positively impact token price
- **Ecosystem Health** – Demonstrates protocol commitment to token value
- **Transparency** – All buyback activity is publicly visible and auditable
- **Flexible Allocation** – Support both automated and custom distribution models

## Buyback Categories

### Regular Buybacks
- **Automated Distribution** – Equal allocation across ecosystem categories
- **Simplified Process** – One-click execution with preset parameters
- **Ecosystem Balance** – Maintains proportional token distribution

### Custom Buybacks
- **Targeted Recipients** – Specify exact wallet addresses
- **Variable Allocation** – Custom amount distribution
- **Strategic Purchasing** – Support specific initiatives or wallets

## Example Use Cases

- **Protocol Treasury** – Execute buybacks to reduce token supply and support price
- **Reward Programs** – Buy tokens for distribution to active participants
- **Liquidity Management** – Repurchase tokens to rebalance ecosystem allocations
- **Strategic Initiatives** – Fund specific programs through targeted buybacks
- **Market Stabilization** – Counter selling pressure during market volatility

## Best Practices

### Before Executing Buybacks
- **Check Market Conditions** – Consider current token price and liquidity
- **Verify Recipients** – Ensure all wallet addresses are correct
- **Plan Distribution** – Decide on allocation strategy for purchased tokens

### During Buyback Process
- **Monitor Gas Fees** – Account for transaction costs on chosen network
- **Confirm Parameters** – Double-check amounts and recipient details
- **Track Progress** – Monitor transaction confirmation and execution

### After Buyback Completion
- **Track Lock Periods** – Monitor time remaining until withdrawal eligibility
- **Plan Withdrawals** – Prepare for token distribution when locks expire
- **Analyze Impact** – Review buyback effects on token metrics and ecosystem health