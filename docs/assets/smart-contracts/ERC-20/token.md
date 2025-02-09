---
id: erc20-token-smart-contract
title: Token
sidebar_position: 2
---

`ERC20.sol` this contract extends the Openzeppelin's base ERC20 token implementation.

## Contract versions

There is currently only 1 version of ERC-20 token.

## Smart Contract Documentation

### Overview

The ERC20 token smart contract is used as a template for ERC20-factory for deploying new ERC2 tokens. It extends the 
base ERC-20 implementation with burn functionality, which is available for contract owners.

### Dependencies

- `ERC20`: ERC20 Token implementation.

### Constants

- `DECIMALS`: Number of decimals for the ERC-20 tokens.
- `FACTORY`: Address of factory, which deployed this instance.

### Roles

Token contract extends Ownable functionality and as such supports setting functions as callable only by contract owner.

### Functions

Apart from functions, which are implemented in the dependency contract there are 2 other implemented in the "ERC20.sol":

#### User

- `decimals`: Returns decimal precision of ERC20 token.

#### Owner

- `burnFrom`: Allows contract owner to burn user's tokens.
