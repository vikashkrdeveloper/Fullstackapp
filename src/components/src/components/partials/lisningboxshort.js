import React from 'react'

const Lisningboxshort=(props)=> {

    return (
        <>
            <div className="product-deals-box startg">
                <a href="/" className="attributes">
                    <div className="img-offer-container">
                        <img className="image-offer" src={props.productImage} alt="loading.." />
                    </div>
                    <div className="dealday-container">
                        <div className="off-container">
                            <p className="save-offer-text">Up to 32% of</p>
                        </div>
                        <p className="save-offer-text new-add">Deal of the Day</p>
                    </div>
                    <div className="dealday-product-container">
                        <p className="save-offer-text new-add1">{props.productName}</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Lisningboxshort
