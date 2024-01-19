import React from 'react';
import Sidebar from '../../containers/sidebar/Sidebar';
import MainContent from '../../containers/main-content/MainContent';
import styles from './Home.css';

export default function Home() {
  return (
        <div className={styles.home}>
          <Sidebar />
          <MainContent />
        </div>
  );
}
