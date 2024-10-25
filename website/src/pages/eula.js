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
    app.icon.startsWith('http') ? app.icon : 'img/eula/' + app.icon
  );

  return (
    <div className="eula">
      <div className="iconBox">
        <img src={imgSource} alt={app.name} className="iconBackground" />
        <img src={imgSource} alt={app.name} className="icon" />
      </div>
      <div className="eulaContent">
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

  return <p className="eulaLinks">{links}</p>;
};

const randomizeApps = apps =>
  [...apps].filter(app => !app.group).sort(() => 0.5 - Math.random());

const eula = () => {
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
      title="eula"
      description="Borg Labs is an independent game studio based in Nimbin, Byron Bay and the Gold Coast, Australia">
      <Section background="dark">
        <div className="sectionContainer headerContainer">
          <h1>
            EULA(end user licence agreement) <span>BORG LABS</span>
          </h1>

          <h1>End User License Agreement (EULA)</h1>

          <p>
            This End User License Agreement ("EULA") governs your download,
            installation, use of, and access to the game Icarus on Steam (the
            "Game") that is provided by Borg Labs, ("Borg Labs"). BY CLICKING
            THE "ACCEPT" BUTTON OR OTHERWISE ACKNOWLEDGING YOUR ACCEPTANCE OF
            THIS EULA OR BY USING THE GAME, YOU ACCEPT THIS EULA AND AGREE TO BE
            LEGALLY BOUND TO ITS TERMS. THIS EULA IS EFFECTIVE AS OF THE EARLIER
            OF YOUR ACCEPTING THESE TERMS AND YOUR USE OF THE GAME. IF YOU DO
            NOT AGREE TO THE TERMS OF THIS EULA, BORG LABS WILL NOT AND DOES NOT
            LICENSE THE GAME TO YOU AND YOU MUST NOT DOWNLOAD, INSTALL, OR
            OTHERWISE USE THE GAME.
          </p>

          <h2>1. Ownership of the Game</h2>
          <p>
            The Game is the valuable property of Borg Labs and our licensors and
            is protected by copyright and other intellectual property laws and
            treaties. Borg Labs, and our licensors, own all right, title, and
            interest in and to the Game, including all copyright and other
            intellectual property rights therein. Borg Labs reserves all rights
            not expressly granted to you.
          </p>

          <h2>2. Scope of License to the Game</h2>
          <p>
            The Game is licensed, not sold, to you. Subject to the terms and
            conditions of this EULA, and the Steam Subscriber Agreement
            available at{' '}
            <a href="https://store.steampowered.com/subscriber_agreement/">
              https://store.steampowered.com/subscriber_agreement/
            </a>{' '}
            (the "Steam Terms"), Borg Labs grants you a limited, non-exclusive,
            non-transferable license to download, install and use the Game
            through the Steam platform on a computer, handheld, or mobile device
            or otherwise (each, a "Device") that you own or control. Your use of
            the Game requires your acceptance of, and compliance with, the Steam
            Terms.
          </p>

          <h2>3. License Restrictions</h2>
          <p>
            The license granted to you in Section 2 does not allow you to do any
            of the following:
          </p>
          <ol>
            <li>Use the Game on any Device you do not own or control.</li>
            <li>
              Distribute, copy, license, rent, sell, publish, lease or otherwise
              transfer the Game (except as expressly permitted by this EULA or
              the Steam Terms) or any proprietary materials of Borg Labs to any
              third party.
            </li>
            <li>
              Reverse engineer, decompile, disassemble or attempt to discover
              any source code or trade secrets related to the Game or any
              proprietary materials of Borg Labs.
            </li>
            <li>
              Remove, alter, or obscure any copyright, trademark, or other
              proprietary rights notice on or in the Game.
            </li>
            <li>Work around any technical limitations in the Game.</li>
            <li>Use the Game for purposes for which it was not designed.</li>
          </ol>

          <h2>4. Modifications; Feedback</h2>
          <p>
            If you create modifications of the Game ("Mods"), you will only own
            the software code for those Mods. You will not own any Game IP used,
            rendered, depicted or otherwise incorporated into or exploited in
            those Mods. You will not attempt to monetize your Mods or otherwise
            distribute or exploit your Mods in exchange for any type of valuable
            consideration.
          </p>

          <p>
            Borg Labs may contact you about your Mods and may negotiate a
            commercial license for your Mods. Borg Labs reserves all rights to
            the Game and Game IP.
          </p>

          <h2>5. Support Services; Contact</h2>
          <p>
            Borg Labs is not obligated to provide any support or maintenance
            services for the Game at this time. If you have any questions
            regarding the Game, please contact us at{' '}
            <a href="mailto:contact@borglabs.net">contact@borglabs.net</a>.
          </p>

          <h2>6. No Warranty</h2>
          <p>
            YOU ACKNOWLEDGE AND AGREE THAT THE GAME IS PROVIDED "AS IS," "AS
            AVAILABLE," WITH ALL FAULTS, DEFECTS, AND ERRORS AND WITHOUT
            WARRANTY OF ANY KIND. BORG LABS DISCLAIMS ALL WARRANTIES, INCLUDING
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, ACCURACY, AND NON-INFRINGEMENT.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Borg Labs, its
            affiliates, and other related parties from all claims, damages, and
            expenses arising from your use of the Game.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            Borg Labs and its representatives will have no liability for any
            damages arising from your use of the Game, including indirect,
            incidental, or punitive damages.
          </p>

          <h2>9. No Export</h2>
          <p>
            You may not export or re-export the Game or any content except as
            authorized by U.S. law and the laws of the jurisdiction in which the
            Game was obtained.
          </p>

          <h2>10. Legal Compliance</h2>
          <p>
            You represent and warrant that you are not located in a country
            subject to a U.S. Government embargo and will comply with all
            applicable laws.
          </p>

          <h2>11. Commercial Items</h2>
          <p>
            If acquired by a U.S. Government agency, the Game constitutes
            "commercial computer software" with rights limited to those granted
            under this EULA.
          </p>

          <h2>12. Termination</h2>
          <p>
            Any unauthorized use of the Game will result in immediate
            termination of the license granted. You may terminate this EULA at
            any time by ceasing use of the Game and deleting all copies.
          </p>

          <h2>13. Survival</h2>
          <p>
            Sections 1, 3-5, 6-11, 12 (last sentence only), and 14-18 will
            survive any termination of this EULA.
          </p>

          <h2>14. Updates and Modifications</h2>
          <p>
            Borg Labs reserves the right to modify or discontinue the Game and
            to impose limits on use without notice or liability.
          </p>

          <h2>15. Dispute Resolution; Arbitration</h2>
          <p>
            Any dispute that cannot be resolved by mutual agreement will be
            settled by arbitration under the JAMS Comprehensive Arbitration
            Rules and Procedures in King County, Washington.
          </p>

          <h2>16. Governing Law and Venue</h2>
          <p>
            This EULA is governed by the laws of the coutry of Australia. Each
            party consents to the jurisdiction of the courts in Australia.
          </p>

          <h2>17. Conflicts</h2>
          <p>
            In the event of a conflict between this EULA and any other agreement
            related to the Game, the terms of this EULA will control.
          </p>

          <h2>18. Miscellaneous</h2>
          <p>
            If any provision of this EULA is found to be invalid, the remaining
            provisions will remain in full force. You may not assign this EULA
            without Borg Labs's consent. Borg Labs's failure to enforce any
            rights does not constitute a waiver.
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

export default eula;
