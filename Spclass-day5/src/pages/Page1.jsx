import React from 'react'
import NavBar from '../components/NavBar'
import SubNav from '../components/SubNav'
import Add from '../components/Add'
import Products from '../components/Products'
import Founder from '../components/Founder'
import Object from '../components/Object'
import FruitsArray from '../components/FruitsArray'
import NestedArray from '../components/NestedArray'
import Conditional from '../components/Conditional'
import TernaryOperator from '../components/TernaryOperator'
import AdminPanel from '../components/AdminPanel'
import UserCity from '../components/UserCity'
import Nullish from '../components/Nullish'

const Page1 = () => {
  return (
    <>
        <NavBar/>
        <SubNav/>
        <Add/>
        <Products/>
        <Founder/>
        <Object/>
        <FruitsArray/>
        <NestedArray/>
        <Conditional/>
        <h1>Ternary Operator Task</h1>
        <TernaryOperator/>
        <AdminPanel/>
        <UserCity/>
        <Nullish/>
    </>
  )
}

export default Page1