import React from 'react';
import AboutMePics from '../../about-me-pics/AboutMePics';
import styles from './AboutPicContainer.css';
import placeholder from '../../../assets/Alex.jpg';

export default function AboutPicContainer() {
  return (
    <>
    <section className={styles.singlePhoto}>
      <AboutMePics imageSrc={placeholder} caption='collaborative' />
    </section>
    <section className={styles.twoPhotos}>
      <AboutMePics imageSrc={placeholder} caption='creative' />
      <AboutMePics imageSrc={placeholder} caption='curious' />
    </section>
    </>
  );
}
