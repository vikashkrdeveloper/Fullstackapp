import React from 'react'
import Productlisingbox from './productlisingbox';

function Productbox(props) {
    return (
        <>
            <div className="all-product-list-container">
                <div className="recomanded-container">
                    <h3 className="recomanded-heading-text">Recommended for you</h3>
                </div>
                <div className="productlist-details-container">
                    <div className="productlist-details-slide-container">
                        <div className="productlist-details-slide-box-container">
                         
                            <Productlisingbox
                                productCompanyName="Puma"
                                producttitle="Men's Trackracer Idp Closed Shoe"
                                gettimeday="Monday, July 8"
                                producttitleshort="MensTrackracer"
                                productdiscount="-0%"
                                productActualprice="3,999.00"
                                productDiscoundprice="3,999"
                                asinShoesProduct={props.asinShoesProduct}
                            />
                            <Productlisingbox
                                productCompanyName="Puma"
                                producttitle="Men's Trackracer Idp Closed Shoe"
                                gettimeday="Monday, July 8"
                                producttitleshort="MensTrackracer"
                                productdiscount="-20%"
                                productActualprice="3,999.00"
                                productDiscoundprice="3,499"
                                asinShoesProduct={props.Product1}
                            />
                            <Productlisingbox
                                productCompanyName="Puma"
                                producttitle="Men's Trackracer Idp Closed Shoe"
                                gettimeday="Monday, July 8"
                                producttitleshort="MensTrackracer"
                                productdiscount="-40%"
                                productActualprice="3,999.00"
                                productDiscoundprice="2,499"
                                asinShoesProduct={props.Product2}
                            />
                            <Productlisingbox
                                productCompanyName="Puma"
                                producttitle="Men's Trackracer Idp Closed Shoe"
                                gettimeday="Monday, July 8"
                                producttitleshort="MensTrackracer"
                                productdiscount="-30%"
                                productActualprice="3,999.00"
                                productDiscoundprice="2,999"
                                asinShoesProduct={props.Product3}
                            />
                            <Productlisingbox
                                productCompanyName="Puma"
                                producttitle="Men's Trackracer Idp Closed Shoe"
                                gettimeday="Monday, July 8"
                                producttitleshort="MensTrackracer"
                                productdiscount="-60%"
                                productActualprice="3,999.00"
                                productDiscoundprice="1,499"
                                asinShoesProduct={props.Product4}
                            />
                            <Productlisingbox
                                productCompanyName="Puma"
                                producttitle="Men's Trackracer Idp Closed Shoe"
                                gettimeday="Monday, July 8"
                                producttitleshort="MensTrackracer"
                                productdiscount="-50%"
                                productActualprice="3,999.00"
                                productDiscoundprice="1,999"
                                asinShoesProduct={props.Product5}
                            />
                            <Productlisingbox
                                productCompanyName="Puma"
                                producttitle="Men's Trackracer Idp Closed Shoe"
                                gettimeday="Monday, July 8"
                                producttitleshort="MensTrackracer"
                                productdiscount="-40%"
                                productActualprice="3,999.00"
                                productDiscoundprice="2,499"
                                asinShoesProduct={props.Product6}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Productbox;
