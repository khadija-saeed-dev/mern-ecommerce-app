import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrum'
import ProductDisplay from '../Component/ProductDisplay'
import Description from '../Component/Description'
import RelatedProduct from '../Component/RelatedProduct'

const Product = (props) => {
  // console.log("PRODUCT ===>", product);

  const {all_product}= useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((e)=>
        e.id===Number(productId)
  )
  return (
    <div  className=''>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
