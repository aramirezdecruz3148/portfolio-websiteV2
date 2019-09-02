import React from 'react';
import styles from './Wrapper.css';
import Hp from './HP';
import Bot from './Bot';
import Moddo from './Moddo';

export default function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Hp />
      <Bot />
      <Moddo />
    </div>
  );
}
