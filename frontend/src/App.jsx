import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes , Route } from "react-router-dom";
import Shop from '../src/Pages/Shop'
import Product from '../src/Pages/Product'
import LoginSignup from '../src/Pages/LoginSignup'
import Cart from '../src/Pages/Cart'
import ShopCategory from '../src/Pages/ShopCategory'
import Footer from './Component/Footer';
import man_banner from '../src/Component/assets/banner_mens.png'
import women_banner from '../src/Component/assets/banner_women.png'
import kids_banner from '../src/Component/assets/banner_kids.png'


const App = () => {
  return (
    <div className='w-full  h-screen'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
       <Route path='/men' element={<ShopCategory banner={man_banner} category='men'/>}/>
       <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
       <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
       <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/loginsignup' element={<LoginSignup/>}/>
       <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
