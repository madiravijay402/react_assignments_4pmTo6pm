import React from 'react'
import UserDetails from '../components/UserDetails'
import ProductDetails from '../components/ProductDetails'

const Page = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-100 text-gray-900 px-4 sm:px-6 py-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <header className="bg-white rounded-2xl shadow p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold">Day 6</h1>
            <p className="mt-1 text-sm sm:text-base text-gray-600">
              If you see this layout styled, TailwindCSS is working.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UserDetails />
            <ProductDetails />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page