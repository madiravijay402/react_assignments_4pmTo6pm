import React from 'react'
import UserDetails from '../components/UserDetails'
import ProductDetails from '../components/ProductDetails'
import StudentDetails from '../components/StudentDetails'
import SkillsList from '../components/SkillsList'
import EmployeeList from '../components/EmployeeList'

const Page = () => {
  return (
    <>
      <UserDetails />
      <ProductDetails />
      <StudentDetails />
      <SkillsList />
      <EmployeeList />
    </>
  )
}

export default Page