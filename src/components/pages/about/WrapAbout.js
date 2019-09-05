import React from 'react';
import AboutTextContainer from '../../containers/about-text/AboutTextContainter';
import AboutPicContainer from '../../containers/about-pic/AboutPicContainer';
import styles from './WrapAbout.css';

export default function WrapAbout() {
  return (
    <div className={styles.wrapAbout}>
      <AboutTextContainer />
      <AboutPicContainer /> 
    </div>
  );
}
