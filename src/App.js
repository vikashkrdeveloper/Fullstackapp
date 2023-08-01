import React from 'react'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import { Route, Routes } from 'react-router-dom'
import Main from './components/views/Main'
import Contact from './components/views/Contact'
import About from './components/views/About'
import Login from './components/views/Login'
import Signin from './components/views/Signin'
import Error from './components/Error'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './components/views/logout'
import AdminDashboard from './components/views/AdminDashboard'
import UserDashboard from './components/views/UserDashboard'
import Addproject from './components/context/addproject';
import Allproducts from './components/context/allproducts';
import Productslist from './components/context/productslist';
import Categoties from './components/context/categoties';
import Orders from './components/context/orders';
import PollingDataadd from './components/views/PollingDataadd'
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/api/pollingbooth/data/add' element={<PollingDataadd />} />
                <Route path='/aboutme' element={<About />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/subadmin/dashboard' element={<AdminDashboard />} >
                    <Route path='/subadmin/dashboard/products' element={<Allproducts />} />
                    <Route path='/subadmin/dashboard/addpolling/details' element={<Addproject />} />
                    <Route path='/subadmin/dashboard/pollinglist' element={<Productslist />} />
                    <Route path='/subadmin/dashboard/polling/categoties' element={<Categoties />} />
                    <Route path='/subadmin/dashboard/admin/profile' element={<Orders />} />
                </Route>
                <Route path='/user/dashboard' element={<UserDashboard />} >
                    <Route path='/user/dashboard/profile' element={<Allproducts />} />
                    <Route path='/user/dashboard/profile/edit/details' element={<Addproject />} />
                    <Route path='/user/dashboard/logout' element={<Logout />} />
                    <Route path='/user/dashboard/profile/delete' element={<Productslist />} />
                    <Route path='/user/dashboard' element={<Orders />} />
                </Route>
                <Route path='*' element={<Error />} />
            </Routes>
            <ToastContainer />

            <Footer />
        </>
    )
}

export default App
