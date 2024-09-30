/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Logo from '../Logo';

import styles from './styles.module.css';

function CallToAction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.container}>
        <Logo />
        <span>BORG LABS</span>
        <h1 className={styles.title}>Subscribe to the Newsletter</h1>
        <a href="subscribe" className={styles.primaryButton}>
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
