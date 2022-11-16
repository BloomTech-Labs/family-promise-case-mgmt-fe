import PropTypes from 'prop-types';
import React from 'react';

function LoadingComponent(props) {
  const { message } = props;

  return <div>{message}</div>;
}

//this is for no reason

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
