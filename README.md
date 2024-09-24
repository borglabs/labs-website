# Original [reactnative.dev](https://reactnative.dev/) &middot;

This repo contains the website configuration and documentation powering the Borg Labs Website

## Contents

- [Getting started](#%EF%B8%8F-getting-started)
- [Overview](#-overview)
- [Website configuration](#-website-configuration)
- [Contributing](#-contributing)
- [License](#-license)

## ✈️ Getting started

### Prerequisites

1. [Git](https://git-scm.com/downloads).
2. [Node](https://nodejs.org/en/download/) _(version 12 or greater)_.
3. [Yarn](https://yarnpkg.com/lang/en/docs/install/) _(version 1.5 or greater)_.
4. A fork of the repo _(for any contributions)_.
5. A clone of the `react-native-website` repo.

### Installation

1. `cd react-native-website` to go into the project root.
2. Run `yarn` to install the website's workspace dependencies.

### Running locally

1. `cd website` to go into the website portion of the project.
2. `yarn start` to start the development server _(powered by [Docusaurus](https://v2.docusaurus.io))_.
3. Open http://localhost:3000/ site in your favorite browser.

## 📖 Overview

**_To edit the internals of how the site is built,_** you may want to get familiarized with how the site is built. The React Native website is a static site generated using [Docusaurus](https://docusaurus.io/).

The website configuration can be found in the `website` directory. Visit the Docusaurus website to learn more about all the available configuration options.

### Directory Structure

The following is a high-level overview of relevant files and folders.

```
react-native-website/
├── docs/
│   ├── [BASE VERSIONED DOC FILES]
│   └── ...
└── website/
    ├── architecture/
    │   ├── [ARCHITECTURE DOC FILES]
    │   └── ...
    ├── blog/
    │   ├── [BLOG POSTS]
    │   └── ...
    ├── contributing/
    │   ├── [CONTRIBUTING DOC FILES]
    │   └── ...
    ├── core/
    │   ├── [CUSTOM COMPONENTS]
    │   └── ...
    ├── src/
    │   ├── css/
    │   │   ├── [CUSTOM STYLES]
    │   │   └── ...
    │   ├── pages/
    │   │   ├── [STATIC PAGES]
    │   │   └── ...
    │   └── theme/
    │   │   ├── [SWIZZLED COMPONENTS]
    │   │   └── ...
    ├── static/
    │   ├── blog/
    │   │   └── assets/
    │   ├── docs/
    │   │   └── assets/
    │   └── img/
    ├── versioned_docs/
    │   ├── [GENERATED VERSIONED DOC FILES]
    │   └── ...
    ├── versioned_sidebars/
    │   ├── [GENERATED VERSIONED SIDEBARS]
    │   └── ...
    ├── docusaurus.config.js
    ├── package.json
    ├── showcase.json
    ├── sidebars.json
    ├── sidebarsArchitecture.json
    ├── sidebarsContributing.json
    └── versions.json
```

### Versioned docs

Part of the React Native website is versioned to allow users to go back and see the Guides or API reference documentation for any given release. A new version of the website is generally generated whenever there is a new React Native release. When this happens, any changes made to the `docs` and `website/sidebars.json` files will be copied over to the corresponding location within `website/versioned_docs` and `website/versioned_sidebars`.

> **_Note:_** Do not edit the auto-generated files within `versioned_docs` or `versioned_sidebars` unless you are sure it is necessary. Edits made to older versions will not be propagated to newer versions of the versioned docs.

Docusaurus keeps track of the list of versions for the site in the `website/versions.json` file. The ordering of versions in this file should be in reverse chronological order.

#### 🔧 Website configuration

The main config file for the website can be found at `website/docusaurus.config.js`. This file tells [Docusaurus how to build the website](https://v2.docusaurus.io/docs/configuration). Edits to this file are rarely necessary.

The `core` subdirectory contains JavaScript and React components that are the core part of the website.

The `src/pages` subdirectory contains the React components that make up the non-documentation pages of the site, such as the homepage.

The `src/theme` subdirectory contains the swizzled React components from the Docusaurus theme.

The `showcase.json` file contains the list of users that are highlighted in the React Native showcase.

### 📄 License

React Native is [MIT licensed](./LICENSE).

React Native documentation is [Creative Commons licensed](./LICENSE-docs).
