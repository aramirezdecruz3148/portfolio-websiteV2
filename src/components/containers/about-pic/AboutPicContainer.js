import React from 'react';
import AboutMePics from '../../about-me-pics/AboutMePics';
import styles from './AboutPicContainer.css';
import duckHead from '../../../assets/duck-head.jpg';
import duckCrown from '../../../assets/duck-crown.jpg';
import duckGroup from '../../../assets/duck-group.jpg';

export default function AboutPicContainer() {
  return (
    <>
    <section className={styles.singlePhoto}>
      <h4 className={styles.caption}>CURIOUS</h4>
      <AboutMePics imageSrc={duckCrown} caption='collaborative' />
      <h4 className={styles.caption}>CREATIVE</h4>
    </section>
    <section className={styles.twoPhotos}>
      <AboutMePics imageSrc={duckHead} caption='creative' />
      <h4 className={styles.caption}>COLLABORATIVE</h4>
      <AboutMePics imageSrc={duckGroup} caption='curious' />
    </section>
    </>
  );
}
