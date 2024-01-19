import React from 'react';
import myLogo from '../../assets/newLogo.png';
import styles from './Logo.css';

export default function Logo() {
  return (
    <>
      <img className={styles.logo} src={myLogo} alt='my personal logo' />
    </>
  );
}
