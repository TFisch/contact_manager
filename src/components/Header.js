import React from 'react';
import PropTypes from 'prop-types';

export const Header = (props) => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  )
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}