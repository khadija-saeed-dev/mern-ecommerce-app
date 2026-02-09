import React from 'react'
import Hero from '../Component/Hero'
import Popular from '../Component/Popular'
import Offers from '../Component/Offers'
import NewCollection from '../Component/NewCollection'
import NewsLetter from '../Component/NewsLetter'


const Shop = () => {
  return (
    <div className='mt-[100]'>
     <Hero/>
     <Popular/>
     <Offers/>
     <NewCollection/>
     <NewsLetter/>
   
    </div>
  )
}

export default Shop
