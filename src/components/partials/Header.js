import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    const clickevent = () => {
        document.getElementById('search-box').style.display = "block"

    }
    const dblclickevent = () => {
        document.getElementById('search-box').style.display = "none"

    }
    const [show, setdata] = useState(true);
    const [getData, setData] = useState({ name: "" });
    let Signup;
    if (getData.role === 1) {
        Signup = show ? '/signin' : '/subadmin/dashboard'


    }
    else {
        Signup = show ? '/signin' : '/user/dashboard'

    }
    const Login = show ? '/login' : '/logout'

    const Signinvar = show ? 'Sign up' : getData.name + ' 🞃'
    const Loginvar = show ? 'Log in' : 'Log out'


    const datagetdinamic = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json();

            setData(data)
            setdata(false);


        }
        catch (error) {
            console.log('some technical issue');
        }
    }

    useEffect(() => {
        datagetdinamic();
    }, [])


    return (
        <>
            <header className="header">
                <nav className="header-nav">
                    <div className="logo-container">
                        <img className="logo-img" id="logo-img" src={logo} alt="Loading.." />
                        <p className="logo-text" id="logo-text">Vikash</p>
                    </div>
                    <ul className="nav-ul">
                        <li className="ul-li">
                            <Link to='/' className='li-attribute'>

                                <p className="li-attributes home" id="home">Home</p>
                            </Link>
                        </li>
                        <li className="ul-li">
                            <Link to='/aboutme' className='li-attribute'>

                                <p className="li-attributes about " id="about">About Me</p>
                            </Link>
                        </li>
                        <li className="ul-li ">
                            <Link to='/contact' className='li-attribute'>

                                <p className="li-attributes contact" id="contact">Contact</p>
                            </Link>
                        </li>
                        <li className="ul-li ">
                            <Link to={Login} className='li-attribute'>

                                <p className="li-attributes education" id="education">{Loginvar}</p>
                            </Link>
                        </li>

                        <li className="ul-li last-li">
                            <Link to={Signup} className='li-attribute'>

                                <p className="li-attributes projects" id="project">{Signinvar}</p>
                            </Link>
                        </li>

                        <div className="container-search">
                            <div className="input-searc-container" id='search-box'>
                                <input type="text" id='search' placeholder='Search' />
                            </div>
                            <label htmlFor="search">
                                <div className="search-box-items-container" onClick={clickevent} onDoubleClick={dblclickevent}>
                                    <i class="fi-xnsuhl-search"></i>
                                </div>
                            </label>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
