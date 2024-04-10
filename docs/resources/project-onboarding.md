---
title: New Project Onboarding
sidebar_position: 2
---

The following guide provides a list of resources needed to launch your own lending pools with [**Defactor Pools**](https://www.defactor.com/pools) for liquidity and funding.

### Domain Name
- project name / description
- Domain DNS changes and verification

## Smart Contract
- Define [smart contract](../smart-contracts/pools-contract/smart-contract-erc20-collateral-pool) type
  - [`Pools`](../smart-contracts/pools-contract/smart-contract-erc20-collateral-pool), allows users to create, manage, and interact with funding pools using `ERC20`, `ERC721`, and `ERC1155` tokens as collaterals. Every pool can have as many collateral tokens as needed.
  - [`ERC20CollateralPool`](../smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool), designed for EVM based blockchains, manages pools of collateralized loans using `ERC20` standard token. Every pool has only a `ERC20` collateral pool. Also, for every collateral token it requires an address as an oracle to indicate the price of that token.
- Define network deployment (Testnet for testing and Mainnet for live deployment) 
  - [Ethereum](../blockchain-and-web3/ethereum)
  - [Polygon](../blockchain-and-web3/polygon)
  - [Algorand](../blockchain-and-web3/algorand) 
- Define a `ERC20` base token with a precision of 6 (e.g., usdc, euroc, etc.)
- Define whether it is necessary to deploy new tokens to use as collateral.
- Smart contract deployment and testing
- Private Key Management
- Auditing and security checks

## Backend Configuration and Deployment
- Server setup and configuration
  - The backend uses `CoinGecko API` to get the price of the collateral token in terms of base token: For example, if the collateral token is `FACTR` it must be available in the API coin list, which is under the name `defactor`. 
  Also, the base token must be available in the currency list, for example for `usdc` the usd currency must be supported, because they have a 1:1 ratio.
  - Setup the contract, admin and borrower addresses
- Database setup and management
- Integration with smart contracts and blockchain
- Security measures and data protection
- Deployment and continuous integration/continuous deployment (CI/CD) setup

## Webapp Branding
### Logos
- Design and integration
  - SVG project logo
  - Social media preview image
  - Favicon

### Organization data

- Project name
- URL with the logo image
- Website URL and X URL

### Color Scheme
- Define the color scheme of your project
  - The background color
  - The primary and secondary color with the following variants:
    - `main`: The main color of the webapp
    - `light`: A lighter color than `main`
    - `dark`: A darker color than `main`

### Fonts
- Selection and integration
- Branding consistency across all platforms and materials

## Deploy Frontend Instance
- Google Analytics Tracking Code
- Frontend CI / CD Configuration
  - Setup the contract, token and collateral token addresses

## Set Up Pools
- Create Pools 
  - If you use the `erc20collateralpool` contract you can use the [RESTful](../back-end-api/erc20CollateralToken/restful#create-pool) or [GraphQL](../back-end-api/erc20CollateralToken/graphql#create-pool) endpoints, and update their metadata using the corresponding endpoint
  - If you use the `pool` contract use the [insert pool](../back-end-api/pools/insertPool) endpoint.

## Testing
- Functional testing (features and functionalities work as expected)
- Integration testing (different parts of the project work together)
- User acceptance testing (real users test the project in a staged environment)
- Performance testing (app’s performance under various conditions)
- Security testing (identification of vulnerabilities and fixing)

## Post-Deployment
- Monitoring tools setup (for performance, errors, and security)
- Feedback loop establishment for continuous improvement
- Marketing and outreach strategy implementation
- User support and documentation
