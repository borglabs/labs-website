/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
//import ThemedImage from '@theme/ThemedImage';

import IconExternalLink from '../../theme/Icon/ExternalLink';

const renderApp = (app, i) => <AppBox app={app} key={`app-${app.name}-${i}`} />;

function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </El>
  );
}

const AppBox = ({app}) => {
  const imgSource = useBaseUrl(
    app.icon.startsWith('http') ? app.icon : 'img/khloe-ttrpg/' + app.icon
  );

  return (
    <div className="khloe-ttrpg">
      <div className="iconBox">
        <img src={imgSource} alt={app.name} className="iconBackground" />
        <img src={imgSource} alt={app.name} className="icon" />
      </div>
      <div className="khloe-ttrpgContent">
        <div>
          <h3>{app.name}</h3>
          {renderLinks(app)}
        </div>
        {app.infoLink && (
          <a
            className="articleButton"
            href={app.infoLink}
            target="_blank"
            title={app.infoTitle}>
            Learn more{' '}
            <IconExternalLink width={12} height={12} style={{opacity: 0.5}} />
          </a>
        )}
      </div>
    </div>
  );
};

const renderLinks = app => {
  if (!app.linkAppStore && !app.linkPlayStore && !app.linkDesktop) {
    return <p />;
  }

  const links = [
    app.linkAppStore ? (
      <a key="ios" href={app.linkAppStore} target="_blank">
        iOS
      </a>
    ) : null,
    app.linkPlayStore ? (
      <a key="android" href={app.linkPlayStore} target="_blank">
        Android
      </a>
    ) : null,
    app.linkDesktop ? (
      <a key="desktop" href={app.linkDesktop} target="_blank">
        Desktop
      </a>
    ) : null,
  ]
    .filter(Boolean)
    .flatMap((link, i) =>
      i === 0 ? [link] : [<span key={i}> • </span>, link]
    );

  return <p className="khloe-ttrpgLinks">{links}</p>;
};

const randomizeApps = apps =>
  [...apps].filter(app => !app.group).sort(() => 0.5 - Math.random());

const khloettrpg = () => {
  const {siteConfig} = useDocusaurusContext();

  const {meta, microsoft, shopify, wix, amazon, others} =
    siteConfig.customFields.users;
  const [pinnedRandomizedApps, setPinnedRandomizedApps] = useState([]);
  const [randomizedApps, setRandomizedApps] = useState([]);

  useEffect(() => {
    setRandomizedApps(randomizeApps(others.filter(app => !app.pinned)));
    setPinnedRandomizedApps(randomizeApps(others.filter(app => app.pinned)));
  }, []);

  return (
    <Layout
      title="khloe-ttrpg"
      description="Borg Labs is an independent game studio based in Nimbin, Byron Bay and the Gold Coast, Australia">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>Khloe TTRPG</h1>
        </div>
      </Section>
      <Section></Section>
    </Layout>
  );
};

export default khloettrpg;
