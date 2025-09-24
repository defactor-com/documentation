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
- **Description Box** – A free-text section where pool creators or administrators can describe the pool. This may include information such as borrowing rules, supply opportunities, repayment conditions, or general notes about the pool. The content is flexible and can be tailored to highlight any important details for users.
- **Key Metrics Bar** – Shows historical and current performance metrics such as:  
  - **Total USDC Borrowed Historically** – Aggregate borrowing activity from the pool  
  - **Available to Borrow** – Liquidity remaining for new borrowing  
  - **Active Supplied Value** – Total amount currently supplied by lenders  
  - **Total Repaid** – Amount of USDC already repaid into the pool  
  - **Active Collateral Value** – Value of collateral currently securing outstanding loans  
  - **Disbursement Percentage** – Percentage of total pool liquidity that has been disbursed  
- **Supply/Borrow Panel** – Side panel for entering supply or borrow amounts, with Min/Max shortcuts and wallet balance display  
- **My Supplies / My Borrows Table** – Tabs for switching between supplied and borrowed positions, with sortable tables and management actions  

## Dashboard Components  

### Pool Information Header  

![Pool Information Header Part 1](../../../static/img/front-end/pools/pools-pool-details-header.png)  
![Pool Information Header Part 2](../../../static/img/front-end/pools/pools-pool-details-core-parameters.png)  

Displays pool identity, branding, and configuration details:  
- **Branding** – Pool name with logo/icon and status indicators (Active, token, etc.)  
- **Navigation** – Dropdown to switch between pools across chains  
- **Timeline** – Start and end dates for pool lifecycle  
- **Financial Parameters** – LTV ratio, APR, max pool capacity  
- **Network & Links** – Chain identifier, plus social/external links  

### Description Box  

![Pool Description Box](../../../static/img/front-end/pools/pools-pool-details-page-description-box.png)  

The **Description Box** is a free-text area where pool creators or administrators can describe the pool.  
Its purpose is to provide important context or guidance to users.  

Possible uses include:  
- **Borrowers** – Explaining collateral requirements, repayment deadlines, and potential liquidation risks.  
- **Lenders** – Outlining how to supply assets, expected APR, reward distribution, and how/when funds are returned.  

Because this section is flexible, the exact content will vary depending on the pool’s goals and configuration.   

### Key Metrics Bar  

![Key Metrics Bar](../../../static/img/front-end/pools/pools-pool-details-page-stats.png)  

Summarizes live and historical performance metrics:  
- **Total USDC Borrowed Historically** – Cumulative borrowing activity  
- **Available to Borrow** – Remaining liquidity  
- **Active Supplied Value** – Total actively supplied USDC  
- **Total Repaid** – Aggregate repayments  
- **Active Collateral Value** – Collateral backing active loans  
- **Disbursement Percentage** – Ratio of borrowed to total pool capacity  

Tooltips display breakdowns such as **Supplied** vs **Borrowed** at specific points in time.  

### Supply/Borrow Panel  

#### Supply Tab  

![Supply Box](../../../static/img/front-end/pools/pools-pool-details-page-supply-box.png)  

- **Amount Input** – Enter supply amount with Min/Max shortcuts  
- **Wallet Balance** – Shows how much USDC is available to supply  
- **Validation** – Confirms limits and available balance before transaction  
- **Supply Button** – Executes supply transaction  

#### Borrow Tab  

![Borrow Box](../../../static/img/front-end/pools/pools-pool-details-page-borrow-box.png)  

- **Amount Input** – Enter borrow amount with Min/Max shortcuts  
- **Collateral Required** – Displays how much collateral is needed  
- **My Collateral Balance** – Shows collateral available in your wallet  
- **Borrow Button** – Executes borrowing transaction after validation  

### My Supplies / My Borrows Table  

#### My Supplies  

![My Supplies Table](../../../static/img/front-end/pools/pools-pool-details-page-table-my-supplies.png)  

Displays all supply positions:  
- **Columns** – Pool name, initial amount, outstanding, rewarded, start/end time, status, actions  
- **Actions** – Withdraw from active positions or view completed ones  

**Withdraw Modal**  

![Withdraw Modal](../../../static/img/front-end/pools/pools-pool-details-page-modal-withdraw.png)  

Lets you withdraw part or all of an active position, showing amount, rewards, and updated balance.  

**Withdraw All Button**  

![Withdraw All Button](../../../static/img/front-end/pools/pools-pool-details-page-button-withdraw-all.png)  

**Withdraw All Modal**  

![Withdraw All Modal](../../../static/img/front-end/pools/pools-pool-details-page-modal-withdraw-all.png)  

Enables bulk withdrawal of all positions and rewards in one step.  

#### My Borrows  

![My Borrows Table](../../../static/img/front-end/pools/pools-pool-details-page-table-my-borrows.png)  

Displays borrowing positions with collateral, outstanding debt, repayments, and health indicators:  
- **Healthy Position** – Sufficient collateral (e.g., 41%)  
- **Warning Position** – At-risk collateral ratio (e.g., 65%)  
- **Actions** – Includes **Pay Back** or **Update Collateral Amount**  

**Pay Position Modal**  

![Pay Position Modal](../../../static/img/front-end/pools/pools-pool-details-page-modal-pay-position.png)  

Allows repayment of borrowed amounts with transaction summary (principal, interest, remaining balance).  

**Update Collateral Action**  

![Update Collateral Action](../../../static/img/front-end/pools/pools-pool-details-page-table-actions.png)  

Enables adding collateral to strengthen LTV ratio and reduce liquidation risk.  

