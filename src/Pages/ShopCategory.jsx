import React, { useContext } from 'react'
import './css/ShopCategory.css'
import dropdown_icon from '../Assets/images/img/dropdown_icon.png'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/Item.jsx'
import MyNavbar from '../components/navbar/Navbar.jsx'
import Footer from '../layout/Footer/Footer.jsx'
const ShopCategory = (props) => {
    
const {all_product} = useContext(ShopContext)
  return (
    <>
  <MyNavbar/>

    <div className='shop-category'>
       <img className='shopcategory-banner' src={props.banner} alt="" />
       <div className="shopcategory-indexSort">
        <p>
            <span>Showing 1-12</span>out of 36 product
        </p>
        <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
        </div>
       </div>
        <div className="shopcategory-products">
            {all_product.map((item,i)=>{
                if(props.category===item.category)
                {
                    return<Item key={i} id={item.id} name={item.name} image={item.image}  old_price={item.old_price} new_price={item.new_price}/>
                      
                }
                else{
                    return null;
                }
            })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
    </div> 
        <Footer/>
  </>
  )
}

export default ShopCategory