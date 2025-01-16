// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aircomponents',
  tagline: 'Lightweight Web Components',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://SisyphusZheng.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SisyphusZheng', // Usually your GitHub org/user name.
  projectName: 'Aircomponents-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      'zh-Hans': {
        direction: 'ltr',
        htmlLang: 'zh-Hans',
      },
    },
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
          editUrl:
            'https://github.com/aircomponents/UI',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aircomponents/UI',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: './static/img/favicon.ico', // your PWA icon
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(0, 0, 0)',
          },
        ],
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/air-components-board.png',
      navbar: {
        title: 'AirComponents',
        logo: {
          alt: 'AirComponents',
          src: 'img/logo-RColor.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/SisyphusZheng/aircomponents',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub 讨论',
                href: 'https://github.com/SisyphusZheng/aircomponents/discussions',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SisyphusZheng/aircomponents',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aircomponents.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
