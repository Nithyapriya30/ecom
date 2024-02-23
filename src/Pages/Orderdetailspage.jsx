import React from "react";
import MyNavbar from "../components/navbar/Navbar.jsx";
import Footer from "../layout/Footer/Footer";
import OrderConfirmation from "../components/ordercnf/OrderConfirmation";

function Order() {
  return (
    <div>
      <MyNavbar/>
      <OrderConfirmation/>
      <Footer />
    </div>
  );
}

export default Order;
