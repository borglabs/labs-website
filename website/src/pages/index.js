/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';

import Layout from '@theme/Layout';

import Home from './Home';

const Index = () => {
  return (
    <Layout
      description="BORG LABS · Independent Game Studio"
      wrapperClassName="homepage">
      <Head>
        <title>BORG LABS · Independent Game Studio</title>
        <meta
          property="og:title"
          content="BORG LABS · Independent Game Studio"
        />
        <meta
          property="twitter:title"
          content="BORG LABS · Independent Game Studio"
        />
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;
