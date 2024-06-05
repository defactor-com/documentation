// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Defactor Developer Docs',
  tagline: 'Technical Documentation for Defactor Developers',
  favicon: 'img/Defactor_Favicon-32x32.png',
  // Set the production url of your site here
  url: 'https://defactor.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'defactor-com', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/defactor-com/documentation/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/defactor-com/documentation/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '2WY12FOPQF',
        apiKey: '5b74b1e4542814c80531eb2ddee52d39',
        indexName: 'defactor',
        contextualSearch: false,
        externalUrlRegex: 'external\\\\.com|domain\\\\.com',
        searchParameters: {},
        searchPagePath: 'search',
      },
      image: 'img/social-media-preview.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Defactor logo',
          src: 'img/Defactor-Logo-Dark.svg',
          srcDark: 'img/Defactor-Logo-Light.svg',
        },
        items: [
          {
            href: '/docs/introduction/',
            label: 'Introduction',
            position: 'left',
          },
          {
            href: '/docs/category/assets',
            label: 'Assets',
            position: 'left',
          },
          {
            href: '/docs/category/pools',
            label: 'Pools',
            position: 'left',
          },
          {
            href: '/docs/category/engage',
            label: 'Engage',
            position: 'left',
          },
          {
            href: '/docs/blockchain-and-web3',
            label: 'Blockchain and Web3',
            position: 'left',
          },
          {
            href: '/docs/category/real-world-use-cases',
            label: 'RW Use Cases',
            position: 'left',
          },
          {
            href: '/docs/category/resources',
            label: 'Resources',
            position: 'left',
          },
          {
            href: 'https://github.com/defactor-com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
