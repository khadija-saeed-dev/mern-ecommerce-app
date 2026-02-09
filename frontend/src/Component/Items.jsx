import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  console.log("ITEM PROPS ===>", props)

  return (
    <div className='item w-[20vw]  hover:scale-105 transition-all p-4 flex flex-col  '>
      <Link to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} className='rounded-md' width={300} height={300} src={props.image} alt="" />
</Link>
      <p className='text-gray-700 text-sm mt-2 overflow-auto'>{props.name}</p>
      <div className='item-price md:flex mt-2  gap-5'>
        <div className='item-price-new'>
            ${props.new_price}
        </div>
        <div className='item-price-old text-gray-500  line-through'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
