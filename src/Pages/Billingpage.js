import React from 'react'
import MyNavbar from '../components/navbar/Navbar'
import BillingAddressPage from '../components/BillingAddress'
import Footer from '../layout/Footer/Footer'

function Billingpage() {
  return (
    <div>
        <MyNavbar/>
        <BillingAddressPage/>
        <Footer/>
    </div>
  )
}

export default Billingpage