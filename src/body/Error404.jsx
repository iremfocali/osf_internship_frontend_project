import React, { useContext, useState, useEffect } from "react";

import Defines from '../context/defines';

import Breadcrumb from "../body/breadcrumb";


// COMPONENTS 

const Error404 = props => {

    // STATES
    let { defines, setDefines } = useContext(Defines);

    useEffect(() => {
        let breadcrumb = [{ name: "Homepage", url: "/homepage", active: true }, { name: "404", url: "/error_404", active: false }];

        setDefines(prev => {
            const newDefines = { ...prev }
            newDefines.breadcrumb = breadcrumb;
            return newDefines
        })

    }, [setDefines])

    return (
        <>

            <div className="container" >
                <div className="row">
                    <div className="col">

                        <div className="w-100" style={{ backgroundColor: "#F1EDEA" }}>
                            <Breadcrumb />

                        </div>

                        <div className="error_page">
                            <h1>
                                <hr className='text-white-600' />
                            </h1>
                            <h1>
                                <span>
                                    404
                                </span>
                            </h1>
                        </div>
                        <div className="w-100 h-auto p-5 pt-3" style={{ backgroundColor: "#F1EDEA" }}>
                            <img src="./not-found-1280 - Kopya.jpg" alt="" style={{ borderRadius: "8px" }} />

                        </div>
                    </div>
                </div>


            </div>

            {/* <div className="error_page">
                <div className="jumbotron">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb style_breadcrumb">
                                <li className="breadcrumb-item" ><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">404</li>
                            </ol>
                        </nav>
                    </div>
                    <hr />
                    <div className="error_image">
                        <img src="./not-found-1280 - Kopya.jpg" alt="" style={{ borderRadius: "8px" }} />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Error404;
