import React, { useContext } from "react";
import Defines from '../context/defines';
//import { Anchor } from 'antd';
//const { Link } = Anchor;
import moment from "moment";
import "moment-timezone";
import { Checkbox,Button } from 'antd';

const Footer = () => {

    let { defines, setDefines } = useContext(Defines);

    return <>
        <div className="container text-start">
            <div className="row">

                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">

                    <ul className="list-none">
                        <li>&copy; Copyright {moment().format("YYYY")}.</li>
                        <li className="mb-3">All Rights Reserved.</li>
                        <li className="font-bold mb-3">CONTACT</li>
                        <li>Headquarters:</li>
                        <li>5600,Blvd.des Galeries,Bur 530</li>
                        <li className="mb-3">Quebec, Quebec G2K 2H6</li>
                        <li className="mb-3"><a href="mailto:contact@osf-global.com">contact@osf-global.com</a></li>
                        <li className="mb-2">

                            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                                +1 (888) 548-4344
                            </div>

                        </li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="font-bold mb-3">CATEGORIEST</li>
                        <li className="mb-2"><a href="/error_404">Alcohol</a></li>
                        <li className="mb-2"><a href="/error_404">Art</a></li>
                        <li className="mb-2"><a href="/error_404">Books</a></li>
                        <li className="mb-2"><a href="/error_404">Drink</a></li>
                        <li className="mb-2"><a href="/error_404">Electronics</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="mb-2"><a href="/error_404">Home</a></li>
                        <li className="mb-2"><a href="/error_404">Jewelry</a></li>
                        <li className="mb-2"><a href="/error_404">Kids Baby</a></li>
                        <li className="mb-2"><a href="/error_404">Men's Fashion</a></li>
                        <li className="mb-2"><a href="/error_404">Mobile</a></li>
                        <li className="mb-2"><a href="/error_404">Motorcycles</a></li>
                        <li className="mb-2"><a href="/error_404">Movies</a></li>
                        <li className="mb-2"><a href="/error_404">Music</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="mb-2"><a href="/error_404">Sport</a></li>
                        <li className="mb-2"><a href="/error_404">Toys</a></li>
                        <li className="mb-2"><a href="/error_404">Travel</a></li>
                        <li className="mb-2"><a href="/error_404">Woman's Fashion</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="list-none">

                        <li className="font-bold mb-3">ABOUT</li>
                        <li className="mb-2"><a href="/error_404">About us</a></li>
                        <li className="mb-2"><a href="/error_404">Delivery</a></li>
                        <li className="mb-2"><a href="/error_404">Testimonials</a></li>
                        <li className="mb-2"><a href="/error_404">Contact</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
                    <ul className="navbar-nav row mb-2 mb-lg-0 d-none d-xl-flex d-lg-flex" style={{ height: "60px", marginTop: "20px" }}>
                        <li className="nav-item col-3">
                            <a className="nav-link regular_nav_link" target="_blank" href="https://www.facebook.com/">
                                <div className="facebookIcon"></div>
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link regular_nav_link" target="_blank" href="https://www.google.com/">
                                <div className="googleIcon"></div>
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link regular_nav_link" target="_blank" href="https://www.twitter.com/">
                                <div className="twitterIcon"></div>
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link regular_nav_link" target="_blank" href="https://www.pinterest.com/">
                                <div className="pinterestIcon"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Open Pick an App?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <Checkbox> Always open these types of links in the associated app</Checkbox>
                    </div>
                    <div className="modal-footer">
                        <Button className="btn btn-secondary">Open Pick an App</Button>
                        <Button className="btn btn-primary" data-bs-dismiss="modal">Cancel</Button>
                    </div>
                </div>
            </div>
        </div>

    </>
};

export default Footer;
