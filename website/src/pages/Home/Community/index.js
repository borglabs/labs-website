/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Community() {
  const {siteConfig} = useDocusaurusContext();
  const apps = Object.values(siteConfig.customFields.users)
    .flat()
    .filter(app => app.pinned);

  return (
    <Section>
      <SectionTitle title="Borg Labs supported. Community driven." />
      <div className={styles.featureContainer}>
        <div>
          <p>We love feedback from the gamers that play our games.</p>
          <p>
            To battle test our games we release early testable versions on{' '}
            <span>
              <a href="https://steam.com/">Steam Games.</a>
            </span>
          </p>
          <p>
            If you'd like to join our elite team of Alpha and Beta testers,
            message us via the{' '}
            <span>
              <a href="https://steam.com/">Steam Games Community.</a>
            </span>
          </p>
        </div>
        <div>
          <p>
            Meet and chat with other Icarus and Khloe gamers in the{' '}
            <span>
              <a href="https://discord.gg/ZDg8U2Mz">Discord Server.</a>
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Community;
