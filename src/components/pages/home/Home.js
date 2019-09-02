import React from 'react';
import OnLoad from '../../on-load img/OnLoad';
import Sidebar from '../../containers/sidebar/Sidebar';
import MainContent from '../../containers/main-content/MainContent';
import styles from './Home.css';
import myLogo from '../../../assets/myLogo.png';

export default function Home() {
  return (
    <>
      <OnLoad imageSrc={myLogo} />
        <div className={styles.home}>
          <Sidebar />
          <MainContent />
        </div>
    </>
  );
}
