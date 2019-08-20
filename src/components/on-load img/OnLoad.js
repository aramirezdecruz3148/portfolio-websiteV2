import React from 'react';
import PropTypes from 'prop-types';
import styles from './OnLoad.css';

function OnLoad({ imageSrc }) {
  return (
    <div className={styles.onLoad}>
      <img className={styles.img} src={imageSrc} />
    </div>
  );
}

OnLoad.propTypes = {
  imageSrc: PropTypes.string.isRequired
};

export default OnLoad;
