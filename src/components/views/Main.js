import React, { useEffect, useState } from 'react';
import './Main.css';
import Loadercomponent from './Loadercomponent';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [getdata, setdata] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const getapidata = async () => {
    try {
      const res = await fetch('/pollingbooth/data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json();
      setdata(data)
      if (Array.isArray(data)) {
        setdata(data);
      } else if (data && data.items) {
        setdata(data.items);
      }

    }
    catch (error) {
      console.log('Some technical issue')
    }
  };

  useEffect(() => {
    getapidata();
  }, [])


  const handleButtonClick = async (id) => {
    try {
      const res = await fetch(`/pollingbooth/data/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status === 200) {
        toast.success("Delete Sucessfully Done");
        window.location.reload()
      }
    }
    catch (error) {
      console.log('Some technical issue')
    }
  }


  return (
    <>

      {isLoading ? (
        <Loadercomponent />
      ) : (
        <main className='main-home-container'>
          <div className="main-home-container-box">
            <div className="main-home-container-box-heading">
              <div className="main-home-box-heading">
                <div className="boothnumber boothdetails"><h3 className='heading-text'>PBN.</h3></div>
                <div className="boothname boothdetails"><h3 className='heading-text'>Polling Booth Name</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Parent Contituency</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Winner-2014</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Runner up.</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Margin (%)</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Margin</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Total votes</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Bjp-votes</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>Bjp- % votes</h3></div>
                <div className="boothparcont boothdetails"><h3 className='heading-text'>INC-votes</h3></div>
                <div className="boothparcont boothdetails "><h3 className='heading-text last-heading-text'>INC- % votes</h3></div>

              </div>

            </div>
            <div className='main-value-cointainer' >

              {getdata.map((item, index) => (
                <div className="main-value-cointainer-scroll-box">
                  <div className="main-value-cointainer-scroll">
                    <div className="boothnumber boothdetails-value-container number">  <p className='value-details-database' key={index}>{item.pollingboothnumber}</p></div>
                    <div className="boothname boothdetails-value-container pbname"><p className='value-details-database' key={index}>{item.pollingboothname}</p></div>
                    <div className="boothparcont boothdetails-value-container pbc"><p className='value-details-database' key={index}>{item.parentconstituency}</p></div>
                    <div className="boothparcont boothdetails-value-container winner"><p className='value-details-database' key={index}>{item.winner}</p></div>
                    <div className="boothparcont boothdetails-value-container runnerup"><p className='value-details-database' key={index}>{item.firstrunnerup}</p></div>
                    <div className="boothparcont boothdetails-value-container margin"><p className='value-details-database' key={index}>{item.marginpercentage}</p></div>
                    <div className="boothparcont boothdetails-value-container margin"><p className='value-details-database' key={index}>{item.margine}</p></div>
                    <div className="boothparcont boothdetails-value-container margin"><p className='value-details-database' key={index}>{item.totalvoters}</p></div>
                    <div className="boothparcont boothdetails-value-container margin"><p className='value-details-database' key={index}>{item.bjpvotes}</p></div>
                    <div className="boothparcont boothdetails-value-container margin"><p className='value-details-database' key={index}>{item.bjpvotespercentage}</p></div>
                    <div className="boothparcont boothdetails-value-container margin"><p className='value-details-database' key={index}>{item.incvotes}</p></div>
                    <div className="boothparcont boothdetails -value-container margin"><p className='value-details-database' key={index}>{item.incvotespercentage}</p></div>
                    {/* <div className="boothparcont boothdetails -value-container "><button className='button-container' key={index}>Edit</button></div> */}
                    <div className="boothparcont boothdetails -value-container "><button className='button-container' key={index} onClick={() => handleButtonClick(item._id)}>Delete</button></div>
                  </div>
                </div>

              ))}
            </div>

            <div className="main-home-container-box-bottom">
              <div className="main-home-box-bottom">

                <Link to='/api/pollingbooth/data/add' className="main-home-box-add-button-container">
                  <button className='button-container'>Add Data</button>
                </Link>
              </div>

            </div>
          </div>


        </main>
      )}
    </>
  )
}

export default Main
