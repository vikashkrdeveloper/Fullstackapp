import React, { useEffect,useState } from 'react'
import './AdminDashboard.css'
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import Loadercomponent from './Loadercomponent';
function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const dashboardauth = async () => {
    try {
      const res = await fetch('/subadminpannel', {
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
                <NavLink to='/subadmin/dashboard/products' className="dashbord-side-bar">
                  <span class="material-symbols-outlined icon">
                    inventory_2
                  </span>
                  <span className='dashboard-products'>Polling</span>
                  <span class="material-symbols-outlined dropdown-arrow"  >
                    arrow_drop_down
                  </span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/subadmin/dashboard/addpolling/details' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Add Polling details</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/subadmin/dashboard/pollinglist' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Polling List</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/subadmin/dashboard/polling/categoties' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Polling Categoties</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar">
                <NavLink to='/subadmin/dashboard/admin/profile' className="dashbord-side-bar">
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

export default AdminDashboard
