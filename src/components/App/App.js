import React, { Component } from 'react';
import styles from './App.css';
import Sidebar from '../containers/sidebar/Sidebar';
import MainContent from '../containers/main-content/MainContent';
import myLogo from '../../assets/myLogo.png';
import OnLoad from '../on-load img/OnLoad';

export default class App extends Component {
  render() {
    return (
      <>
        <OnLoad imageSrc={myLogo} />
        <div className={styles.app}>
          <Sidebar />
          <MainContent />
        </div>
      </>
    );
  }
}
