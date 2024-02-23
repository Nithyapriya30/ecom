import React from 'react'
import CartItems from '../components/cartitems/CartItems'
import MyNavbar from '../components/navbar/Navbar'
import Footer from '../layout/Footer/Footer'
export const Cart = () => {
  return (
    <div>
      <MyNavbar/>
      <CartItems/>
     <Footer/>
    </div>
  )
}
