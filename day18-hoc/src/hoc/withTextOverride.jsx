import React from 'react';

const withTextOverride = (WrappedComponent) => {
  return (props) => {
    // Override whatever title prop was passed with a new one
    return <WrappedComponent {...props} title="HOC Modified Text" />;
  };
};

export default withTextOverride;
