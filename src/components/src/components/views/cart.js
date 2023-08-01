import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Cart.css';
const Cart = () => {
   
  const navigate = useNavigate();

  const callcartpage = async () => {
    try {
    const res=  await fetch('/cart', {
        method: "GET",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: "include"
      })
   
      const data= await res.json();
      
    }
    catch (error) {
      navigate('/login');

    }


  }

  useEffect(() => {
    callcartpage();
  }, [])
  return (
    <>
      <main className='cart-main-container'>
        <div className="cart-container">
          <div className="cart-show-container"></div>
          <div className="cart-price-container"></div>
        </div>
      </main>
    </>
  )
}

export default Cart;
