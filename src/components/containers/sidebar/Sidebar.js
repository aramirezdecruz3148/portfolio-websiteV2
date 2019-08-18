import React from 'react';
import styles from '../sidebar/Sidebar.css';
import Logo from '../../sidebar-components/Logo';
import OutsideLogo from '../../sidebar-components/outsideLogo';
import githubLogo from '../../../assets/twitterLogo.png'

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Logo />
      <OutsideLogo 
        linkTo='https://github.com/aramirezdecruz3148' 
        logoType={githubLogo} 
      />
    </nav>
  );
}
