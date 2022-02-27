import 'antd/lib/button/style/index.css';
import 'antd/lib/radio/style/index.css';

import Defines from '../context/defines';
import Breadcrumb from "../body/breadcrumb";
import React, { useContext, useState, useEffect } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineReload } from "react-icons/ai";
import { Button, Radio } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};



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
                    <div className="col-xl-9 col-lg-9 col-12">

                        <div id="carouselExampleIndicators" className="carousel slide float-right" data-bs-ride="carousel" style={{ padding: "25px 0px", borderRadius: "8px" }}>
                            <div className="carousel-indicators" style={{ marginBottom: "80px" }}>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./slider/slider_1.jpg" className="d-block w-100 rounded-md img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Control and manage any <br /> device with cloud solutions</h1>
                                        <h3>Improve business performance and the user experience <br /> with the right mix of IoT technology and processes</h3>
                                        <button type="button" className="btn btn-outline-light rounded-full border-2" style={{ width: "150px", height: "40px" }}><span className="text-sm mb-1">VIEW MORE</span></button>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./slider/slider_2.jpg" className="d-block w-100 rounded-md img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Control and manage any <br /> device with cloud solutions</h1>
                                        <h3>Improve business performance and the user experience <br /> with the right mix of IoT technology and processes</h3>
                                        <button type="button" className="btn btn-outline-light rounded-full border-2" style={{ width: "150px", height: "40px" }}><span className="text-sm mb-1">VIEW MORE</span></button>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./slider/slider_3.jpg" className="d-block w-100 rounded-md img-fluid" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Control and manage any <br /> device with cloud solutions</h1>
                                        <h3>Improve business performance and the user experience <br /> with the right mix of IoT technology and processes</h3>
                                        <button type="button" className="btn btn-outline-light rounded-full border-2" style={{ width: "150px", height: "40px" }}><span className="text-sm mb-1">VIEW MORE</span></button>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-xl-3 col-lg-3 col-12">
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
            <div className="container" style={{ backgroundColor: "#262A33" }}>
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-12 z-40 text-center text-white-600">
                        Popular Items
                    </div>
                </div>

                <div className="row" style={{ padding: "10px 35px" }}>

                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/0.jpg)" }}></div>
                            <div className="card-body">
                                <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                <p className="card-text text-center text-sm">$799.55</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/1.jpg)" }}></div>
                            <div className="card-body">
                                <p className="card-title text-center text-sm mb-1">Hay-About A Lounge <br />Chair AAL 93 </p>
                                <div className="w-100 h-auto text-center" style={{ display: "flex", justifyContent: "center" }}>
                                    <Radio.Group size="small">
                                        <Radio.Button value="0">$659.55</Radio.Button>
                                        <Radio.Button value="1">BUY NOW</Radio.Button>
                                    </Radio.Group>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/2.jpg)" }}></div>
                            <div className="card-body">
                                <p className="card-title text-center text-sm">Activate Facial Mask and <br /> Charcoal Soap</p>
                                <p className="card-text text-center text-sm">$129.55</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/3.jpg)" }}></div>
                            <div className="card-body">
                                <p className="card-title text-center text-sm">Cocktail Table Walnut <br /> |YES </p>
                                <p className="card-text text-center text-sm">$299.99</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="row" style={{ padding: "10px 35px" }}>

                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/4.jpg)" }}></div>
                            <div className="card-body">
                                <p className="card-title text-center text-sm">Hay-About A Lounge <br /> Chair AAL 93</p>
                                <p className="card-text text-center text-sm">$659.55</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/5.jpg)" }}></div>
                            <div className="card-body">
                                <p className="card-title text-center text-sm">TORY DESK CALENDER <br />&nbsp;</p>
                                <p className="card-text text-center text-sm">$410.99</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/6.jpg)" }}></div>
                            <div className="card-body">
                                <p className="card-title text-center text-sm">CH445 Wing Chair on <br /> SUITE NY</p>
                                <p className="card-text text-center text-sm">$330.55</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                            <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "360px", backgroundImage: "url(./product_item/7.jpg)" }}></div>

                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <div className="w-100 h-auto text-center pt-5 pb-5" style={{ display: "flex", justifyContent: "center" }}>
                            <button type="button" className="btn btn-outline-light rounded-full border-2" style={{ width: "270px", height: "40px" }}>
                                <AiOutlineReload className="float-right mt-1 mb-1 text-xl" style={{ marginRight: "70px" }} />
                                <span className="float-right text-sm mb-1 mr-2">LOAD MORE</span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col pl-0 pr-0">
                        <div className="banner_OSF">
                            <h1>
                                Banner OSF Theme
                            </h1>
                            <h3>
                                Sed ut perspiciatis unde omnis iste natus error sit valup- <br /> tatem accusantium
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12">


                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_1.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_2.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_3.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_4.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_4.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_3.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_2.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card rounded-md border-0" style={{ maxWidth: "18rem", marginTop: "25px" }}>
                                        <div className="card-img-top rounded-md product_items_card w-100" style={{ height: "260px", backgroundImage: "url(./product_item/f_1.jpg)" }}></div>
                                        <div className="card-body">
                                            <p className="card-title text-center text-sm">Kristina Dam Oak Table With White Marble Top</p>
                                            <p className="card-text text-center text-sm">$799.55</p>
                                        </div>
                                    </div>
                                </div>





                            </div>

                        </div>








                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#45413E"}}>
                    <div className="col-4">
                        <div className="info_1">

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="info_2">

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="info_3">

                        </div>
                    </div>
                </div>



            </div>


        </>
    );
};

export default HomePage;
