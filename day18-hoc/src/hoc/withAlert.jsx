import React from 'react';

const withAlert = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => {
      alert("HOC Task 1: Button Click Alert Injected from HOC!");
    };

    return <WrappedComponent {...props} handleClick={handleClick} />;
  };
};

export default withAlert;
