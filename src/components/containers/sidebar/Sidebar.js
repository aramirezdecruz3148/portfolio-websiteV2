import React from 'react';
import styles from '../sidebar/Sidebar.css';
import Logo from '../../sidebar-components/Logo';
import OutsideLogoShell from '../../sidebar-components/OutsideLogoShell';
import NavView from '../nav-view/NavView';


export default function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Logo />
      <NavView />
      <OutsideLogoShell />
    </section>
  );
}
