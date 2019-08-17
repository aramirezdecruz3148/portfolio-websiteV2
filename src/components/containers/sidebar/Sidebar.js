import React from 'react';
import styles from '../sidebar/Sidebar.css';
import Logo from '../../sidebar-components/Logo';

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Logo />
    </nav>
  );
}
