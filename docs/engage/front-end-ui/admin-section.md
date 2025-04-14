---
title: Admin Section
sidebar_position: 6
---

The Admin Section in Engage is a permissioned interface used by authorized team members to manage and maintain critical parts of the ecosystem. This includes user roles, proposal creation, wallet configuration, and vesting operations.

## Key Capabilities

- **Add or remove admins** securely via smart contracts
- **Create/edit lending pools** with configurable parameters
- **Manage vesting batches** and release schedules
- **Approve/reject community proposals** for governance
- **Add ecosystem wallets** for transparency and tracking

## Role-Based Access

Only wallets designated as Admins can:

- Access the Admin tab
- Trigger system-level actions
- View restricted system logs

## Functional Areas

- **Admin Accounts** – Manage permissions
- **Ecosystem Wallets** – Add/update public wallet references
- **Proposals** – Launch and edit governance proposals
- **Pools** – Configure parameters like maturity dates, token pairs, and caps
- **Vesting** – Create or modify token release batches

## QA Checklist

- Admin permissions enforced via smart contract logic
- Pool editing and creation validate required fields
- Proposal form validates title, description, and schedule
- Vesting batch editor loads with correct user/token data
- Ecosystem wallet additions are reflected on the dashboard
