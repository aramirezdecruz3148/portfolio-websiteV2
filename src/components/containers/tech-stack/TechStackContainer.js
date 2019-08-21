import React from 'react';
import styles from './TechStackContainer.css';
import TechStack from '../../tech-stack/TechStack';

export default function TechStackContainer() {
  return (
    <div>
      <h2 className={styles.title}>TECH STACK</h2>
      <TechStack />
    </div>
  );
}
