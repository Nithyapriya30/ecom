import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../Assets/images/img/cart_cross_icon.png'
import { Link } from 'react-router-dom'

const CartItems=()=> {
    // const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
     const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Check if the cart is empty
    const isCartEmpty = Object.values(cartItems).every(quantity => quantity === 0);

    // If the cart is empty, display a message
    if (isCartEmpty) {
        return <div className='cartitems'>Your cart is empty</div>;
    }

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {/* <div>
            <div className="cartitems-format">
                <img src="" alt="" className='carticon-product-icon'/>

            </div>
        </div> */}
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
            }
            return null;
        })}
       <div className='cartitems-down'>
            <div className="cartitems-total">
                <h3>Cart Total</h3>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>

                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    
                </div>
                <div className="cartitems-promocode">
                    <p>If u have code enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promocode'/>
                        <button>
                            Submit
                        </button>
                    </div>
                </div>
                <div></div>
                <div>
                  
                </div>
                  <div></div>
                    <div></div>
                      <div></div>
                <div className='justify-content-center'>
                    <Link to="/billingaddress">
                        <button>PROCEED TO CHECKOUT</button>
                    </Link>
                </div>
            </div>
            
       </div>
    </div>
  )
}

export default CartItems