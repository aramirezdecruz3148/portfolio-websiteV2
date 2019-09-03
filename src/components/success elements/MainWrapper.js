import React from 'react';
import styles from './MainWrapper.css';
import SuccessMessage from './SuccessMessage';

export default function MainWrapper() {
  return (
    <div className={styles.main}>
      <SuccessMessage />
    </div>
  );
}
