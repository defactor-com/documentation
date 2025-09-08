---
id: governance-proposals
title: Proposals Settings
sidebar_position: 1
slug: /admin-section/governance/proposals
---

The **Proposals** tab is where administrators (and authors) create, preview, and publish governance items for community voting. It supports a clear, guided flow: **Proposal details → Editor → Voting system → Overview**.

---

## Proposal List

Each proposal row shows:
- **Proposal** — Title of the proposal.
- **Voting Progress** — Token-weighted vote bars and counts per option.
- **Status** — *In Progress* or *Finished* (based on the configured voting window).

Use the list to monitor live participation and to review outcomes after the voting window closes.

---

## Create Proposal (4-Step Flow)

### 1) Proposal details
- **Name*** — Title of the proposal shown in the list.
- **Start Date*** / **End Date*** — Voting window (inclusive start, exclusive end).
- **Discussion (optional)** — Link to a forum/thread/doc for community debate.

> Tip: Set the start date slightly in the future if you want to circulate the discussion link before voting opens.

---

### 2) Editor
- Rich-text editor for the proposal body.
- Supports headings, bold/italic, lists, links, and code.
- Use this to describe **context**, **options trade-offs**, and **implementation plan**.

**Recommended structure:**
1. Summary
2. Motivation
3. Specification / Options
4. Risk & Impact
5. Timeline

---

### 3) Voting system
- **Select voting system***:
  - **Single choice voting** — Binary decisions like *Yes / No*.
  - **Multiple choice voting** — More than two mutually exclusive options.
- **Choices*** — Define the available options (e.g., *Yes*, *No*).
- Choices appear as labeled rows with icons and can be reordered/edited before publishing.

> Token weighting and eligibility are enforced by the governance backend; this UI configures options and window only.

---

### 4) Overview (Publish)
- Read-only summary of all inputs:
  - Title, Duration, Discussion link
  - Voting system
  - Choices
- **Create Proposal** — Publishes the proposal and moves it to the list with status **In Progress** (until end date).

---

## Status & Outcomes

- **In Progress** — Current time is within the configured voting window.
- **Finished** — Voting window has elapsed; results are final and locked for auditability.

> Results are displayed as absolute votes and percentages per option for transparency.

---

## Best Practices

- **Name clearly** — Short, action-oriented titles (e.g., “Adjust Staking Rate for Yield & Stability”).
- **Link discussions** — Add a forum/topic URL in *Discussion* to boost participation.
- **Limit choices** — Keep options minimal and well-differentiated.
- **Set realistic windows** — Ensure global time zones get at least 5–7 days for high-impact votes.
- **Document outcomes** — Edit the discussion thread with the final decision and next steps.

---

## Example Proposals

- **Enable Cross-Chain Staking Participation** — *Single choice*, Yes/No.
- **Create a New Vesting Batch** — *Multiple choice*, several vesting schedules.
- **Community Fund Allocation** — *Multiple choice*, predefined grant amounts.
