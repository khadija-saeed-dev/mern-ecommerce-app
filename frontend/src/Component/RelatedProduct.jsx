import React from 'react'
import data_product from '../Component/assets/data'
import Items from './Items'
const RelatedProduct = () => {
  return (
    <div className='px-22 py-3 flex flex-col justify-center items-center'>
      <h1 className='text-gray-800 font-medium text-2xl'>Related Product</h1>
      <span className='w-[140px] rounded-full bg-gray-800 h-[4px] text-black'></span>
      <hr />
   <div className='grid grid-cols-4'>
       {data_product.map((item,i)=>{
        return  <Items  key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
      })}
   </div>

    </div>
  )
}

export default RelatedProduct
