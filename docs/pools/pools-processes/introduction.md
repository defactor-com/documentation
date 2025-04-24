---
id: processes-overview
title: Pools Processes Overview
sidebar_position: 1
description: Learn How to Interact with the Defactor Pools Solution
---

<div style={{ display: 'flex', flexWrap: 'wrap', color: '#eb9f00', gap: '1rem' }}>
  <div style={{
    flex: '1 1 280px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    alignItems: 'flex-start',
    textDecoration: 'underline',
  }}>
    <a href="pool-borrowing-process" className="pagination-nav__label">Pool Borrowing Process</a>
    <a href="pool-lending-process" className="pagination-nav__label">Pool Lending Process</a>
  </div>

  <div style={{
    flex: '1 1 280px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    alignItems: 'flex-start',
    textDecoration: 'underline'
  }}>
    <a href="pool-liquidation-process" className="pagination-nav__label">Pool Loquidating Process</a>
  </div>
</div>

## Introduction

The **Pools Processes** section provides a step-by-step breakdown of how users and integrators interact with the Defactor Pools system. Whether you're lending capital, borrowing against tokenized assets, or managing liquidation events, these guides help you navigate the lifecycle of a pool with clarity and confidence.

Each process is designed to be secure, transparent, and governed by smart contracts.

## Included Guides

- [**Lending**](pool-lending-process) – How to supply stablecoins to a pool, earn rewards, and manage your position
- [**Borrowing**](pool-borrowing-process) – How to borrow against your tokenized assets and repay loans
- [**Liquidation**](pool-liquidation-process) – What happens when loans are not repaid and how collateral is managed

These process guides are relevant to both **ERC-20 Collateral Pools** and **Counterparty Pools**, with differences noted where applicable.

## Use Cases

These guides are useful for:

- DeFi users participating in lending/borrowing markets
- Project teams launching custom lending pools
- Liquidators and automation bots
- Developers integrating pool actions into their platforms
