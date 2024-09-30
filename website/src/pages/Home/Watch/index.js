/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Watch() {
  return (
    <Section>
      <SectionTitle
        title="Walkthroughs and Teasers"
        description={
          <>
            Watch walkthroughs by Seth the author himself, and see introductory
            content for upcoming releases on our{' '}
            <a href="https://www.youtube.com/@BorgLabsStudio">Youtube </a>
            channel.
          </>
        }
      />
      <div className={styles.videos}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/@BorgLabsStudio"
            title="Coming Soon"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>Coming Soon</h4>
            <p>00:00</p>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/@BorgLabsStudio"
            title="Coming Soon"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
          <div className={styles.videoInfo}>
            <h4>Coming Soon</h4>
            <p>0:00</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Watch;
