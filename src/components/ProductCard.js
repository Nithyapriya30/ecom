import React from 'react'
import { Card } from 'react-bootstrap';

function Productcard(props) {
  return (
    <div>
        
      <div className="card card-prod mt-3">
        <img className="card-img-top pt-1" src={props.cardimg}alt="" height={'200px'} />
        <div className="card-body">
          <h6 className="card-title r">Phone</h6>
          <p className="card-text "></p>
          <p className="">$150.15</p>
          <div className="stars ">
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star "></i>
          </div>
          <div className="cart-but">
            
              <i className="fas fa-cart-arrow-down carts"></i>
             
          </div>
         

        </div>
      </div>
    </div>
   
   
  )
}

export default Productcard