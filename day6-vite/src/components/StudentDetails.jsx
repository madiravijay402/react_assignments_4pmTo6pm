import React from 'react'
import Student from './Student'

export default function StudentDetails() {
  const studentDetails = [
    { name: 'vijay', TotalMarks: 439 },
    { name: 'tanoj', TotalMarks: 445 },
    { name: 'kvkr', TotalMarks: 496 },
  ]

  return <Student data={studentDetails} />
}