import React, { useState } from 'react'
import './PollingDataadd.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function PollingDataadd() {
    const navigate = useNavigate();
    const [getdata, setdata] = useState({ pbno: "", pbn: "", pco: "", winner: "", firstroundwin: "", marginper: "", margin: "", totalvoters: "", bjpvoters: "", bjpvotersperc: "", incvoters: "", incvotersperc: "" })

    const changevalue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setdata({ ...getdata, [name]: value })
    }



    const submitform = async (event) => {
        event.preventDefault();
        const { pbno, pbn, pco, winner, firstroundwin, marginper, margin, totalvoters, bjpvoters, bjpvotersperc, incvoters, incvotersperc } = getdata;
        const res = await fetch('/pollingbooth/data', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ pbno, pbn, pco, winner, firstroundwin, marginper, margin, totalvoters, bjpvoters, bjpvotersperc, incvoters, incvotersperc })
        })
        if (res.status === 200) {
            toast.success('Data save sucessfully');
            navigate('/', { replace: '/' });
            window.location.reload();

        }
        else if (res.status === 408) {
            toast.error('pollingboothnumber already exist')
        }
        else if (res.status === 500) {
            toast.error('All field Require')
        }
    }



    return (
        <>
            <main className='pollingdata-container'>
                <div className="pollingdata-container-box">
                    <div className="heading-container"><h1>Polling booth data</h1></div>
                    <form action="" method='post'>

                        <input type='number' className='input-box-con' value={getdata.pbno} onChange={changevalue} name='pbno' placeholder='Polling Booth Number' />
                        <input type="text" className='input-box-con' value={getdata.pbn} onChange={changevalue} name='pbn' placeholder='Polling Booth Name' />
                        <input type="text" className='input-box-con' value={getdata.pco} onChange={changevalue} name='pco' placeholder='Parent Constituency' />
                        <input type="text" className='input-box-con' value={getdata.winner} onChange={changevalue} name='winner' placeholder='Winner-2014' />
                        <input type="text" className='input-box-con' value={getdata.firstroundwin} onChange={changevalue} name='firstroundwin' placeholder='1st Runner up other than INC and BJP' />
                        <input type="number" className='input-box-con' value={getdata.marginper} onChange={changevalue} name='marginper' placeholder='Margin ( % )' />
                        <input type="number" className='input-box-con' value={getdata.margin} onChange={changevalue} name='margin' placeholder='Margin ' />
                        <input type="number" className='input-box-con' value={getdata.totalvoters} onChange={changevalue} name='totalvoters' placeholder='Total Voters' />
                        <input type="number" className='input-box-con' value={getdata.bjpvoters} onChange={changevalue} name='bjpvoters' placeholder='BJP-Voters' />
                        <input type="number" className='input-box-con' value={getdata.bjpvotersperc} onChange={changevalue} name='bjpvotersperc' placeholder='BJP- % Voters' />
                        <input type="number" className='input-box-con' value={getdata.incvoters} onChange={changevalue} name='incvoters' placeholder='INC Voters' />
                        <input type="number" className='input-box-con' value={getdata.incvotersperc} onChange={changevalue} name='incvotersperc' placeholder='INC- % Voters' />
                        <div className="container-submit"><input type="submit" className='input-box-con-button' value="Submit" onClick={submitform} /></div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default PollingDataadd;

