import { useState } from 'react';

export default function StudentStatus() {
  const [student, setStudent] = useState({ name: 'Bob', marks: 35, result: 'Fail' });

  const updateMarks = () => {
    const newMarks = Math.floor(Math.random() * 101); // 0-100
    setStudent({
      ...student,
      marks: newMarks,
      result: newMarks >= 40 ? 'Pass' : 'Fail'
    });
  };

  return (
    <div className="card">
      <h2>10. Student Result Update</h2>
      <div>
        <strong>Student:</strong> {student.name} <br/>
        <strong>Marks:</strong> <span className="value-display" style={{fontSize: '1.2rem'}}>{student.marks}</span> / 100 <br/>
        <strong>Result:</strong>{' '}
        <span style={{ 
          color: student.result === 'Pass' ? 'var(--success-color)' : 'var(--danger-color)',
          fontWeight: 'bold' 
        }}>
          {student.result}
        </span>
      </div>
      <button className="btn" onClick={updateMarks}>
        Generate New Marks
      </button>
    </div>
  );
}
