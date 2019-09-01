import React, { Component } from 'react';
import styles from './MainContent.css';
import AboutTextContainer from '../about-text/AboutTextContainter';
import AboutPicContainer from '../about-pic/AboutPicContainer';
import TechStackContainer from '../tech-stack/TechStackContainer';
import PortfolioCards from '../../portfolio/PortfolioCards';

export default class MainContent extends Component {
  render() {
    return (
      <div className={styles.main}>
        <AboutTextContainer />
        <AboutPicContainer />
        <TechStackContainer />
        <PortfolioCards />
      </div>
    );
  }
}
