---
title: Governance Module
sidebar_position: 3
---

The governance module on Engage enables token holders to steer the direction of the Defactor ecosystem by voting on key proposals directly on-chain.

## Core Functionality

- **Submit proposals** for new initiatives or upgrades.
- **Vote on proposals** using $FACTR token weight.
- **View voting history** and proposal details.
- **Snapshot-based system** to calculate voting power.

## How Governance Works

1. **Proposal Creation** – Community or admin users submit proposals with descriptions, thresholds, and timelines.
2. **Voting Period** – Token holders vote during the open window.
3. **Snapshot Date** – Determines voting power based on wallet holdings.
4. **Result Tally** – After the end date, results are finalized.

## Voting Metadata

- **Title** – Summary of the proposal topic
- **Description** – Full explanation, criteria, and rationale
- **Snapshot Date** – Timestamp when wallet balances are captured
- **End Date** – Last day to cast votes

## QA Checklist

- Proposal list loads with accurate metadata
- Snapshot logic correctly determines voting weight
- UI components for voting interaction are functional
- Transaction confirmation triggers on vote submission
- Past proposals load with results and descriptions
