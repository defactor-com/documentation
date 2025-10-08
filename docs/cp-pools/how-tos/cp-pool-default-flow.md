---
id: cp-pool-default-flow
title: Managing a Defaulted CP Pool (Owner Fails to Repay)
sidebar_position: 9
---

WIP!! 


This guide explains what happens when a **CP Pool reaches its funding target** and the owner successfully collects the funds, but later **fails to repay the principal and rewards**.  

This represents a **default scenario**, where investors are exposed to the underlying risk of the pool owner not returning capital.

---

## 1. Owner Flow (Default Case)

### 1.1 Collection of Funds
- Pool reaches funding target (e.g., 50 USDC).  
- Owner performs **Collect** transaction.  
- Funds (minus platform fee) are transferred to the owner’s wallet.  

At this stage, the pool status becomes **Active**, and investors await repayment.

### 1.2 Expected Repayment
- Owner is required to deposit back:  
  - **Principal** = total committed funds (e.g., 50 USDC).  
  - **Rewards** = interest based on APR and term (e.g., 0.76 USDC).  
- Deposit must occur **before the liquidation deadline**.  

### 1.3 Failure to Repay
If the owner **does not deposit the required funds** by the liquidation deadline:  
- Pool status transitions to **Defaulted / Failed**.  
- Investors cannot claim rewards, since nothing has been deposited.  
- Collateral (if provided by the owner) may be seized and redistributed to investors.

---

## 2. Investor Flow (Default Case)

### 2.1 After Collect
- Investors see pool status as **Active**.  
- Claim panel shows:  
  - **Available = 0**  
  - **Claimed = 0**  

They must wait until the owner deposits rewards.

### 2.2 When Owner Fails to Repay
- After the **Liquidation Deadline**, if no deposit is made:  
  - Pool status changes to **Defaulted**.  
  - Claim panel remains at **0 USDC** (no rewards to claim).  
  - Investors are exposed to a **loss of principal** unless collateral exists.  

### 2.3 Collateral Handling
- If collateral was specified during pool creation, it is transferred to investors proportionally.  
- If no collateral was provided, investors suffer a complete loss of their investment.  

---

## 3. Transparency

The **History section** logs the entire sequence:
- Deposits by investors  
- Collection by the owner  
- (Missing) Deposit of rewards  
- Default flag after liquidation deadline  

This ensures that even in a default case, all transactions and failures are **auditable on-chain**.

---

## 4. Summary

- **Successful funding** does not guarantee repayment.  
- If the **owner defaults**, investors can lose part or all of their funds.  
- **Collateral** is the only safeguard in such scenarios.  
- Transparency in the UI and history log helps investors understand what went wrong.
