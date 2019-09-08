import React from 'react';
import styles from './OutsideLogoShell.css';
import githubLogo from '../../assets/githubLogo.png';
import twitterLogo from '../../assets/twitterLogo.png';
import linkedinLogo from '../../assets/linkedinLogo.png';
import posed from 'react-pose';

const OutsideLogo = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1.2,
    background: '#afeeee'
  },
  hover: {
    scale: 1.6,
    background: '#f5f5f5'
  },
  press: {
    scale: 1.4,
    background: '#000000'
  }
});

const TwitterLogo = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1.2,
    background: '#afeeee'
  },
  hover: {
    scale: 1.6,
    background: '#afeeee'
  },
  press: {
    scale: 1.4,
    background: '#afeeee'
  }
});

export default function OutsideLogoShell() {
  return (
    <div className={styles.shell}>
      <a href='https://www.linkedin.com/in/alex-ramirez-de-cruz/' rel='noopener noreferrer' target='_blank'>
        <OutsideLogo className={styles.outsideLogo} src={linkedinLogo} />
      </a>
      <a href='https://github.com/aramirezdecruz3148' rel='noopener noreferrer' target='_blank'>
        <OutsideLogo className={styles.outsideLogo} src={githubLogo} />
      </a>
      <a href='https://twitter.com/dev_de_cruz' rel='noopener noreferrer' target='_blank'>
        <TwitterLogo className={styles.twitterLogo} src={twitterLogo} />
      </a>
    </div>
  );
}
