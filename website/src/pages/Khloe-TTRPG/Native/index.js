/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import styles from './styles.module.css';

function Native() {
  return (
    <Section>
      <SectionTitle
        title="Support us on Patreon"
        description={
          <>
            Get in on the action early, in-game loot rewards for finding the
            classiest game bugs. Plus submit early development ideas. Support us
            on Patreon.<br></br>
            <a
              href="https://www.patreon.com/borglabs"
              className={styles.primaryButton}>
              Borg Labs Patreon Homepage
            </a>
          </>
        }
      />
    </Section>
  );
}

export default Native;
