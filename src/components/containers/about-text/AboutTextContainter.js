import React from 'react';
import AboutText from '../../about-me-text/AboutText';
import styles from './AboutTextContainer.css';

export default function AboutTextContainer() {
  return (
    <section className={styles.aboutContainer}>
      <AboutText />
    </section>
  );
}
