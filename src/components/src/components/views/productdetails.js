import React from 'react'
import './Productdetails.css';
import returndayimg from '../images/returndays.jpg';
import asian1product from '../images/Asian1.jpg';
import primeimg from '../images/prime-logo.svg';
import shoesproduct from '../images/shoes.webp';
import { Link} from 'react-router-dom';
import Productdetailsbox from '../partials/productdetailsbox';
 
function Productdetails() {
  return (
    <>
      <main className="product-details-main">
        <div className="prodect-details-heading-container">
          <div className="prodect-details-first-heading">
            <h1 className="prodect-details-company-name">Vikash Fashion</h1>
            <div className="prodect-details-company-ablable">
              <ul className="unorderlist-product-details-company">
                <li className="list-items-product-details-company"><Link to='/productdetails/women' className="attributes">Women</Link></li>
                <li className="list-items-product-details-company"><Link to='/productdetails/men' className="attributes">Men</Link></li>
                <li className="list-items-product-details-company"><Link to='/productdetails/kids' className="attributes">Kids</Link></li>
                <li className="list-items-product-details-company"><Link to='/productdetails/bags' className="attributes">Bags & Luggage</Link></li>
                <li className="list-items-product-details-company"><Link to='/productdetails/sportwear' className="attributes">Sportswear</Link></li>
                <li className="list-items-product-details-company"><Link to='/productdetails/sale_Details' className="attributes">Sales & Deals</Link></li>
              </ul>
            </div>
            <div className="prodect-return-container">
              <a href="#" className="attributes-second-heading">
                <img src={returndayimg} className="return-container-image" alt="Loading..." />
              </a>
            </div>
          </div>
          <div className="prodect-details-second-heading">
            <a href="#" className="attributes-second-heading">

              <div className="prodect-details-container-prodect-company-name">
                <div className="prodect-details-container-prodect-image">
                  <img src={asian1product} className='productdetails-img1' alt="Loading..." />
                </div>
                <div className="prodect-details-container-prodect-name">
                  <p style={{ fontWeight: "700" }}>Asian Men's Running Shoes</p>
                </div>
                <div className="prodect-details-container-prodect-prices">
                  <img src={primeimg} className='productdetails-img2' alt="Loading..." />
                  <img src={shoesproduct} className='productdetails-img3' alt="Loading..." />
                </div>
              </div>

            </a>
          </div>
          
        </div>
      <Productdetailsbox/>
      </main>

    </>
  )
}

export default Productdetails
