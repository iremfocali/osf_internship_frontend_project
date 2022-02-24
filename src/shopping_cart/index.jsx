import React, { useContext, useEffect } from "react";
import Defines from '../context/defines';
import Breadcrumb from "../body/breadcrumb";


const ShoppingCart = () => {

    let { setDefines } = useContext(Defines);

    useEffect(() => {
        let breadcrumb = [{ name: "Home", url: "/homepage", active: true }, { name: "Shopping Cart", url: "/shopping_cart", active: false }];

        setDefines(prev => {
            const newDefines = { ...prev }
            newDefines.breadcrumb = breadcrumb;
            return newDefines
        })

    }, [setDefines])

    return <>

        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="jumbotron shoppingcart_page text-left">
                        <div className="container">

                            <Breadcrumb />
                            <div className="col">

                                <div className="row field_1">
                                    <div className="col">

                                        <div className="row">
                                            <div className="col-12 col-xl-6 col-lg-6">
                                                <div className="row">
                                                    <div className="col image1">
                                                        <img src="./cart-page1.jpg" alt="" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-12 col-xl-6 col-lg-6">
                                                <div className="row r_1">
                                                    <div className="col-2" style={{paddingLeft:"90px"}}>CCCCCCC</div>
                                                    <div className="col-2" style={{paddingLeft:"170px"}}>
                                                        <h4>$2,195</h4>
                                                    </div>
                                                    <div className="col-2" style={{paddingLeft:"180px"}}>
                                                        <button type="button" className="close" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-12 col-xl-6 col-lg-6">
                                                <div className="row">
                                                    <div className="col image1">
                                                        <img src="./cart-page1.jpg" alt="" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-12 col-xl-6 col-lg-6">
                                                <div className="row r_1">
                                                    <div className="col-2" style={{paddingLeft:"90px"}}>CCCCCCC</div>
                                                    <div className="col-2" style={{paddingLeft:"170px"}}>
                                                        <h4>$2,195</h4>
                                                    </div>
                                                    <div className="col-2" style={{paddingLeft:"180px"}}>
                                                        <button type="button" className="close" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row field_2">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="input-group flex-nowrap" style={{ paddingTop: "73px", paddingLeft: "60px", marginLeft: "45px" }}>
                                                    <input type="text" aria-label="..." className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-2" style={{ paddingTop: "73px", paddingLeft: "70px" }}>
                                                <button type="button" className="btn btn-success">APPLY</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="row">
                                                    <div className="col" style={{ paddingTop: "73px" }}>
                                                        <button type="button" className="btn btn-primary btn-sm" >UPDATE CART</button>
                                                    </div>
                                                    <div className="col" style={{ paddingTop: "50px" }}>CART SUBTOTAL:</div>
                                                    <div className="col" style={{ paddingTop: "70px" }}>SHIPPIING AND HANDLING:</div>
                                                    <div className="col" style={{ paddingTop: "73px" }}>ORDER TOTAL:</div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="row" style={{ paddingLeft: "227px" }}>
                                                    <div className="col" style={{ paddingTop: "73px" }}>
                                                        <button type="button" className="btn btn-primary btn-sm">PROCEED TO CHECKOUT</button>
                                                    </div>
                                                    <div className="col" style={{ paddingTop: "8px" }}>$3.489</div>
                                                    <div className="col" style={{ paddingTop: "70px" }}>KKKKKK</div>
                                                    <div className="col" style={{ paddingTop: "100px" }}>
                                                        <h3>$3.489</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>



    </>
};

export default ShoppingCart;
