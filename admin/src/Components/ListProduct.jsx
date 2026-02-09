import React, { useEffect, useState } from 'react'
import listproduct_remove_icon from '../assets/Admin_Assets/cross_icon.png'

const ListProduct = () => {
    const [allproducts, setallProducts] = useState([])
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) => { setallProducts(data) })
    }
    useEffect(() => {
        fetchInfo()
    }, [])

    const remove_product=async(id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
        <div className='flex flex-col w-full m-4 px-10 py-8 h-screen  bg-white '>
          
             <h1 className=' text-3xl  font-bold mx-auto'>All Products List</h1>
            <div className='list-product-format grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr]  font-medium mt-5   py-4  gap-2
'>
                <p>Product</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div  className='listproduct-allproduct overflow-y-auto w-[50vw] m-auto'>
                <hr className='text-gray-400 h-2' />
                {allproducts.map((product,index)=>{
                return<>
                 <div key={index} className='mt-3 mb-2  overflow-y-auto text-gray-500 grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center gap-4'>
                    <img height={60} width={40} src={product.image} alt="" />
                    <p>{product.name} </p>
                    <p>${product.old_price}</p>
                    <p>${product.new_price}</p>
                    <p>{product.category}</p>
                    <img onClick={()=>{remove_product(product.id)}} className='cursor-pointer' src={listproduct_remove_icon} alt="" />
                </div>
                <hr  className='text-gray-400 h-2' />
                </>

                })}

            </div>
        
        </div>
    )
}

export default ListProduct

