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

Customize the visual theme of the application using the `branding.json` file. This file controls the color schemes and other UI elements.

#### Color Schemes

```json
{
  "color": {
    "primary": {
      "light": "#c8e2d7",
      "main": "#50af95",
      "dark": "#aaccc0"
    },
    "secondary": {
      "light": "#FFFAEE",
      "main": "#F6CA53",
      "dark": "#aaccc0"
    },
    "background": {
      "default": "#f9f9f9"
    },
    "charts": {
      "pieChartColors": {
        "paid": "#5A5BEB",
        "active": "#26A66B",
        "claimed": "#D21A4D",
        "available": "#5A5BEB",
        "liquidated": "#D21A4D",
        "awaitingLiquidation": "#E0A225"
      },
      "barChartColors": ["#5A5BEB", "#26A66B80"],
      "lineChartColors": ["#26A66B", "#5A5BEB", "#D21A4D"]
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
