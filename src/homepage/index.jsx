import Defines from '../context/defines';
import Breadcrumb from "../body/breadcrumb";
import React, { useContext, useState, useEffect } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { Button } from 'antd';


const HomePage = () => {

    let { defines, setDefines } = useContext(Defines);

    useEffect(() => {
        let breadcrumb = [{ name: "Homepage", url: "/homepage", active: true }];

        setDefines(prev => {
            const newDefines = { ...prev }
            newDefines.breadcrumb = breadcrumb;
            newDefines.box = 'abc';
            return newDefines
        })

    }, [setDefines])

    return (
        <>

            <div className="container text-left">
                <div className="row">
                    <div className="col-9">

                        <div id="carouselExampleIndicators" className="carousel slide float-right" data-bs-ride="carousel" style={{ padding: "25px 0px", borderRadius: "8px" }}>
                            <div className="carousel-indicators" style={{ marginBottom: "80px" }}>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="http://placehold.jp/16/3d4070/ffffff/930x500.jpg?text=Slide%201" className="d-block w-100 rounded-md img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://placehold.jp/16/3d4070/ffffff/930x500.jpg?text=Slide%202" className="d-block w-100 rounded-md img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="http://placehold.jp/16/3d4070/ffffff/930x500.jpg?text=Slide%203" className="d-block w-100 rounded-md img-fluid" alt="..." />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-3">
                        <div className="card rounded-md border-0" style={{ width: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md maincard_homepage w-100" style={{ height: "335px" }}></div>
                            <div className="card-body pt-4">
                                <p className="card-title text-center text-xl">Follow us on Facebook</p>
                                <p className="card-text text-center text-sm">Send ut perspiciatis unde omnis iste natus error sit</p>
                                <div className="w-100 h-auto text-center pt-4" style={{ display: "flex", justifyContent: "center" }}>

                                    <button type="button" className="btn btn-outline-primary rounded-full border-2" style={{ width: "150px", height: "40px" }}><GrFacebookOption className="float-left mt-1 ml-2 mb-1 text-xl" /><span className="text-sm">FOLLOW</span></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{backgroundColor: "#262A33"}}>
                <div className="row">
                    <div className="col-12">
                        <hr/>
                    </div>
                    <div className="col-12 z-40 text-center text-white-600">
                        Popular Items
                    </div>
                </div>

                <div className="row">

                    <div className="col-3">
                        <div className="card rounded-md border-0" style={{ width: "18rem" }}>
                            <div className="card-img-top rounded-md maincard_homepage w-100" style={{ height: "260px" }}></div>
                            <div className="card-body pt-4">
                                <p className="card-title text-center text-xl">Follow us on Facebook</p>
                                <p className="card-text text-center text-sm">Send ut perspiciatis unde omnis iste natus error sit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card rounded-md border-0" style={{ width: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md maincard_homepage w-100" style={{ height: "335px" }}></div>
                            <div className="card-body pt-4">
                                <p className="card-title text-center text-xl">Follow us on Facebook</p>
                                <p className="card-text text-center text-sm">Send ut perspiciatis unde omnis iste natus error sit</p>
                                <div className="w-100 h-auto text-center pt-4" style={{ display: "flex", justifyContent: "center" }}>

                                    <button type="button" className="btn btn-outline-primary rounded-full border-2" style={{ width: "150px", height: "40px" }}><GrFacebookOption className="float-left mt-1 ml-2 mb-1 text-xl" /><span className="text-sm">FOLLOW</span></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card rounded-md border-0" style={{ width: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md maincard_homepage w-100" style={{ height: "335px" }}></div>
                            <div className="card-body pt-4">
                                <p className="card-title text-center text-xl">Follow us on Facebook</p>
                                <p className="card-text text-center text-sm">Send ut perspiciatis unde omnis iste natus error sit</p>
                                <div className="w-100 h-auto text-center pt-4" style={{ display: "flex", justifyContent: "center" }}>

                                    <button type="button" className="btn btn-outline-primary rounded-full border-2" style={{ width: "150px", height: "40px" }}><GrFacebookOption className="float-left mt-1 ml-2 mb-1 text-xl" /><span className="text-sm">FOLLOW</span></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card rounded-md border-0" style={{ width: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md maincard_homepage w-100" style={{ height: "335px" }}></div>
                            <div className="card-body pt-4">
                                <p className="card-title text-center text-xl">Follow us on Facebook</p>
                                <p className="card-text text-center text-sm">Send ut perspiciatis unde omnis iste natus error sit</p>
                                <div className="w-100 h-auto text-center pt-4" style={{ display: "flex", justifyContent: "center" }}>

                                    <button type="button" className="btn btn-outline-primary rounded-full border-2" style={{ width: "150px", height: "40px" }}><GrFacebookOption className="float-left mt-1 ml-2 mb-1 text-xl" /><span className="text-sm">FOLLOW</span></button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default HomePage;
