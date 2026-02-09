import React from 'react'
import breadcrum_arrow from '../Component/assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='flex items-center px-24 gap-2 md:py-6 text-sm text-gray-500 font-medium '>
      HOME <img src={breadcrum_arrow} alt="" />SHOP <img src={breadcrum_arrow} alt="" /> {product?.category || "Category"} <img src={breadcrum_arrow} alt="" /> {product?.name || "Product Name"}
    </div>
  )
}

export default Breadcrum
