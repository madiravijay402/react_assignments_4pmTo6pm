import React from 'react'

const TernaryOperator = () => {

  const age = 20;

  return (
    <div>
      {age >= 18 ? <h2>Adult</h2> : <h2>Minor</h2>}
    </div>
  );

}

export default TernaryOperator