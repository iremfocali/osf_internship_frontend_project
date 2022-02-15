import Defines from '../context/defines';
import Breadcrumb from "../body/breadcrumb";
import React, { useContext, useState, useEffect } from "react";


const shoppingCart = () => {

    let { defines, setDefines } = useContext(Defines);

    let [company, setCompany] = useState({title: ''})


    useEffect(() => {
        let breadcrumb = [{ name: "Homepage", url: "/homepage", active: true }, { name: "Shopping Cart", url: "/shopping_cart", active: false }];

        setDefines(prev => {
            const newDefines = { ...prev }
            newDefines.breadcrumb = breadcrumb;
            return newDefines
        })

    }, [setDefines])

    return (
        <>
            <Breadcrumb />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                     
                    </div>
                </div>
            </div>

        </>
    );
};

export default shoppingCart;
