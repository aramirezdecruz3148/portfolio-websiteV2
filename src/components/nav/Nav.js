import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link to='/'><button className={styles.buttonLinks}>HOME</button></Link>
      <Link to='/about'><button className={styles.buttonLinks}>ABOUT</button></Link>
      <Link to='/portfolio'><button className={styles.buttonLinks}>PORTFOLIO</button></Link>
      <Link to='/contact'><button className={styles.buttonLinks}>CONTACT</button></Link>
    </div>
  );
}
