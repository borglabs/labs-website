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
import ThemedImage from '@theme/ThemedImage';

import IconExternalLink from '../theme/Icon/ExternalLink';

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
    app.icon.startsWith('http') ? app.icon : 'img/privacy-policy/' + app.icon
  );

  return (
    <div className="privacy-policy">
      <div className="iconBox">
        <img src={imgSource} alt={app.name} className="iconBackground" />
        <img src={imgSource} alt={app.name} className="icon" />
      </div>
      <div className="privacy-policyContent">
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

  return <p className="privacy-policyLinks">{links}</p>;
};

const randomizeApps = apps =>
  [...apps].filter(app => !app.group).sort(() => 0.5 - Math.random());

const privacypolicy = () => {
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
      title="privacy-policy"
      description="Borg Labs is an independent game studio based in Nimbin, Byron Bay and the Gold Coast, Australia">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>
            Privacy Policy <span>BORG LABS</span>
          </h1>
          <p>
            Borg Labs is an independent game studio based in the cultural
            village of Nimbin and the vibrant Gold Coast,
            <br /> on the East Coast of Australia.
          </p>
          <p>
            With a small team of talented creatives, we have the ability to be
            agile in our projects, delivering original and engaging content.
            Projects range from:
            <br />
            • Tabletop Role playing games and stories
            <br />
            • Fun 3D side scrolling dungeon crawling RPG video games.
            <br />
            • Immersive 3D RPG worlds.
            <br />
          </p>
          <h1>The Team</h1>
          <p>
            • <b>Danial Borg</b> | Project Manager/Game Designer
            <br />• <b>Seth Borg</b> | Creative Director
            <br />• <b>Lewis Smart</b> | Artist/Graphics
            <br />• <b>Holly Tutin</b> | Copywriting
            <br />• <b>Satoshi Nakamoto</b> | Game Dev
            <br />
          </p>
        </div>
      </Section>
      <Section></Section>
      <Section background="dark">
        <div className="sectionContainer footerContainer">
          <a
            className="formButton"
            href="https://forms.gle/BdNf"
            target="_blank">
            Subscribe to our newsletter by filling out this form
          </a>
          <p>
            Mailing list is maintained by us. See our Privacy Policy
            <a href="https://borglabs.net/privacy-policy"></a>.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default privacypolicy;
