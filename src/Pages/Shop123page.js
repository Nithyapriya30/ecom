// import React from 'react'
// import MyNavbar from './../components/navbar/Navbar.jsx'
// import ShopCategory from './ShopCategory.jsx';
// import Footer from '../layout/Footer/Footer.jsx';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Product from "../Pages/Product.jsx";
// import { Cart } from "../Pages/Cart.jsx";
// import women_banner from "../Assets/images/img/banner_women.png";
// import men_banner from "../Assets/images/img/banner_mens.png";
// import kids_banner from "../Assets/images/img/banner_kids.png";
// import LoginSignup from "../Pages/LoginSignup.jsx";
// function Shop123page() {
//   return (
//     <div>
//       <MyNavbar />
//       <BrowserRouter>
//         <Routes>
//           <Routes>
//             <Route
//               path="/mens"
//               element={<ShopCategory banner={men_banner} category="men" />}
//             />
//             <Route
//               path="/womens"
//               element={<ShopCategory banner={women_banner} category="women" />}
//             />
//             <Route
//               path="/kids"
//               element={<ShopCategory banner={kids_banner} category="kid" />}
//             />
//             <Route path="/product" element={<Product />}>
//               <Route path=":productId" element={<Product />} />
//             </Route>
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/login" element={<LoginSignup />} />
//           </Routes>
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </div>
//   );
// }

// export default Shop123page