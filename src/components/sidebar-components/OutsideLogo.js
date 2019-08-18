import React from 'react';
import PropTypes from 'prop-types';

function OutsideLogo({ logoType, linkTo }) {
  return (
    <>
      <a href={linkTo}><img src={logoType} /></a>
    </>
  );
}

OutsideLogo.propTypes = {
  logoType: PropTypes.string.isRequired, 
  linkTo: PropTypes.string.isRequired
};

export default OutsideLogo;
