import React from 'react'
import './Relatedproducts.css'
import data_product from '/react_ecommerce/ecom/src/Assets/images/img/data'
import Item from '../item/Item'
const RelatedProducts=()=> {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
      {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
        </div>
    </div>
  )
}

export default RelatedProducts