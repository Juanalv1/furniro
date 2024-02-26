"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import ItemCard from './ItemCard'

const ShopProductList = () => {
  const {products} = useContext(ThemeContext)
  return (
    <div className='grid gap-x-6 gap-y-8 px-16 py-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12'>
      {products && products.map((product, index) => (
      <ItemCard imageurl={product.attributes.images_url} name={product.attributes.name} description={product.attributes.description} price={product.attributes.price} lastprice={'3.500.000'} key={index}/>
      ))}
    </div>
  )
}

export default ShopProductList
