import React from 'react'
import Product from './Product'

const ProductDetails = () => {
    const productDetails=[
        {
            id:1,
            name:"mobile",
            price:23000
        },
        {
            id:2,
            name:"laptop",
            price:76000
        },
        {
            id:3,
            name:"Television",
            price:43000
        }
    ]
  return (
    <>
      <div className="bg-slate-50 border rounded-2xl p-4 sm:p-6">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Products
          </h2>
          <div className="text-xs sm:text-sm text-gray-600">
            {productDetails.length} items
          </div>
        </div>

        <Product data={productDetails} />
      </div>
    </>
  )
}

export default ProductDetails