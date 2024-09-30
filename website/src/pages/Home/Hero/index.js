/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import GitHubButton from 'react-github-btn';

import Logo from '../Logo';

import GridBackground from './GridBackground';
import FloorBackground from './FloorBackground';
//import Devices from './Devices';
import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.socialLinks}>
        <a
          className="twitter-follow-button"
          href={`https://x.com/BorgLabsStudio`}
          data-show-count="false"
          data-size="large">
          Follow @BorgLabsStudio
        </a>
        <GitHubButton
          href="https://github.com/facebook/react-native"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star facebook/react-native on GitHub">
          Star
        </GitHubButton>
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.gridBackground}>
          <GridBackground />
        </div>

        <div className={styles.floorBackground}>
          <FloorBackground />
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>BORG LABS</h1>
        <h2 className={styles.subtitle}>Independent Game Studio.</h2>
        <div className={styles.buttonContainer}>
          <a href="icarus" className={styles.secondaryButton}>
            Icarus
          </a>
          <a href="khloe" className={styles.secondaryButton}>
            Khloe TTRPG
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
