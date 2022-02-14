import Defines from '../context/defines';
import Breadcrumb from "../body/breadcrumb";
import React, { useContext, useState, useEffect } from "react";


const HomePage = () => {

    let { defines, setDefines } = useContext(Defines);

    useEffect(() => {
        let breadcrumb = [{ name: "Homepage", url: "/homepage", active: true }];

        setDefines(prev => {
            const newDefines = { ...prev }
            newDefines.breadcrumb = breadcrumb;
            newDefines.box = 'abc' ;
            return newDefines
        })

    }, [setDefines])

    return (
        <>
            <Breadcrumb />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                     {defines.box} 
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;
