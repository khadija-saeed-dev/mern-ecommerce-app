import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    const [menu, setmenu] = useState()
    const [open, setopen] = useState(false)
    const { getTotalCartItem, setcartItem, getDefaultCart, logout } = useContext(ShopContext);

    return (
        <div className='navbar  w-full py-2  flex  justify-around items-center shadow-neutral-400 '>
            <div className='nav-logo flex  items-center'>
                <img src={logo} alt="" />
                <p className=' text-2xl font-medium '>SHOPPER</p>
            </div>
            <div className=' nav-menu hidden md:flex gap-5 text-gray-700'>
                <Link to={'/'} onClick={() => { setmenu("shop") }} className=' no-underline hover:underline underline-offset-8 hover:decoration-2 hover:decoration-[#FF4141] transition-all duration-200'>Shop</Link>
                <Link to={'/men'} onClick={() => { setmenu("men") }} className=' no-underline hover:underline underline-offset-8  hover:decoration-2 hover:decoration-[#FF4141] transition-all duration-200'>Men</Link>
                <Link to={'/women'} onClick={() => { setmenu("women") }} className=' no-underline hover:underline underline-offset-8  hover:decoration-2 hover:decoration-[#FF4141] transition-all duration-200'>Women</Link>
                <Link to={'/kids'} onClick={() => { setmenu("kids") }} className=' no-underline hover:underline underline-offset-8  hover:decoration-2 hover:decoration-[#FF4141] transition-all duration-200'>Kids</Link>



            </div>
            <div className='nav-login-cart hidden md:flex gap-5'>
                {localStorage.getItem('auth-token')?<Link to={'/loginsignup'} > <button className='border font-light cursor-pointer px-7 py-2 rounded-full hover:scale-105 transition-all hover:bg-red-500 hover:text-white' onClick={()=>{logout() }} >Log Out</button></Link>:<Link to={'/loginsignup'} > <button className='border font-light cursor-pointer px-7 py-2 rounded-full hover:scale-105 transition-all hover:bg-red-500 hover:text-white'>Login</button></Link>}
                
                <Link to={'/cart'} > <img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count bg-red-600 text-white  text-xs font-medium flex justify-center ml-[-30px] mt-[-6px]  items-center rounded-full h-[18px] w-[18px]'> {getTotalCartItem()} </div>

            </div>
            {/* {for Mobile} */}

            <button
                className="md:hidden text-2xl"
                onClick={() => setopen(!open)}
            >
                ☰
            </button>
            {open && (
                <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
                    <Link onClick={() => setopen(false)} to="/">Shop</Link>
                    <Link onClick={() => setopen(false)} to="/men">Men</Link>
                    <Link onClick={() => setopen(false)} to="/women">Women</Link>
                    <Link onClick={() => setopen(false)} to="/kids">Kids</Link>
                    <Link onClick={() => setopen(false)} to="/loginsignup">Login</Link>
                    <Link onClick={() => setopen(false)} to={'/cart'} > <img src={cart_icon} alt="" /></Link>
                    <div className='nav-cart-count bg-red-600 text-white mb-8 flex justify-center ml-[28px] mt-[-60px]  items-center rounded-full h-[18px] w-[18px]'> {getTotalCartItem()} </div>

                </div>
            )}

        </div>
    )
}

export default Navbar














