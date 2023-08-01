import React  from 'react'

import './Footer.css';

function Footer() {
    const backtop = () => {
         window.scrollTo({top:0})
    }
    return (
        <>
            <footer className="footer">
                <div className="top-button-container" id="back-to-top" onClick={backtop}>
                    <p className="save-offer-text ">Back to top</p>
                </div>
                <div className="footer-about-container">
                    <div className="footer-about">
                        <div className="know-us-container">
                            <h2 className="footer-about-heading">Get to Know Us</h2>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">About us</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Press Releases</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Vikash Science</p>
                            </a>
                        </div>
                        <div className="connect-with-us-container">
                            <h2 className="footer-about-heading">Connect with Us</h2>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Facebook</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Instagram</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Twitter</p>
                            </a>


                        </div>
                        <div className="make-money-container">
                            <h2 className="footer-about-heading">Make Money with Us</h2>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Sell on Vikash</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Sell under Vikash Accelerator</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Protect and Build Your Brand</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Vikash Global Selling</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Become an Affiliate</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Fulfilment by Vikash</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Advertise Your Products</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link"> Vikash Pay on Merchants</p>
                            </a>


                        </div>
                        <div className="let-us-help-container">
                            <h2 className="footer-about-heading">Let Us Help You</h2>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link"> COVID-19 and Vikash</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Your Account</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Returns Centre</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link"> 100% Purchase Protection</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link"> Vikash App Download</p>
                            </a>
                            <a href="/" className="attributes link">
                                <p className="footer-about-detail-link">Help</p>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="company-name-container">
                    <div className="language-country-container">
                        <a href="/" className="attributes">
                            <h1 className="name">Vikash</h1>
                        </a>
                        <select name="language" id="select">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Mathili">Mathili</option>
                        </select>
                    </div>
                    <div className="country-name-container">
                        <a href="/" className="attributes link">
                            <p className="country-name">Australia</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Brazil</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Canada</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">China</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">France</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Germany</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Italy</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Japan</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Mexico</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Netherlands</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Poland</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Singapore</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Spain</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">Turkey</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">United Arab Emirates</p>
                        </a>
                    </div>
                    <div className="country-name-container">
                        <a href="/" className="attributes link">
                            <p className="country-name">United Kingdom</p>
                        </a>
                        <a href="/" className="attributes link">
                            <p className="country-name">United States</p>
                        </a>
                    </div>
                </div>
                <div className="copy-write-container">
                    <div className="copy-write">
                        <div className="abe-book-container">
                            <div className="abe-container">

                                <a href="/" className="attributes">
                                    <p className="country-name linkA">AbeBooks</p>

                                    <p className="country-name">Books, art</p>

                                    <p className="country-name">& collectibles</p>
                                </a>
                            </div>
                            <div className="book-container">
                                <a href="/" className="attributes">
                                    <p className="country-name linkA">Shopbop</p>

                                    <p className="country-name">Designer</p>

                                    <p className="country-name">Fashion Brands</p>
                                </a>
                            </div>
                        </div>
                        <div className="webservices-container">
                            <div className="abe-container">



                                <a href="/" className="attributes">
                                    <p className="country-name linkA">Vikash Web Services</p>

                                    <p className="country-name">Scalable Cloud</p>

                                    <p className="country-name">Computing Services</p>
                                </a>
                            </div>
                            <div className="book-container">



                                <a href="/" className="attributes">
                                    <p className="country-name linkA">Vikash Business</p>

                                    <p className="country-name">Everything For</p>

                                    <p className="country-name">Your Business</p>
                                </a>
                            </div>
                        </div>
                        <div className="audible-container">
                            <div className="abe-container">



                                <a href="/" className="attributes">
                                    <p className="country-name linkA">Audible</p>

                                    <p className="country-name">Download</p>

                                    <p className="country-name">Audio Books</p>
                                </a>
                            </div>
                            <div className="book-container">
                                <a href="/" className="attributes">
                                    <p className="country-name linkA">Prime Now</p>

                                    <p className="country-name">2-Hour Delivery</p>

                                    <p className="country-name">on Everyday Items</p>
                                </a>
                            </div>
                        </div>
                        <div className="dpreviews-container">
                            <div className="abe-container">



                                <a href="/" className="attributes">
                                    <p className="country-name linkA">DPReview</p>

                                    <p className="country-name">Digital</p>

                                    <p className="country-name">Photography</p>
                                </a>
                            </div>
                            <div className="book-container">




                                <a href="/" className="attributes">
                                    <p className="country-name linkA">Vikash Prime Music</p>

                                    <p className="country-name">100 million songs, ad-free</p>

                                    <p className="country-name">Over 15 million podcast episodes</p>
                                </a>
                            </div>
                        </div>
                        <div className="imdb-container">
                            <div className="abe-container">

                                <a href="/" className="attributes">
                                    <p className="country-name linkA">IMDb</p>

                                    <p className="country-name">Movies, TV</p>

                                    <p className="country-name">& Celebrities</p>
                                </a>
                            </div>


                        </div>
                    </div>
                    <div className="copyright-container">
                        <div className="copyright-text">



                            <a href="/" className="attributes">
                                <p className="country-name">Conditions of Use & Sale</p>
                            </a>
                            <a href="/" className="attributes">
                                <p className="country-name">Privacy Notice</p>
                            </a>
                            <a href="/" className="attributes">
                                <p className="country-name">Interest-Based Ads</p>
                            </a>
                        </div>
                        <div className="copyright">
                            <p className="country-name h">&copy <span>1996-2023</span>, Vikash.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer
