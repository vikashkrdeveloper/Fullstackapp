import React, { useState } from 'react'
import './Addproject.css';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
function Addproject() {
  const [getdata, setdata] = useState({ producttitle: "", discription: "", productimage: "", category: "", subcategory: "", price: "", country: "" })
  const navigate = useNavigate();
  const changevalue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({ ...getdata, [name]: value });
  }

  const submitfun = async (event) => {
    event.preventDefault();
    try {
      const { producttitle, discription, productimage, category, subcategory, price, country } = getdata;
      const res = await fetch('/dashboard/addproduct', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ producttitle, discription, productimage, category, subcategory, price, country })
      })

      if (res.status === 200) {
        toast.success('Product add sucessfully');
        navigate('/subadmin/dashboard/products', { replace: true })
      }
      else if (res.status === 500) {
        toast.error('All field require');
      }
      else if (res.status === 404) {
        toast.error('Sum technical issues');
      }

    }
    catch (error) {
      toast.error('This time sum technical issues pleased try after sum time');
    }


  }

  return (


    <>
      <main className='addproject-main-container'>
        <div className="heading-project-container">
          <h1 className='heading-project'>Add Booth details</h1>
        </div>
        <div className="product-input-container">
          <form action="" method="POST" className='form-box-create' onSubmit={submitfun}>
            <div className="input-box-container">
              <div className="input-container-product">
                <p className='titlename'>Booth Name</p>
                <input type="text" name='boothname' id='producttitle' value={getdata.producttitle} onChange={changevalue} placeholder='Name' className='inputfield-box-con' />
              </div>

              <div className="input-container-product">
                <p className='titlename'>Label</p>
                <textarea name="discription" id="label" cols="10" rows="8" value={getdata.discription} onChange={changevalue} placeholder='Type here'></textarea>
              </div>
              <div className="input-container-product-box">
                <div className="input-container-product">
                  <p className='titlename'>Party</p>
                  <select name="category" id="" className='inputfield-box-con' value={getdata.category} onChange={changevalue}>
                    <option value="">Select</option>
                    <option value="bjp">BJP</option>
                    <option value="rjd">RJD</option>
                    <option value="inc">INC</option>
                  </select>
                </div>
                <div className="input-container-product">
                  <p className='titlename'>Parent constituency</p>
                  <select name="subcategory" id="" className='inputfield-box-con' value={getdata.subcategory} onChange={changevalue}>
                    <option value="">Select</option>
                    <option value="Ashti">Ashti</option>
                    <option value="karanja">Karanja</option>
                    <option value="bihar">Bihar</option>
                    <option value="delhi">Delhi</option>

                  </select>
                </div>

              </div>

              <div className="input-container-product-box">

                <div className="input-container-product-box-cn">
                  <p className='titlename'>Total Vote</p>
                  <input type="text" name="totalvote" id="" className='inputfield-box-con' placeholder='Type here' value={getdata.price} onChange={changevalue} />
                </div>

                <div className="input-container-product-box-cn">
                  <p className='titlename'>Voting Year</p>
                  <input type="text" name="votingyear" id="" className='inputfield-box-con' placeholder='Year Type here' value={getdata.price} onChange={changevalue} />
                </div>


              </div>

              <div className="submit-button-container">
                <input type="submit" id='submit-item' value='Submit details' />

              </div>


            </div>
          </form>



        </div>

      </main>
    </>
  )
}

export default Addproject
