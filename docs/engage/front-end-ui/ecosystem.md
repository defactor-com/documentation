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
- **Chain Filters** – Toggle between supported chains (e.g., Base, Ethereum, Polygon).
- **Total Staked Value** – USD equivalent of tokens staked across all pools.  
- **TVL Graph** – Historical Total Value Locked, filterable by 1D, 7D, 1M, and 1Y.  
- **Expected Rewards** – Forecast of rewards accrued within the selected time frame.  
- **Auto Buybacks** – Shows tokens already repurchased from the market.  
- **Token Metrics** – Key indicators such as market capitalization and current token price.
- **Ecosystem Addresses Table** – Overview of token allocations across labeled ecosystem wallets.

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
  