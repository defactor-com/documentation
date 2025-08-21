# Hasura Documentation Script

## Purpose
This script parses Hasura metadata JSON files and generates comprehensive Markdown documentation for Hasura actions, including input parameters, output types, and JSON examples.

## Prerequisites
- Go 1.16 or higher

## Usage
```bash
go run main.go <hasura_metadata.json>
```

## Example
```bash
go run main.go engage_metadata_21_8_2025.json
```

The script will generate a `hasura-actions-documentation.md` file in the current directory.
