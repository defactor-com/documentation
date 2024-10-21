---
id: erc3643-smart-contract
title: Introduction
sidebar_position: 1
---

ERC-3643, also known as T-REX, is a token standard for the tokenization of real-world assets. An open-source implementation of this standard has been developed by Tokeny Solutions under the GNU General Public License v3.0. We have used this implementation, with slight modifications, to ensure compatibility with Defactor Assets.

For further details on the smart contracts, please refer to Tokeny's [whitepaper](https://tokeny.com/wp-content/uploads/2023/05/ERC3643-Whitepaper-T-REX-v4.pdf) or the [smart contracts implementation](https://github.com/TokenySolutions/T-REX).

## Contract Versions

We are using version 4.1.5 of T-REX as the base for our contract. Currently, there is only one version of the Defactor Assets fork.

## Staking Smart Contract Documentation

### Overview

This section highlights the differences between our smart contracts and the original T-REX contracts.

### Smart Contract Updates

Two contracts have been updated:

- `TREXFactory.sol`
- `ITREXFactory.sol`

#### Updates to TREXFactory.sol

The primary enhancement to `TREXFactory.sol` is the support for minting the initial token supply and assigning appropriate permissions to the deployer. When the `deployTREXSuite` function is called, it checks whether the deployer already has an identity contract deployed. If not, the system deploys an identity contract for the deployer.

The identity contract serves as a KYC mechanism, allowing the user to receive ERC-3643 tokens. This contract must also be registered in the identity registry, which we have added.

Following the identity setup, roles must be assigned to both the factory contract and the deployer to enable token transfers and burning. We then assign gateway agent permissions, allowing the token to be unpaused. Once unpaused, the initial token supply can be minted.

Finally, static data is saved in a mapping called `staticData`.

#### Updates to ITREXFactory.sol

To accommodate the changes in `TREXFactory.sol`, we have updated the `ITREXFactory.sol` interface.

Three new variables have been added to `TokenDetails`:

- `bytes32 staticData`
- `uint256 startingSupply`
- `address idFactoryGateway`
