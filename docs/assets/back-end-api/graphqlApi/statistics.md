---
title: Statistics
sidebar_position: 8
---

# Statistics

### globalStatsDay

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/global-stats-day`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Response

**Type:** `JSON`

---

### globalStatsMonth

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/global-stats-month`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Response

**Type:** `JSON`

---

### globalStatsWeek

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/global-stats-week`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Response

**Type:** `JSON`

---

### globalStatsYear

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/global-stats-year`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Response

**Type:** `JSON`

---

### myWalletAssets

myWalletAssets

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/my-wallet-assets`

**Action Type:** `query`

**Permissions:** `guest`, `user`

#### Input Parameters

**userAddress** (`String!`)

#### Response

**Type:** `[MyWalletAssetsOutput]!`

---

### myWalletStats

**Handler URL:** `{{HASURA_GRAPHQL_ACTION_BASE_URL}}/api/my-wallet-stats`

**Action Type:** `mutation`

**Permissions:** `guest`, `user`

#### Input Parameters

**userAddress** (`String!`)

#### Response

**Type:** `WalletStatsOutput`

```json
{
  "averagePrice": "string",
  "totalHolding": "string",
  "totalMinted": "string",
  "totalPrice": "string"
}
```

---