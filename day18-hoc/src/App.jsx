import React from 'react'
import withAuth from './hoc/withAuth'
import Details from './components/Details'

const Login = withAuth(Details, 'login')
const Register = withAuth(Details, 'register')

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center py-10'>
      <h1 className='text-3xl font-bold mb-10'>React HOC Form</h1>
      <div className='flex flex-wrap items-start justify-center gap-10'>
        <Register />
        <Login />
      </div>
    </div>
  )
}

export default App