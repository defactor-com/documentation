---
title: Software Development Kit
---

The Defactor SDK is a TypeScript-based Node.js library designed to streamline the process of instantiating contracts and enhancing the seamless interaction with Defactor contracts.

Tailored for developers engaged in blockchain or cryptocurrency operations, this SDK offers interfaces for communicating with smart contracts on Ethereum-based networks. By abstracting complexities, developers can concentrate on their application's business logic, free from the intricacies of underlying blockchain technology.

You can find the source code for this repository in [github.com/defactor-com/sdk](https://github.com/defactor-com/sdk/).

## Features

- Support for cjs, es, and esm modules.
- Developed using TypeScript for enhanced type safety and clarity.
- Seamless integration with `ERC20CollateralPool` and `Pools`.
- Well-defined interfaces that accurately model the Defactor contracts for easy interaction and integration.

This library is built on top of `ether@6.x.x` to provide a simple and easy to use interface to interact with the Defactor contracts.

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

console.log(liquidationProtocolFee);
```

## Methods Available

```typescript
async USDC_FEES_COLLECTED(): Promise<bigint>                                                                                                // Returns the total USDC fees collected.
async getUsdc(): Promise<string>                                                                                                            // Returns the USDC contract address.
async getTotalPools(): Promise<bigint>                                                                                                      // Returns the total number of pools.
async getPool(poolId: bigint): Promise<Pool>                                                                                                // Returns the pool with the given ID.
async getPools(offset: bigint, limit: bigint): Promise<Array<Pool>>                                                                         // Returns a list of pools within the given range.
async getTotalLending(poolId: bigint, address: string): Promise<bigint>                                                                     // Returns the total amount of lending for a given pool and address.
async getLoan(poolId: bigint, address: string, lendingId: bigint): Promise<Lend>                                                            // Returns a specific loan.
async addPool(pool: PoolInput): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                                            // Adds a new pool.
async lend(poolId: bigint, amount: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                                // Lends a certain amount to a pool.
async borrow(poolId: bigint, amount: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                              // Borrows a certain amount from a pool.
async getBorrow(poolId: bigint, borrowerAddress: string, borrowId: bigint): Promise<Borrow>                                                 // Returns a specific borrow.
async calculateCollateralTokenAmount(poolId: bigint, amount: bigint): Promise<bigint>                                                       // Calculates the amount of collateral tokens for a given amount.
async repay(poolId: bigint, borrowerAddress: string, borrowId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>    // Repays a borrow.
async getLiquidationInfo(pool: Pool): Promise<PoolLiquidationInfo>                                                                          // Returns information about the liquidation of a pool.
async liquidatePool(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                                       // Liquidates a pool.
```

## Examples

### Lending to a Pool

```typescript
import { SelfProvider } from "@defactor/defactor-sdk";

const providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(
  ERC20CollateralPool,
  contractConfig.contractAddress!, // loaded from config file
  contractConfig.providerUrl!, // loaded from config file
  contractConfig.privateKey! // loaded from config file
);

const poolId = 1;
const amount = BigInt(100_000000); // 100 USDC

const lendTx = await providerInstance.lend(poolId, amount);
console.log(lendTx);
```

### Borrowing from a Pool

```typescript
import { SelfProvider } from "@defactor/defactor-sdk";

const providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(
  ERC20CollateralPool,
  contractConfig.contractAddress!, // loaded from config file
  contractConfig.providerUrl!, // loaded from config file
  contractConfig.privateKey! // loaded from config file
);

const poolId = 1;
const amount = BigInt(10_000000); // 10 USDC

const borrowTx = await providerInstance.borrow(poolId, amount);
console.log(borrowTx);
```
