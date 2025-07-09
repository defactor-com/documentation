---
id: whitelabeling-defactor-pools
title: Whitelabeling Defactor Pools
sidebar_position: 5
---

This document outlines the process of whitelabeling, detailing how to customize Defactor pools instances to make them unique for each client.

---

## Overview

Whitelabeling allows clients to apply their branding to Defactor pool instances. This guide covers all necessary configuration values and files.

---

## Organization Data Configuration

Specify the basic organizational details using the `NEXT_PUBLIC_ORGANIZATION_DATA` configuration in the environment settings:

```json
{
  "name": "DEFACTOR.com",
  "logo": "https://assets-global.website-files.com/64555cbab4849c7309c3ff36/6455615a7df9d0409fb8f99d_Defactor%20Favicon%20-%2032x32.png",
  "websiteUrl": "https://www.defactor.com/",
  "xUrl": "https://twitter.com/defactor_"
}
```

### Assets Configuration

Define the branding assets with the `NEXT_PUBLIC_ASSETS_APP` variable:

```json
{
  "appLogo": "/logos/logo.svg",
  "favIcon": "/favicon.ico",
  "socialMediaPreviewImage": "preview-image.png",
  "fontFamily": "DMSans"
}
```

### Branding Customization

Customize the visual theme of the application using the `NEXT_PUBLIC_BRANDING_CONFIG` variable. This variable controls the color schemes and other UI elements.

#### Color Schemes

```json
{
  "color": {
    "primary": {
      "light": "#FFFFFF",
      "main": "#26A66B",
      "dark": "#348DE5"
    },
    "secondary": {
      "light": "#26A66B",
      "main": "#26A66B",
      "dark": "#348DE5"
    },
    "background": {
      "default": "#F9F9F9",
      "ellipseOne": "#26A66B",
      "ellipseTwo": "#26A66B",
      "ellipseThree": "#E0A225",
      "ellipseFour": "#26A66B"
    },
    "charts": {
      "pieChartColors": {
        "paid": "#26a66b",
        "paidBg": "#E8F3E8",
        "active": "#26a66b",
        "activeBg": "rgb(38, 166, 107, 0.1)",
        "claimed": "#7C7D7E",
        "claimedBg": "rgb(75, 153, 232, 0.3)",
        "available": "#26a66b",
        "liquidated": "#7C7D7E",
        "liquidatedBg": "rgb(75, 153, 232, 0.3)",
        "completed": "#7C7D7E",
        "completedBg": "rgb(75, 153, 232, 0.3)",
        "awaitingLiquidation": "#E0A225",
        "awaitingLiquidationBg": "#FCF6EA"
      },
      "barChartColors": ["#26A66B", "#1A73DE80"],
      "lineChartColors": ["#26A66B", "#D21A4D", "#2D569B"]
    }
  }
}
```

#### Site Metadata

Customize the site metadata for different languages, ensuring that the platform is accessible and understandable to a diverse audience:

```json
{
  "metadata": {
    "siteName": "FACTR Pools",
    "siteDescription": {
      "en": "Explore and participate in lending and borrowing pools with ease",
      "es": "Explore y participe en fondos de préstamos y depósitos con facilidad."
    }
  }
}
```

Carefully configuring these elements will ensure that the Defactor pool instances reflect your organization's branding and are appealing to your target audience. Make sure to validate all changes in a testing environment before applying them to live instances.
