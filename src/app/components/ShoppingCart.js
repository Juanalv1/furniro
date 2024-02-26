"use client"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeProvider'
import CartCard from './CartCard'

const ShoppingCart = ({handleCartClick}) => {
  const [subTotal, setSubTotal] = useState(0)
  const {cartProducts} = useContext(ThemeContext)
  useEffect(() => {
    let total = 0;
    cartProducts.forEach(product => {
      total += product.price * product.qty
    })
    setSubTotal(total)
  }, [cartProducts])
  return (
    <div className='absolute top-16 right-2 w-[360px] px-3 py-3 flex-col bg-white border-solid border-black border rounded-lg hidden lg:flex'>
      <div className='flex justify-between items-center px-4'>
        <h2 className='font-bold text-lg  border-solid border-b-[#D9D9D9] border-transparent flex py-2 w-2/3'>Shopping Cart</h2>
        <FiX onClick={handleCartClick} className='w-6 h-6 cursor-pointer'/>
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
      <div className='flex justify-between items-center px-4 py-2 pt-4 mt-4 border-solid border-transparent border-t-[#D9D9D9]'>
        <p className='font bold'>Subtotal</p>
        <p className='text-yellow-500'>{subTotal}</p>
      </div>
    </div>
  )
}

export default ShoppingCart
