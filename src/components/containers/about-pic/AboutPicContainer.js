import React from 'react';
import AboutMePics from '../../about-me-pics/AboutMePics';
import styles from './AboutPicContainer.css';
import duckHead from '../../../assets/duck-head.jpg';
import duckCrown from '../../../assets/duck-crown.jpg';
import duckGroup from '../../../assets/duck-group.jpg';

export default function AboutPicContainer() {
  return (
    <>
    <section className={styles.twoPhotos}>
      <AboutMePics imageSrc={duckCrown} />
      <AboutMePics imageSrc={duckGroup} />
      <AboutMePics imageSrc={duckHead} />
    </section>
    </>
  );
}
