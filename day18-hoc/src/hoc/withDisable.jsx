import React from 'react';

const withDisable = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} isDisabled={true} />;
  };
};

export default withDisable;
