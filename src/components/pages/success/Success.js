import React from 'react';
import MainWrapper from '../../success elements/MainWrapper';
import styles from './Success.css';
import Sidebar from '../../containers/sidebar/Sidebar';

export default function Success() {
  return (
    <div className={styles.success}>
      <Sidebar />
      <MainWrapper />
    </div>
  );
}
