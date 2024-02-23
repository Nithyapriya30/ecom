import React from 'react';
import './Footer.css';
import footer_logo from '../../Assets/images/img/logo_big.png';
import insta_icon from '../../Assets/images/img/instagram_icon.png';
import pinterest_icon from '../../Assets/images/img/pintester_icon.png';
import whatsapp_icon from '../../Assets/images/img/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>TRNDZZ</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li> 
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024-All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
