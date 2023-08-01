import React from 'react'
import { Link } from 'react-router-dom'

function Productlisingbox(props) {
    return (
        <>
            <div className="productlist-details-slide-box">
                <a href="#" className="attributes">
                    <div className="productlist-details-slide-box-image">
                        <img src={props.asinShoesProduct} alt="LOading" className="image-product-show" />
                    </div>
                </a>
                <div className="productlist-details-slide-box-details">
                    <div className="other-product-move-container">
                        <div className="other-product-slide-box-this">
                            <a href="#" className="other-product-slide-box-under"></a>
                        </div>
                        <div className="other-product-slide-box">
                            <a href="#" className="other-product-slide-box-under"></a>
                        </div>
                        <div className="other-product-slide-box">
                            <a href="#" className="other-product-slide-box-under"></a>
                        </div>
                        <div className="other-product-slide-box">
                            <a href="#" className="other-product-slide-box-under last-third"></a>
                        </div>
                        <div className="other-product-slide-box">
                            <a href="#" className="other-product-slide-box-under"></a>
                        </div>
                        <div className="other-product-slide-box">
                            <a href="#" className="other-product-slide-box-under last"></a>
                        </div>
                    </div>
                    <a href="#" className="attributes">
                        <div className="company-name-container-product">
                            <b className="company-name-container-heading">{props.productCompanyName}</b>
                        </div>
                        <div className="product-brand-name-container-product">
                            <p className="product-brand-container-heading">{props.producttitle}</p>
                        </div>
                        <div className="product-rates-container">
                            <p className="product-rate-icons-container">
                                <i className="fi-xnsuxl-star-solid rate"></i>
                                <i className="fi-xnsuxl-star-solid rate"></i>
                                <i className="fi-xnsuxl-star-solid rate"></i>
                                <i className="fi-xnsuxl-star-solid rate"></i>
                                <i className="fi-xwluxl-star-wide rate"></i>
                                {/* <span className="update-rate">168</span> */}
                            </p>
                        </div>
                    </a>
                    <div className="product-pricesed-container">
                        <h1 className="product-prices-text">{props.productdiscount}</h1>
                        <h1 className="product-prices-text-amount"><span className="price-icon">&#x20B9;</span>{props.productDiscoundprice} <span
                            className="product-prices-zero">00</span></h1><del
                                className="deleted-prices"><span>&#x20B9;</span>{props.productActualprice}</del>
                    </div>
                    <div className="product-get-days-container">
                        <p className="prodect-get-day-text">Get it by <b>{props.gettimeday}</b></p>
                    </div>
                    <div className="product-deliverys-container">
                        <p className="prodect-delivery-text">FREE Delivery Over &#x20B9;499 Fulfilled by Vikash </p>
                    </div>
                    <div className="button-add-to-carts-container">
                        {/* <Link to={`/cardadd/${props.producttitleshort}`}> */}
                            <button type="button" className="button-add-to-cart">Add to Cart</button>
                        {/* </Link> */}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Productlisingbox
