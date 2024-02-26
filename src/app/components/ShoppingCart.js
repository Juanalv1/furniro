"use client"
import React from 'react'
import { useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeProvider'
import CartCard from './CartCard'

const ShoppingCart = ({handleCartClick}) => {
  const {cartProducts} = useContext(ThemeContext)
  return (
    <div className='absolute top-16 right-2 w-[360px] px-3 py-3 flex flex-col bg-white border-solid border-black border rounded-lg'>
      <div className='flex justify-between items-center px-4'>
        <h2 className='font-bold text-2xl  border-solid border-b-[#D9D9D9] border-transparent flex py-2 w-2/3'>Shopping Cart</h2>
        <FiX onClick={handleCartClick} className='w-6 h-6'/>
      </div>
      <div className='flex flex-col py-3'>
        {cartProducts.length === 0 && (
          <div className=' text-gray-500 py-36 flex w-full h-full bg-white justify-center items-center'>
            <p>Nothing here...</p>
          </div>
        )}
        {cartProducts && cartProducts.map((product, index) => (
          <CartCard img_url={product.imageurl} name={product.name} price={product.price} qty={product.qty} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default ShoppingCart
