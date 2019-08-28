import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutMePics.css';

function AboutMePics({ imageSrc }) {
  return (
    <div>
      <img className={styles.img} src={imageSrc} />
    </div>
  );
}

AboutMePics.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default AboutMePics;
