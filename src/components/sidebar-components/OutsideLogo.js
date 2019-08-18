import React from 'react';
import PropTypes from 'prop-types';
import styles from './OutsideLogo.css';

function OutsideLogo({ logoType, linkTo }) {
  return (
    <>
      <a href={linkTo}><img className={styles.outsideLogo} src={logoType} /></a>
    </>
  );
}

OutsideLogo.propTypes = {
  logoType: PropTypes.string.isRequired, 
  linkTo: PropTypes.string.isRequired
};

export default OutsideLogo;
