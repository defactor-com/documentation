---
title: "Collateral Pool Contract"
sidebar_position: 2
---
The [Defactor SDK](/docs/introduction/software-development-kit) provides utilities and classes to seamless interaction with the Defactor contracts. In this specific section, the focus is in the [Collateral Pool Contract](/docs/pools/smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool) and `ERC20CollateralPool` class, which implements the fundamental methods to interact with the contract in question.

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

Import the library and instantiate the `SelfProvider` class with the `ERC20CollateralPool` contract.

```typescript
import { ERC20CollateralPool, SelfProvider } from "@defactor/defactor-sdk";

const providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(
  ERC20CollateralPool,
  contractConfig.contractAddress!, // loaded from config file
  contractConfig.providerUrl!, // loaded from config file
  contractConfig.privateKey! // loaded from config file
);
```

### Lending to a Pool

```typescript
const poolId = 1;
const amount = BigInt(100_000000); // 100 USDC

const lendTx = await providerInstance.lend(poolId, amount);
console.log(lendTx);
```

### Borrowing from a Pool

```typescript
const poolId = 1;
const amount = BigInt(10_000000); // 10 USDC

const borrowTx = await providerInstance.borrow(poolId, amount);
console.log(borrowTx);
```
