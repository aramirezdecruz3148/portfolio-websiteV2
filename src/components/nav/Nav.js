import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link to='/'><button>HOME</button></Link>
      <Link to='/about'><button>ABOUT</button></Link>
      <Link to='/portfolio'><button>PORTFOLIO</button></Link>
      <Link to='/contact'><button>CONTACT</button></Link>
    </div>
  );
}
