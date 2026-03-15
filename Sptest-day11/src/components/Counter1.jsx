import { useState } from 'react';

export default function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>1. Basic Counter</h2>
      <div className="value-display">{count}</div>
      <div className="btn-group">
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="btn" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
