import React from 'react';
import styles from './Wrapper.css';
import Hp from './HP';
import Bot from './Bot';

export default function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Hp />
      <Bot />
    </div>
  );
}
