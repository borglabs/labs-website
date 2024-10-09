/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import ThemeImage from '../components/ThemeImage';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Framework() {
  return (
    <Section>
      <SectionTitle
        title="Khloe of Thebes TTRPG."
        description={
          <>
            Heartbroken and hollow, Khloe embarks on a quest to defy death
            itself. She seeks out the mythical Golden Fleece, the only relic
            said to possess the power to restore life. Driven by her singular
            desire to reunite her family she succeeds in retrieving it. She
            resurrects her brother first—his body rises, his soul intact, a
            miracle. But when she turns the fleece toward her husband, something
            goes terribly wrong. The magic fails. His body returns to life, but
            his mind remains lost, consumed by a dark, unending void.{' '}
          </>
        }
      />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <ThemeImage
            lightSrc="/img/khloe/characters/satyr_warrior.png"
            darkSrc="/img/khloe/characters/satyr_warrior.png"
            className={styles.cardImage}
            alt="Satyr Warrior"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Monsters</h4>
            <p className={styles.cardDescription}>
              Battle and interact with intriguing monsters.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <ThemeImage
            lightSrc="/img/khloe/maps/snakes_den.jpg"
            darkSrc="/img/khloe/maps/snakes_den.jpg"
            className={styles.cardImage}
            alt="Snakes Den Map"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Maps</h4>
            <p className={styles.cardDescription}>Unique maps to explore.</p>
          </div>
        </div>
        <div className={styles.card}>
          <ThemeImage
            lightSrc="/img/khloe/items/caduceus.png"
            darkSrc="/img/khloe/items/caduceus.png"
            className={styles.cardImage}
            alt="Journal"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Loot</h4>
            <p className={styles.cardDescription}>
              Find skills, story, weapons, and more.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span>Alternates Released First</span>
          <h1 className={styles.title}>Coming Soon</h1>
          <a href="khloe-ttrpg" className={styles.primaryButton}>
            More
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Framework;
