import 'antd/lib/button/style/index.css';

import Defines from '../context/defines';
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";


const Header = () => {

    let { defines, setDefines } = useContext(Defines);

    const [services, setServices] = useState({
        active: false,
        categories: ['Accessories', 'Alcohol', 'Art', 'Books', 'Drink', 'Electronics', 'Flower&Plants', 'Food', 'Gadgets', 'Garden', 'Grocery', 'Home', 'Jewelry', 'Kids&Baby', 'MensFashion', 'Mobile', 'Motorcycles', 'Movies', 'Music', 'Office', 'Pets', 'Romantic', 'Sport', 'Toys'],
        sale: ['Accessories', 'Alcohol', 'Art', 'Books', 'Drink', 'Electronics', 'Flower&Plants', 'Food']
    })

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light border border-3 border-top-0 border-start-0 border-end-0 pt-0 pb-0" style={{ backgroundColor: "#FFFFFF" }}>

                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <div className="logo"></div>
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ height: "80px" }}>
                                    <ul className="nav-item me-auto"></ul>
                                    <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginRight: "20px", height: "60px", marginTop: "20px" }}>
                                        <li className="nav-item">
                                            <div className="nav-link bold link_1" onClick={() => {

                                                let active = services.active ? false : true

                                                setServices(prev => {
                                                    const newService = { ...prev }
                                                    newService.active = active
                                                    return newService
                                                })

                                                //console.log('deneme')
                                            }}>SERVICES</div>


                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link bold link_1" href="#">COMPANY</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link bold link_1" href="#">LIBRARY</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link bold link_1">CONTACT US</a>
                                        </li>
                                    </ul>

                                    <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginRight: "40px", height: "60px", marginTop: "20px" }}>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle regular_nav_link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                EN
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">EN</a></li>
                                                <li><a className="dropdown-item" href="#">FR</a></li>
                                                <li><a className="dropdown-item" href="#">UA</a></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle regular_nav_link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                $US
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">US</a></li>
                                                <li><a className="dropdown-item" href="#">EUR</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">UAH</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav mb-2 mb-lg-0" style={{ height: "60px", marginTop: "20px" }}>
                                        <li className="nav-item">
                                            <a className="nav-link regular_nav_link" href="#">
                                                <div className="searchIcon"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link regular_nav_link" href="#">
                                                <div className="userIcon"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link regular_nav_link" href="#">
                                                <div className="likeIcon"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link regular_nav_link" href="#">
                                                <div className="bagIcon"></div>
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className={services.active ? "row mega_menu" : "d-none"}>
                            Oldu demi :D
                            <div className="col-7">
                                <div className="row">
                                    <div className="col">PRODUCT CATEGORIES</div>
                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="row">
                                    <div className="col">SALE</div>
                                </div>
                                <div className="row">
                                    <div className="col"></div>
                                </div>
                            </div>
                            <div className="col-3"></div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
