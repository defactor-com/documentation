---
id: pools-frontend-dashboard
title: Dashboard
sidebar_position: 2
---

The **Pools Dashboard** is your main control center for managing lending and borrowing on the Defactor platform. It brings together key metrics, liquidity insights, and quick actions so you can easily track pool activity and manage your positions.

---

## Dashboard Overview  

![Pools Dashboard](../../../static/img/front-end/pools/pools-dash.png)

The dashboard provides:  
- **Total Value Locked (TVL)** – Overall assets supplied across pools  
- **Pool Utilization Chart** – Interactive chart tracking supply, borrow, and available liquidity over time  
- **Pool Activity Summary** – High-level metrics for available liquidity, historically borrowed, and historically supplied assets  
- **Personal Performance Metrics** – Track borrowing, lending, and collateral safety (also visible in the sidebar on the main dashboard screen)  
- **Active Pools Table** – Manage live pool positions with supply/borrow actions  

## Key Metrics Overview  

### Total Value Locked (TVL)  

Large numerical display showing **total value locked**, placed centrally to highlight its importance.  
> Reflects the total value of assets you have supplied to pools.  

### Pool Utilization Chart  

**Interactive Time Series Visualization**  
- Multi-line chart with filters: **1D**, **1W**, **1M**, **1Y**  

**Chart Legend**  
- **Supplied** – Assets you’ve provided to pools (green line)  
- **Borrowed** – Assets borrowed from pools (red/pink line)  
- **Available** – Available liquidity in pools (blue line)  

### Pool Activity Summary  

Three key metrics displayed in a dedicated panel:  
- **Available** – Current liquidity available for borrowing (green indicator)  
- **Historically Borrowed** – Cumulative borrowed amount (red indicator)  
- **Historically Supplied** – Total assets supplied over time (blue indicator)  

## Statistics Panel  

### Personal Performance Metrics  

- **Active Borrows** – Number of active borrowing positions  
- **Positions Repaid** – Historical total of completed loan positions  
- **Interest Earned** – Real-time earnings from supplied assets  
- **Collateralization Ratio** – Current ratio measuring safety of borrowed positions  

> These metrics are also visible in the dashboard sidebar for quick reference.  

## Pools Management Section  

### Status Tabs  
- **Active** – Currently operational pools  
- **Closed** – Completed or inactive pools  

### Active Pools Table  

![Active Pools Table](../../../static/img/front-end/pools/pools-table-active-pools.png)

**Column Structure:**  
- **Pool Name** – Identifier and branding  
- **Collateral** – Accepted collateral types  
- **Chain** – Blockchain network (chain icons shown)  
- **APR** – Annual Percentage Rate (sortable)  
- **Available** – Liquidity available for borrowing (sortable)  
- **Completion** – Timeline and progress  
- **Actions** – Supply / Borrow options  

> This table helps you compare pool conditions and take action directly from the dashboard.  

## Pool Interaction Workflow  

![Open Position](../../../static/img/front-end/pools/pools-open-position.png)

Both **Supply** and **Borrow** actions follow the same process:  
1. Click **Supply / Borrow**  
2. Select the desired action (**Supply** or **Borrow**)  
3. Enter the amount (within limits)  
4. Confirm the transaction  

> A unified workflow makes it easy to manage both supplying and borrowing through a consistent interface.  

## Dashboard Benefits  

- **Comprehensive Portfolio View** – All positions visible at a glance, helping you understand your exposure quickly.  
- **Risk Assessment Tools** – Monitor collateralization ratios to avoid liquidation and maintain healthy positions.  
- **Yield Optimization** – Compare APRs across pools to identify the most profitable opportunities.  
- **Historical Analysis** – Track pool growth, supply, and borrowing trends over time for better decision-making.  
- **Multi-pool Management** – Manage multiple positions from one interface without switching screens.  
- **Real-time Liquidity** – Instantly see available borrowing capacity so you can act on opportunities immediately.  
