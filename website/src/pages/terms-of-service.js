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
    app.icon.startsWith('http') ? app.icon : 'img/terms-of-service/' + app.icon
  );

  return (
    <div className="terms-of-service">
      <div className="iconBox">
        <img src={imgSource} alt={app.name} className="iconBackground" />
        <img src={imgSource} alt={app.name} className="icon" />
      </div>
      <div className="terms-of-serviceContent">
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

  return <p className="terms-of-serviceLinks">{links}</p>;
};

const randomizeApps = apps =>
  [...apps].filter(app => !app.group).sort(() => 0.5 - Math.random());

const termsofservice = () => {
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
      title="terms-of-service"
      description="Borg Labs is an independent game studio based in Nimbin, Byron Bay and the Gold Coast, Australia">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>
            Terms Of Service <span>BORG LABS</span>
          </h1>
          <h2>Terms</h2>
          <p>
            By accessing the website at http://borglabs.net, you are agreeing to
            be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>
          <h2>Use Licence</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Borg Labs’s website for
            personal, non-commercial transitory viewing only. This is the grant
            of a licence, not a transfer of title, and under this licence you
            may not: modify or copy the materials; use the materials for any
            commercial purpose, or for any public display (commercial or
            non-commercial); attempt to decompile or reverse engineer any
            software contained on Borg Labs’s website; remove any copyright or
            other proprietary notations from the materials; or transfer the
            materials to another person or “mirror” the materials on any other
            server. This licence shall automatically terminate if you violate
            any of these restrictions and may be terminated by Borg Labs at any
            time. Upon terminating your viewing of these materials or upon the
            termination of this licence, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>
          <h2>Disclaimer</h2>
          <p>
            The materials on Borg Labs’s website are provided on an ‘as is’
            basis. Borg Labs makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further, Borg
            Labs does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials
            on its website or otherwise relating to such materials or on any
            sites linked to this site.
          </p>
          <h2>Limitations</h2>
          <p>
            In no event shall Borg Labs or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Borg Labs’s website, even if Borg
            Labs or a Borg Labs authorised representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you. Accuracy of materials The
            materials appearing on Borg Labs’s website could include technical,
            typographical, or photographic errors. Borg Labs does not warrant
            that any of the materials on its website are accurate, complete or
            current. Borg Labs may make changes to the materials contained on
            its website at any time without notice. However Borg Labs does not
            make any commitment to update the materials.
          </p>
          <h2>Modifications</h2>
          <p>
            Borg Labs may revise these terms of service for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these terms of service.
          </p>
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of New South Wales and you irrevocably
            submit to the exclusive jurisdiction of the courts in that State or
            location.
          </p>
        </div>
      </Section>
      <Section></Section>
      <Section background="dark">
        <div className="sectionContainer footerContainer">
          <a
            className="formButton"
            href="https://forms.gle/6ZnaMPFmo9aBC5xw7"
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

export default termsofservice;
