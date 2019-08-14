import React from 'react';
import NameText from '../NameText/NameText';
import Logo from '../Logo/Logo';
import Styles from './App.css';

export default function App() {
  return (
    <div className={Styles.Background}>
      <Logo />
      <NameText />
    </div>
  );
}
