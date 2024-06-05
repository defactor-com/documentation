---
title: Open-Source SDK
sidebar_position: 4
---

The Defactor SDK is a TypeScript-based Node.js library designed to streamline the process of instantiating contracts and enhancing the seamless interaction with Defactor contracts.

Tailored for developers engaged in blockchain or cryptocurrency operations, this SDK offers interfaces for communicating with smart contracts on Ethereum-based networks. By abstracting complexities, developers can concentrate on their application's business logic, free from the intricacies of underlying blockchain technology.

You can find the source code for this repository in [github.com/defactor-com/sdk](https://github.com/defactor-com/sdk/).

## Features

- Support for cjs, es, and esm modules.
- Developed using TypeScript for enhanced type safety and clarity.
- Seamless integration with [`ERC20CollateralPool`](/docs/pools/back-end/sdk/collateral-pool) and [`Pools`](/docs/pools/back-end/sdk/counterparty-pool).
- Well-defined interfaces that accurately model the Defactor contracts for easy interaction and integration.

This library is built on top of [`ether@6.x.x`](https://docs.ethers.org/v6/api/contract/) to provide a simple and easy to use interface to interact with the Defactor contracts.

## Installation

```bash
# yarn
yarn add @defactor/defactor-sdk

# npm
npm install @defactor/defactor-sdk
```

## Usage

### Importing the SDK

```typescript
import { DefactorSDK } from "@defactor/defactor-sdk";
```

This library is built to provide a simple and easy to use interface to interact with the Defactor contracts in two different options:

- `SelfProvider`: For developers who prefer using their own **digital signature provider** to interact with Defactor contracts. In this mode, developers must furnish the private key of the account intended for blockchain interaction. In order to effectuate this integration, the developer team must conscientiously consider the security protocols implemented to safeguard their private key from exposure or compromise in any manner.

- `AssistedProvider`: Geared towards developers seeking to interact with Defactor contracts without providing their private key. In this mode, the Defactor library exposes contract methods similar to `SelfProvider`, but instead of signing transactions, it returns the transaction object for developers to sign. Other contract-interaction functions not requiring signature are seamlessly handled by the SDK.

### Instantiating the SDK

```typescript
// Collateral Pool Contract
const provider = new SelfProvider(
  DefactorSDK.ERC20CollateralPool, // contract constructor
  ERC20_COLLATERAL_POOL_ETH_ADDRESS, // contract address
  providerUrl, // provider url (alchemy, infura, etc)
  ADMIN_PRIVATE_KEY // private key
);

// Pools Contract
const provider = new SelfProvider(
  DefactorSDK.Pools, // contract constructor
  POOLS_ETH_ADDRESS, // contract address
  providerUrl, // provider url (alchemy, infura, etc)
  ADMIN_PRIVATE_KEY // private key
);
```

### Interacting with the SDK

```typescript
import { ERC20CollateralPool, SelfProvider } from "@defactor/defactor-sdk";

const providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(
  ERC20CollateralPool,
  contractConfig.contractAddress!, // loaded from config file
  contractConfig.providerUrl!, // loaded from config file
  contractConfig.adminPrivateKey! // loaded from config file
);

const liquidationProtocolFee =
  providerInstance.contract.LIQUIDATION_PROTOCOL_FEE;

console.log(liquidationProtocolFee); // 5n
```

### Integrations with the contracts

- Pools
  - [`Counterparty Pool`](/docs/pools/back-end/sdk/counterparty-pool).
  - [`Collateral Pool`](/docs/pools/back-end-api/sdk/collateral-pool)

## Examples

### Initialize the ERC20

```typescript
import { ERC20 } from "@defactor/defactor-sdk";

const usdcTokenContract = new Erc20(
  contractConfig.usdcTokenAddress, // loaded from config file
  contractConfig.providerUrl, // loaded from config file
  contractConfig.privateKey // loaded from config file
);
```

### Approve an amount of ERC20 tokens

Give to the contract the allowance to spend the indicated amount of USDC by the user.

```typescript
const amount = BigInt(200_000000); // 200 USDC

await usdcTokenContract.approve(
  providerInstance.contract.address, // the address of the contract
  amount
);
```
