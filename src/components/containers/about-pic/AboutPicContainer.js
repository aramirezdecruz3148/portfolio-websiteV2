import React from 'react';
import AboutMePics from '../../about-me-pics/AboutMePics';
import styles from './AboutPicContainer.css';
import placeholder from '../../../assets/cat.jpg';

export default function AboutPicContainer() {
  return (
    <>
    <section className={styles.singlePhoto}>
      <h4 className={styles.caption}>COLLABORATIVE</h4>
      <AboutMePics imageSrc={placeholder} caption='collaborative' />
      <h4 className={styles.caption}>CREATIVE</h4>
    </section>
    <section className={styles.twoPhotos}>
      <AboutMePics imageSrc={placeholder} caption='creative' />
      <h4 className={styles.caption}>CURIOUS</h4>
      <AboutMePics imageSrc={placeholder} caption='curious' />
    </section>
    </>
  );
}
