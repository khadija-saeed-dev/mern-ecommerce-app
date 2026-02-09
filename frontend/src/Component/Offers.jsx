import React from 'react'
import exclusive_image from '../Component/assets/exclusive_image.png'
import '../Component/Navbar/Navbar.css'
const Offers = () => {
  return (
    <div className='Hero offers flex  w-[75vw] mt-20 m-auto pt-12 h-[60vh]'>
      <div className='offers-left flex  flex-1 flex-col pl-12 justify-center px-4'>
        <h1 className='  text-5xl font-medium'>Exclusive</h1>
        <h1 className='  text-5xl font-medium mt-5'>Offers For You</h1>
        <p className='mt-2 mb-6  text-gray-600'>ONLY ON BEST SELLER PRODUCTS</p>
        <div>
            <button className='bg-red-600 cursor-pointer border border-t-gray-600 text-white px-6 py-3 rounded-full'>Check Now</button>
        </div>
      </div>
      <div className='offers-right flex flex-1 justify-center items-center'>
        <img width={200} height={200} src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
