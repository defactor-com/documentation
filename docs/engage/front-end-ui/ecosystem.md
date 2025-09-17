---
id: engage-frontend-ecosystem
title: Ecosystem
sidebar_position: 2
---

The **Ecosystem Module** provides a real-time dashboard for monitoring the health and activity of the Engage token economy. It aggregates metrics like circulating supply, total staked value, liquidity allocations, buybacks, and expected rewards.  

This module ensures transparency by showing both system-wide token metrics and detailed ecosystem wallet distributions. It is accessible to all users, while Admins configure wallets and allocations via the **[Admin → Ecosystem Settings](/docs/engage/front-end-ui/admin-section/engage-frontend-admin-section-ecosystem-settings#)**.

---

## Dashboard Overview  

![Ecosystem Dashboard](../../../static/img/front-end/engage/ecosystem-dash.png)

The ecosystem dashboard displays:  
- **Circulating Supply** – Current tokens in circulation relative to total supply.  
- **Chain(s) Selector** – Switch seamlessly between supported networks with full multi-chain support (e.g., Base, Ethereum, Polygon).
- **Total Staked Value** – USD equivalent of tokens staked across all pools.  
- **TVL Graph** – Historical Total Value Locked, filterable by 1D, 7D, 1M, and 1Y.  
- **Expected Rewards** – Forecast of rewards accrued within the selected time frame.  
- **Auto Buybacks** – Shows tokens already repurchased from the market.  
- **Token Metrics** – Key indicators such as market capitalization and current token price.
- **Ecosystem Addresses Table** – Overview of token allocations across labeled ecosystem wallets.

### Circulating Supply  

![Ecosystem Circulating Supply](../../../static/img/front-end/engage/ecosystem-circulating-supply.png)

Displays the current number of tokens in circulation compared to the total supply.  
> This metric helps users track inflation/deflation of the token and monitor how much of the total supply is actively available in the market.

<!-- TODO: ADD BASGE % CHAIN AND CHECK AND EXPLAIN -->

### Chain(s) Selector  

![Ecosystem Chain Selector](../../../static/img/front-end/engage/ecosystem-chain-selector.png)

Toggle between supported chains such as Base, Ethereum, and Polygon.  
> Engage supports **multi-chain compatibility**, allowing users to view metrics across all integrated networks without switching applications.  

### Total Staked Value 

![Ecosystem Total Staked Value](../../../static/img/front-end/engage/ecosystem-total-staked.png)

Shows the USD equivalent of all tokens currently staked across pools.  
> This value reflects community participation and helps measure ecosystem security and engagement through staking.  

The tooltip displays the breakdown of the staked value by network.

![Ecosystem Total Staked Value](../../../static/img/front-end/engage/ecosystem-total-staked-tooltip.png)

<!-- TODO: CHECK AND EXPLAIN -->

### TVL Graph  

![Ecosystem TVL](../../../static/img/front-end/engage/ecosystem-tvl.png)

Provides a historical chart of **Total Value Locked** (TVL), filterable by 1D, 7D, 1M, and 1Y.  
> Tracking TVL over time gives insights into growth trends, liquidity inflows, and long-term holder confidence.  

### Expected Rewards  

![Ecosystem Expected Rewards](../../../static/img/front-end/engage/ecosystem-rewards.png)

Displays projected rewards to be earned by stakers and participants over a chosen time period.  
> This forecast helps users estimate returns based on staking activity and pool performance.  

### Auto BuyBacks

Displays the total number of tokens repurchased from the market and returned to the ecosystem.  

  > The metric shows both the absolute buyback amount, the current circulating supply, and the percentage of supply repurchased.  

![Ecosystem Auto Buybacks](../../../static/img/front-end/engage/ecosystem-auto-buybacks.png)

### Token Metrics  

![Ecosystem Token Metrics](../../../static/img/front-end/engage/ecosystem-token-metrics.png)

- **Market Cap** – Calculated based on circulating supply × token price.  
- **Current Token Price** – Fetched from Coingecko or defined as fixed in **[Admin → Token Settings](/docs/engage/front-end-ui/admin-section/engage-frontend-admin-section-token-settings#)**.  

### Ecosystem Addresses  

![Ecosystem Addresses Table](../../../static/img/front-end/engage/ecosystem-addresses.png)

The **Ecosystem Addresses** table shows how tokens are allocated across different categories:  

- **Address Label** – e.g., *Token Sales, Foundation, Team, Ecosystem & Partners, Staking Rewards, Governance*.  
- **Allocated** – Total assigned tokens.  
- **Balance** – Remaining tokens available in that wallet.  
- **% Liquid** – Percentage of tokens unlocked and usable.  

Admins configure these wallets and allocations in **[Admin → Ecosystem Settings](/docs/engage/front-end-ui/admin-section/engage-frontend-admin-section-ecosystem-settings#)**.  
  