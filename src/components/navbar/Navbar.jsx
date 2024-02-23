import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom'; 
import cart_icon from "../../Assets/images/img/cart_icon.png"
import { ShopContext } from '../../context/ShopContext';


const MyNavbar = () => {
  const [menu, setMenu] = useState("home");
  const{getTotalCartItems}=useContext(ShopContext)
  // const cartItemCount = 3;
  return (
    
    <div> {/* Wrap MyNavbar with BrowserRouter */}
      <Navbar expand="lg" bg="white" variant="light" fixed="top" style={{ borderBottom: '1px solid rgba(187, 187, 187, 0.64)', marginBottom: '90px', zIndex: 999 }}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'green' }}>TRNDZZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto justify-content-center fontWeight: 'bold'">
              <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "nav-link active" : "nav-link"}>Home</Link>
              <Link to='/' onClick={() => setMenu("popular")}  className={menu === "popular" ? "nav-link active" : "nav-link"}>Popular</Link>
              <Link to='/' onClick={() => setMenu("collection")} className={menu === "collection" ? "nav-link active" : "nav-link"}>Collection</Link>
              <Link to='/mens' onClick={() => setMenu("mens")} className={menu === "mens" ? "nav-link active" : "nav-link"}>Men</Link>
              <Link to='/womens' onClick={() => setMenu("womens")} className={menu === "womens" ? "nav-link active" : "nav-link"}>Women</Link>
              <Link to='/kids' onClick={() => setMenu("kids")} className={menu === "kids" ? "nav-link active" : "nav-link"}>Kids</Link>
              <Link to='/' onClick={() => setMenu("blog")} className={menu === "blog" ? "nav-link active" : "nav-link"}>Blog</Link>
              <Link to='/' onClick={() => setMenu("about")} className={menu === "about" ? "nav-link active" : "nav-link"}>About</Link>
            </Nav>
             <div className="d-lg-block">
              <ul className="navbar-nav d-flex flex-row align-items-center">
              <li className="nav-item me-3 position-relative">
                {/* <div className="nav-login-cart">
                  <Link to ='/cart'> <img src={cart_icon} alt="" style={{ width: '20px', height: '20px' }} /></Link>
                  <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div> */}

            <div className="nav-login-cart">
                <Link to='/cart' style={{ color: 'black', textDecoration: 'none' }}>
                    <i className="fas fa-shopping-cart" style={{ marginRight: '6px' }}></i>
                </Link>
                <span className="badge-pill badge-danger position-absolute start-100 translate-middle me-4">
                    {getTotalCartItems()}
                </span>
            </div>
            </li>
                <li className="nav-item me-3 border-0 position-relative">
                  <Link to="/wishlist" className="nav-link" style={{ textDecoration: "none" }}>
                    <i className="fa-solid fa-heart"></i>
                    <span className="badge-pill badge-danger position-absolute start-100 translate-middle me-3">
                      2
                    </span>
                  </Link>
                </li>
                <li className="nav-item me-3 border-0">
                  <Link to="/profile" className="nav-link" style={{ textDecoration: "none" }}>
                    <i className="fa-solid fa-user"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
