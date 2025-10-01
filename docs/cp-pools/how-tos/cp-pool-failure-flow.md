---
id: cp-pool-failure-flow
title: Managing a Failed CP Pool (Funding Not Reached)
sidebar_position: 7
---

WIP!! 

<!-- waiting for bug fixes https://github.com/defactor-com/cp-pools-webapp/issues/241 -->


This guide explains what happens when a **CP Pool does not reach the minimum funding target** by its deadline.  
In this case, the pool is considered **Failed**, and investors are refunded their contributions.  

---

## 1. What is a Failed Pool?

A pool is marked as **Failed** when:  
- The **Pool Deadline** is reached.  
- The **Total Committed** amount is **below the minimum required funding (Min USDC)**.  

Example:  
- **Min USDC:** 40  
- **Total Committed:** 35  
- **Deadline passed:** Sep 30th, 2025  
→ Pool status changes from `Created` to `Failed`.  

Since the funding threshold was not reached, the pool **never becomes Active**, and the owner cannot collect funds.

---

## 2. Owner Flow (Failed Pool)

### 2.1 Collection Disabled
- The **Collect** button never becomes active.  
- The owner cannot access or withdraw committed funds.  
- Pool status remains in `Created` until the deadline passes.  

### 2.2 After Deadline
- Once the deadline has expired, the pool transitions to **Failed**.  
- Owner has no further actions available.  
- The pool is effectively closed.  

---

## 3. Investor Flow (Failed Pool)

### 3.1 After Deadline
When the pool fails:  
- Investors see the pool status change to **Failed**.  
- **Claim / Withdraw** button becomes available.  
- No rewards (APR) are generated, since the pool never became Active.  

### 3.2 Refund Process
1. Investor clicks **Withdraw**.  
2. A wallet confirmation appears (e.g., MetaMask).  
3. After confirming, the investor’s contribution is returned in full.  

Example:  
- Investor A contributed **15 USDC**.  
- Investor B contributed **20 USDC**.  
- Both will receive back their exact amounts once they trigger withdrawal.  

### 3.3 History Updates
The **History section** shows:  
- **Deposited** entries for each contribution.  
- **Withdrawn** entries after refunds are processed.  

This ensures transparency that all funds were returned.

---

## 4. Key Differences from a Successful Pool

- In a **Successful Pool**, the owner collects, repays, and investors claim rewards.  
- In a **Failed Pool**, the owner never collects, and investors simply withdraw their initial deposits.  
- No APR or rewards are earned.  

---

## 5. Summary

- **Failed Pool** = insufficient funding by the deadline.  
- Owner cannot collect any funds.  
- Investors are fully refunded their contributions.  
- No rewards are generated.  
- Transparency is maintained via on-chain history logs.
