import React from 'react';

const withInputLogger = (WrappedComponent) => {
  return (props) => {
    const onLogInput = (e) => {
      console.log("Logged from HOC (Input Logger Hook):", e.target.value);
    };

    return <WrappedComponent {...props} onLogInput={onLogInput} />;
  };
};

export default withInputLogger;
