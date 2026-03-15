import { useState } from "react";

function NumberList() {

  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <button onClick={addNumber}>Add Number</button>
    </div>
  );
}

export default NumberList;