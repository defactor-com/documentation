# Hasura Documentation Generator

## Purpose
This tool parses Hasura metadata JSON files and generates comprehensive Markdown documentation for:
- **Actions**: GraphQL actions with input parameters, output types, and JSON examples
- **REST Endpoints**: REST API endpoints with HTTP methods, URLs, parameters, and responses

## Prerequisites
- Go 1.16 or higher

## Usage
```bash
go run hasura-docs.go [-mode=actions|rest] <hasura_metadata.json>
```

### Modes
- `actions` (default): Generate documentation for Hasura actions
- `rest`: Generate documentation for REST endpoints

## Examples
```bash
# Generate actions documentation
go run hasura-docs.go -mode=actions engage_metadata_21_8_2025.json

# Generate REST endpoints documentation
go run hasura-docs.go -mode=rest engage_metadata_21_8_2025.json

# Default mode (actions)
go run hasura-docs.go engage_metadata_21_8_2025.json
```

## Output Files
- **Actions mode**: `hasura-actions-documentation.md`
- **REST mode**: `hasura-rest-endpoints-documentation.md`

## Features
- Parses GraphQL queries from query collections for REST endpoints
- Generates JSON examples from custom type definitions
- Extracts input/output parameters automatically
- Handles nested types and arrays
- Formats output with proper indentation
