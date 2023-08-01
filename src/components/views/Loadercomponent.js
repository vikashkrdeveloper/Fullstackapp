import { useState } from 'react'
import React from 'react'
import './Loadercomponent.css'
function Loadercomponent() {
    const [getdata, setdata] = useState(3)

    if (getdata !== 0) {
        setInterval(() => {
            setdata(getdata - 1)
        }, 300);
    }




    return (
        <>
            <div className="loader-container">
                <div className="container-loader-paragraf">
                    <div className="loader"></div>

                </div>
                <div className="heading-container">
                    <h1 className='loadername-text'>Our website is waking up! Just a <span>{getdata}</span> Second, please</h1>
                </div>
            </div>
        </>
    )
}

export default Loadercomponent
