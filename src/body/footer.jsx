import React, { useContext } from "react";
import Defines from '../context/defines';
//import { Anchor } from 'antd';
//const { Link } = Anchor;

const Footer = () => {

    let { defines, setDefines } = useContext(Defines);

    return (
        <div className="container text-start">
            <div className="row">

                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">

                    <ul className="list-none">
                        <li>&copy; Copyright 2019.</li>
                        <li className="mb-3">All Rights Reserved.</li>
                        <li className="font-bold mb-3">CONTACT</li>
                        <li>Headquarters:</li>
                        <li>5600,Blvd.des Galeries,Bur 530</li>
                        <li className="mb-3">Quebec, Quebec G2K 2H6</li>
                        <li className="mb-3"><a href="mailto:contact@osf-global.com">contact@osf-global.com</a></li>
                        <li className="mb-2" onClick={()=>{
                             let text = "Press a button!\nEither OK or Cancel."
                            if (window.confirm(text) == true) {
                                text = "You pressed OK!";
                              } else {
                                text = "You canceled!";
                              }
                        }}>+1 (888) 548-4344</li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="font-bold mb-3">CATEGORIEST</li>
                        <li className="mb-2"><a href="/">Alcohol</a></li>
                        <li className="mb-2"><a href="/">Art</a></li>
                        <li className="mb-2"><a href="/">Books</a></li>
                        <li className="mb-2"><a href="/">Drink</a></li>
                        <li className="mb-2"><a href="/">Electronics</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="mb-2"><a href="/">Home</a></li>
                        <li className="mb-2"><a href="/">Jewelry</a></li>
                        <li className="mb-2"><a href="/">Kids Baby</a></li>
                        <li className="mb-2"><a href="/">Men's Fashion</a></li>
                        <li className="mb-2"><a href="/">Mobile</a></li>
                        <li className="mb-2"><a href="/">Motorcycles</a></li>
                        <li className="mb-2"><a href="/">Movies</a></li>
                        <li className="mb-2"><a href="/">Music</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="mb-2"><a href="/">Sport</a></li>
                        <li className="mb-2"><a href="/">Toys</a></li>
                        <li className="mb-2"><a href="/">Travel</a></li>
                        <li className="mb-2"><a href="/">Woman's Fashion</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="font-bold mb-3">ABOUT</li>
                        <li className="mb-2"><a href="/">About us</a></li>
                        <li className="mb-2"><a href="/">Delivery</a></li>
                        <li className="mb-2"><a href="/">Testimonials</a></li>
                        <li className="mb-2"><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li>
                            <div className="col"><a href="/">F</a></div>
                            <div className="col"><a href="/">G</a></div>
                            <div className="col"><a href="/">T</a></div>
                            <div className="col"><a href="/">P</a></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Footer;
