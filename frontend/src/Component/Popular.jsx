import React, { useEffect, useState } from 'react'
// import data_product from '../Component/assets/data'
import Items from './Items'

const Popular = () => {
  const[popularProducts,setPopularProduct]=useState([]);
  useEffect((req ,res)=>{
     fetch('http://localhost:4000/popularinwomen').then((responce)=>responce.json()).then((data)=>setPopularProduct(data))
  },[])
  return (
    <div className='popular flex flex-col justify-center items-center mt-10  py-12  '>
      <h1 className='text-3xl font-medium text-gray-700'>POPULAR IN WOMEN</h1>
      <hr className=' w-32 rounded-full h-[4px] bg-gray-700 border-none my-3' />
  <div className='popular-item flex mt-8'>
        {popularProducts.map((item,i)=>{
        return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
    </div>
  )
}

export default Popular
