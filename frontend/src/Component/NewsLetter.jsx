import React from 'react'

const NewsLetter = () => {
  return (
    <div className='Hero offers flex  flex-col mt-10  mb-20 items-center w-[75vw] px-4 m-auto py-12 h-[60vh]'>
      <h1 className='text-4xl font-medium text-gray-600'>
        Get Exclusive Offers On Your Email
      </h1>
      <p className='mt-8 text-gray-900'>Subscribe to our Newsletter and stay updated</p>
      <div className='md:border md:border-gray-300 mt-8  md:rounded-full md:w-[35vw] md:flex '>
        <input className=' flex-1 px-2 py-3 border rounded-md mb-2 md:mb-0 md:border-0 md:rounded-none  ' type="emil" placeholder=' Your Email Id' />
        <button className=' cursor-pointer bg-black text-white px-8 py-4 md:py-0 text-sm rounded-full'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
