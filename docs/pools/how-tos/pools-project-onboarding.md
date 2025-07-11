---
id: new-pools-client-onboarding
title: New Pools Client Onboarding
sidebar_position: 1
---

This guide outlines the steps and resources required to launch your own lending pools using [**Defactor Pools**](https://www.defactor.com/pools) for liquidity and funding.

---

## Smart Contract Setup

The smart contract setup process involves selecting the appropriate contract type and configuring it with the required parameters.

### Contract Types

#### 1. [**Counterparty Pools Contract**](/docs/pools/smart-contracts/counterparty-pools-contract/counterparty-pools-smart-contract)

- Enables users to create, manage, and interact with counterparty pools.
- Supports `ERC20`, `ERC721`, and `ERC1155` tokens as collateral.

#### 2. [**ERC20CollateralPool Contract**](/docs/pools/smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool)

- Designed for EVM-compatible blockchains.
- Facilitates pools of collateralized loans using the `ERC20` token standard.

---

### Deployment Network

Choose the appropriate network for testing and production deployment:

- **Testnet**: For development and testing purposes.
- **Mainnet**: For live production deployment.

Supported networks:

- [RWA.io](https://rwa.io)
- [Base](https://www.base.org/)
- [BNB Chain](https://www.bnbchain.org/en)
- [Ethereum](/docs/blockchain-and-web3/ethereum)
- [Polygon](/docs/blockchain-and-web3/polygon)

---

### Pools Smart Contract Configuration

Smart contracts must be deployed and initialized with specific configuration parameters.

- Refer to the [Pools Contract Requirements and Parameters Guide](/docs/pools/how-tos/pools-smart-contracts-configuration) for more details.

---

### Security and Testing

- **Contract Deployment**: Deploy the contract on the selected network.
- **Private Key Management**: Securely store and manage private keys.
- **Auditing and Security Checks**: Perform audits and vulnerability scans before deployment.

---

## Domain Name

- **Project Name / Description**: Provide a brief and clear description of your project.
- **Domain DNS Changes and Verification**: Update DNS settings and verify domain ownership to enable integration with Defactor services.

---

## Backend Configuration and Deployment

Set up the backend infrastructure to integrate with smart contracts and manage data.

- **Server Configuration**: Deploy and configure backend servers.
- **API Integration**: Use external services like `CoinGecko` for token pricing data.
- **Database Management**: Configure databases to store pool and transaction data securely.
- **Security Measures**: Encrypt sensitive data, enable firewalls, and follow security best practices.
- **CI/CD Pipelines**: Automate testing and deployment workflows.

- For detailed instructions, refer to [Configuring Pool Instances](/docs/pools/how-tos/configuring-pools-instances).

---

## FrontEnd Configuration and Deployment

- **Google Analytics**: Integrate tracking codes for analytics and monitoring.
- **Frontend Configuration**: Configure contract, token, and collateral addresses.
- **CI/CD Pipelines**: Automate deployment and updates to streamline delivery.

For more information, visit [Configuring Pool Instances](/docs/pools/how-tos/configuring-pools-instances).

---

## Web App Branding

For branding customization, check [Whitelabeling Defactor Pools](/docs/pools/how-tos/whitelabeling-defactor-pools).

### Logos

- **Design & Integration**: Provide branding assets such as:
  - SVG logo
  - Social media preview image
  - Favicon

### Organization Data

- Include project name, description, and website URL.

### Color Scheme

Define primary and secondary colors:

```yaml
primary:
  - main: "#primaryColor"
  - light: "#primaryLight"
  - dark: "#primaryDark"
secondary:
  - main: "#secondaryColor"
  - light: "#secondaryLight"
  - dark: "#secondaryDark"
```

### Fonts

- Ensure consistent font selection for branding and style.

---

## Pool Setup

### API

- [RESTful API](/docs/pools/back-end/api/erc20CollateralToken/restful)
- [GraphQL API](/docs/pools/back-end/api/erc20CollateralToken/graphql)

### Pool Creation

Pools can be created and managed in the admin section.

### Metadata

- Add pool metadata including:
  - Pool name, description and icon.
  - Token icon image URL.
  - Pool's visibility in the UI.
  - Terms and conditions link.

Please Refer to the [Configuring a New Pools Instance Guide](/docs/pools/how-tos/configuring-pools-instances) for more details.

---

## Testing

Thorough testing ensures the functionality and security of the system:

- **Functional Testing**: Verify core features and workflows.
- **Integration Testing**: Ensure smooth integration between components.
- **User Acceptance Testing**: Validate functionality with real users in a staging environment.
- **Performance Testing**: Evaluate system performance under load.
- **Security Testing**: Identify and address vulnerabilities.

---

## Post-Deployment

Once deployed, monitor and maintain the system for ongoing performance and support.

- **Monitoring Tools**: Track system performance, errors, and security.
- **Feedback Loop**: Establish channels for user feedback and improvement.
- **Marketing and Outreach**: Promote the project through targeted campaigns.
- **User Support**: Provide guides, FAQs, and documentation for ongoing assistance.
