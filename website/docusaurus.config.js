/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const users = require('./showcase.json');
const versions = require('./versions.json');

const lastVersion = versions[0];
const copyright = `Copyright © ${new Date().getFullYear()} BORGLABS, BORGAUDIO Australia.`;

const commonDocsOptions = {
  breadcrumbs: false,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl: 'https://github.com/borglabs/',
  remarkPlugins: [require('@react-native-website/remark-snackplayer')],
};

const isDeployPreview = process.env.PREVIEW_DEPLOY === 'true';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BORG LABS',
  tagline: 'Reactive Gameplay',
  organizationName: 'borglabs',
  projectName: 'labs-website',
  url: 'https://borglabs.net',
  baseUrl: '/',
  clientModules: [
    require.resolve('./modules/snackPlayerInitializer.js'),
    require.resolve('./modules/jumpToFragment.js'),
  ],
  trailingSlash: false, // because trailing slashes can break some existing relative links
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    //{
    //  src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8ryO5qrZo8Exadq9qmt1wtm4_2FdZGEAKHDFEt_2BBlwwM4.js',
    //  defer: true,
    //},
    {src: 'https://snack.expo.dev/embed.js', defer: true},
    {src: 'https://platform.twitter.com/widgets.js', async: true},
  ],
  favicon: 'img/favicon.ico',
  titleDelimiter: '·',
  customFields: {
    users,
    facebookAppId: '000000000000',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw', //'warn',
  webpack: {
    jsLoader: isServer => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node16' : 'es2020',
        jsx: 'automatic',
      },
    }),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editCurrentVersion: true,
          onlyIncludeVersions: isDeployPreview
            ? ['current', ...versions.slice(0, 2)]
            : undefined,
          versions: {
            [lastVersion]: {
              badge: false, // Do not show version badge for last RN version
            },
          },
          ...commonDocsOptions,
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright,
          },
          onInlineAuthors: 'ignore',
          // Ignore for now due to old posts
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
        // TODO: GA is deprecated, remove once we're sure data is streaming in GA4 via gtag.
        googleAnalytics: {
          trackingID: '0000000',
        },
        gtag: {
          trackingID: '00000000',
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',

    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'contributing',
        path: 'contributing',
        routeBasePath: '/contributing',
        sidebarPath: require.resolve('./sidebarsContributing.json'),
        ...commonDocsOptions,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'khloettrpg',
        path: 'khloettrpg',
        routeBasePath: '/khloettrpg',
        sidebarPath: require.resolve('./sidebarsKhloeTTRPG.json'),
        ...commonDocsOptions,
      }),
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#ff1493',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'oceancleanup-donate',
        content:
          'Proud supporters of <a target="_blank" rel="noopener noreferrer" href="https://theoceancleanup.com/donate/">The Ocean Cleanup. Please Donate!.</a>',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: false,
      },
      prism: {
        defaultLanguage: 'jsx',
        theme: require('./core/PrismTheme'),
        additionalLanguages: [
          'diff',
          'bash',
          'json',
          'java',
          'kotlin',
          'objectivec',
          'swift',
          'groovy',
          'ruby',
          'flow',
        ],
      },
      navbar: {
        title: 'BORG LABS',
        logo: {
          //src: 'img/header_logo.svg',
          src: 'img/icarus/skeleton-attack.gif',
          alt: 'Borg Labs',
        },
        style: 'dark',
        items: [
          /* {
            //type: 'doc',
            //docId: 'overview',
            to: '/icarus',
            label: 'Icarus',
            position: 'right',
            //docsPluginId: 'contributing',
          },
          {
            //type: 'doc',
            to: '/khloe-ttrpg',
            //docId: 'overview',
            label: 'Khloe TTRGP',
            position: 'right',
            //docsPlugId: 'community',
          }, */
          {
            label: 'Wikis',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Icarus',
                type: 'doc',
                docId: 'icarus-overview',
              },
              {
                type: 'doc',
                docId: 'overview',
                label: 'Khloe of Thebes',
                docsPluginId: 'khloettrpg',
              },
              {
                type: 'doc',
                docId: 'overview',
                label: 'Contributing',
                type: 'doc',
                docsPluginId: 'contributing',
              },
            ],
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            to: '/about',
            label: 'About',
            position: 'right',
          },
          //{
          //href: 'https://github.com/borglabs',
          //'aria-label': 'GitHub repository',
          //position: 'right',
          //className: 'navbar-facebook-link',
          //},
        ],
      },
      image: 'img/logo-og.png',
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Icarus',
                to: 'icarus',
              },
              {
                label: 'Khloe',
                to: 'khloe-ttrpg',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'About',
                to: 'about',
              },
              {
                label: 'Contributing',
                to: 'contributing/overview',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Steam Page',
                href: 'https://steamcommunity.com/id/borglabs/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ZDg8U2Mz',
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/borglabsstudio',
              },
              {
                label: 'Instagram',
                to: 'https://www.instagram.com/borglabsstudio',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/borglabs',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@BorgLabsStudio',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@borglabsstudios',
              },
              {
                label: 'X',
                href: 'https://x.com/BorgLabsStudio',
              },
            ],
          },
          {
            title: 'Explore More',
            items: [
              {
                label: 'Privacy Policy',
                href: 'privacy-policy',
              },
              {
                label: 'Terms of Service',
                href: 'terms-of-service',
              },
              {
                label: 'EULA',
                href: 'eula',
              },
            ],
          },
        ],
        logo: {
          alt: 'Logo',
          src: 'img/icarus/skeleton-attack.gif',
          href: 'https://borglabs.net/',
        },
        copyright,
      },
      metadata: [
        {
          property: 'og:image',
          content: 'https://reactnative.dev/img/logo-og.png',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {
          name: 'twitter:image',
          content: 'https://reactnative.dev/img/logo-og.png',
        },
        {name: 'twitter:site', content: '@BorgLabsStudio'},
      ],
    }),
};
