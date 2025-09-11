---
id: engage-frontend-admin-section-vesting-settings
title: Vesting Settings
sidebar_position: 6
---

The **Vesting Settings** section allows administrators to create, manage, and monitor token vesting schedules. It provides full control over batch allocations, recipient configuration, cliffs, and claimable amounts.

---

## Overview of the Vesting Section  

Administrators can:  
- Create vesting batches with defined recipients and token allocations.  
- Set vesting periods, start and end dates, and distribution frequency.  
- Apply optional cliff periods before vesting begins.  
- Track progress of each batch (upcoming, ongoing, disabled, completed).  
- Manage schedules, revoke allocations, and release vested tokens.  

This ensures long-term token distribution is transparent, predictable, and aligned with ecosystem growth.

---

## Vesting Schedules List  

![Vesting Schedules List](../../../../static/img/front-end/engage/admin-vesting-schedules.png)

The schedules table provides a snapshot of all configured vesting batches:  

- **Batch Name** — Human-readable label for the allocation (e.g., *Team & Marketing Allocation 2025*).  
- **Vesting Period** — Duration of the vesting (days, months, or custom).  
- **Chain** — Network where the contract resides.  
- **Recipients** — Number of addresses receiving vesting allocations.  
- **Cliff Length** — Duration before vesting starts (if configured).  
- **Total Amount** — Total allocated tokens, plus claimed amounts.  
- **Status** — Indicates lifecycle state (*Upcoming*, *Ongoing*, *Disabled*, *Completed*).  

From the list, admins can:  
- Review status of ongoing and upcoming schedules.  
- Open batch details for recipients and amounts.  
- Manage schedules with contextual actions (Revoke, Release, Disable, Pause contract).  

---

## Creating a Vesting Batch  

![Creating a Vesting Batch](../../../../static/img/front-end/engage/admin-vesting-create-batch.png)

To create a new vesting batch:  

### 1. Basic Details  
- **Batch Name*** — Descriptive label for the allocation.  
- **Chain*** — Select the blockchain (e.g., Base Sepolia).  
- **Token Address*** — Smart contract address of the token being distributed.  

### 2. Recipients  
Admins can add recipients in three ways:  
- **Import CSV** — Upload bulk allocations via CSV file.  
- **Sample CSV** — Download a template for quick setup.  
- **Add Recipient** — Manually input recipient details.  

### 3. Add Recipient Fields  
When adding manually, each recipient requires:  
- **Wallet Address*** — EVM-compatible address.  
- **Wallet Label** (optional) — Human-readable identifier.  
- **Total Amount*** — Overall allocation.  
- **Initial Amount** — Tokens unlocked immediately (if any).  
- **Start Date / End Date*** — Defines vesting duration.  
- **Distribution Frequency*** — Interval of token release (e.g., monthly, quarterly).  
- **Cliff Period (optional)** — Locks tokens until the cliff ends before vesting begins.  

> Recipients can be cloned for faster configuration with similar parameters.

---

## Managing Batches  

Each batch has lifecycle controls available from the action menu:  

- **Release** — Trigger distribution of claimable tokens.  
- **Revoke Schedule** — Cancel remaining allocations for a batch.  
- **Set Invalid Batch** — Mark a batch as invalid for audit purposes.  
- **Pause Contract** — Temporarily halt vesting activity.  
- **Withdraw** — Recover funds from the contract (admin-only).  
- **Request Withdraw** — Initiate a withdrawal request.  

---

## Best Practices  

- **Use CSV for large allocations** — Speeds up adding many recipients.  
- **Set cliffs for long-term commitments** — Helps align incentives with project milestones.  
- **Keep labels clear** — Useful when auditing team, advisor, and marketing allocations.  
- **Review before publishing** — Vesting schedules cannot be easily altered once deployed.  
- **Monitor claim activity** — Ensure distributions occur on time and revoke if misconfigured.  

---
