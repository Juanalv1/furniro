"use client"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ItemCard from './components/ItemCard'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'
import Link from 'next/link'

 
export default function Home() {
  const {products} = useContext(ThemeContext)

  return (
    <main className="flex min-h-screen flex-col  ">
      <Navbar />
      <section className=' bg-[url(/bg-mobile.png)] py-12 bg-center bg-cover px-4 flex justify-center lg:justify-end items-center lg:bg-[url(/bg-1.png)] lg:py-28 lg:px-18 xl:px-24 xl:py-44'>
        <div className=' bg-[#FFF3E3] px-6 py-8 flex flex-col lg:w-[40%] lg:py-12 lg:gap-y-4 '>
          <h3 className=' tracking-widest m-0 text-sm lg:text-base text-[#333333]'>New arrival</h3>
          <h1 className='text-[#B88E2F] text-4xl m-0 font-extrabold  lg:text-5xl my-2'>Discover Our New Collection</h1>
          <p className='m-0 text-[#333333] font-semibold text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='text-white font-semibold bg-[#B88E2F] py-4 px-8 mt-6 border-none font-poppins  lg:w-1/2'>BUY NOW</button>
        </div>

      </section>
      <section className='bg-white flex flex-col px-4 py-6 lg:px-24'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-bold my-3 text-[#333333]'>Browse The Range</h2>
          <p className='flex m-0 justify-center text-center text-[#666666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div className='grid px-4 py-2 grid-cols-1  mt-4 text-[#333333] lg:grid-cols-3 gap-x-8  lg:mt-12 gap-y-4 lg:px-16'>
          <div className='flex flex-col '>
            <img src='/grid-1.png' className='  h-64 object-cover rounded-lg lg:h-80' alt="" />
            <p className='text-center font-semibold mt-2'>Dining</p>
          </div>
          <div className='flex flex-col'>
            <img src='/grid-2.png' className='h-64 object-cover rounded-lg lg:h-80'/>
            <p className='text-center font-semibold mt-2' >Living</p>
          </div>
          <div className='flex flex-col'>
            <img src='/grid-3.png' className='h-64 object-cover rounded-lg lg:h-80'/>
            <p className='text-center font-semibold mt-2'>Bedroom</p>
          </div>
        </div>
        <div className='flex flex-col px-4 py-2 grid-cols-1 gap-y-2 mt-4 text-[#333333] lg:mt-8 lg:px-16'>
          <h2 className='font-semibold text-2xl text-center lg:mb-6'>Our Products</h2>
          <div className='grid gap-y-8 px-4 mb-4 md:grid-cols-2 lg:grid-cols-4 gap-x-6'>
            {products && products.slice(0, 4).map((product, index) => (
              <ItemCard imageurl={product.attributes.images_url} name={product.attributes.name} description={product.attributes.description} price={product.attributes.price} lastprice={'3.500.000'} key={index}/>
            ))}

          </div>
          <Link className='border-[#B88E2F] px-16 py-2 text-[#B88E2F] mx-auto bg-white font-poppins font-semibold border-solid no-underline' href={'/shop'}>Show More</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
