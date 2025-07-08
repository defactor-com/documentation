---
id: add-and-edit-pool-metadata
title: Add and Edit Pool Metadata
sidebar_position: 6
---

In Defactor, pool metadata is stored in a database rather than on-chain. As a result, when new Defactor instances are deployed (or if the database is cleared for any reason), the metadata must be manually saved back to the database. The best way to do this is by calling the API endpoint `/v1/update-pool-metadata`.

For more information, please see the [API documentation](/docs/pools/back-end/api/erc20CollateralToken/restful#update-metadata).

**Note:** Pools without metadata are hidden from the UI.

---

## Metadata Structure

The metadata is stored as a JSONB object within the `pools` table in the database. This is a non-normalized structure, providing flexibility for each implementation to add data that uniquely describes its pool.

The following JSON example shows the structure and attributes required by the frontend:

```json
{
  "pool": {
    "id": "1",
    "name": "FACTR Pool 1",
    "description": "FACTR is a tool that facilitates the connection between the traditional world of assets and the decentralized ecosystem of cryptocurrencies. Explore more about Defactor and its potential in the financial world!",
    "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648",
    "collateralToken": {
      "logo": "https://assets.coingecko.com/coins/images/19201/standard/jFLSu4U9_400x400.png?1696518648"
    }
  }
}
```

### Metadata Attributes

Here's a description of each attribute in the metadata used by the UI:

- **id:** The internal pool ID in the database.
- **name:** The name of the pool.
- **description:** A brief description of the pool.
- **logo:** The logo URL representing the pool.
- **collateralToken:** Information about the token used as collateral.
  - **logo:** The URL of the collateral token's logo.

### Best Practices

**Important:** Make sure to update the pool metadata promptly after spinning up a new Defactor instance or if the database is cleared. Proper metadata ensures pools are visible in the UI and accurately represented.
