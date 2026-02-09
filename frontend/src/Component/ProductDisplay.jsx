import React, { useContext } from 'react'
import star_dull_icon from '../Component/assets/star_dull_icon.png'
import star_icon from '../Component/assets/star_icon.png'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'

const ProductDisplay = (props) => {
  const navigate=useNavigate()
    const {product}=props
    const {addtoCart, }=useContext(ShopContext)
      if (!product) return <p>Loading product...</p>;
  return (
    <div className='md:flex px-22  mb-8 gap-10 w-full md:h-[75vh] '>
      <div className="left flex gap-4 w-[38vw]">
        
        <div className='flex flex-col gap-1 md:gap-4 '>
            <img width={112} height={112} src={product.image} alt="" />
            <img width={112} height={112} src={product.image} alt="" />
            <img width={112} height={112} src={product.image} alt="" />
            <img width={112} height={112} src={product.image} alt="" />
        </div>
        <div>
            <img height={1} width={500} src={product.image} alt="" />
        </div>
      </div>
      <div className="right flex flex-col gap-2 w-[38vw]   ">
        <h1 className='text-2xl font-medium text-gray-600 '>{product.name}</h1>
        <div className='flex gap-1 mt-2  items-center'>
            <img className="w-4 h-4" src={star_icon} alt="" />
            <img className="w-4 h-4" src={star_icon} alt="" />
            <img className="w-4 h-4" src={star_icon} alt="" />
            <img className="w-4 h-4" src={star_icon} alt="" />
            <img className="w-4 h-4" src={star_dull_icon} alt="" />
        <p className='text-sm font-medium text-gray-500 ml-2 '>(122) </p>
        </div>
        <div className="price flex my-3 gap-3">
            <div className="newprice text-gray-700 font-medium text-xl"> ${product.new_price} </div>
            <div className="oldprice line-through font-medium text-xl  text-red-500">${product.old_price}</div>
        </div>
        <div className="description text-sm text-gray-500 ">
           Upgrade your everyday style with this sleek zippered bomber jacket. look, making it perfect for casual outings or evening wear.
        </div>
        <div className="sizes mt-8 ">
            <h1 className='text-gray-600 text-xl font-medium mb-3'>Select Size </h1>
            <div className="selectSize flex gap-8 ">
                <div className='border border-[#ebebeb] px-3 py-2 rounded-md cursor-pointer mt-4' >S</div>
                <div className='border border-[#ebebeb] px-3 py-2 rounded-md cursor-pointer mt-4'>M</div>
                <div className='border border-[#ebebeb] px-3 py-2 rounded-md cursor-pointer mt-4'>L</div>
                <div className='border border-[#ebebeb] px-3 py-2 rounded-md cursor-pointer mt-4'>XL</div>
                <div className='border border-[#ebebeb] px-3 py-2 rounded-md cursor-pointer mt-4'>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addtoCart(product.id)}} className='bg-red-500 border border-gray-600 w-[130px] py-3 mt-4  font-medium text-white cursor-pointer'>ADD TO CART</button>
        <p className='text-sm mt-4 text-gray-500'><span className='text-black font-medium'>Category: </span>Women , T-Shirt , Crop TOP</p>
        <p className='text-sm mt-1 text-gray-500'><span className='text-black font-medium'>Tags: </span>Modern , Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay
