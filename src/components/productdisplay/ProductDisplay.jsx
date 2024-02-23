import React, { useState, useContext } from 'react';
import './ProdutDisplay.css'
import star_icon from '../../Assets/images/img/star_icon.png';
import star_dull_icon from '../../Assets/images/img/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';
const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleClick = (size) => {
        setSelectedSize(size);
        addToCart(product.id);
    }

// const ProductDisplay = (props) => {
// const {product}=props;
// const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
           
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(159)</p>
                
            </div>
            <div>
                <button className="Wishlistbutton" style={{ 
    padding: '5px 10px',
    border: '2px solid #ccc',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginRight:'352px',
    marginTop: '10px'
}}>
    ADD TO WISHLIST
</button>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                 <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                The long-sleeve design is perfect for those cooler days or nights, while the button-up closure makes it easy to take on and off. The plaid design is perfect for any casual occasion, whether going to a barbecue or running errands.
            </div>
            <div className="productdisplay-right-size">

               <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div className={selectedSize === 'S' ? 'selected-size' : ''} onClick={() => handleClick('S')}>S</div>
                        <div className={selectedSize === 'M' ? 'selected-size' : ''} onClick={() => handleClick('M')}>M</div>
                        <div className={selectedSize === 'L' ? 'selected-size' : ''} onClick={() => handleClick('L')}>L</div>
                        <div className={selectedSize === 'XL' ? 'selected-size' : ''} onClick={() => handleClick('XL')}>XL</div>
                        <div className={selectedSize === 'XXL' ? 'selected-size' : ''} onClick={() => handleClick('XXL')}>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                &nbsp;&nbsp;

               <Link to="/billingaddress">
                     <button>BUY NOW</button>
                </Link>

                <p className='productdisplay-right-category'><span>Category:</span>Women, T-shirt,Crop top</p>
                 <p className='productdisplay-right-category'><span>Tags:</span>Modern,Latest</p>
            </div>
        </div>
    </div>
  )
}
export default ProductDisplay;