import React from 'react'
import { Link } from 'react-router-dom'
import add_product_icon from '../../src/assets/Admin_Assets/Product_Cart.svg'
import list_product_icon from '../../src/assets/Admin_Assets/Product_list_icon.svg'

const Sidebar = () => {
    return (
        <div className='flex md:flex-col text-sm font-medium bg-white py-4 px-1  h-screen md:w-fit pr-12 gap-10'>
            <Link to={'/addproduct'} className=' decoration-none' >
                <div className='bg-[#f6f6f6] px-4 py-4 rounded-md  ml-4 flex justify-between items-center gap-4 cursor-pointer'>
                    <img src={add_product_icon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} className=' decoration-none' >
                <div className='bg-[#f6f6f6] px-4 py-4 rounded-md  ml-4 flex justify-between items-center gap-4 cursor-pointer'>
                    <img src={list_product_icon} alt="" />
                    <p> Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
