import React from 'react';
import AboutText from '../../about-me-text/AboutText';
import styles from './AboutTextContainer.css';
import Paper from '@material-ui/core/Paper';

export default function AboutTextContainer() {
  return (
    <Paper square={true} className={styles.aboutContainer}>
      <AboutText />
    </Paper>
  );
}
