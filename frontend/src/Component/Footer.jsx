import React from 'react'
import footer_logo from '../Component/assets/logo_big.png'
import instagram_icon from '../Component/assets/instagram_icon.png'
import pintester_icon from '../Component/assets/pintester_icon.png'
import whatsapp_icon from '../Component/assets/whatsapp_icon.png'
import '../Component/Navbar/Navbar.css'
const Footer = () => {
  return (
    <div className='footer flex flex-col  md:justify-center md:items-center items-start px-4'>
      <div className='footer-logo flex  gap-4 justify-center items-center'>
        <img src={footer_logo} alt="" />
        <p className='text-3xl font-medium '>SHOPPER</p>
      </div>
      <ul className='footer-links cursor-pointer md:flex mt-6 gap-6 text-gray-700  transition-all'>
        <li className=' hover:scale-95 hover:text-gray-500'>Company</li>
        <li className=' hover:scale-95 hover:text-gray-500'>Products</li>
        <li className=' hover:scale-95 hover:text-gray-500'>Offices</li>
        <li className=' hover:scale-95 hover:text-gray-500'>About</li>
        <li className=' hover:scale-95 hover:text-gray-500'>Contact</li>
      </ul>
      <div className="footer-social-icons mb-10">
        <div className=" footer-icons-container px-2   flex mt-6 gap-4 ">
           <div className=' bg rounded-full px-2 py-2 mt-4 cursor-pointer'>
             <img className='hover:scale-105' src={instagram_icon} alt="" />
           </div>
            <div className=' bg rounded-full px-2 py-2 mt-4 cursor-pointer'>
                <img className='hover:scale-105' src={pintester_icon} alt="" />
            </div>
            <div className=' bg rounded-full px-2 py-2 mt-4 cursor-pointer'>
                <img className='hover:scale-105' src={whatsapp_icon} alt="" />
            </div>
           
        </div>
      </div>
      {/* <div className=' flex  items-stretch'>
        <hr className='w-px h-full bg-black ' />
        <p>copyright &copy; 2025 - All Right Reserved. </p>
      </div> */}
      <div className="flex flex-col items-center gap-3 w-full">
  <hr className="w-full h-px bg-gray-400 border-0" />
  <p className='text-gray-500  mt-2'>copyright &copy; 2025 - All Right Reserved.</p>
</div>

    </div>
  )
}

export default Footer
