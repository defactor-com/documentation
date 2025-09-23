---
id: pools-frontend-pool-details
title: Pool Details
sidebar_position: 5
---

The **Pool Details** page provides comprehensive information about a specific lending or borrowing pool, including pool parameters, supply/borrow functionality, performance statistics, and transaction history. This page is accessed by clicking on any pool row from the main Pools Dashboard.

---

## Dashboard Overview  

![Pool Details Dashboard](../../../static/img/front-end/pools/pools-pool-details-page-overview.png)

The pool details dashboard provides:  
- **Pool Information Header** – Displays chain, start date, end date, LTV ratio, APR, and max pool capacity  
- **Description Box** – Explains how to borrow USDC using collateral, with reminders about repayment deadlines and liquidation rules. Also explains how to supply USDC to earn rewards, including reward payouts and return of supplied assets.  
- **Key Metrics Bar** – Shows historical and current performance metrics such as:  
  - **Total USDC Borrowed Historically** – Aggregate borrowing activity from the pool  
  - **Available to Borrow** – Liquidity remaining for new borrowing  
  - **Active Supplied Value** – Total amount currently supplied by lenders  
  - **Total Repaid** – Amount of USDC already repaid into the pool  
  - **Active Collateral Value** – Value of collateral currently securing outstanding loans  
  - **Disbursement Percentage** – Percentage of total pool liquidity that has been disbursed  
- **Supply/Borrow Panel** – Side panel for entering supply or borrow amounts, with Min/Max shortcuts and wallet balance display  
- **My Supplies / My Borrows Table** – Tabs for switching between supplied and borrowed positions, with sortable tables and management actions  

---

## Dashboard Components 

### Pool Information Header  

![Pool Information Header Part 1](../../../static/img/front-end/pools/pools-pool-details-header.png) 
![Pool Information Header Part 2](../../../static/img/front-end/pools/pools-pool-details-core-parameters.png)   
Displays pool identity, status, chain, and quick navigation between pools.  

### Description Box  

![Pool Description Box](../../../static/img/front-end/pools/pools-pool-details-description-boc.png) 

Provides rules and guidance for **borrowers** (collateral requirements, deadlines, liquidation risks) and **lenders** (supply process, rewards, and repayment at maturity).  

### Key Metrics Bar  

![Key Metrics Bar](../../../static/img/front-end/pools/pools-pool-details-key-metrics.png)  
Summarizes real-time pool activity including borrowing history, available liquidity, active supply, total repaid, collateral value, and disbursement percentage.  

### Supply/Borrow Panel  

![Supply or Borrow Panel](../../../static/img/front-end/pools/pools-pool-details-core-supply-or-borrow.png)  
Side panel for creating new positions, with tabs for **Supply** (amount input, wallet balance, Min/Max shortcuts) and **Borrow** (amount input, required collateral, validation).  

### My Supplies / My Borrows Table  

![My Supplies and My Borrows Table](../../../static/img/front-end/pools/pools-supplied-table.png)  
Shows personal supply and borrow positions with sortable columns, health indicators, and direct management actions (Withdraw, Pay Back, Update Collateral).  
