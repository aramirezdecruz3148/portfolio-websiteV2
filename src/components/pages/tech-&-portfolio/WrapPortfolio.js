import React from 'react';
import styles from './WrapPortfolio.css';
import Wrapper from '../../portfolio/Wrapper';
import TechStackContainer from '../../containers/tech-stack/TechStackContainer';

export default function WrapPortfolio() {
  return (
    <div className={styles.wrapPortfolio}>
      <TechStackContainer />
      <Wrapper />
    </div>
  );
}
