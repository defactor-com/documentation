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

#### 1. [**Pools Contract**](https://defactor.dev/docs/smart-contracts/counterparty-pools-contract/smart-contract-erc20-collateral-pool)

- Enables users to create, manage, and interact with lending pools.
- Supports `ERC20`, `ERC721`, and `ERC1155` tokens as collateral.

#### 2. [**ERC20CollateralPool Contract**](https://defactor.dev/docs/smart-contracts/counterparty-pools-contract/smart-contract-erc20-collateral-pool)

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
- [Ethereum](https://defactor.dev/docs/blockchain-and-web3/ethereum)
- [Polygon](https://defactor.dev/docs/blockchain-and-web3/polygon)

---

### Pools Smart Contract Configuration

Smart contracts must be deployed and initialized with specific configuration parameters.

- Refer to the [Pools Contract Requirements and Parameters Guide](https://defactor.dev/docs/pools/how-tos/smart-contract-config) for more details.

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

- For detailed instructions, refer to [Configuring Pool Instances](https://defactor.dev/docs/pools/how-tos/howto-pools-config).

---

## FrontEnd Configuration and Deployment

- **Google Analytics**: Integrate tracking codes for analytics and monitoring.
- **Frontend Configuration**: Configure contract, token, and collateral addresses.
- **CI/CD Pipelines**: Automate deployment and updates to streamline delivery.

For more information, visit [Configuring Pool Instances](https://defactor.dev/docs/pools/how-tos/howto-pools-config).

---

## Web App Branding

For branding customization, check [Whitelabeling Defactor Pools](https://defactor.dev/docs/pools/how-tos/howto-whitelableing).

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

### Pool Creation

Pools can be created using APIs:

- **ERC20CollateralPool** APIs:

  - [RESTful API](https://defactor.dev/docs/back-end-api/pools/erc20CollateralToken/restful)
  - [GraphQL API](https://defactor.dev/docs/back-end-api/pools/erc20CollateralToken/graphql)

- **Pools Contract APIs**:
  - [Insert Pool Endpoint](https://defactor.dev/docs/back-end-api/pools/insertPool).

### Metadata

- Add pool metadata including:
  - Pool name and description.
  - Token icon image URL.

Please Refer to the [Configuring a New Pools Instance Guide](https://defactor.dev/docs/pools/how-tos/howto-pools-config) for more details.

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
