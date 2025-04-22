---
title: Assets New Project Onboarding
---

We support whitelabeling for assets. The following guide provides a list of resources needed to launch your own Assets with Defactor smart contracts.

## General information about website

- Site name
- Site description
- App logo in svg format
- facIcon in .fav format
- socialMediaPreviewImag (This image will be displayed when sending url of your page)
- Pools, Enage url's if they are configured

## UI theme

Please provide a color scheme for your ui. We use Material UI palette to customize default colors. You can read more about it here: https://mui.com/material-ui/customization/palette/

Example of provided theme colors in json format:

```json
{
  "primary": { "main": "#5A5BEB", "light": "#ACADF5", "dark": "#4F4FC3" },
  "secondary": { "main": "#E0A225", "light": "#EFD192", "dark": "#BA8825" },
  "error": { "main": "#D21A4D", "light": "#E98CA6", "dark": "#AF1B45" },
  "success": { "main": "#26A66B", "light": "#92D3B5", "dark": "#258B5D" },
  "warning": { "main": "#E0A225", "light": "#EFD192", "dark": "#BA8825" },
  "grey": {
    "300": "#EDF0F7",
    "600": "#797a7a",
    "700": "#606060",
    "800": "#353535"
  },
  "text": { "primary": "#211F23", "secondary": "#7C7D7E" },
  "background": { "default": "#F8F9FC" }
}
```

## Wallet connect (now reown)

provide a wallet connect project id. You can obtain it on https://cloud.reown.com

## Supported networks

- chainId
- rpcUrl
- name
- currency
- baseTokenAddress
- collateralAddress

## Google analytics

provide a Google tag ID for Google Analytics, Google Ads. You can read instructions on how to get it here:
https://support.google.com/analytics/answer/9539598

## Intercom app ID

We use intercom for our ai assistant chatbot: https://www.intercom.com/.
If you wish to have an ai assistant please provide an intercom app id.

## Mailing

We use nodemailer to send out verification emails

```
MAIL_HOST=gmail
MAIL_USERNAME=example@yourdomain.com
MAIL_PASSWORD=password
```
