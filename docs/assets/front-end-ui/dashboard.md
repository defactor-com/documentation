---
id: assets-dashboard
title: Dashboard
sidebar_position: 2
---

This guide provides a comprehensive overview of the Assets Dashboard interface, focusing on understanding your asset portfolio statistics, performance metrics, and detailed asset management tables.

---

## Dashboard Overview

![Assets Dashboard](../../../../documentation/static/img/front-end/assets/assets-dashboard.png)

The Assets Dashboard serves as your central command center for monitoring and managing your tokenized asset portfolio. The interface is divided into two main sections: **My Stats** and **Global Stats**, providing both personal portfolio insights and platform-wide statistics. Below the statistics, detailed asset tables allow you to view and manage individual assets with comprehensive filtering and status tracking capabilities.

## My Stats Section

![Assets Dashboard My Stats](../../../../documentation/static/img/front-end/assets/assets-dashboard-my-stats.png)

The **My Stats** section provides a comprehensive overview of your personal asset creation and tokenization activities on the Defactor platform.

### Assets Created Overview

![Assets Dashboard My Stats Assets Created](../../../../documentation/static/img/front-end/assets/assets-dashboard-my-stats-assets-created.png)

The central **Assets Created** widget displays your total asset creation activity with a visual breakdown:

**Total Assets Created**
- **X minted** - Assets successfully deployed on the blockchain
- **X verified** - Assets that have completed email-based verification
- **X in verification** - Assets currently undergoing verification review

The circular chart provides an at-a-glance view of your asset portfolio distribution across different stages of the tokenization process.

### Key Performance Statistics

![Assets Dashboard Key Performance Statistics](../../../../documentation/static/img/front-end/assets/assets-dashboard-my-stats-key-performance-statistics.png)

The Stats panel on the right side displays four critical metrics that summarize your tokenization performance:

#### Minted Tokens

This metric displays the total number of tokens that have been minted or generated from your assets.

This represents the aggregate token supply across all your successfully minted assets, providing insight into the scale of your tokenization activities.

#### Estimated Total Price

Shows the estimated total value of all your minted tokens based on their current market price.

This figure represents the combined market valuation of your entire tokenized asset portfolio.

#### My Wallet Tokens

Displays the total number of tokens currently held in your wallet. 

This metric shows your personal token holdings across all your created assets, which may be less than the total minted if you've sold or transferred some tokens.

#### Average Token Price

Indicates the average price per token, calculated from the total value and the number of tokens.

This metric helps you understand the average valuation density of your token portfolio.

## Global Stats Section

![Assets Dashboard Global Stats](../../../../documentation/static/img/front-end/assets/assets-dashboard-global-stats.png)

The **Global Stats** section provides platform-wide statistics and insights into the overall Defactor ecosystem activity, helping you understand market trends and compare your performance against the broader platform.

### Global Assets Created Overview

![Assets Dashboard Global Stats Assets Created](../../../../documentation/static/img/front-end/assets/assets-dashboard-global-stats-assets-created.png)

The **Global Assets Created** widget displays the total number of assets created across the entire Defactor platform with a time-series chart showing activity trends.

**Time Period Selection:**
- **1D** - One-day view of asset creation activity
- **1W** - One-week view 
- **1M** - One-month view of platform activity
- **1Y** - One-year historical view

The line chart tracks multiple metrics over time with different colored indicators providing insight into platform activity and ecosystem health.

### Platform-Wide Performance Statistics

![Assets Dashboard Global Stats Performance Statistics](../../../../documentation/static/img/front-end/assets/assets-dashboard-global-stats-performance-statistics.png)

The Stats panel displays four key metrics that reflect platform-wide activity and ecosystem health:

#### Global Assets

Displays the total number of assets that have been tokenized on the Defactor platform.

This metric represents the cumulative asset creation activity across all users, providing insight into platform adoption and growth.

#### Global Assets in Creation

Shows the number of assets currently being created or tokenized on the Defactor platform.

This indicates the current pipeline of assets in various stages of the tokenization process, reflecting ongoing platform activity and user engagement.

#### Minted in the last Day

Indicates the total number of tokens minted within the last 24 hours.

This metric provides insight into recent platform activity and token creation velocity, helping gauge current ecosystem momentum.

#### Transferred in the last day

Shows the total number of tokens transferred between wallets in the last 24 hours.

This metric reflects secondary market activity and token liquidity, indicating how actively users are trading and transferring tokenized assets.

### My Assets Table

![Assets Dashboard My Assets Table](../../../../documentation/static/img/front-end/assets/assets-dashboard-my-assets-table.png)

The **My Assets** table provides a detailed view of all your created assets with comprehensive information about their current status and performance.

#### Asset Status Tabs

The table includes filtering tabs to organize assets by their current stage:

- **Minted (X)** - Assets successfully deployed on the blockchain
- **Verified (X)** - Assets that have completed email-based verification
- **In verification (X)** - Assets currently undergoing verification review
- **Pending (X)** - Assets awaiting next steps in the creation process
- **Drafts (X)** - Saved work-in-progress assets

#### Table Columns

**Asset**
The name or identifier of your tokenized asset.

**Token**
Displays the token symbol/ticker and associated icon for easy identification.

**Chain**
Shows the blockchain network where the asset is deployed (e.g., ERC-20).

**Total Price**
The total valuation of the asset in USD or relevant currency.

**Supply**
The total number of tokens minted for this asset.

**Status**
Current stage of the asset with color-coded indicators for quick status recognition.

#### Table Controls

##### Create Asset Button
Located in the top-right corner for quick access to start creating new assets.

##### Pagination Controls
Navigate through multiple pages of assets with page numbers and navigation arrows.

##### Results Display
Shows the number of assets displayed per page with dropdown selection for customizing view.

##### Actions Menu
Three-dot menu (⋯) for each asset providing additional management options.

![Assets Dashboard Actions Menu](../../../../documentation/static/img/front-end/assets/assets-dashboard-actions-menu.png)

The three-dot menu (⋯) for each asset provides access to various management and operational functions:

**Make a Pool**
Create a liquidity pool for your tokenized asset to enable trading and price discovery.

**Transfer Tokens**
Send tokens from your wallet to other addresses or users.

**Edit Information**
Modify asset details, descriptions, and other editable metadata (available for assets not yet minted).

**Update Dynamic Data**
Refresh or modify the dynamic data fields that were configured during template creation.

**Burn Assets**
Permanently remove tokens from circulation, reducing the total supply of the asset.

The available actions may vary depending on the current status of your asset, with some options only accessible for assets in specific stages of the tokenization process.

### Global Assets Table

![Assets Dashboard Global Assets Table](../../../../documentation/static/img/front-end/assets/assets-dashboard-global-assets-table.png)

The **Global Assets** table displays all assets created across the entire Defactor platform, providing insights into platform-wide tokenization activity and market trends.

#### Global Asset Status Tabs

The table includes filtering tabs to view platform-wide assets by status:

- **Minted (X)** - All assets successfully deployed on the blockchain platform-wide
- **Verified (X)** - Platform assets that have completed email-based verification
- **In verification (X)** - Assets currently undergoing verification across the platform
- **Pending (X)** - Platform assets awaiting next steps in creation
- **Drafts (X)** - All draft assets being developed across the platform

#### Global Table Features

**Platform Overview**
View tokenization activity and asset diversity across all Defactor users for market analysis and benchmarking.

**Market Insights**
Analyze successful asset types, pricing trends, and token supply patterns to inform your own asset creation strategy.

**Ecosystem Activity**
Monitor overall platform health and user engagement through asset creation and status distribution metrics.

For complete asset information including transaction history, metrics, and detailed descriptions, click on any asset row to access the [Asset Details Page](asset-details-page.md).
