import React, { useEffect } from 'react'
import './Dashboard.css';
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
function Dashboard() {
  const navigate = useNavigate();
  const dashboardauth = async () => {
    try {
      const res = await fetch('/dashboard', {
        method: "GET",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: "include"
      })

      await res.json();

    }
    catch (error) {
      navigate('/', { replace: true });

    }

  }
  useEffect(() => {
    dashboardauth();
  })






  return (
    <>
      <main className='dashboard-main-container'>
        <div className="dashbord-side-bar-container">
          <div className="dashbord-side-bar-top-box-container">
            <div className="dashbord-side-bar-top-box">
              <div className="heading-dashbord-side-bar-container">
                <span class="material-symbols-outlined  icon"  >
                  dashboard
                </span>
                <span className='dashboard-heading'>Dashboard</span>
              </div>
              <div className="dashbord-side-bar">
                <NavLink to='/dashboard/products' className="dashbord-side-bar">
                  <span class="material-symbols-outlined icon">
                    inventory_2
                  </span>
                  <span className='dashboard-products'>Products</span>
                  <span class="material-symbols-outlined dropdown-arrow"  >
                    arrow_drop_down
                  </span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/dashboard/addproducts' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Add Products</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/dashboard/productslist' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Products List</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/dashboard/categoties' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Categoties</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar">
                <NavLink to='/dashboard/user/orders' className="dashbord-side-bar">
                  <span class="material-symbols-outlined icon">
                    shopping_cart
                  </span>

                  <span className='dashboard-products'>Orders</span>
                  <span class="material-symbols-outlined dropdown-arrow"  >
                    arrow_drop_down
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="dashbord-side-bar-bottom-box-container">
            <div className="dashbord-side-bar-bottom-box"></div>
          </div>

        </div>
        <div className="renderother-container">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Dashboard
