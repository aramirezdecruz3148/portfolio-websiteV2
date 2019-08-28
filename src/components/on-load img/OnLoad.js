import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OnLoad.css';

function OnLoad({ imageSrc }) {
  const [display, updateDisplay] = useState(true);

  return (
    <div className={styles.onLoad} style={{ display: display ? 'block' : 'none' }} onAnimationEnd={() => updateDisplay(false)}>
      <img className={styles.img} src={imageSrc} />
    </div>
  );
}

OnLoad.propTypes = {
  imageSrc: PropTypes.string.isRequired
};

export default OnLoad;
