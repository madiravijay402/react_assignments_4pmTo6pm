import React from 'react'
import Student from './Student'

export default function StudentDetails() {
  const studentDetails = [
    { name: 'vijay', TotalMarks: 90 },
    { name: 'tanoj', TotalMarks: 35 },
    { name: 'kvkr', TotalMarks: 96 },
  ]

  return <Student data={studentDetails} />
}