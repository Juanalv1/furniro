"use client"
import React from 'react'
import { useContext } from 'react'
import { FiXCircle } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeProvider'

const CartCard = ({img_url, name, price, qty}) => {
  const {cartProducts, setCartProducts} = useContext(ThemeContext)

  const handleDeleteItem = () => {
    const cartList = [...cartProducts];
    const indexToDelete = cartList.findIndex(product => product.name === name);
    if (indexToDelete !== -1) {
      cartList.splice(indexToDelete, 1);
      setCartProducts(cartList);
    }
  }
  
  return (
    <div className='flex h-[105px] justify-stretch gap-x-4'>
      <div className='w-[30%] px-3 py-3  flex items-center justify-center'>
        <img src={img_url} className='w-2/3 rounded-lg' alt='product-image'/>
      </div>
      <div className='flex items-center justify-between py-4 px-4 m-0  w-[60%] px-4'>
        <div className='flex flex-col gap-y-4'>
          <div className='flex'>
            <h3 className=' text-base'>{name}</h3>
          </div>
          <div className='flex'>
            <p className='flex justify-between w-full'><span>  {qty} X </span>      <span className=' text-yellow-600 font-bold  ml-4'>   {price}   </span>   </p>
          </div>
        </div>  
        
        <div className=''>
          <FiXCircle className='w-5 h-5 cursor-pointer' onClick={handleDeleteItem}/>
        </div>

      </div>
    </div>

  )
}

export default CartCard
