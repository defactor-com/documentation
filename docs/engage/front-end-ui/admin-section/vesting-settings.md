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

## Vesting Schedules List  

![Vesting Schedules List](../../../../static/img/front-end/engage/admin-vesting-schedules.png)

The schedules table provides a snapshot of all configured vesting batches.

![Admin Vesting Table Row](../../../../static/img/front-end/engage/admin-vesting-table-row.png)

- **Batch Name** — Human-readable label for the allocation.  
- **Vesting Period** — Duration of the vesting.

![Admin Vesting Table Row Period](../../../../static/img/front-end/engage/admin-vesting-table-row-period.png)

- **Chain** —  Blockchain network where vesting occurs (indicated by network logo).  
- **Recipients** — Number of participants in the vesting batch (clickable to view recipient details).  
- **Cliff Length** — Initial lock period before vesting starts (shows "No Cliff" if none configured).  
- **Total Amount** — Total allocated tokens, plus claimed amounts.  
- **Status** — Indicates lifecycle state (*Upcoming*, *Ongoing*, *Disabled*, *Completed*).  

From the list, admins can:  
- Review status of ongoing and upcoming schedules.  
- Open batch details for recipients and amounts.  
- Manage schedules with contextual actions (Revoke, Release, Disable, Pause contract).  

## Creating a Vesting Batch  

![Creating a Vesting Batch](../../../../static/img/front-end/engage/admin-vesting-create-batch.png)

To create a new vesting batch:  

### 1. Basic Details  
- **Batch Name*** — Descriptive label for the allocation.  
- **Chain*** — Select the blockchain (e.g., Base Sepolia).  
- **Token Address*** —  Smart contract address of the token being distributed (pre-configured by project administrators during vesting setup).

### 2. Recipients  

![Admin Vesting Form Recipients](../../../../static/img/front-end/engage/admin-vesting-form-recipients.png)

Admins can add recipients in three ways:  
- **Import CSV** — Upload bulk allocations via CSV file.  
- **Add Recipient** — Manually input recipient details.  
- **Sample CSV** — Download a template for quick setup.  

### 3. Add Recipient Fields  

![Admin Vesting Form Recipients Add Recipient](../../../../static/img/front-end/engage/admin-vesting-form-recipients-add-recipient.png)

When adding manually, each recipient requires:  
- **Wallet Address*** — EVM-compatible address.  
- **Wallet Label** (optional) — Human-readable identifier.  
- **Total Amount*** — Overall allocation.  
- **Initial Amount** — Tokens unlocked immediately (if any).  
- **Start Date / End Date*** — Defines vesting duration.  
- **Distribution Frequency*** — Interval of token release.

![Admin Vesting Form Recipients Add Recipient Distribution Frequency](../../../../static/img/front-end/engage/admin-vesting-form-recipients-add-recipient-distribution.png)

- **Cliff Period (optional)** — Locks tokens until the cliff ends before vesting begins.  
TODO EXPLAIN

![Admin Vesting Form Recipients Add Recipient Distribution Frequency](../../../../static/img/front-end/engage/admin-vesting-form-recipients-add-recipient-cliff-period.png)

## Managing Batches  

Each batch has lifecycle controls available from the action menu:  

- **Release** — Trigger distribution of claimable tokens.  
- **Revoke Schedule** — Cancel remaining allocations for a batch.  
- **Set Invalid Batch** — Mark a batch as invalid for audit purposes.  
- **Pause Contract** — Temporarily halt vesting activity.  
- **Withdraw** — Recover funds from the contract (admin-only).  
- **Request Withdraw** — Initiate a withdrawal request.  

## Best Practices  

- **Use CSV for large allocations** — Speeds up adding many recipients.  
- **Set cliffs for long-term commitments** — Helps align incentives with project milestones.  
- **Keep labels clear** — Useful when auditing team, advisor, and marketing allocations.  
- **Review before publishing** — Vesting schedules cannot be easily altered once deployed.  
- **Monitor claim activity** — Ensure distributions occur on time and revoke if misconfigured.  
