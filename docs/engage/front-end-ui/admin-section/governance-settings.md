---
id: governance-settings
title: Governance Settings
sidebar_position: 6
---

The **Governance section** in the Engage Admin Panel enables project administrators to manage on-chain decision-making processes. Through decentralized governance, token holders can vote on proposals that shape the future of the project.

This section includes two core admin tools:
- **Manage Proposals**: Create, review, and moderate governance proposals.
- **Members**: Manage governance participants and assign proposal rights.

---

## What Is Governance in Engage?

Governance on Engage allows communities to:
- Propose protocol upgrades, budget allocations, or strategic initiatives
- Vote based on token holdings (weighted by balance at the snapshot date)
- Pass or reject proposals based on quorum and majority thresholds

Admins are responsible for maintaining a fair and secure environment for these governance activities.

---

## Manage Proposals

The **Manage Proposals** tab lets admins oversee all governance proposals on the platform.

### Capabilities:

- Create new proposals
- Cancel live or scheduled proposals (admin rights required)
- Track vote status and quorum
- View proposal history and metadata

### How to Create a Proposal

1. Navigate to **Admin section > Governance > Manage Proposals**
2. Click **“Create Proposal”**
3. Fill in the following fields:
   - **Name**: Short name of the proposal.
   - **Start Date**: The date voting opens.
   - **End Date**: The date voting closes.
   - **Discussion** (optional): Lets the user provide a link for discussion if available.
   - **Proposal**: Full explanation, rationale, impact, and links.
   - **Voting System**: Single choice, multiple choice, etc.

4. Click **Create Proposal** and sign the transaction

The proposal will now be visible on the governance dashboard for eligible voters.

> 📌 Engage governance proposals are **token-weighted**: each eligible token in a wallet counts as one vote.

### Editing or Canceling Proposals

<!--Admins can:
 - **Edit** proposals **before voting starts**
 - **Cancel** proposals under exceptional circumstances (e.g., malicious content, protocol error)

> ⚠️ Canceling live proposals may require DAO approval depending on project setup. -->

---

## Members

The **Members** tab allows admins to manage the list of wallets authorized to:
- Submit proposals
- Participate in restricted governance votes (e.g., for ERC-3643 tokens)

### Use Cases for Member Management

- Whitelisting KYC-compliant users (for regulatory compliance)
- Assigning proposal rights to core contributors or multisig wallets
- Limiting governance features to verified token holders

### How to Add a Member

1. Go to **Admin Section > Governance > Members**
2. Click **“Add Member”**
3. Enter the wallet address
4. Assign role
5. Click **Save** and confirm via wallet

### How to Remove a Member

- Click the **trash icon** next to a wallet address
- Confirm wallet signature to complete removal

---

## Best Practices

- Write clear, detailed proposals with rationale and impact.
- Schedule snapshot and end dates wisely to allow voting time.
- Use the Members tab to manage roles based on compliance or governance structure.
- Align governance with your tokenomics and DAO constitution.