import React, { useState } from 'react';

import PropTypes from 'prop-types';
import styles from './AboutTalks.css';

function AboutTalks({ firstImgSrc, secondImgSrc }) {
  const [firstTalk, setFirstTalk] = useState(false);
  const [secondTalk, setSecondTalk] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LIGHTING TALKS</h2>
      <div className={styles.logoContainer}>
        <a 
          onMouseEnter={() => setFirstTalk(true)}
          onMouseLeave={() => setFirstTalk(false)}
          className={styles.link} 
          href="https://www.youtube.com/watch?v=9yDNvY2rNKc&list=PLclEcT4yxER6PwyVVfJwnD6Vq26tUA-XE&index=1" rel="noopener noreferrer" target="_blank"
        >
          <img className={styles.img1} src={firstImgSrc} />
          {firstTalk && (
            <div>
              <h5 className={styles.talk}>Donut.js</h5>
              <h5 className={styles.talkTitle}>Dynamic Collaboration</h5>
            </div>
          )}
        </a>
        <a
          onMouseEnter={() => setSecondTalk(true)}
          onMouseLeave={() => setSecondTalk(false)} 
          className={styles.link} 
          href="https://www.youtube.com/watch?v=mxTpV7lDGe8&feature=youtu.be" rel="noopener noreferrer" target="_blank"
        >
          <img className={styles.img2} src={secondImgSrc} />
          {secondTalk && (
            <div>
              <h5 className={styles.talk}>PDXWIT</h5>
              <h5 className={styles.talkTitle}>Claim Your Superpowers!</h5>
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

AboutTalks.propTypes = {
  firstImgSrc: PropTypes.string.isRequired,
  secondImgSrc: PropTypes.string.isRequired
};

export default AboutTalks;
