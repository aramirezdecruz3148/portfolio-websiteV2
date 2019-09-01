import React from 'react';
import styles from './Wrapper.css';
import Hp from './HP';

export default function Wrapper() {
  return (
    <div className={styles.container}>
      <Hp />
    </div>
  );
}
