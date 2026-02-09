import React from 'react'
import hand_icon from '../Component/assets/hand_icon.png'
import arrow_icon from '../Component/assets/arrow.png'
import hero_img from '../Component/assets/hero_image.png'
import './Navbar/Navbar.css'

const Hero = () => {
  return (
    <div   className='Hero px-2  md:flex w-full justify-between '>
      <div className='hero-left  flex-1 flex-col   justify-center pl-10 md:pl-40 items-center mt-  md:mt-24 '>
        <h1 className='text-xl font-medium'>NEW ARRIVAlS ONLY</h1>
        <div className='new-hand-icon gap-8 flex text-7xl'>
            <p className=' mt-4'>New</p>
            <img className='font-extrabold' src={hand_icon} width={90} height={90} alt="" />
        </div>
        <p className='mt-1 text-7xl'>Collection</p>
        <p className='mt-1 text-7xl'>for Everyone</p>
        <div className='hero-latest-btn bg-red-600 mt-6 cursor-pointer text-white flex rounded-full gap-2 px-4 py-2 w-fit'>
            <div>Latest Collection</div>
            <img src={arrow_icon} width={22} height={22} alt="" />
        </div>
      </div>
      <div className='hero-right flex flex-1 justify-center items-center'>
        <img src={hero_img} width={400} height={400} alt="" />
      </div>
    </div>
  )
}

export default Hero
