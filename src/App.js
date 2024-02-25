import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import { Cart } from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Billingpage from "./Pages/Billingpage.js";
import PaymentPage from "./Pages/Payment.js";
import Sellerreg from "./components/seller/registrationform/Sellerreg.js";
import Home from './Pages/Home.js'
import Navbar from "./components/navbar/Navbar.jsx";
import BillingAddress from "./components/BillingAddress";
import ParentComponent from "./components/redux/Product.js";
import AdminDash from "./components/admin/Dashboard.js";
import UserManagement from "./components/admin/UserManagement.js";
import ShopContextProvider from "./context/ShopContext.jsx"; // Import ShopContextProvider

import women_banner from "./Assets/images/img/banner_women.png";
import men_banner from "./Assets/images/img/banner_mens.png";
import kids_banner from "./Assets/images/img/banner_kids.png";
import LoginForm from "./components/LoginForm.js";
import ProductManagement from "./components/admin/ProductManagement.js";
import SellerDashboard from "./components/seller/SellerDashboard.js";
import ShoppingCart from "./components/ShoppingCart.js";
import WishlistPage from "./components/WishListPage.js";
import Wish from "./components/WishListData.js";
import Profile from "./components/Profile.js";
import ProfilePage from "./components/ProfilePage.js";
import SellerNav from "./components/seller/SellerNav.js";
import OrderManagement from "./components/seller/OrderManagement.js";
import AdminNav from "./components/admin/AdminNav.js";
import HomePage from "./Pages/HomePage.js";
import QueryResponseTable from "./components/redux/Query.js";
import RespondtoQuery from "./components/seller/RespondtoQuery.js";
import ProductCardCollection from "./components/NewCollections/NewCollection.js";
import CollectionProduct from "./Pages/CollectionProduct.js";
import OrderManagementSel from "./Pages/OrderManagement.js";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />}/>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/billingaddress" element={<Billingpage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/sellerreg" element={<Sellerreg />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wish />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addpdt" element={<ParentComponent />} />
          <Route path="/ordmgt" element={<OrderManagementSel/>} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/admindashboard" element={<AdminDash />} />
          <Route path="/usermgt" element={<UserManagement />} />
          <Route path="/pdtmgt" element={<ProductManagement />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/query" element={<RespondtoQuery />}></Route>
          <Route path="/pdtcat" element={<CollectionProduct />}></Route>
        </Routes>
      </ShopContextProvider>
    </div>
  );
}
export default App;
