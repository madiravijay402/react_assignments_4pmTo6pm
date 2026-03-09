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
        <Product data={productDetails}/>
    </>
  )
}

export default ProductDetails