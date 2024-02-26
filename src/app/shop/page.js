import React from 'react'
import Navbar from '../components/Navbar'
import ShopProductList from '../components/ShopProductList'
import Footer from '../components/Footer'


const Shop = () => {
  
  return (
    <main>
      <Navbar />
      <section className=' flex flex-col justify-center items-center px-12 py-24 lg:px-26 lg:py-22 bg-[url(https://i.ibb.co/kSnZKdG/bg-image-shop-mobile.png)] lg:bg-[url(https://i.ibb.co/s5hnWpD/bg-image-shop.png)] bg-no-repeat bg-cover bg-center scroll-smooth pt-36'>
        <h1 className='text-3xl font-bold text-black m-0 mb-2'>Shop</h1>
        <p className='m-0'><span className='font-bold'>Home {'>'}</span> Shop </p>
      </section>
      <section>
        <ShopProductList />
      </section>
      <Footer />
    </main>
  )
}

export default Shop
