import React from 'react'
import Counter from '../componentws/Counter'
import TextInput from '../componentws/TextInput'
import Login from '../componentws/Login'
import UpdateName from '../componentws/UpdateName'
import DarkLight from '../componentws/DarkLight'

const Page = () => {
  return (
    <>
        <Counter/>
        <TextInput/>
        <Login/>
        <DarkLight/>
        <UpdateName/>
    </>
  )
}

export default Page