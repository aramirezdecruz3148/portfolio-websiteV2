import React from 'react';
import PropTypes from 'prop-types';

function AboutMePics({ imageSrc, caption }) {
  return (
    <div>
      <img src={imageSrc} />
      <h4>{caption}</h4>
    </div>
  );
}

AboutMePics.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default AboutMePics;
