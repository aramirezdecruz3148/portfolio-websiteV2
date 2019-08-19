import React, { Component } from 'react';
import styles from './MainContent.css';
import AboutTextContainer from '../about-text/AboutTextContainter';

export default class MainContent extends Component {
  render() {
    return (
      <div className={styles.main}>
        <AboutTextContainer />
      </div>
    );
  }
}
