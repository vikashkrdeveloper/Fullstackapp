import React, { useEffect, useState } from 'react'
import './Header.css';
import offerimg from '../images/offer.jpg';
import flagimg from '../images/Flag_of_India.svg';
import { Link } from 'react-router-dom';

const Signuppage = () => {
    document.getElementById('signin-container').style.display = "block"

}
const Signupdblpage = () => {
    document.getElementById('signin-container').style.display = "none"

}

function Header() {
    const Logotext = () => {
        window.location.assign('/')
    }

    const [show, setshow] = useState(true);
    const [getdata, setData] = useState({ name: "" });
    const Signup = show ? '/signup' : '/dashboard'
    const Login = show ? '/login' : '/logout'
    const Signinvar=show ? 'Sign up' : 'Dashboard'
    const Loginvar=show ? 'Log in' : 'Log out'
    const callaboutpage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await res.json();
            setData(data);
            setshow(false);
        }
        catch (error) {

        }


    }

    useEffect(() => {
        callaboutpage();
    }, [])


    return (
        <>
            <header className='header-main'>
                <div className='header-container'>
                    <div className='header'>
                        <div className='logo-container'>
                            <h1 id='logo-text' onClick={Logotext}>VIKASH</h1>
                        </div>

                        <div className='select-address-container'>
                            <div className='select-address'>
                                <i className='fi-xnluxl-map-marker location-icon'></i>
                                <div className='select-address-text'>
                                    <p className='address-text dark'>Hello</p>
                                    <p className='address-text'>Select your address</p>
                                </div>
                            </div>
                        </div>

                        <div className='search-container'>
                            <div className='search'>
                                <div className='all-container'>
                                    <p className='all-text'>All</p>
                                    <i className='all-text-arrow'>🞃</i>
                                </div>

                                <form action='' className='input-container'>
                                    <input type='text' name='Search' id='search' placeholder='Search vikash.com' />
                                    <button type='submit' className='search-icon-button'>
                                        <i className='fi-xnsuhl-search search-icon'></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className='all-list-container'>
                            <div className='language-container'>
                                <div className='language'>
                                    <img className='india-image' src={flagimg} alt='no loaded' />
                                    <p className='language-text'>EN</p>
                                    <i className='language-icon ic'>🞃</i>
                                </div>
                            </div>
                            <div className="signin-container" id='signin-container'>
                                <div className="signin-box">
                                    <div className="sign-and-login-container">
                                        <div className="signin">
                                            <a href={Signup} className='link-tag-box'>{Signinvar}</a>
                                        </div>
                                        <div className="login">
                                            <a href={Login} className='link-tag-box'>{Loginvar}</a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='account-list-container'>
                                <div className='account-list' onClick={Signuppage} onDoubleClick={Signupdblpage}>
                                    <div className='account-text-container'>
                                        <p className='text-up'>{show ? 'Signin' : getdata.name}</p>
                                        <p className='text-down'>Account & Lists</p>
                                    </div>
                                    <i className='language-icon icn'>🞃</i>
                                </div>
                            </div>
                            <div className='return-order-container'>
                                <Link to='/user/return-orders' className='return-order' >
                                    <div className='order'>
                                        <p className='text-up'>Return</p>
                                        <p className='text-down'>& Orders</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='add-card-container'>
                                <Link to='/viewcart' className='add-container'>
                                    <i className='fi-xnluxl-shopping-cart cart-shop' ></i>
                                    <b className='text-down'>Cart</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='second-header-container'>
                    <div className='second-header'>
                        <div className='second-all-container'>
                            <div className='second-all'>
                                <i className='fi-xnsuxl-three-bars-solid text-down'></i><b className='text-down'>All</b>
                            </div>
                        </div>
                        <div className='minitv-container'>
                            <div className='minitv'>
                                <p className='text-down'>Vikash miniTv</p>
                            </div>
                        </div>
                        <div className='sell-list-container'>
                            <div className='sell-list'>
                                <p className='text-down'>Sell</p>
                            </div>
                        </div>
                        <div className='vikash-pay-container'>
                            <div className='vikash-pay'>
                                <p className='text-down'>Vikash Pay</p>
                            </div>
                        </div>
                        <div className='buy-again-container'>
                            <div className='buy-again'>
                                <p className='text-down'>Buy again</p>
                            </div>
                        </div>
                        <div className='gift-card-container'>
                            <div className='gift-card'>
                                <p className='text-down'>Gift card</p>
                            </div>
                        </div>
                        <div className='persional-care-container'>
                            <div className='persional-care'>
                                <p className='text-down'>Health, Household & Persional Care</p>
                            </div>
                        </div>
                        <div className='gift-ideas-container'>
                            <div className='gift-ideas'>
                                <p className='text-down'>Gift ideas</p>
                            </div>
                        </div>
                        <div className='vikash-basics-container'>
                            <div className='vikash-basics'>
                                <p className='text-down'>VikashBasics</p>
                            </div>
                        </div>
                        <div className='home-improvement-container'>
                            <div className='home-improvement'>
                                <p className='text-down'>Home improvement</p>
                            </div>
                        </div>
                    </div>
                    <div className='offer-container'>
                        <div className='offer'>
                            <img className='im' src={offerimg} alt='no loaded' />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
