import React, { Component } from 'react';
import styles from './App.css';
import Sidebar from '../containers/sidebar/Sidebar';
import MainContent from '../containers/main-content/MainContent';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}
