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

          <p>
            This End User License Agreement ("EULA") governs your download,
            installation and use of, and access to, the game Icarus on Steam
            (the "Game") that is provided by Borg Labs, ("Borg Labs"). BY
            CLICKING THE “ACCEPT” BUTTON OR OTHERWISE ACKNOWLEDGING YOUR
            ACCEPTANCE OF THIS EULA OR BY USING THE GAME, YOU ACCEPT THIS EULA
            AND AGREE TO BE LEGALLY BOUND TO ITS TERMS. THIS EULA IS EFFECTIVE
            AS OF THE EARLIER OF YOUR ACCEPTING THESE TERMS AND YOUR USE OF THE
            GAME. IF YOU DO NOT AGREE TO THE TERMS OF THIS EULA, BORG LABS WILL
            NOT AND DOES NOT LICENSE THE GAME TO YOU AND YOU MUST NOT DOWNLOAD,
            INSTALL, OR OTHERWISE USE THE GAME. 1. Ownership of the Game. The
            Game is the valuable property of Borg Labs and our licensors and is
            protected by copyright and other intellectual property laws and
            treaties. Borg Labs, and our licensors, own all right, title and
            interest in and to the Game, including all copyright and other
            intellectual property rights therein. Borg Labs reserves all rights
            not expressly granted to you. 2. Scope of License to the Game. The
            Game is licensed, not sold, to you. Subject to the terms and
            conditions of this EULA, and the Steam Subscriber Agreement
            available at https://store.steampowered.com/subscriber_agreement/
            (the "Steam Terms"), Borg Labs grants you a limited, non-exclusive,
            non-transferable license to download, install and use the Game
            through the Steam platform on a computer, handheld or mobile device
            or otherwise (each, a "Device") that you own or control. Your use of
            the Game requires your acceptance of, and compliance with, the Steam
            Terms. 3. License Restrictions. The license granted to you in
            Section 2 does not allow you to do any of the following: (a) use the
            Game on any Device you do not own or control; (b) distribute, copy,
            license, rent, sell, publish, lease or otherwise transfer the Game
            (except as expressly permitted by this EULA or the Steam Terms) or
            any proprietary materials of Borg Labs to any third party; (c)
            reverse engineer, decompile, disassemble or attempt to discover any
            source code or trade secrets related to the Game or any proprietary
            materials of Borg Labs; (d) remove, alter, or obscure any copyright,
            trademark or other proprietary rights notice on or in the Game; (e)
            work around any technical limitations in the Game; or (f) use the
            Game for purposes for which it was not designed. If you breach any
            of these restrictions, you may be subject to prosecution and
            damages. 4. Modifications; Feedback. If you create modifications of
            the Game (“Mods”), you will only own the software code for those
            Mods. You will not own any Game IP used, rendered, depicted or
            otherwise incorporated into or exploited in those Mods. You will not
            attempt to monetize your Mods or otherwise distribute or exploit
            your Mods in exchange for any type of valuable consideration. You
            consent to Borg Labs contacting you about your Mods and Borg Labs’s
            potential use of such Mods, and you grant to Borg Labs an option to
            negotiate a worldwide, royalty-free commercial license, whether
            exclusive or nonexclusive, to your Mods (“Option”). Borg Labs may
            invoke the option at any time during the term of this EULA, and for
            twelve (12) months thereafter (“Option Period”). During the Option
            Period (if Borg Labs invokes the Option for an exclusive license),
            you will negotiate in good faith exclusively with Borg Labs
            regarding any license to your Mods. Borg Labs owns and will retain
            ownership of the Game and all Game code, characters, weapons,
            monsters, loot, planets, storylines, imagery, mythos, look and feel,
            concepts, game mechanics, environments and all other Game elements,
            together with all related intellectual property in or to the
            foregoing, on which your Mods may be built (“Game IP”). Borg Labs
            reserves all rights, interest and title to and in the Game and Game
            IP, including the right to independently develop code, features,
            functions or otherwise that are identical or substantially similar
            to your Mods. Borg Labs may be developing or in the future develop
            information internally or receive information from other parties
            that may be similar or identical to your Mods. Borg Labs will not be
            restricted or forbidden from engaging in such development or from
            receiving such information, nor will Borg Labs be restricted from
            improving or modifying the Game, any Game IP, any Borg Labs
            technology or from expanding its business scope. You hereby release
            Borg Labs from and forever waive any claims or causes of action you
            may now or in the future have related to Borg Labs’s activities
            described above. If you provide any ideas, suggestions or
            recommendations to Borg Labs regarding the Game (“Feedback”), Borg
            Labs is free to retain, use and incorporate such Feedback in Borg
            Labs’s products and/or services, including the Game, without payment
            of royalties or other consideration. This Section 4 does not
            constitute a license to any Game IP or any proprietary materials of
            Borg Labs. Except as explicitly stated in this EULA, nothing in this
            EULA confers or shall be construed as conferring any right or
            license to the other party’s intellectual property rights, whether
            by estoppel, implication or otherwise. 5. Support Services; Contact.
            Borg Labs is not obligated to provide any support or maintenance
            services for the Game at this time. If you have any questions
            regarding the Game, please contact us at contact@borglabs.net. 6. No
            Warranty. YOU ACKNOWLEDGE AND AGREE THAT: (A) THE GAME MAY CONTAIN
            BUGS, ERRORS, AND DEFECTS; (B) USE OF THE GAME IS AT YOUR SOLE RISK;
            AND (C) THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE,
            ACCURACY AND EFFORT IS WITH YOU. ACCORDINGLY, THE GAME IS PROVIDED
            "AS IS," "AS AVAILABLE," WITH ALL FAULTS, DEFECTS AND ERRORS AND
            WITHOUT WARRANTY OF ANY KIND. Borg Labs DISCLAIMS ALL WARRANTIES
            (EXPRESS AND IMPLIED AND ARISING BY LAW OR OTHERWISE) REGARDING THE
            GAME AND ITS SUITABILITY FOR YOUR INTENDED USE, INCLUDING WITHOUT
            LIMITATION ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, ACCURACY AND NON-INFRINGEMENT. Borg Labs WILL
            HAVE NO LIABILITY OF ANY KIND FOR THE USE OF, OR INABILITY TO USE,
            THE GAME OR ANY SERVICE THAT THE GAME IS INTENDED TO ACCESS OR FOR
            ANY LOSS OF DATA. Borg Labs does not REPRESENT OR warrant that the
            Game will be delivered free of any interruptions, delays, omissions
            or errors (“Faults”) or in a secure manner or that any Faults will
            be corrected. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY Borg
            Labs OR ITS AUTHORIZED REPRESENTATIVES WILL CREATE A WARRANTY. IN
            THE EVENT THAT THE GAME PROVES DEFECTIVE, YOU ASSUME THE ENTIRE COST
            OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. The laws of some
            states or jurisdictions do not allow the exclusion of implied
            warranties. To the extent that those laws apply, the exclusions set
            forth above may not apply to you. 7. Indemnification. To the fullest
            extent permitted by applicable law, you agree to defend, indemnify,
            and hold harmless Borg Labs, its affiliates, independent contractors
            and service providers, and each of their respective members,
            directors, offices, employees and agents ("Representatives") from
            and against all claims, damages, costs, liabilities and expenses
            (including but not limited to reasonable attorneys' fees) arising
            out of or related to your download or installation of and access to,
            or inability to download, install or access, the Game. In the event
            of any claim that the Game, or your possession or use thereof,
            infringes any intellectual property rights of a third party, you
            agree to contact Borg Labs. Borg Labs will, at its option, terminate
            the license granted herein, settle or defend the claim. 8.
            Limitation of Liability. To the fullest extent permitted by
            applicable law: (A) Borg Labs AND ITS REPRESENTATIVES WILL HAVE NO
            LIABILITY (WHETHER IN CONTRACT, WARRANTY, TORT, NEGLIGENCE OR
            OTHERWISE) FOR ANY DAMAGES SUSTAINED BY YOU ARISING FROM YOUR
            DOWNLOAD OR INSTALLATION OF, OR ACCESS TO, THE GAME, INCLUDING
            WITHOUT LIMITATION ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL
            OR PUNITIVE DAMAGES OR LOSS OF DATA, EVEN IF Borg Labs OR ITS
            REPRESENTATIVES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES; AND (B) YOU CAN RECOVER ONLY DIRECT DAMAGES FOR THE GREATER
            OF $10.00 AND THE AMOUNT YOU PAID FOR THE GAME. 9. No Export. You
            may not use or otherwise export or re-export the Game or any content
            contained therein, except as authorized by United States law and the
            laws of the jurisdiction in which the Game or any content was
            obtained. In particular, but without limitation, the Game and the
            content contained therein may not be exported or re-exported to (a)
            any U.S. embargoed countries, or (b) anyone on the U.S. Treasury
            Department's list of Specially Designated Nationals or the U.S.
            Department of Commerce Denied Person's List or Entity List. 10.
            Legal Compliance. By downloading and installing the Game, you
            represent and warrant that: (a) you are not located in a country
            that is subject to a U.S. Government embargo, or that has been
            designated by the U.S. Government as a "terrorist supporting"
            country; and (b) you are not listed on any U.S. Government list of
            prohibited or restricted parties. You will comply with all
            applicable laws, rules and regulations, including but not limited to
            U.S. export control laws. 11. Commercial Items. If acquired by any
            agency of the United States government, such agency acknowledges
            that: (a) the Game constitutes "commercial computer software" or
            "commercial computer software documentation" for purposes of 48
            C.F.R. §12.212 and 48 C.F.R. §227.7202, as applicable and (b) such
            agency's rights are limited to those specifically granted under this
            EULA. 12. Termination. Any use of the Game other than as
            specifically authorized under this EULA, or the Steam Terms, without
            the prior written permission of Borg Labs is strictly prohibited and
            will immediately terminate the license granted herein. Such
            unauthorized use may also violate applicable laws, including without
            limitation copyright and trademark laws and applicable
            communications regulations and statutes. You may terminate this EULA
            at any time by (a) ceasing use of the Game and (b) deleting all
            copies of the Game in your possession or control. Borg Labs reserves
            the right to terminate this EULA at any time, for any or no reason.
            In the event of termination, the license granted to you herein will
            automatically terminate and you must immediately cease all use of
            the Game and destroy all copies of the Game within your possession
            or control. 13. Survival. Sections 1, 3-5, 6-11, 12 (last sentence
            only) and 14-18 of this EULA will survive any termination of this
            EULA. 14. Updates and Modifications. The terms of this EULA will
            govern any updates or upgrades provided by Borg Labs, unless such
            update or upgrade is accompanied by a separate license, in which
            case the terms of that separate license will govern. Your next use
            of the Game may be governed by a different EULA and it is your
            responsibility to check this EULA periodically for changes. You use
            or continued use of the Game following the posting of any changes to
            this EULA or any other posted policies will constitute your
            acceptance of, and agreement to be bound by, the changed terms or
            policies. Borg Labs reserves the right to modify or discontinue,
            temporarily or permanently, the Game (or any features or portions
            thereof) without prior notice. Borg Labs also may impose limits on
            the use of or access to the Game, in any case and without notice or
            liability. 15. Dispute Resolution; Arbitration. If any dispute
            arises between the under this EULA that cannot be resolved by mutual
            agreement after correspondence and meetings between us, it will be
            finally settled under the JAMS Comprehensive Arbitration Rules and
            Procedures, by one or more arbitrators appointed in accordance with
            such Rules and Procedures. Arbitration will be held in King County,
            Washington, or at some other mutually agreeable location. 16.
            Governing Law and Venue. This EULA and your download and
            installation of, and access to, the Game will be governed by and
            interpreted in accordance with the laws of the State of Washington,
            without reference to its choice of law rules. Each party irrevocably
            consents to the jurisdiction and venue of the federal and state
            courts located in King County, Washington, with respect to any
            dispute between the parties that is not subject to arbitration under
            this EULA. 17. Conflicts. In the event of a conflict between the
            terms of this EULA and any other written or oral agreement related
            to the Game, including the Steam Terms as applied to the Game, the
            terms of this EULA will control. An omission or supplemental term
            will not be deemed a conflict. 18. Miscellaneous. If any provision
            of this EULA is found to be invalid or unenforceable, such provision
            will be deemed to be restated to reflect the original intention of
            the parties to the maximum extent possible and in accordance with
            applicable law, and the remaining provisions, terms, covenants, and
            restrictions of this EULA will remain in full force and effect. You
            may not assign this EULA or any of your rights under this EULA
            without the prior written consent of Borg Labs. Any attempted
            assignment without such consent will be void. Subject to the
            foregoing restriction, this EULA will be fully binding upon, inure
            to the benefit of, and be enforceable by Borg Labs and our
            respective successors and assigns. Any failure by Borg Labs to
            insist upon or enforce performance by you of any of the provisions
            of this EULA or to exercise any rights or remedies under this EULA
            or otherwise by law will not be construed as a waiver or
            relinquishment of any right to assert or rely upon the provision,
            right or remedy in that or any other instance; rather, the
            provision, right or remedy will be and will remain in full force and
            effect.
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
