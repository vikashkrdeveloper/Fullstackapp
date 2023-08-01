import React  from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
import handwashproduct from '../images/handwash.jpg';
import handwash2product from '../images/handwash2.jpg';
import articalproduct from '../images/article.jpg';
import bottleproduct from '../images/bottle.jpg';
import audioproduct from '../images/audio.jpg'
import scratchcardproduct from '../images/scratchcard.jpg'
import redeemproduct from '../images/redeem.jpg';
import playwinproduct from '../images/playwin.jpg';
import shopcollectionproduct from '../images/shopCollection.jpg';
import sellingimg from '../images/selling.jpg';
import addimageimg from '../images/addimage.jpg';
import primeimg from '../images/prime.jpg';
import smartwatchproduct from '../images/smartwatch.jpg';
import sportshoesproduct from '../images/sportsShoes.jpg';
import mensShoesproduct from '../images/mensShoes.jpg';
import womenshoesproduct from '../images/womenshoes.jpg';
import handbagproduct from '../images/handbags.jpg';
import Lisningbox from '../partials/lisningbox';
import img6 from '../images/d.jpg'
 
function Main() {
    document.title = "Online Shopping site in India: Shop Online for Mobiles, Books,Watches..."
 
 

  
 

    return (
        <>
            <main id="main">
                
                <div className="contaainer">
                    <div className="slider-container">
                        <img className="slider-image" id="slider-image" src={img6} alt="no loaded" />
                        <img className="slider-image nones " id="slider-image2" src="./public/images/b.jpg" alt="no loaded" />
                        <img className="slider-image nones " id="slider-image2" src="./public/images/c.jpg" alt="no loaded" />
                        <img className="slider-image nones " id="slider-image2" src="./public/images/d.jpg" alt="no loaded" />
                        <img className="slider-image nones " id="slider-image2" src="./public/images/e.jpg" alt="no loaded" />
                        <img className="slider-image nones " id="slider-image2" src="./public/images/f.jpg" alt="no loaded" />
                        <div className="slider-right-container" id="slider-right">
                            <p className="slider-right">&#8250;</p>
                        </div>
                        <div className="slider-left-container" id="slider-left">
                            <p className="slider-left">&#8249;</p>
                        </div>
                    </div>
                    <div className="product-first-container">

                        <div className="product-first">
                            <div className="product">
                                <div className="heading-container">
                                    <h2 className="heading-text">Pick up where you left off</h2>
                                </div>
                                <div className="product-box-container">
                                    <div className="product-box">
                                        <Link to="/lisning/handwash" className="attributes">
                                            <img className="product-img" src={handwashproduct} alt="" />
                                            <p className="product-name">Godrej Protekt Germ Fi…</p>
                                        </Link>
                                    </div>
                                    <div className="product-box">
                                        <a href="/" className="attributes">
                                            <img className="product-img" src={handwash2product} alt="" />
                                            <p className="product-name">Godrej Protekt Germ Fi…</p>
                                        </a>

                                    </div>
                                </div>
                                <div className="product-box-container">
                                    <div className="product-box">
                                        <a href="/" className="attributes">
                                            <img className="product-img" src={articalproduct} alt="" />
                                            <p className="product-name">Art Street - Set of 4 Br…</p>
                                        </a>

                                    </div>
                                    <div className="product-box">
                                        <a href="/" className="attributes">
                                            <img className="product-img" src={bottleproduct} alt="" />
                                            <p className="product-name">Larah by Borosil classNameic…</p>
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="product-first">
                            <div className="product">
                                <div className="heading-container">
                                    <h2 className="heading-text">Keep shopping for</h2>
                                </div>
                                <a href="/" className="attributes">

                                    <div className="product-audio-container">
                                        <img className="audio-image" src={audioproduct} alt="" />
                                    </div>
                                    <div className="bottom-heading-container">
                                        <p className="text-bottom up">Condenser</p>
                                        <p className="underline">
                                            <span className="text-bottom number">1 <span className="text-bottom">viewed</span></span>
                                        </p>
                                    </div>
                                </a>
                                <a href="/" className="attributes">
                                    <div className="bottom-heading-container">
                                        <p className="text-bottom number2">View your browsing history</p>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div className="product-first">
                            <div className="product">
                                <div className="heading-container reward-heading">
                                    <h2 className="heading-text">Shop & Pay | Earn rewards daily</h2>
                                </div>
                                <div className="product-reward-container">

                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={scratchcardproduct} alt="" />
                                            <p className="product-reward-name">Claim your scratch cards</p>
                                        </a>
                                    </div>
                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={redeemproduct} alt="" />
                                            <p className="product-reward-name">Redeem your collected rewards</p>
                                        </a>

                                    </div>
                                </div>
                                <div className="product-reward-container">
                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={playwinproduct} alt="" />
                                            <p className="product-reward-name">Pay & Win scratch cards</p>
                                        </a>
                                    </div>
                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={shopcollectionproduct} alt="" />
                                            <p className="product-reward-name">Shop & Collect Rewards daily</p>
                                        </a>

                                    </div>
                                </div>
                                <a href="/" className="attributes">
                                    <div className="bottom-heading-container">
                                        <p className="text-bottom number2">See more</p>
                                    </div>
                                </a>
                            </div>

                        </div>


                        <div className="product-seler-first">
                            <div className="product-seler">

                                <div className="seller-fees">
                                    <div className="heading-container reward-heading">
                                        <h2 className="heading-text">Get 50% off on Selling Fee*</h2>
                                    </div>
                                    <a href="/" className="attributes">
                                        <div className="bottom-heading-container">
                                            <p className="text-bottom number2">Become a Seller</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="seler-img-container">
                                    <img className="best-add-image" src={sellingimg} alt="" />
                                </div>
                            </div>
                            <div className="product-seler-add">
                                <div className="product-seler-container">
                                    <img className="best-add-image" src={addimageimg} alt="" />
                                </div>

                            </div>


                        </div>


                    </div>

                    <div className="product-second-container">
                        <div className="primevideo-list">
                            <a href="/" className="prime-video-container">
                                <img className="prime-video" src={primeimg} alt="" />
                            </a>
                            <div className="prime-tittle">
                                <h1 className="prime-tittle-text">Prime Video: Recommended for you</h1>
                                <p className="prime-tittle-text-p">Ponniyin Selvan Part 2</p>
                            </div>
                            <div className="prime-video-start-container">
                                <a href="/" className="attributes under">
                                    <p className="prime-tittle-text-p start">Start watching on Prime Video</p>
                                </a>
                            </div>
                        </div>


                        <div className="product-first">
                            <div className="product">
                                <div className="heading-container auto">
                                    <h2 className="heading-text">Bluetooth Calling Smartwatch starts at ₹1,999</h2>
                                </div>
                                <a href="/" className="attributes">

                                    <div className="product-smart-container">
                                        <img className="smart-watch" src={smartwatchproduct} alt="" />
                                    </div>
                                    <div className="bottom-heading-container">
                                        <p className="text-bottom number2 ">Shop Now</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="product-first">
                            <div className="product">
                                <div className="heading-container reward-heading">
                                    <h2 className="heading-text">Bestselling footwear & handbags</h2>
                                </div>
                                <div className="product-reward-container">

                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={sportshoesproduct} alt="" />
                                            <p className="product-reward-name">Sports shoes</p>
                                        </a>
                                    </div>
                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={mensShoesproduct} alt="" />
                                            <p className="product-reward-name">Men's shoes</p>
                                        </a>

                                    </div>
                                </div>
                                <div className="product-reward-container">
                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={womenshoesproduct} alt="" />
                                            <p className="product-reward-name">Women's shoes </p>

                                        </a>
                                    </div>
                                    <div className="product-reward">
                                        <a href="/" className="attributes">
                                            <img className="product-reward-img" src={handbagproduct} alt="" />
                                            <p className="product-reward-name">Handbags</p>
                                        </a>

                                    </div>
                                </div>
                                <a href="/" className="attributes">
                                    <div className="bottom-heading-container">
                                        <p className="text-bottom number2">See more offers</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <Lisningbox />
                    <Lisningbox />
                </div>
            </main>
        </>
    )
}

export default Main
