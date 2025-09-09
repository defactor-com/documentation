---
id: asset-creation
title: How to Create an Asset Step by Step
sidebar_position: 5
---

This comprehensive guide walks administrators through the process of creating assets on the Defactor platform, from initial configuration to deployment and management.

---

## Prerequisites

Before creating an asset, ensure you have:

- Administrative access to the Assets platform
- Token configurations set up in [Token Settings](token-settings)
- Smart contract addresses for your asset tokens
- Asset metadata and documentation ready
- Pricing strategy defined (fixed or market-based)

---

## Step 1: Access Asset Creation  

There are two convenient ways to access the asset creation workflow:  

**Option A: Dashboard Access**  

![Asset Creation Dashboard](../../../../documentation/static/img/front-end/access-asset-creation-dashboard-create-asset.png)  

Navigate to your **Assets** dashboard and locate the **"+ Create Assets"** button prominently displayed on the interface. Clicking this button will seamlessly redirect you to the **My Templates** section where the asset creation process begins.  

**Option B: Direct Navigation**  

![My Templates Navigation](../../../../documentation/static/img/front-end/access-asset-creation-dashboard-my-templates.png)  

Alternatively, you can navigate directly to the **My Templates** section from the main menu. This approach is ideal when you already know you want to work with templates or have bookmarked this section for quick access.  

**Both paths converge at My Templates**, which serves as your central hub for asset creation. Here you have several options for creating assets:

- **Start with a pre-built template** that matches your asset type
- **Create a completely custom asset** from scratch  
- **Edit existing templates** by copying a template and then clicking on the **actions menu** to access the edit functionality

**Template Customization Workflow:**

1. Browse available pre-built templates in the My Templates section
2. Select "Copy Template" for the template you want to modify
3. Click the actions menu (⋯) next to your copied template
4. Choose "Edit" to customize the template according to your specific needs

The Templates section provides an organized, step-by-step approach that guides you through the entire asset configuration process, whether you're starting fresh, using existing templates, or customizing pre-built options to fit your requirements.

### Understanding Asset Data Types

Before proceeding with asset creation, it's important to understand the two main categories of asset data:

**Static Data:**
- Information that remains **constant** throughout the asset's lifecycle
- Examples: Asset name, commodity ID, legal documentation, initial valuation
- Set once during creation and typically doesn't change
- Forms the foundation of your asset's identity and legal structure

**Dynamic Data:**
- Information that **changes over time** and requires regular updates
- Examples: Current market price, inventory levels, performance metrics, location data
- Updated periodically through data feeds, manual input, or automated systems
- Reflects the real-time status and value of your underlying asset

Understanding this distinction helps you choose the right template and configure your asset properly. Static data templates are ideal for assets with fixed characteristics, while dynamic data templates suit assets requiring ongoing data updates and real-time tracking.

The Templates section provides an organized, step-by-step approach that guides you through the entire asset configuration process, whether you're starting fresh, using existing templates, or customizing pre-built options to fit your requirements.

## Step 2: Configure Basic Asset Information

### Select and Use Template

Once you've accessed the My Templates section, browse through the available templates and click the **"Use Template"** button for the template that best matches your asset requirements. This will launch the asset creation form with pre-configured settings based on your selected template.

<!-- ![Asset Basic Information](../../../../static/img/front-end/admin-asset-basic-info.png) -->

### Essential Asset Details

After selecting your template, you'll need to fill out the core asset information in the **Fill Data** section:

**Required Fields:**
- **Asset Name**: Enter a clear, descriptive name for your asset (e.g., "Real Estate Portfolio Token")
- **Asset Ticker**: Create a unique ticker symbol for your asset (typically 3-6 characters)
- **Asset Category**: Select the appropriate category from the dropdown menu that best describes your asset type

The form uses a step-by-step workflow on the left sidebar, allowing you to progress through:
1. **Fill Data** - Complete all asset information
2. **Tokenization settings** - Configure token parameters  
3. **Verification (optional)** - Submit for verification if required
4. **Minting** - Generate the final token

Complete all required fields marked with red asterisks (*) before proceeding to the next step in the asset creation process.

---

## Step 3: Set Token Configuration

<!-- ![Asset Token Configuration](../../../../static/img/front-end/admin-asset-token-config.png) -->

### Blockchain Configuration

- **Primary Chain**: Select the main blockchain for your asset (e.g., Ethereum, Base, Polygon)
- **Contract Address**: Enter the deployed asset token contract address
- **Token Standard**: Confirm token standard (typically ERC-20 or ERC-1155)

### Pricing Configuration

Choose your pricing methodology:

**Option A: Fixed Pricing**
- **Fixed Price**: Set a static price per token
- **Currency**: Define the pricing currency (USD, ETH, etc.)

**Option B: Dynamic Pricing**
- **Oracle Integration**: Link to price feed oracles
- **Update Frequency**: Set how often prices refresh
- **Price Bounds**: Define minimum and maximum price limits

---

## Step 4: Configure Asset Parameters

<!-- ![Asset Parameters](../../../../static/img/front-end/admin-asset-parameters.png) -->

### Supply Configuration

- **Total Supply**: Set the maximum number of tokens to be issued
- **Initial Supply**: Define tokens available at launch
- **Minting Rights**: Configure who can mint additional tokens
- **Burning Mechanism**: Set up token burning rules if applicable

### Trading Parameters

- **Minimum Investment**: Set the smallest investment amount allowed
- **Maximum Investment**: Define investment caps per user (if any)
- **Trading Restrictions**: Configure any transfer or trading limitations
- **Vesting Schedule**: Set up token release schedules if applicable

---

## Step 5: Set Compliance and Governance

<!-- ![Asset Compliance](../../../../static/img/front-end/admin-asset-compliance.png) -->

### Regulatory Compliance

- **Jurisdiction**: Specify the primary legal jurisdiction
- **Compliance Framework**: Select applicable regulations (e.g., Securities regulations)
- **KYC Requirements**: Define know-your-customer verification levels
- **AML Policies**: Configure anti-money laundering checks

### Governance Rights

- **Voting Rights**: Enable token holder governance participation
- **Proposal Threshold**: Set minimum tokens needed to create proposals
- **Voting Period**: Define how long governance votes remain open
- **Execution Delay**: Set delay before approved proposals take effect

---

## Step 6: Configure Asset Backing and Reserves
 
<!-- ![Asset Backing](../../../../static/img/front-end/admin-asset-backing.png) -->

### Collateral Configuration

- **Backing Asset Type**: Define what backs your token (physical assets, cash, other tokens)
- **Collateral Ratio**: Set the backing ratio (e.g., 100% backed, 150% over-collateralized)
- **Reserve Management**: Configure how reserves are managed and audited
- **Liquidation Procedures**: Define what happens if collateral falls below thresholds

### Yield and Returns

- **Yield Source**: Specify how returns are generated (rent, dividends, appreciation)
- **Distribution Frequency**: Set how often yields are distributed
- **Reinvestment Options**: Configure automatic reinvestment capabilities

---

## Step 7: Set Up Monitoring and Reporting

<!-- ![Asset Monitoring](../../../../static/img/front-end/admin-asset-monitoring.png) -->

### Performance Metrics

- **Key Performance Indicators**: Define metrics to track asset performance
- **Reporting Schedule**: Set frequency of performance reports
- **Transparency Level**: Configure what information is publicly available

### Risk Management

- **Risk Monitoring**: Set up automated risk assessment tools
- **Alert Thresholds**: Define when administrators receive notifications
- **Emergency Procedures**: Configure emergency pause or modification procedures

---

## Step 8: Review and Deploy

<!-- ![Asset Review](../../../../static/img/front-end/admin-asset-review.png) -->

### Pre-Deployment Checklist

- [ ] All asset information is accurate and complete
- [ ] Token contract is deployed and verified
- [ ] Pricing mechanisms are properly configured
- [ ] Compliance requirements are met
- [ ] Governance parameters are set correctly
- [ ] Backing assets are properly secured
- [ ] Monitoring systems are active

### Deployment Process

1. **Final Review**: Carefully review all configurations
2. **Test Deployment**: Deploy to testnet first for validation
3. **Security Audit**: Conduct final security review
4. **Mainnet Deployment**: Deploy to production network
5. **Verification**: Verify all systems are functioning correctly

---

## Step 9: Post-Deployment Management

<!-- ![Asset Management](../../../../static/img/front-end/admin-asset-management.png) -->

### Ongoing Responsibilities

- **Performance Monitoring**: Regularly review asset performance metrics
- **Compliance Maintenance**: Ensure ongoing regulatory compliance
- **Community Communication**: Keep token holders informed of developments
- **Reserve Management**: Monitor and manage backing assets
- **Governance Participation**: Facilitate community governance processes

### Maintenance Tasks

- **Price Updates**: Ensure pricing mechanisms remain accurate
- **Documentation Updates**: Keep asset documentation current
- **Security Monitoring**: Watch for security issues or anomalies
- **Liquidity Management**: Monitor and support trading liquidity

---

## Example Asset Configuration

### Sample Real Estate Asset

```json
{
  "name": "Prime Office Building REIT",
  "symbol": "POBR",
  "category": "Real Estate",
  "totalSupply": "1000000",
  "priceSource": "fixed",
  "fixedPrice": "100.00",
  "currency": "USD",
  "backingType": "Physical Real Estate",
  "collateralRatio": "100%",
  "yieldSource": "Rental Income",
  "distributionFrequency": "Quarterly"
}
```

---

## Best Practices

### Security Considerations

- Always deploy to testnet before mainnet
- Conduct thorough security audits
- Implement multi-signature controls for critical functions
- Set up monitoring for unusual activity

### Compliance Best Practices

- Consult with legal experts before deployment
- Ensure proper documentation and disclosures
- Implement robust KYC/AML procedures
- Maintain clear audit trails

### User Experience

- Provide clear, accessible asset documentation
- Ensure transparent pricing and fee structures
- Implement user-friendly interfaces
- Offer comprehensive customer support

### Risk Management

- Diversify backing assets when possible
- Implement circuit breakers for extreme market conditions
- Maintain adequate insurance coverage
- Plan for various market scenarios

---

## Troubleshooting Common Issues

### Token Contract Issues
- **Problem**: Contract deployment fails
- **Solution**: Verify contract code, check gas limits, ensure proper network configuration

### Pricing Problems
- **Problem**: Price feeds not updating
- **Solution**: Check oracle connections, verify API keys, test fallback mechanisms

### Compliance Concerns
- **Problem**: Regulatory requirements unclear
- **Solution**: Consult legal experts, review jurisdictional requirements, implement conservative approaches

### Performance Issues
- **Problem**: Slow transaction processing
- **Solution**: Optimize gas usage, consider layer-2 solutions, implement batching mechanisms

---

## Support and Resources

For additional assistance with asset creation:

- **Technical Documentation**: Review comprehensive API documentation
- **Legal Support**: Consult with qualified legal professionals
- **Community Forum**: Connect with other asset creators
- **Customer Support**: Contact the Defactor support team

Remember that asset creation involves significant legal and financial responsibilities. Always ensure proper due diligence and professional consultation throughout the process.