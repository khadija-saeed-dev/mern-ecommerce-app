
import React, { useContext } from 'react'

import { ShopContext } from '../Context/ShopContext'
import cart_cross_icon from '../Component/assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart, addtoCart } = useContext(ShopContext)
    return (
        <div className='cartitems px-22 py-8'>
            <div className='cartitems-format-main py-2 gap-4  items-center justify-center flex md:grid  md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]
 md:gap-10'>
                <p className='grid-cols-1'>Product</p>
                <p className='grid-cols-2'>Title</p>
                <p className='grid-cols-1'>Price</p>
                <p className='grid-cols-1'>Quantity</p>
                <p className='grid-cols-1'>Total</p>
                <p className='grid-cols-1'>Remove</p>
            </div>
            <hr className=' text-gray-300' />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <>
                        <div className='cartitems-format flex gap-4 md:gap-10 justify-center md:grid md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center md:my-2 text-sm text-gray-700'>
                            <img src={e.image} width={60} height={0} alt="" />
                            <p className='text-sm items-center overflow-hidden'>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='border text-black border-gray-400 w-fit px-4 py-2 bg-gray-200' >{cartItem[e.id]}</button>
                            <p className='text-'>${e.new_price * cartItem[e.id]}</p>
                            <img className='cursor-pointer ' src={cart_cross_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr className='text-gray-400' />
                    </>

                }
                return null;
            })}

            <div className='md:flex w-full  mt-10 justify-between'>
                <div className='md:w-[38vw] font-medium'>
                    <h1 className='text-xl font-bold mt-16 mb-8'>Cart Totals</h1>
                    <div className='flex justify-between text-sm py-2'>
                        <p className='text-gray-600'>Subtotal</p>
                        <p className='text-gray-900' >${getTotalCartAmount()}</p>
                    </div>
                    <hr className='text-gray-500' />

                    <div className='flex  justify-between py-2'>
                        <p className='text-gray-600'>Shipping Fee</p>
                        <p className='text-gray-500' >Free</p>

                    </div>
                    <hr className='text-gray-500' />
                    <div className='flex justify-between py-2'>
                        <h1>Total</h1>
                        <p className='text-gray-900' >${getTotalCartAmount()}</p>

                    </div>
                    <button className='bg-red-600 border border-gray-500 text-white w-fit px-3 py-2 mt-10 cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>


                <div className=' w-[36vw] mt-16 mb-8 text-sm'>
                    <p className='text-gray-600'>If you have a promo code. Enter it here</p>
                    <input className='text-gray-700 px-6 py-3 bg-gray-300' type="text" placeholder='promo code' />
                    <button className='px-10 mt-6 py-3 bg-black text-white'>Submit</button>

                </div>
            </div>

        </div>
    )
}

export default CartItems
