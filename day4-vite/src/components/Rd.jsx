import React from 'react'

const Rd = () => {
    // 2. Rendering Variables
  const name = "Vijay";

  // 7. Conditional Rendering
  const isLoggedIn = true;

  // 8. Ternary Operator
  const age = 20;

  // 9. Logical && Rendering
  const showMessage = true;

  // 11. Nullish Coalescing
  const user = {
    username: null
  };

  return (
    <div>

      {/* 1. Functional Component Rendering */}
      <h3>1. Functional Component Rendering</h3>
      <Hello />

      {/* 2. Rendering Variables */}
      <h3>2. Rendering Variables</h3>
      <p>Hello {name}</p>

      {/* 7. Conditional Rendering */}
      <h3>7. Conditional Rendering</h3>
      {isLoggedIn ? <p>User Logged In</p> : <p>Please Login</p>}

      {/* 8. Ternary Operator */}
      <h3>8. Ternary Operator</h3>
      <p>{age >= 18 ? "Adult" : "Minor"}</p>

      {/* 9. Logical && Rendering */}
      <h3>9. Logical && Rendering</h3>
      {showMessage && <p>This message is visible</p>}

      {/* 11. Nullish Coalescing */}
      <h3>11. Nullish Coalescing</h3>
      <p>Username: {user.username ?? "Guest User"}</p>

    </div>
  )
}

// Functional Component
function Hello() {
  return <p>Hello from Functional Component</p>;
}

export default Rd;