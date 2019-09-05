import React from 'react';
import Nav from '../../nav/Nav';
import styles from './NavView.css';

export default function NavView() {
  return (
    <div className={styles.navView}>
      <Nav />
    </div>
  );
}
