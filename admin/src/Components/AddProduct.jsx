import React from 'react'
import upload_area from '../../src/assets/Admin_Assets/upload_area.svg'
import { useState } from 'react'
import { data } from 'react-router-dom';
const AddProduct = () => {
    // 1): "InTERNAL PC" ki images ko upload prshow krwanay k liye 
    const [image ,setimage]=useState(false);
    //2): Add the record in dataase
    const[productDetails , setPoductDetails] =useState({
        name:'',
        image:'',
        category:"women",
        old_price:'',
        new_price:'',
    })
    const ChangeHandler=(e)=>{
        setPoductDetails({...productDetails , [e.target.name]:e.target.value})
    }
    //3):Function For ADD Button 
    const Add_Product=async ()=>{
        console.log(productDetails);
        //1: to get the image URL in object:
        let responseData;
         let product=productDetails;
        let formData = new FormData();
        formData.append('product',image);
        await fetch("http://localhost:4000/upload" , {
            method:'POST',
            headers:{
                Accpect:'application/json'
            },
            body:formData
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        // now we check in the promise the the image url and success true and false 
        if(responseData.success)
        {
            product.image=responseData.image_url;
            console.log(product);
            // Now send this product (jo pora aak object hai) to addproduct endpoints
            await fetch('http://localhost:4000/addproduct' ,{
                method:"POST",
                headers:{
                    Accpect:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product)
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert('Product Added In DB'):alert('Failed to Add Product In DB')
            })
            
        }
      

    }
    return (
        <div className='h-[92vh] mb-2 w-full md:w-[51vw] mx-6 bg-white my-2 px-6 py-2 flex flex-col gap-'>
            <div>
                <p className='font-medium mb-2 text-gray-500' >Product title</p>
                <input value={productDetails.name} onChange={ChangeHandler} type="text" name='name' placeholder='Type here' className='border rounded-md px-4 py-2 border-gray-300 w-full focus:outline-none focus:ring-0' />
            </div>
            <div className='flex w-[50vw] mt-4 gap-8'>
                <div className='w-[22vw]'>
                    <p className='font-medium  mb-3 text-gray-500' >Price</p>
                    <input className='border rounded-md px-4 py-2 border-gray-300 w-full focus:outline-none focus:ring-0' type="text" name='old_price' value={productDetails.old_price} onChange={ChangeHandler} placeholder='Type here' />
                </div>
                <div className='w-[22vw]'>
                    <p className='font-medium mb-3 text-gray-500' >Offer Price</p>
                    <input className='border rounded-md px-4 py-2 border-gray-300 w-full focus:outline-none focus:ring-0' type="text" name='new_price' value={productDetails.new_price} onChange={ChangeHandler} placeholder='Type here' />
                </div>
            </div>
            <div>
                <p className='font-medium  text-gray-500 my-3' >Product Category</p>
                <select name="category" value={productDetails.category} onChange={ChangeHandler} className='text-gray-800 add-product-selector border mb-3 border-gray-300 px-5 py-3 focus:outline-none focus:ring-0' >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className='addproduct-itemfield mb-4 h-[8vh] w-[8vw]'>
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-tumbnail-img cursor-pointer' alt="" />
                    <input onChange={(e)=>{
                        setimage(e.target.files[0])
                    }}   className='border rounded-md px-4 py-2 border-gray-500 w-full focus:outline-none focus:ring-0' type="file" value={productDetails.image}  name='image' id='file-input' hidden />
                </label>
            </div>
            <div className='mt-20'>
                <button onClick={()=>{Add_Product()}} className='addproductp-btn bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer'>ADD</button>
            </div>

        </div>
    )
}

export default AddProduct
