---
id: engage-frontend-admin-section-ecosystem-settings
title: Ecosystem Settings
sidebar_position: 3
---

The **Ecosystem Settings** section provides administrators with tools to manage and allocate tokens across ecosystem wallets. This ensures proper tracking of distributed funds, transparency for stakeholders, and accountability in token usage.

---

## Overview of the Ecosystem Section  

From here, administrators can:  
- View the total allocated and unallocated tokens.  
- Manage ecosystem wallets with descriptive labels and icons.  
- Assign wallet addresses to specific chains.  
- Allocate tokens to wallets based on project needs.  
- Track balances, liquid percentages, and allocations.  

This helps maintain visibility and control over how project tokens are distributed across categories such as **team**, **governance**, **foundation**, **liquidity**, and **staking rewards**.

---

## Allocation Summary  

![Ecosystem Allocation Summary](../../../../static/img/front-end/admin-ecosystem-allocation.png)

The left-hand allocation chart shows:  
- **Total Allocated** — The total tokens distributed across ecosystem wallets.  
- **Unallocated** — The remaining tokens available for future allocation.  

---

## Ecosystem Addresses Table  

![Ecosystem Addresses Table](../../../../static/img/front-end/admin-ecosystem-addresses.png)

The table lists all ecosystem wallets with:  
- **Address Label** — Descriptive name of the wallet (e.g., Team, Governance, Foundation).  
- **Wallet Address** — The unique blockchain address for the wallet.  
- **Amount** — Total allocated tokens.  
- **Balance** — Current available tokens.  
- **% Liquid** — Percentage of tokens available for use.  
- **Actions** — Delete a wallet entry if it’s no longer valid.  

---

## Adding an Ecosystem Wallet  

![Add Ecosystem Wallet](../../../../static/img/front-end/admin-ecosystem-add-wallet.png)

To add a new wallet:  

1. Click **Add Wallet**.  
2. Enter the wallet details:  
   - **Address Label*** — Descriptive label (e.g., *Staking Rewards*).  
   - **Icon*** — Choose an icon to represent the wallet’s category.  
   - **Wallet Address*** — The blockchain address.  
   - **Chain(s)*** — Select the blockchain (e.g., Base Sepolia).  
3. Click **Next** to proceed to allocation.  

---

## Allocating Tokens  

![Ecosystem Allocation Step](../../../../static/img/front-end/admin-ecosystem-allocation-step.png)

In the **Allocation** step:  
- Enter the amount of tokens to allocate to the wallet.  
- Review the remaining unallocated tokens displayed.  
- Confirm the allocation to finalize.  

The new wallet and its allocation will appear in the Ecosystem Addresses table.

---

## Best Practices  

- **Use clear labels** — Ensure wallet names make their purpose obvious (e.g., *Liquidity Support*, *Community Incentives*).  
- **Track unallocated tokens** — Always leave sufficient tokens unallocated for flexibility in future initiatives.  
- **Balance liquidity** — Ensure a healthy % liquid to cover operational costs while maintaining vesting/locked tokens.  
- **Audit regularly** — Verify ecosystem wallet balances align with project goals and reports.  
- **Revoke unused wallets** — Delete entries for inactive or obsolete wallets to keep the list clean.  

---
