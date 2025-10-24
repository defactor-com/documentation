---
id: assets-frontend-arte
title: ARTe
sidebar_position: 4
---

This guide provides a comprehensive overview of the ARTe (Asset Representation Token) interface, focusing on creating and managing liquidity units that combine multiple tokenized assets into tradeable bundles.

---

## ARTe Overview

![ARTe Overview](../../../../documentation/static/img/front-end/assets/arte-dash.png)

The **ARTe** section enables you to create Asset Representation Tokens, which are liquidity units that bundle multiple tokenized assets together. ARTe tokens provide a way to create diversified asset portfolios and enhance trading liquidity by combining different assets into a single tradeable token.

## Creating ARTe Tokens

![ARTe Create Button](../../../../documentation/static/img/front-end/assets/arte-create-button.png)

To create a new ARTe token, click the **"+ Create"** button in the top-right corner. This opens the ARTe creation workflow with a three-step process.

### Step 1: Information

![ARTe Create Information](../../../../documentation/static/img/front-end/assets/arte-create-information-empty.png)

The first step requires basic token configuration:

**Token Icon**
Upload an image file to represent your ARTe token visually. Supports PNG, JPG formats up to 10MB.

**Token Name**
Enter a descriptive name for your ARTe token that clearly identifies the bundled assets.

**Token Symbol**
Create a short symbol (ticker) for your ARTe token for easy identification in trading interfaces.

**Chain**
Select the blockchain network where your ARTe token will be deployed from the dropdown menu.

### Step 2: Assets

<!-- ![ARTe Create Assets](../../../../documentation/static/img/front-end/assets/arte-create-assets.png) -->

The second step allows you to select which tokenized assets to include in your ARTe bundle:

**Select Assets**
Choose from your available tokenized assets by checking the boxes next to each asset you want to include. The interface displays:
- Asset icons for visual identification
- Asset ticker symbols
- Checkbox selection for inclusion in the bundle

Selected assets will be combined into your ARTe token according to the allocation percentages you set in the next step.

### Step 3: Allocation

![ARTe Create Allocation](../../../../documentation/static/img/front-end/assets/arte-create-allocation-filled.png)

The final step defines how the selected assets are weighted within your ARTe token:

**Asset Allocation**
For each selected asset, specify the percentage allocation:
- Enter percentage values in the allocation fields
- The **Total Allocation** must equal 100%
- The interface shows real-time calculation of your total allocation

**Allocation Controls**
- Each asset displays its name and allocation input field
- Percentage symbol (%) is automatically included
- Total allocation tracker ensures proper distribution

Once allocations total 100%, click **"Finish"** to create your ARTe token.

## ARTe Creation Success

![ARTe Creation Success](../../../../documentation/static/img/front-end/assets/arte-creation-success.png)

Upon successful creation, you'll see a confirmation message: **"Successfully created ARTe token!"**

## ARTe Management Table

![ARTe Management Table](../../../../documentation/static/img/front-end/assets/arte-management-table.png)

After creation, your ARTe tokens appear in the management table with the following information:

### Table Columns

**Name**
The name of your ARTe token with its associated icon.

**No. Assets**
The number of individual tokenized assets bundled within this ARTe token.

**Chain**
The blockchain network where the ARTe token is deployed.

### ARTe Details View

![ARTe Details View](../../../../documentation/static/img/front-end/assets/arte-details-view.png)

Click on any ARTe token to view detailed information including:

**Token Information**
- Token name, symbol, and balance
- Contract address on the blockchain
- Current token holdings

**Asset Composition**
A detailed breakdown of the underlying assets:
- **Token**: Name and icon of each bundled asset
- **Contract Address**: Blockchain address of each underlying asset
- **Ratio**: Percentage allocation of each asset within the ARTe token
- **Ticker**: Symbol for each underlying asset

**Registration Status**
Monitor the registration status of your ARTe token and access the **Register** function when needed.

ARTe tokens provide an efficient way to create diversified asset portfolios, enhance liquidity, and simplify trading of multiple tokenized assets through a single token interface.