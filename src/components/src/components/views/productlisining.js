import React from 'react'
import Productbox from '../partials/productbox'
import './Productlisining.css';
import handwashproduct from '../images/handwash.jpg';
import handwash2product from '../images/handwash2.jpg';
import articalproduct from '../images/article.jpg';
import bottleproduct from '../images/bottle.jpg';
import asinShoesProduct from '../images/shoesA.jpg'
import Product1 from '../images/LSL4._SY116_CB589356177_.jpg'
import Product2 from '../images/Asian1.jpg'
import Product3 from '../images/shoesAsian.jpg'
import Product4 from '../images/sportsShoes.jpg'
import Product5 from '../images/shoes.webp'
import Product6 from '../images/mensShoes.jpg'
function Productlisining() {
  return (
    <>
      <main className="main-product-container">
        <div className="main-product-list-container">
          <div className="pickup-product-list-container">
            <div className="pickup-product-heading">
              <div className="text-heading">
                <h1 className="pickup-product-text">Pick up where you left off</h1>
                <h1 className="pickup-product-text pickup-product-text-bold">Kitchen Sneakers</h1>
              </div>
              <div className="prodect-list-top-container">
                <div className="product-list-top-box  product-list-top-box-this">
                  <a href="#" className="product-list-top-box-attributes">
                    <img src={handwashproduct} className="prodect-top-box-image" alt="loading..." />
                  </a>
                </div>
                <div className="product-list-top-box product-list-top-box-other">
                  <a href="#" className="product-list-top-box-attributes">
                    <img src={handwash2product} className="prodect-top-box-image" alt="loading..." />
                  </a>
                </div>
                <div className="product-list-top-box product-list-top-box-other">
                  <a href="#" className="product-list-top-box-attributes">
                    <img src={articalproduct} className="prodect-top-box-image" alt="loading..." />
                  </a>
                </div>
                <div className="product-list-top-box product-list-top-box-other">
                  <a href="#" className="product-list-top-box-attributes">
                    <img src={bottleproduct} className="prodect-top-box-image" alt="loading..." />
                  </a>
                </div>
              </div>
            </div>


            <div className="previously-heading-container">
              <p className="previously-heading-text">Previously viewed</p>
            </div>

            <div className="product-previously-viewed-container">
              <div className="product-previously-viewed-image-container">
                <a href="/productdetails/handwash" className="product-previously-viewed-image-attributes">
                  <img src={handwashproduct} className="prodect-top-box-image" alt="loading..." />
                </a>
              </div>
              <div className="product-previously-viewed-details-container">
                <div className="other-product-move-container">
                  <div className="other-product-move-box-this">
                    <a href="#" className="other-product-move-box-under"></a>
                  </div>
                  <div className="other-product-move-box">
                    <a href="#" className="other-product-move-box-under"></a>
                  </div>
                  <div className="other-product-move-box">
                    <a href="#" className="other-product-move-box-under"></a>
                  </div>
                  <div className="other-product-move-box">
                    <a href="#" className="other-product-move-box-under last-third"></a>
                  </div>
                  <div className="other-product-move-box">
                    <a href="#" className="other-product-move-box-under"></a>
                  </div>
                  <div className="other-product-move-box">
                    <a href="#" className="other-product-move-box-under last"></a>
                  </div>
                </div>
                <div className="product-previously-viewed-details">
                  <a href="" className="attributes-product">
                    <div className="product-company-name-container">
                      <p className="product-company-name-text">Puma</p>
                    </div>
                    <div className="product-name-container">
                      <p className="product-name-text">Unisex-Adult INTERFLEX Modern Black White Running Shoe</p>
                    </div>
                    <div className="product-rate-container">
                      <p className="product-rate-icon-container">
                        <i className="fi-xnsuxl-star-solid rate"></i>
                        <i className="fi-xnsuxl-star-solid rate"></i>
                        <i className="fi-xnsuxl-star-solid rate"></i>
                        <i className="fi-xnsuxl-star-solid rate"></i>
                        <i className="fi-xwluxl-star-wide rate"></i>
                        <span className="update-rate">168</span>
                      </p>
                    </div>
                    <div className="product-prices-container">
                      <h1 className="product-prices-text">-40% </h1>
                      <h1 className="product-prices-text-amount"><span className="price-icon">&#x20B9;</span>2,419 <span className="product-prices-zero">00</span></h1><del className="deleted-prices"><span>&#x20B9;</span>3,999.00</del>
                    </div>
                    <div className="product-get-day-container">
                      <p className="prodect-get-day-text">Get it by <b>Monday, July 3</b></p>
                    </div>
                    <div className="product-delivery-container">
                      <p className="prodect-delivery-text">FREE Delivery Over &#x20B9;499 Fulfilled by Vikash </p>
                    </div>
                  </a>
                  <div className="button-add-to-cart-container">
                    <button type="button" className="button-add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="product-seller-list-container">
            <p className="product-seller-list-name-this ">For you</p>
            <p className="product-seller-list-name">Bestsellers</p>
            <p className="product-seller-list-name">Explore</p>
            <p className="product-seller-list-name">Deals</p>
            <p className="product-seller-list-name">New Releases</p>
            <p className="product-seller-list-name">Most gifted</p>
            <p className="product-seller-list-name">Bought together</p>
          </div>
          <Productbox
            asinShoesProduct={asinShoesProduct}
            Product1={Product1}
            Product2={Product2}
            Product3={Product3}
            Product4={Product4}
            Product5={Product5}
            Product6={Product6}
          />
          <Productbox
            asinShoesProduct={asinShoesProduct}
            Product1={Product1}
            Product2={Product2}
            Product3={Product3}
            Product4={Product4}
            Product5={Product5}
            Product6={Product6}
          />
          <Productbox
            asinShoesProduct={asinShoesProduct}
            Product1={Product1}
            Product2={Product2}
            Product3={Product3}
            Product4={Product4}
            Product5={Product5}
            Product6={Product6}
          />
          <Productbox
            asinShoesProduct={asinShoesProduct}
            Product1={Product1}
            Product2={Product2}
            Product3={Product3}
            Product4={Product4}
            Product5={Product5}
            Product6={Product6}
          />

        </div>



      </main>

    </>
  )
}

export default Productlisining
