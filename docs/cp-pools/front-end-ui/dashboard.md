---
id: cp-pools-frontend-dashboard
title: Dashboard
sidebar_position: 2
---

The CP Pools Dashboard provides a comprehensive overview of pool creation and management activities on the Defactor platform. It serves as your main control center for creating new pools, managing existing pools, and monitoring global pool statistics and performance.

![Dashboard Overview](../../../static/img/front-end/cp-pools/cp-pools-dashboard.png)

---

## Global Stats Overview


![Full Overview](../../../static/img/front-end/cp-pools/cp-pools-dash-global-stats-overview.png)

The complete dashboard brings together:  
- **TVL (numerical + chart)**  
- **Pool lifecycle breakdown**  
- **Reward distribution metrics**  

This consolidated view helps stakeholders quickly gauge **platform health, activity, and user incentives** at a glance.

### Total Value Locked (TVL)

![TVL Overview](../../../static/img/front-end/cp-pools/cp-pools-dash-global-stats-tvl.png)

#### Primary Metric Display
- Represents the **aggregate value across all pools** on the platform.  
- Acts as the primary health indicator of platform liquidity.

#### Pool Status Breakdown

![Activity Breakdown](../../../static/img/front-end/cp-pools/cp-pools-dash-global-stats-activity.png)

- **Created** → Total number of pools created.  
- **Active** → Pools currently operational.  
- **Repaid** → Completed/closed pools.  

This breakdown provides transparency into the **lifecycle of pools** on the platform.


#### Circular Progress Visualization

![TVL Chart](../../../static/img/front-end/cp-pools/cp-pools-dash-global-stats-tvl-chart.png)

- A **donut chart** reinforces the TVL metric visually.  
- The inner circle shows the total locked value.  
- Colored segments correspond to the **status breakdown** above.  

##### Tooltips for Detailed Insights
Hovering over the chart provides context on pool composition:  

 ![Tooltip Funded](../../../static/img/front-end/cp-pools/cp-pools-dash-global-stats-tvl-chart-with-tooltip-funded.png)  

  *Example*: Funded pools with **$50.16** locked.  

 ![Tooltip Opened](../../../static/img/front-end/cp-pools/cp-pools-dash-global-stats-tvl-chart-with-tooltip-opened.png)  

  *Example*: Opened pools with **$1,983.84** locked.  

### Rewards Section

![Rewards Section](../../../static/img/front-end/cp-pools/cp-pools-dash-global-stats-rewards.png)

The rewards panel tracks both historical and projected incentives for participants:  

- **Total Rewards Paid Out**  
  - Cumulative rewards distributed platform-wide.  
  - Reflects the earnings already allocated to users.  

- **Expected Rewards**  
  - Future rewards projected to be distributed.  
  - Indicates forward-looking incentive potential.  

