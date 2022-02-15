import Defines from '../context/defines';
import React, { useContext } from "react";


const Header = () => {

    let { defines, setDefines } = useContext(Defines);

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
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav-item me-auto"></ul>
                                    <ul className="navbar-nav mb-2 mb-lg-0" style={{marginRight:"20px"}}>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                SERVICES
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link bold" href="#">COMPANY</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link bold" href="#">LIBRARY</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link bold">CONTACT US</a>
                                        </li>
                                    </ul>
                                                                        
                                    <ul className="navbar-nav mb-2 mb-lg-0" style={{marginRight:"40px"}}>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                EN
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">EN</a></li>
                                                <li><a className="dropdown-item" href="#">FR</a></li>
                                                <li><a className="dropdown-item" href="#">UA</a></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <div className="searchIcon"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <div className="userIcon"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <div className="likeIcon"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <div className="bagIcon"></div>
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
