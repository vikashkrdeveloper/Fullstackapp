import React from 'react'
import goldcloneproduct from '../images/goldcone.jpg';
import Lisningboxshort from './lisningboxshort';

function Lisningbox() {
    return (
        <>
            <div className="product-today-deals-container">
                <div className="product-today-deals">
                    <div className="today-deals-container">
                        <h2 className="heading-text">Today’s Deals</h2>
                        <a href="/" className="attributes see">
                            <p className="see-all">See all deals</p>
                        </a>
                    </div>
                    <div className="product-deals-container">
                        <div className="product-deals-box-container">

                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />
                            <Lisningboxshort
                                productName="Bata, Hush Puppies & more"
                                productImage={goldcloneproduct}
                            />


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Lisningbox
