import React from 'react'
import Header from './components/partials/header'
import Footer from './components/partials/footer'
import Main from './components/views/main';
import Error from './error';
import { Routes, Route, Router } from 'react-router-dom';
import Signup from './components/views/signup';
import Login from './components/views/login';
import Productlisining from './components/views/productlisining';
import Productdetails from './components/views/productdetails';
import Cart from './components/views/cart';
import ReturnAndOrders from './components/views/return_and_order';
import Productbuy from './components/views/productbuy';
import { ToastContainer } from 'react-toastify';
import Logout from './components/views/logout';
import Dashboard from './components/views/dashboard';
import Addproject from './components/context/addproject';
import Allproducts from './components/context/allproducts';
import Productslist from './components/context/productslist';
import Categoties from './components/context/categoties';
import Orders from './components/context/orders';
function App() {
  return (
    <>

      <Header />
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/lisning/handwash' element={<Productlisining />} />
          <Route path='/viewcart' element={<Cart />} />
          <Route path='/user/return-orders' element={<ReturnAndOrders />} />
          <Route path='/productdetails/handwash' element={<Productdetails />} />
          <Route path='/checkout/init' element={<Productbuy />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='/dashboard/products' element={<Allproducts/>}/>
            <Route path='/dashboard/addproducts' element={<Addproject/>}/>
            <Route path='/dashboard/productslist' element={<Productslist/>}/>
            <Route path='/dashboard/categoties' element={<Categoties/>}/>
            <Route path='/dashboard/user/orders' element={<Orders/>}/>
          </Route>
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Error />} />

        </Routes>

      <Footer />


    </>
  )
}

export default App
