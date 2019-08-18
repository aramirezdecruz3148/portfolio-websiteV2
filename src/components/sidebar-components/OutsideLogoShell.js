import React from 'react';
import OutsideLogo from './outsideLogo';
import styles from './OutsideLogoShell.css';
import githubLogo from '../../assets/githubLogo.png';
import twitterLogo from '../../assets/twitterLogo.png';
import linkedinLogo from '../../assets/linkedinLogo.png';

export default function OutsideLogoShell() {
  return (
    <section className={styles.shell}>
      <OutsideLogo 
        linkTo='https://www.linkedin.com/in/alex-ramirez-de-cruz/' 
        logoType={linkedinLogo} 
      />
      <OutsideLogo 
        linkTo='https://github.com/aramirezdecruz3148' 
        logoType={githubLogo} 
      />
      <OutsideLogo 
        linkTo='https://twitter.com/dev_de_cruz' 
        logoType={twitterLogo} 
      />
    </section>
  );
}
