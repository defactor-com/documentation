---
id: governance-members
title: Members Settings
sidebar_position: 2
slug: /admin-section/governance/members
---

The **Members** tab manages governance participants by wallet address and role. Use it to authorize who can create proposals and who can administer governance.

---

## Roles

- **Admin**
  - Create and edit proposals.
  - Add or remove members; change roles.
  - Oversee governance operations.

- **Author**
  - Create proposals.
  - No member-management privileges.

> Keep the number of **Admins** small. Use **Authors** for broad contributor access.

---

## Add a Member

1. Click **Add Member**.
2. Enter the **Wallet address*** (EVM-compatible).
3. Choose a **Role*** (*Admin* or *Author*).
4. Click **Accept** to save.

New entries appear instantly in the member list with the assigned role.

---

## Member List & Management

- The table lists **Wallet** and **Role** for each participant.
- Admins can:
  - Update a member’s role (Author ↔ Admin).
  - Remove a member if needed (access revocation).
- All actions are recorded for transparency.

---

## Security & Governance Hygiene

- **Verify ownership** of the wallet address before granting access.
- **Principle of least privilege** — default to *Author* unless admin rights are required.
- **Rotate** admin wallets when maintainers change.
- **Audit regularly** — review the list after major proposals or team changes.

---

## Troubleshooting

- **Member can’t create proposals** — Ensure their role is **Author** or **Admin**.
- **Proposal management actions missing** — Confirm the wallet is listed as **Admin**.
- **Wrong wallet** — Remove the entry and re-add the correct address.

---

## Example Governance Team

- *0xAdmin…* — **Admin** (core maintainer)
- *0xOps…* — **Admin** (ops/infra)
- *0xContributorA…* — **Author** (product)
- *0xContributorB…* — **Author** (community)
