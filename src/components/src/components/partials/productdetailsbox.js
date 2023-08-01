import React from 'react'
import './Productdetailsbox.css'
import smartwatchproduct from '../images/smartwatch.jpg';
import { Link } from 'react-router-dom'
function Productdetailsbox() {
    return (
        <>
            <div className="product-details-maincontainer">
                <div className="product-details-all-container">
                    <div className="product-details-left-container">
                        <div className="side-product-image-container">
                            <div className="side-product-image-box-container">
                                <div className="side-product-image-box">
                                    <Link></Link>
                                </div>
                                <div className="side-product-image-box">
                                    <Link></Link>
                                </div>
                                <div className="side-product-image-box">
                                    <Link></Link>
                                </div>
                                <div className="side-product-image-box">
                                    <Link></Link>
                                </div>
                                <div className="side-product-image-box">
                                    <Link></Link>
                                </div>
                                <div className="side-product-image-box">
                                    <Link></Link>
                                </div>
                                
                                
                            </div>

                            <div className="img-container-box-product-container">

                                <img className='product-image-show-box' src={smartwatchproduct} alt="" />
                            <div className="favorate-icon-container"><i class="fa-sharp fa-solid fa-heart heart-icon"></i></div>

                            </div>

                        </div>
                        <div className="product-buy-container">

                            <div className="addtocart-container"><i class="fi-xwsuhl-shopping-cart-solid addtocartcart-icon"></i><b className='productbuying-text'>ADD TO CART</b></div>
                            <div className="buynow-container" ><Link className='link-buy-now' to='/checkout/init'><b className='productbuying-text'>BUY NOW</b></Link></div>
                        </div>
                    </div>


                    <div className="product-details-right-container">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdetailsbox
