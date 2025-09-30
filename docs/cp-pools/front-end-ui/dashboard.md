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
  - The total amount of rewards that have already been distributed to participants.
  - Cumulative rewards distributed platform-wide.  
  - Reflects the earnings already allocated to users.  

- **Expected Rewards**  
  - The projected rewards expected to be distributed across all participants.
  - Future rewards projected to be distributed.  
  - Indicates forward-looking incentive potential.  

## My Stats Overview

![My Stats Overview](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-overview.png)

The **My Stats** dashboard provides personalized insights into pools you created or supplied liquidity to.  
You can toggle between two views:  
- **My Supplied Liquidity** → Shows funds and rewards for pools you supplied liquidity to.  
- **My Pools** → Tracks activity and rewards for pools you created.  

### My Supplied Liquidity

![Supplied Overview](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-supplied-overview.png)

This view highlights **liquidity you provided** to pools created by others.  

#### Primary Metric Display

![Supplied Liquidity](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-supplied-my-supplied-liquidity-supplied.png)

- Tracks the **total value of your supplied liquidity**.  
- Helps assess contribution size and associated rewards.  

#### Circular Progress Visualization

![Supplied Chart](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-supplied-chart.png)

- Donut chart representing supplied liquidity distribution.  
- Central value = total supplied TVL.  

##### Tooltips for Detailed Insights

![Supplied Tooltip Funded](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-supplied-chart-with-tooltip-founded.png)  
*Example*: Supplied liquidity funded = **$8.02**  

![Supplied Tooltip Opened](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-supplied-chart-with-tooltip-opened.png)  
*Example*: Supplied liquidity opened = **$313.98**  

### Rewards for Supplied Liquidity

![Supplied Rewards](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-supplied-rewards.png)

- **Total Rewards Received** → Rewards already distributed to your supplied positions (The total amount of rewards you have already received from your supplied liquidity).
- **Expected Rewards** → Future rewards based on active liquidity (The projected rewards you are expected to receive from your supplied liquidity).  

### My Pools

![My Pools Overview](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-my-pools-overview.png)

This view highlights **Total Locked In My Pools** and provides insight into the pools you personally created.

![My Pools TVL](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-my-pools-tvl.png)

#### Primary Metric Display
- Shows the **total value locked in pools created by you**.  
- Helps you monitor personal exposure and performance.

#### Circular Progress Visualization

![My Pools Chart](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-my-pools-chart-with-tooltip-founded.png)

- Donut chart visualizing TVL across your created pools.  
- Segments reflect **Created, Active, Repaid** pools.  

### Rewards for My Pools

![My Pools Rewards](../../../static/img/front-end/cp-pools/cp-pools-dash-my-stats-my-pools-rewards.png)

- **Total Rewards Paid Out** → Rewards already distributed from your created pools (The total amount of rewards that participants have already earned from your created pools).  
- **Expected Payouts** → Projected future rewards (The projected rewards that participants are expected to earn from your created pools).  
