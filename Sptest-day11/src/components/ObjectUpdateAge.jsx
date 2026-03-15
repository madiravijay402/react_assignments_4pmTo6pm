import { useState } from 'react';

export default function ObjectUpdateAge() {
  const [person, setPerson] = useState({ name: 'John Doe', age: 25 });

  const increaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div className="card">
      <h2>6. Object: Update Age</h2>
      <div>
        <strong>Name:</strong> {person.name} <br/>
        <strong>Age:</strong> <span className="value-display" style={{fontSize: '1.2rem'}}>{person.age}</span>
      </div>
      <button className="btn btn-success" onClick={increaseAge}>
        Increase Age
      </button>
    </div>
  );
}
