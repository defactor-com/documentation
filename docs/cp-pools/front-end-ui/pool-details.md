---
id: cp-pools-frontend-pool-details
title: Pool Details
sidebar_position: 5
---

The Pool Details page provides comprehensive information about a specific pool, including ownership details, financial metrics, collateral information, and transaction history. This page is accessed by clicking on any pool row from the main pools table.

<!-- ![External Links](../../../static/img/front-end/cp-pools/cp-pools-pool-details.png) -->

---

## Pool Header Information

### Basic Pool Details

**Pool Title and Status**
- Pool name displayed prominently (e.g., "Tutorial 1")
- Current status badge (e.g., "Created" with green indicator)
- Network indicator showing blockchain (Base Sepolia with chain icon)
- Language selection (EN with flag)

**Pool Description**
- Brief pool description text area
- Additional context or investment thesis information

### Ownership Information

**Pool Owner Details**
- **Owned By**: Full wallet address of pool creator
- **Website**: Official pool website URL
- **Twitter**: Social media handle with @ symbol

---

## Financial Metrics Overview

### Core Pool Statistics

**Funding Parameters**
- **Min USDC**: Minimum investment threshold
- **Max USDC**: Maximum pool capacity
- **USDC Deposited**: Current amount deposited by participants
- **Total USDC Committed**: Aggregate commitments from investors

**Timeline Information**
- **Created at**: Pool creation timestamp
- **Pool Deadline**: Funding deadline date and time
- **Liquidation Deadline**: Pool closure/exit date

### Return Specifications

**APR Structure**
- **Expected APR**: Projected annual percentage return
- **Minimum APR**: Guaranteed minimum return rate
- **Expected Term**: Duration of pool operation

---

## Collaterals Section

### Collateral Assets Table

**Column Structure**
- **Name**: Full name of collateral asset
- **Symbol**: Trading ticker symbol
- **Token ID**: Contract address identifier (if applicable)
- **Type**: Token standard (e.g., ERC20)
- **Amount**: Quantity of collateral provided
- **Contract**: Contract address for verification

**Example Collateral Entries**
- **Tutorial Bond #1** (TTRL) - ERC20 token with specific contract
- **Tutorial Asset** (TTRLA) - ERC20 asset with contract verification

### Risk Assessment
- Multiple collateral types for diversified backing
- Contract verification for transparency
- Amount specifications for risk calculation

---

## Transaction History

### Historical Activity Log

**Activity Tracking**
- **Event**: Type of transaction (Withdrawn, Deposited)
- **Date**: Timestamp of transaction occurrence
- **User**: Wallet address of transaction initiator
- **Amount**: USDC value of transaction

**Transaction Examples**
- **Withdrawn**: User withdrawals with timestamps and amounts
- **Deposited**: User deposits with corresponding details

**Pagination and Display**
- Transaction history pagination (showing "2 of 2 elements")
- Configurable display options (Show: 5 items per page)
- Navigation controls for multiple pages

---

## Pool Status Indicators

### Status Classification

**Visual Status System**
- Color-coded status badges for quick identification
- "Created" status indicating pool establishment
- Additional statuses may include: Active, Funded, Closed, etc.

### Network Information
- Blockchain network display (Base Sepolia)
- Network-specific icons and identifiers
- Cross-chain compatibility indicators

---

## Data Verification and Transparency

### Smart Contract Integration
- **Contract Addresses**: Direct links to blockchain verification
- **Token Standards**: ERC20 compliance verification
- **Transaction Hashes**: Blockchain transaction verification

### Real-time Updates
- **Live Data**: Current pool statistics and balances
- **Historical Tracking**: Complete transaction history
- **Status Changes**: Real-time pool status updates

---

## User Interface Features

### Navigation and Accessibility
- **Breadcrumb Navigation**: Clear path back to pool listings
- **Responsive Design**: Optimized for various screen sizes
- **Data Tables**: Sortable and filterable information display

### Information Hierarchy
- **Primary Metrics**: Key pool statistics prominently displayed
- **Secondary Details**: Supporting information clearly organized
- **Transaction History**: Chronological activity tracking

---

## Pool Management Functions

### For Pool Creators
- **Performance Monitoring**: Track pool funding progress
- **Participant Analysis**: View investor activity and commitments
- **Timeline Management**: Monitor deadlines and milestones

### For Potential Investors
- **Due Diligence**: Comprehensive pool information for investment decisions
- **Risk Assessment**: Collateral backing and creator verification
- **Historical Performance**: Track record through transaction history

---

## Integration Points

### Blockchain Connectivity
- **Wallet Integration**: Connect to view personalized information
- **Smart Contract Interaction**: Direct blockchain data retrieval
- **Multi-chain Support**: Network-specific pool information

### Platform Features
- **Social Verification**: Twitter handle authentication
- **Website Integration**: Official pool website links
- **Community Features**: Creator and participant interaction tools