import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from '../components/productdisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import RelatedProducts from '../components/relatedproducts/RelatedProducts';
import MyNavbar from '../components/navbar/Navbar';
import Footer from '../layout/Footer/Footer';
const Product=()=> {
  const{all_product}=useContext(ShopContext);
  const{productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <MyNavbar/>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}
export default Product
