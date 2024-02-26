"use client"
import React, { useContext, useEffect, useState } from 'react'
import CartCard from '../components/CartCard'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeProvider'

const Cart = () => {
  const { cartProducts } = useContext(ThemeContext)
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    let total = 0;
    cartProducts.forEach(product => {
      total += product.price * product.qty
    })
    setSubTotal(total)
  }, [cartProducts])
  return (
    <main>
      <Navbar />
      <section>
        <div className='flex justify-between items-center px-4'>
        <h1 className='font-bold text-lg  border-solid border-b-[#D9D9D9] border-transparent flex py-2 w-2/3'>Shopping Cart</h1>
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
      </section>
    </main>
  )
}

export default Cart
