import React from 'react';
import AboutText from '../../about-me-text/AboutText';
import AboutTalks from '../../about-me-talks/AboutTalks';
import pdxwitLogo from '../../../assets/pdxwitLogo.png';
import donutjsLogo from '../../../assets/donutjsLogo.png';
import styles from './AboutTextContainer.css';

export default function AboutTextContainer() {
  return (
    <div className={styles.aboutContainer}>
      <AboutText />
      <AboutTalks firstImgSrc={donutjsLogo} secondImgSrc={pdxwitLogo} /> 
    </div>
  );
}
