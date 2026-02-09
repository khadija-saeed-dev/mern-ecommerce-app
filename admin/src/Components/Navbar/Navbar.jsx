import React from 'react'
import navlogo from '../../assets/Admin_Assets/nav-logo.svg'
import navprofile from '../../assets/Admin_Assets/nav-profile.svg'

import './Navbar.css'
const Navbar = () => {
  return (
    <div className=' navbar box bg-white flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-12 py-2'>
      <img className='font-bold' src={navlogo} width={140} height={130} alt="" />
       <img className=' ' src={navprofile} width={90} height={70}  alt="" />
    </div>
  )
}

export default Navbar
