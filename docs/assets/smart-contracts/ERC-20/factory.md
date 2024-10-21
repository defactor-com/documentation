---
id: erc20-factory-smart-contract
title: Factory
sidebar_position: 1
---

`ERC20Factory.sol` this contract allows anyone to create new instances of `ERC20` tokens.

## Contract versions

There is currently only 1 version of ERC-20 factory.

## Smart Contract Documentation

### Overview

The Factory contract allows anyone to create ERC20 tokens, which have static data hash hardcoded in a constant.

### Dependencies

- `ERC20`: Openzeppelin's ERC20 Token implementation.
- `ERC20Burnable`: Openzeppelin's ERC20 extension, which allows token burnings .
- `Ownable`: Openzeppelin's single access control role implementation.

### Constants

- `DECIMALS`: Multiplier for percentage calculations (100).

### Roles

Factory is open to anyone and therefore has no roles implemented.

### Functions

#### User

- `createERC20Token`: Creates a new instance of ERC20 token and mints the starting supply to the caller.
- `staticData`: StaticData is a public mapping, which includes static data for every created ERC20 token.
