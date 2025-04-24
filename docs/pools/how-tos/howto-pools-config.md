---
id: configuring-pools-intances
title: Configuring Pools Instances
sidebar_position: 4
---

# Configuring a New Pools Instance

To deploy a new instance of Defactor Pools, you'll need to provide specific environment variables. This document lists the variables required, grouped into categories for clarity.

## Frontend UI

These variables configure the user-facing interface of the pools instance:

- **NEXT_PUBLIC_APP_URL:** URL where the web app is hosted.  
  Example: `https://webapp-dev.defactor.dev`

- **NEXT_PUBLIC_APP_ENVIRONMENT:** Environment type (e.g., testnet or mainnet).  
  Example: `testnet`

- **NEXT_PUBLIC_HASURA_URL:** URL for the Hasura GraphQL API.  
  Example: `https://api-dev.defactor.dev/v1/graphql`

- **NEXT_PUBLIC_NETWORKS:** JSON string specifying blockchain networks and their configurations.  
  Example: `[{"chainId":11155111,"rpcUrl":"https://rpc.sepolia.org","name":"Sepolia","currency":"ETH","explorerUrl":"https://sepolia.otterscan.io","baseTokenAddress":"0x75fe3476d90598080f7D12365020C438943Dcef3","collateralAddress":"0x7D5c1468D8bE9f0F4FaD26F2Cb7e6b2ed9042577"}]`

- **NEXT_PUBLIC_DEFAULT_NETWORK_SELECTED:** JSON object representing the default network selection.  
  Example: `{"chainId":11155111,"name":"Sepolia","baseTokenAddress":"0x75fe3476d90598080f7D12365020C438943Dcef3"}`

- **NEXT_PUBLIC_ORGANIZATION_DATA:** JSON string containing the organization's branding data.  
  Example:
  `{"name":"DEFACTOR.com","logo":"https://assets-global.website-files.com/...","websiteUrl":"https://www.defactor.com/","xUrl":"https://twitter.com/defactor_"}`

- **NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:** Wallet Connect project identifier.

- **NEXT_PUBLIC_COLLATERAL_TOKEN_ADDRESS, NEXT_PUBLIC_POOL_CONTRACT_ADDRESS:** Addresses for the collateral token and pool contracts.

- **NEXT_PUBLIC_URL_PROVIDER:** URL of the provider.

- **NEXT_PUBLIC_BRANDING_CONFIG:** Branding configuration data.

- **NEXT_PUBLIC_ASSETS_APP:** JSON string for application assets configuration.  
  Example: `{"appLogo":"/logos/logo.svg","favIcon":"/favicon.ico","socialMediaPreviewImage":"preview-image.png","fontFamily":"DMSans"}`

- **RE_CAPTCHA_PROJECT_ID, NEXT_PUBLIC_RE_CAPTCHA_KEY:** reCAPTCHA project identifiers.

- **GOOGLE_APPLICATION_CREDENTIALS, NEXT_PUBLIC_GA_TRACKING_CODE:** Google Application and Analytics credentials.

## Backend API

These variables configure the backend API:

- **POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_DATA:** PostgreSQL database credentials.

- **HAPI_SERVER_PORT, HAPI_SERVER_ADDRESS:** Server port and address for the Hapi API.

- **HAPI_PROVIDER_URL, HAPI_CONTRACT_ADDRESS:** Provider URL and contract address for the Hapi API.

- **HAPI_ADMIN_PRIVATE_KEY:** Private key for the admin.

- **HAPI_START_BLOCK:** Starting block number for synchronization.

- **HAPI_HASURA_URL, HAPI_HASURA_ADMIN_SECRET:** Hasura URL and admin secret.

- **HAPI_DATABASE_URL:** URL for the database.

- **HAPI_ALCHEMY_KEY, HAPI_ALCHEMY_NETWORK:** Alchemy API key and network.

- **HAPI_COINGECKO_API_URL, HAPI_COINGECKO_API_KEY:** CoinGecko API URL and key.

- **HAPI_JWT_SECRET, HAPI_JWT_ISS, HAPI_JWT_TTL_SEC, HAPI_JWT_MAX_TTL_SEC, HAPI_JWT_RT_TTL_SEC:** JWT configuration.

- **HAPI_TOKEN_NAME:** Name of the token.

- **HAPI_SYNC_POOL_EVERY_MILLISECOND, HAPI_FETCH_TOKEN_PRICE_EVERY_MILLISECOND, HAPI_SNAPSHOT_HISTORICAL_BALANCE_EVERY_MILLISECOND:** Sync intervals in milliseconds.

- **HAPI_SERVICES_CONFIG:** JSON configuration for services.

## Hasura GraphQL

These variables configure the Hasura GraphQL instance:

- **HASURA_GRAPHQL_ENABLE_CONSOLE:** Enables the console.

- **HASURA_GRAPHQL_DATABASE_URL:** Database URL for Hasura.

- **HASURA_GRAPHQL_ADMIN_SECRET:** Admin secret for Hasura.

- **HASURA_GRAPHQL_UNAUTHORIZED_ROLE:** Default role for unauthorized users.

- **HASURA_GRAPHQL_ACTION_BASE_URL:** Base URL for GraphQL actions.

- **HASURA_GRAPHQL_JWT_SECRET:** JWT secret for Hasura.

## Servers and Infrastructure

These variables relate to server and infrastructure setup:

- **NAMESPACE:** Namespace for the deployment.  
  Example: `defactor-dev`

- **INGRESS_GRAPHQL_HOST:** GraphQL API host URL.  
  Example: `api-dev.defactor.dev`

- **KUBE_CONFIG_DATA:** Kubernetes configuration data.
