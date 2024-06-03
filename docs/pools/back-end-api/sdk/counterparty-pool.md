---
title: "Counterparty Pool Contract"
sidebar_position: 1
---

The [Defactor SDK](/docs/introduction/software-development-kit) provides utilities and classes to seamless interaction with the Defactor contracts. In this specific section, the focus is in the [CounterParty Pool Contract](/docs/pools/smart-contracts/pools-contract/smart-contract-erc20-collateral-pool) and `Pools` class, which implements the fundamental methods to interact with the contract in question.
 
## Constants

```typescript
INTEREST_DECIMAL_PLACES //  Use to adjust the decimals in the interest rate calculation.
POOL_FEE                //  The required amount of USDC to create a pool.
COLLECT_POOL_MAX_SECS   //  Maximum unix epoch time for collecting funds from a pool.
COLLECT_POOL_MAX_DAYS   //  Maximum days for collecting funds from a pool.
MIN_POOL_CLOSED_SECS    //  Minimum unix epoch time before a pool can be archived
MIN_POOL_CLOSED_DAYS    //  Minimum days before a pool can be archived
```

## Methods Available

```typescript
// Returns the USDC address configured as the base token.
async USD_ADDRESS(): Promise<string> 

// Returns if the contract is paused.
async isPaused(): Promise<boolean> 

// Returns the pool with the given poolId.
async getPool(poolId: bigint): Promise<Pool>

// Returns a list of pools within the given range.
async getPools(offset: bigint, limit: bigint): Promise<Pagination<Pool>> 

// Pause the contract
async pause(): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Unpause the contract
async unpause(): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Create a new pool
async createPool(
pool: PoolInput
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Allows the owner of the pool collects the committed amount and active the pool
async collectPool(
poolId: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Allows the owner of the pool deposits the rewards
async depositRewards(
poolId: bigint,
amount: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Allows to close the pool
async closePool(
poolId: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Allows to archive the pool
async archivePool(
poolId: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Allows the lender (investor) to commit the specific amount to the pool
async commitToPool(
poolId: bigint,
amount: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Transfer the committed amount to the pool by the lender (investor)
async uncommitFromPool(
poolId: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 

// Allows to the lender (investor) to claim their rewards
async claim(
poolId: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse> 
```

## Examples

### Initialize the SelfProvider

Import the library and instantiate the `SelfProvider` class with the `Pools` contract.

```typescript
import { Pools, SelfProvider } from "@defactor/defactor-sdk";

const provider = new SelfProvider.SelfProvider<Pools>(
  Pools,
  contractConfig.contractAddress, // loaded from config file
  contractConfig.providerUrl, // loaded from config file
  contractConfig.AlicePrivateKey // loaded from config file
)
```

### Access to constants

```typescript
const poolCreationFee: bigint = provider.contract.POOL_FEE
```

### Create a pool

In the following example Alice will create a pool with a soft cap of 100 USDC, a hard cap of 600 USDC, a minimum APR of 50 USDC and as collateral 15 of GOLD.

:::info

To successfully create the pool, the contract must have the allowance to transfer the fee in USDC and the collateral tokens.

:::

```typescript
await provider.contract.createPool({
    softCap: BigInt(100_000000),    // 100 USDC
    hardCap: BigInt(600_000000),    // 600 USDC
    deadline: BigInt(1734652800),   // 2024-12-20T00:00:00.000Z
    minimumAPR: BigInt(50_000000),  // 50 USDC
    collateralTokens: [
        {
            contractAddress: contractConfig.goldTokenAddress,  // loaded from config file
            amount: BigInt(15_000000), // 15 GOLD
            id: null
        }
    ]
})
```

### Commit to a pool

In the following example Bob commits 200 USDC to Alice's pool.

:::info

To successfully commit to the pool, the contract must have the allowance to transfer the amount of USDC.

:::

```typescript
const poolId = BigInt(0)
const amount = BigInt(200_000000)   // 200 USDC

const provider = new SelfProvider.SelfProvider<Pools>(
  Pools,
  contractConfig.contractAddress, // loaded from config file
  contractConfig.providerUrl,     // loaded from config file
  contractConfig.BobPrivateKey    // loaded from config file
);

await provider.contract.commitToPool(poolId, amount)
```