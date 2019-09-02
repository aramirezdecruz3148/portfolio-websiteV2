import React from 'react';
import styles from './Wrapper.css';
import Hp from './HP';
import Bot from './Bot';
import Moddo from './Moddo';

export default function Wrapper() {
  return (
    <div className={styles.top}>
      <div className={styles.center}>
        <h2 className={styles.title}>PORTFOLIO</h2>
      </div>
      <div className={styles.wrapper}>
        <Hp />
        <Bot />
        <Moddo />
      </div>
    </div>
  );
}
