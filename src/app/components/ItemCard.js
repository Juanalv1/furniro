import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const ItemCard = ({imageurl, price, name, description, lastprice}) => {
  const {cartProducts, setCartProducts} = useContext(ThemeContext)
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  const handleBtnClick = () => {
    // Copia el carrito actual
    const cartList = [...cartProducts];
  
    // Busca el producto en el carrito
    const productFound = cartList.find(product => product.name === name);
  
    if (productFound) {
      // Si el producto existe, actualiza la cantidad
      cartList.forEach(product => {
        if (product.name === name) {
          product.qty++;
        }
      });
    } else {
      // Si el producto no existe, agrégalo al carrito
      cartList.push({
        imageurl,
        price,
        name,
        description,
        lastprice,
        qty: 1
      });
    }
  
    // Actualiza el estado del carrito con la nueva lista
    setCartProducts(cartList);
  };
    return (
    <div className=' relative flex flex-col bg-[#F4F5F7]  cursor-pointer no-underline'  onClick={handleClick}>
      {isClicked && (
        <>
          <div className='opacity-50 absolute w-full h-full z-10 bg-[#3A3A3A]'></div>
          <div className='absolute top-0 right-0 w-full h-full z-20 flex flex-col items-center justify-center'>
            <div className='bg-white text-yellow-500 px-8 py-3 font-bold' onClick={handleBtnClick}>Add to cart</div>
         </div>
        </>

      )}
      <div className='relative'>
        <img src={imageurl} className='w-full object-cover'/>
        <div className='bg-red-500 rounded-full py-3 px-1.5 absolute top-[6%] right-[6%] text-white'>-30%</div>
      </div>
      <div className='flex flex-col gap-y-3 px-6 py-4'>
        <p className='text-[#3A3A3A] font-semibold text-lg m-0'>{name}</p>
        <p className='text-[#898989] m-0'>{description}</p>
        <p className='flex justify-between text-[#3A3A3A] m-0 font-semibold gap-x-1'><span className='mr-4'>Rp  {price}</span><span className='text-[#898989] font-normal line-through'>Rp  {lastprice}</span></p>
      </div>
    </div>
  )
}

export default ItemCard
