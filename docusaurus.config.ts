import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '2004Scape Dev Documentation',
  tagline: 'Contributing to RuneScape 2 Emulation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://awilliamson10.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/2004Scape-dev/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'awilliamson10', // Usually your GitHub org/user name.
  projectName: '2004Scape-dev', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add markdown plugins and options here
  markdown: {
    mermaid: true,
  },
  
  // Specify Mermaid as a theme
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/awilliamson10/2004Scape-dev/tree/main/',
          // Set docs as the landing page
          routeBasePath: '/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/2004scape-social-card.jpg',
    // Sidebar configuration
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: '2004Scape Dev',
      logo: {
        alt: '2004Scape Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/2004Scape/Server',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/intro',
            },
            {
              label: 'Style Guide',
              to: '/style-guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://lostcity.rs/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/UZXdsTmuEs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/2004Scape/Server',
            },
          ],
        },
      ],
      copyright: `MIT License`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'bash', 'typescript'],
    },
    // Add Mermaid configuration
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
