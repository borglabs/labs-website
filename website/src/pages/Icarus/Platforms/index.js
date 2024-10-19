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

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <SectionTitle
        title="Icarus"
        description="Early Access coming soon on Steam"
      />
      <div className={styles.platformsContainer}>
        <div className={styles.featureContainer}>
          <div className={styles.deviceContainer}>
            <ThemeImage
              lightSrc="/img/icarus/1.gif"
              darkSrc="/img/icarus/1.gif"
              className={styles.devices}
              alt="Android device and iOS device"
            />
          </div>
          <div className={styles.deviceContainer}>
            <ThemeImage
              lightSrc="/img/icarus/2.gif"
              darkSrc="/img/icarus/2.gif"
              className={styles.devices}
              alt="Android device and iOS device"
            />
          </div>
        </div>
      </div>
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          <strong>
            We are currently working on and adding new content to the
            website...apologies for any inconvenience.
          </strong>{' '}
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
