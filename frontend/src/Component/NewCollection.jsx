import React, { useEffect, useState } from 'react'
// import new_collection from '../Component/assets/new_collections'
import Items from '../Component/Items'

const NewCollection = () => {
  const[new_collection,setNew_collection]= useState([]);
  useEffect(()=>{
     fetch('http://localhost:4000/newcollections').then((responce)=>responce.json()).then((data)=>setNew_collection(data))
  },[])
  return (
    <div  className=' flex flex-col justify-center items-center mt-8  py-12'>
      <h1  className='text-3xl font-medium text-gray-700' >NEW COLLECTION</h1>
      <hr className=' w-32 rounded-full h-[4px] bg-gray-700 border-none my-3'  />
      <div className="collection grid  grid-cols-4   mt-8">
          {new_collection.map((item,i)=>{
            return <Items  key={i} id={item.id}  image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          })}
      </div>

    </div>
  )
}

export default NewCollection
