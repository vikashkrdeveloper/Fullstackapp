import React, { useEffect, useState } from 'react'
import './UserDashboard.css'
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import Loadercomponent from './Loadercomponent';

function UserDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const dashboardauth = async () => {
    try {
      const res = await fetch('/user/dashboard/pannel', {
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
      {isLoading ? (
        <Loadercomponent />
      ) : (
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
                  <NavLink to='/user/dashboard/profile' className="dashbord-side-bar">
                    <span class="material-symbols-outlined icon">
                      person
                    </span>
                    <span className='dashboard-products'>Profile</span>
                    <span class="material-symbols-outlined dropdown-arrow"  >
                      arrow_drop_down
                    </span>
                  </NavLink>
                </div>
                <div className="dashbord-side-bar  dropdown-product-con">
                  <NavLink to='/user/dashboard/profile/edit/details' style={{ textDecoration: 'none' }}>

                    <span className='dashboard-products dropdown-pro'>Edit Profile</span>
                  </NavLink>
                </div>
                <div className="dashbord-side-bar  dropdown-product-con">
                  <NavLink to='/user/dashboard/logout' style={{ textDecoration: 'none' }}>

                    <span className='dashboard-products dropdown-pro'>Log Out</span>
                  </NavLink>
                </div>
                <div className="dashbord-side-bar  dropdown-product-con">
                  <NavLink to='/user/dashboard/profile/delete' style={{ textDecoration: 'none' }}>

                    <span className='dashboard-products dropdown-pro'>Delete Profile</span>
                  </NavLink>
                </div>
                <div className="dashbord-side-bar">
                  <NavLink to='/user/dashboard' className="dashbord-side-bar">
                    <span class="material-symbols-outlined icon">
                      person
                    </span>

                    <span className='dashboard-products'>Profile</span>
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
      )}
    </>
  )
}

export default UserDashboard
