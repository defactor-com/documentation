---
title: "Collateral Pool Contract"
sidebar_position: 2
---

The [Defactor SDK](/docs/introduction/software-development-kit) provides utilities and classes to seamless interaction with the Defactor contracts. In this specific section, the focus is in the [Collateral Pool Contract](/docs/pools/smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool) and `ERC20CollateralPoolV2` class, which implements the fundamental methods to interact with the contract in question.

---

## Methods Available

```typescript
// Returns the total USDC fees collected.
async USDC_FEES_COLLECTED(): Promise<bigint>

// Returns the USDC contract address.
async getUsdc(): Promise<string>

// Returns the USDC Oracle contract address.
async getUsdcPriceOracle: Promise<string>

// Returns the USDC Sequencer Oracle contract address.
async getUsdcSequencerOracle: Promise<string>

// Returns the last time in seconds when the contract was unpaused
async getUnpausedTime(): Promise<bigint>

async getAnnouncedPoolEdit(poolId: bigint): Promise<PoolEditAnnouncement>

// Returns the list of the collateral token addresses
async getCollateralTokens(): Promise<Array<string>>

// Returns the total number of pools.
async getTotalPools(): Promise<bigint>

// Returns the pool with the given ID.
async getPool(poolId: bigint): Promise<Pool>

// Returns a list of pools within the given range.
async getPools(offset: bigint, limit: bigint): Promise<Array<Pool>>

// Returns the total supplied amount for a given pool and address.
async getTotalLending(poolId: bigint, address: string): Promise<bigint>

// Returns a specific loan position.
async getLoan(poolId: bigint, address: string, lendingId: bigint): Promise<Lend>

// Supplies a certain amount of USDC to a pool.
async lend(
  poolId: bigint,
  usdcAmount: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Borrows a certain amount of USDC from a pool, specifying the collateral token amount.
async borrow(
  poolId: bigint,
  usdcAmount: bigint,
  collateralTokenAmount: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Returns a specific borrow.
async getBorrow(poolId: bigint, borrowerAddress: string, borrowId: bigint): Promise<Borrow>

// Calculates the amount of collateral tokens for a given amount.
async calculateCollateralTokenAmount(poolId: bigint, amount: bigint): Promise<bigint>

// Calculates the amount of interest to repay a specified borrow position.
async calculateRepayInterest(
  poolId: bigint,
  borrowId: bigint,
  user: string
): Promise<bigint>

// Repays a borrow with a specified amount.
async repay(
  poolId: bigint,
  borrowId: bigint,
  repayAmount: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Calculate the expected rewards for supplied to a pool.
async calculateReward(
  poolId: bigint,
  lendId: bigint,
  user: string
): Promise<bigint>

// Claims rewards earned by supplies from the pool.
async claim(
  poolId: bigint,
  claims: Array<{ lendId: bigint; usdcAmount: bigint }>
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Get the liquidatable amount with protocol fees of a specified borrow position.
async getLiquidatableAmountWithProtocolFee(
  poolId: bigint,
  user: string,
  borrowId: bigint
): Promise<bigint>

// Get the current available usdc and collateral token amounts in the pool.
async getAvailableAmountsInPool(poolId: bigint): Promise<{  availableUSDC: bigint; availableCollateralTokens: bigint}>

// Get protocol fees for collateral token
async getCollateralTokenProtocolFee(
  collateralToken: string
): Promise<bigint>

// Check if the borrow position is liquidatable.
async isPositionLiquidatable(
  poolId: bigint,
  user: string,
  borrowId: bigint
): Promise<boolean>

// Calculates the required usdc fee to liquidate a borrow position 
async calculateRequiredUsdcToLiquidate(
  poolId: bigint,
  liquidations: Array<{ borrowId: bigint; user: string; usdcAmount: bigint }>
): Promise<bigint>

// Liquidates borrow positions based on specified liquidations.
async liquidate(
  poolId: bigint,
  liquidations: Array<{ borrowId: bigint; user: string; usdcAmount: bigint }>
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Changes the collateral amount for a specific borrow.
async changeCollateralAmount(
  poolId: bigint,
  borrowId: bigint,
  newCollateralTokenAmount: bigint,
  maxCollateralTokenLTVPercentage: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Claim with interest in collateral tokens from the liquidation of borrow positions
async claimCollateral(
  poolId: bigint,
  claims: Array<{ lendId: bigint; usdcAmount: bigint }>,
  liquidations: Array<{ borrowId: bigint; user: string; usdcAmount: bigint }>
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>
```

## Admin Methods Available

```typescript
// Adds a new pool.
async addPool(pool: PoolInput): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Announce the edition of a pool.
async announceEditPool(
  poolId: bigint,
  pool: EditPool
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Commits the changes of a edit pool announcement. 
async commitEditPool(
  poolId: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Cancel the changes of a edit pool announcement.
async cancelEditPool(
  poolId: bigint
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>

// Withdraw the protocol fees rewards
async withdrawProtocolRewards(
  token: string,
  recipient: string
): Promise<ethers.ContractTransaction | ethers.TransactionResponse>
```

---

## Examples

Import the library and instantiate the `SelfProvider` class with the `ERC20CollateralPoolV2` contract.

```typescript
import { ERC20CollateralPoolV2, SelfProvider } from "@defactor/defactor-sdk";

const providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPoolV2>(
  ERC20CollateralPoolV2,
  contractConfig.contractAddress!, // loaded from config file
  contractConfig.providerUrl!, // loaded from config file
  contractConfig.privateKey! // loaded from config file
);
```

### Supply to a Pool

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
