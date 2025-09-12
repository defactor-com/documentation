---
id: asset-creation
title: How to Create an Asset
sidebar_position: 5
---

This comprehensive guide walks administrators through the process of creating assets on the Defactor platform, from initial configuration to deployment and management.

---

## Step 1: Access Asset Creation  

There are two convenient ways to access the asset creation workflow:  

**Option A: Dashboard Access**  

![Asset Creation Dashboard](../../../../documentation/static/img/front-end/assets/access-asset-creation-dashboard-create-asset.png)  

Navigate to your **Assets** dashboard and locate the **"+ Create Assets"** button prominently displayed on the interface. Clicking this button will seamlessly redirect you to the **My Templates** section where the asset creation process begins.  

**Option B: Direct Navigation**  

![My Templates Navigation](../../../../documentation/static/img/front-end/assets/access-asset-creation-dashboard-my-templates.png)  

Alternatively, you can navigate directly to the **My Templates** section from the main menu.

### My Templates

![Assets My Templates](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-my-templates.png)  

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
- Cannot be changed after the asset is created
- Forms the foundation of your asset's identity and legal structure

**Dynamic Data:**
- Information that **changes over time** and requires regular updates
- Examples: Current market price, inventory levels, performance metrics, location data
- Updated periodically through data feeds, manual input, or automated systems
- Reflects the real-time status and value of your underlying asset

Understanding this distinction helps you choose the right template and configure your asset properly. Static data templates are ideal for assets with fixed characteristics, while dynamic data templates suit assets requiring ongoing data updates and real-time tracking.

The Templates section provides an organized, step-by-step approach that guides you through the entire asset configuration process, whether you're starting fresh, using existing templates, or customizing pre-built options to fit your requirements.

## Step 2: Asset Creation Workflow

### Select and Use Template  
Once you've accessed the My Templates section, browse through the available templates and click the **"Use Template"** button for the template that best matches your asset requirements. This will launch the asset creation form with pre-configured settings based on your selected template.

The form uses a step-by-step workflow on the left sidebar, allowing you to progress through: 
1. **Fill Data** - Complete all asset information 
2. **Tokenization settings** - Configure token parameters   
3. **Verification (optional)** - Submit for verification if required 
4. **Minting** - Generate the final token

---

### Fill Data Settings

#### Essential Asset Details
After selecting your template, you'll need to complete the core asset information in the **Fill Data** section:

**Required Fields:**
- **Asset Name**: Enter a clear, descriptive name for your asset (e.g., "Real Estate Portfolio Token")
- **Asset Ticker**: Create a unique ticker symbol for your asset (typically 3-6 characters)
- **Asset Category**: Select the appropriate category from the dropdown menu that best describes your asset type

#### Asset Description
- **Detailed Description**: Provide a comprehensive overview of your asset
  - Explain the underlying asset, its value proposition, and key characteristics
  - Include relevant details about location, condition, income potential, or other value drivers
  - Describe the investment opportunity and target market
  - This information helps potential investors understand your offering

#### Supporting Documentation
- **Upload Documents**: Attach relevant files that support your asset
  - Legal documents, appraisals, financial statements
  - Property reports, certificates, or compliance documentation
  - Supported formats: PDF, DOC, DOCX, PNG, JPG (up to 50MB per file)

Complete all required fields marked with red asterisks (*) before proceeding to the tokenization settings.

---

### Tokenization Settings

Once you've completed the basic asset information, proceed to the **Tokenization settings** section to configure the technical parameters of your token:

#### Token Visual Identity
Configure the visual representation of your token to ensure professional presentation across all platforms.

- **Token Icon**: Upload a visual representation of your token   
  - Supported formats: PNG, JPG, JPEG, PDF, SVG (up to 20MB)   
  - Recommended size: 512x512 pixels for optimal display across platforms   
  - Use clear, professional imagery that represents your asset
  - Ensure readability at small sizes and avoid overly complex designs
  - Use the drag-and-drop area or click "Upload a file"

#### Token Metadata
Enhance your token with additional reference materials and external resources.

- **Link**: Add external links related to your asset (optional)   
  - Can include project websites, documentation, or relevant resources
  - Technical documentation or whitepapers
  - Legal documents or regulatory filings
  - Market analysis or third-party reports   
  - Click "Add Link" to include multiple URLs with custom descriptions

#### Asset Type Selection
Choose the appropriate blockchain standard for your token. You'll typically see two main options:

**Ethereum (ERC-20)**
- **Purpose**: Enables fungible tokens for RWAs, ensuring broad compatibility and liquidity across DeFi platforms
- **Best for**: Assets such as real estate, commodities, and securities
- **Benefits**:
  - Easily tradeable across exchanges and DeFi protocols
  - Integrates with various wallets and apps for better market access
  - Can be upgraded with smart contracts for compliance and governance
  - Maximum liquidity and established infrastructure

**Ethereum (ERC-3643)**
- **Purpose**: A permissioned token standard designed for RWAs, focusing on regulatory compliance
- **Best for**: Real-world assets requiring integrated identity, governance, and transaction controls
- **Benefits**:
  - Integrated KYC/AML and identity verification for secure RWA tokenization
  - Allows regulators to monitor, pause, or reverse transactions
  - Tailored for real-world assets with strong compliance and automated validation
  - Enhanced security for institutional-grade assets

#### Token Economics
Define the financial structure and distribution model for your tokenized asset.

- **Price**: Set the initial price per token (displayed in USDC)   
  - This represents the value of each individual token unit   
  - Consider the total asset value and desired token supply when setting price
  - Factor in transaction costs and minimum investment thresholds

- **Supply**: Define the total number of tokens to be minted   
  - Shows "PRICE PER TOKEN" calculation based on your price and supply settings   
  - Higher supply = lower price per token (for the same total asset value)   
  - Consider liquidity needs and target investor demographics
  - Balance between accessibility and token value

#### Description
- **Asset Description**: Provide a comprehensive description of your asset   
  - Explain the underlying asset, its value proposition, and key characteristics   
  - Include relevant details about location, condition, income potential, or other value drivers   
  - This information helps potential investors understand your offering  

Complete all required fields marked with red asterisks (*) before proceeding to the next step in the asset creation process.

---

### Verification Settings (Optional)

The verification process adds credibility and regulatory compliance to your tokenized asset, enhancing investor confidence and market acceptance.

#### Verification Benefits
- **Enhanced Credibility**: Third-party validation increases investor trust
- **Regulatory Compliance**: Meets requirements for certain jurisdictions
- **Market Access**: Verified assets may access premium trading platforms
- **Institutional Appeal**: Attracts larger, institutional investors

#### Verification Types

**Basic Verification**
- **Asset Documentation Review**: Verification of ownership and legal standing
- **Financial Validation**: Confirmation of asset valuation and financial data
- **Timeline**: 3-5 business days
- **Cost**: Standard verification fee applies

**Enhanced Verification**
- **Comprehensive Audit**: Deep dive into asset quality and legal structure
- **Regulatory Compliance Check**: Full regulatory framework assessment
- **Third-party Appraisal**: Independent valuation verification
- **Timeline**: 7-14 business days
- **Cost**: Premium verification fee applies

#### Required Documentation for Verification

**Legal Documents**
- **Proof of Ownership**: Legal title, deed, or ownership certificates
- **Corporate Structure**: Entity formation documents if applicable
- **Compliance Records**: Any existing regulatory filings or approvals

**Financial Documentation**
- **Independent Appraisal**: Recent professional valuation (within 12 months)
- **Financial Statements**: Asset-related income statements and cash flows
- **Insurance Documentation**: Proof of adequate insurance coverage

**Identity Verification**
- **Personal Identification**: Government-issued ID for individual asset owners
- **Corporate Verification**: Business registration and authorized signatory documentation
- **Background Checks**: May be required for certain asset types or jurisdictions

#### Verification Process Steps
1. **Submit Documentation**: Upload all required documents through the secure portal
2. **Initial Review**: Preliminary assessment within 24-48 hours
3. **Due Diligence**: Comprehensive review by verification team
4. **Third-party Validation**: External expert review if required
5. **Final Approval**: Verification status update and certification

**Note**: Verification is optional but strongly recommended for assets seeking institutional investment or regulatory compliance.

---

### Minting Configuration

Before initiating the minting process, ensure all previous steps are complete and accurate.

#### Pre-Minting Checklist
- ✅ **Fill Data**: All asset information fields completed
- ✅ **Tokenization Settings**: Token parameters configured and validated
- ✅ **Verification**: Submitted if required (optional but recommended)
- ✅ **Final Review**: All information reviewed for accuracy

#### Smart Contract Deployment
Your token will be deployed using battle-tested smart contract templates:

**For ERC-20 Tokens**
- **Standard Compliance**: Full ERC-20 compatibility ensuring broad platform support
- **Security Features**: Built-in safeguards against common vulnerabilities
- **Upgrade Capability**: Optional upgrade mechanisms for future enhancements
- **Governance Integration**: Built-in voting and governance capabilities if required

**For ERC-3643 Tokens**
- **Compliance Framework**: Integrated regulatory compliance and identity management
- **Permissioned Transfers**: Transaction controls based on KYC/AML status
- **Regulatory Tools**: Built-in capabilities for regulatory oversight and intervention
- **Identity Registry**: Secure storage and validation of investor credentials

#### Minting Execution

**Transaction Details**
- **Minting Cost**: Final cost breakdown including:
  - Platform service fees
  - Blockchain network gas fees
  - Verification fees (if applicable)
  - Smart contract deployment costs

**Payment Methods**
- **USDC Payment**: Primary payment method for all fees
- **Wallet Integration**: Connect your Web3 wallet for seamless payment
- **Transaction Security**: Multi-signature requirements for high-value assets

#### Minting Process Steps
1. **Final Confirmation**: Review all asset and token parameters
2. **Payment Authorization**: Approve payment for minting and associated fees
3. **Smart Contract Deployment**: Automated deployment to selected blockchain
4. **Token Generation**: Minting of specified token supply to your wallet
5. **Verification**: On-chain verification of successful token creation
6. **Completion Notification**: Email confirmation with token contract details

#### Post-Minting Actions

**Token Management**
- **Token Distribution**: Tokens are minted to your connected wallet address
- **Transfer Capability**: Immediate ability to transfer tokens to investors or exchanges
- **Smart Contract Verification**: Automatic verification on blockchain explorers

**Documentation Package**
Upon successful minting, you'll receive:
- **Smart Contract Address**: Unique blockchain identifier for your token
- **Token Metadata**: Complete technical specifications and parameters
- **Legal Documentation**: Updated legal structure reflecting tokenization
- **Investor Package**: Professional materials for marketing to potential investors

**Next Steps Recommendations**
- **Exchange Listings**: Information about listing your token on DEXs or CEXs
- **Investor Outreach**: Templates and strategies for investor engagement
- **Compliance Monitoring**: Ongoing compliance requirements and reporting
- **Asset Management**: Tools and best practices for ongoing asset management

**Important**: Once minting is complete, your tokenized asset is live on the blockchain and ready for trading and investment.

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