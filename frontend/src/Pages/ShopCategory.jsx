import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icom from '../Component/assets/dropdown_icon.png'
import Items from '../Component/Items'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category  w-[85vw] m-auto' >
      <img src={props.banner} alt="" />
      <div className="flex mt-8  justify-between items-center ">
        <div className='shopcategory-indexSort  '>
          <p className='text-gray-400 text-sm  md:font-bold'>
            <span className='text-black '>Showing 1-12</span> out of 36 Products
          </p>
        </div>
        <div className='shopcategory-sort flex justify-center cursor-pointer items-center gap-3 border rounded-full w-fit  border-gray-500 px-3 py-2'>
          <p>sort by</p> <img className="w-3 h-2 object-contain" src={dropdown_icom} alt="" />
        </div>
      </div>
      <div className="shopcategory-products grid grid-cols-4 mt-4 ">
        {all_product.map((item, i) => {
          if (props.category === item.category) {

            return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null
          }
        })}
      </div>
      <div className='shopcategory-loadmore text-gray-600 bg-gray-300 cursor-pointer m-auto w-fit my-8 rounded-full px-6 py-4 flex justify-center items-center '>
        <p>Explore More</p>
      </div>
    </div>
  )
}

export default ShopCategory
