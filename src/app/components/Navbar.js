"use client"
import React from 'react'
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { useState } from 'react';
import Link from 'next/link';
import ShoppingCart from './ShoppingCart';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Navbar = () => {
  const {setIsShoppingCartOpen, isShoppingCartOpen} = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCartClick = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen)
  }
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className=' flex justify-between  py-4 items-center  px-4 lg:px-8 bg-slate-50 fixed top-0 right-0 w-full box-border z-30 '>
      <img src='/logo.png' className=' max-w-[120px] lg:max-w-[140px]'/>
      <FiMenu className='text-3xl lg:hidden' onClick={handleMenuClick}/>
      {isMenuOpen && (
        <>
          <div className='absolute w-full h-screen opacity-50 z-10 top-0 right-0 bg-gray-600'></div>
          <div className='absolute top-0 right-0 w-[55%] bg-[#F9F1E7] z-20 py-2 px-4 flex flex-col lg:hidden h-screen'>
           <FiX onClick={handleMenuClick} className='self-end w-6 h-6'/>
           <ul className='flex flex-col px-4 py-2 gap-y-4 mt-8'>
            <Link href={'/'} className=' no-underline text-lg text-black'>Home</Link>
            <Link href={'/shop'} className=' no-underline text-lg text-black'>Shop</Link>
            <Link href={'/about'} className=' no-underline text-lg text-black'>About</Link>
            <Link href={'/contact'} className=' no-underline text-lg text-black'>Contact</Link>
            <Link href={'/profile'} className=' no-underline text-lg text-black'>Profile</Link>
            <Link href={'/search'} className=' no-underline text-lg text-black'>Search</Link>
            <Link href={'/favorites'} className=' no-underline text-lg text-black'>Favorites</Link>
            <Link href={'/cart'} className=' no-underline text-lg text-black'>Cart</Link>
            </ul> 
          </div>
        </>
      )}
      {isShoppingCartOpen && (
        <ShoppingCart handleCartClick={handleCartClick}/>
      )}
      <ul className='lg:flex gap-x-8 font-semibold text-lg justify-center items-center p-0 hidden m-0'>
        <Link href={'/'} className=' no-underline  text-black'>Home</Link>
        <Link href={'/shop'} className=' no-underline  text-black'>Shop</Link>
        <Link href={'/about'} className=' no-underline  text-black'>About</Link>
        <Link href={'/contact'} className=' no-underline  text-black'>Contact</Link>
      </ul>
      <ul className='lg:flex gap-x-8 font-semibold text-2xl justify-center items-center p-0 hidden m-0'>
        <FiSearch />
        <FiUser />
        <FiHeart />
        <FiShoppingCart onClick={handleCartClick} className='cursor-pointer'/>
      </ul>
    </div>
  )
}

export default Navbar
