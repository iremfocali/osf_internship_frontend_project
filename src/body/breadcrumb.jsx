import React, { useContext } from "react";
import Defines from '../context/defines';


// COMPONENTS

const Breadcrumb = props => {

    // STATES
    let { defines } = useContext(Defines);

    return (
        <>
                <div className="row">
                    <div className="col">
                        <ol className="breadcrumb p-5" style={{display: "flex", justifyContent: "center"}}>

                            {defines.breadcrumb.map((x, y) =>

                                <li className={x.active ? "breadcrumb-item" : x.type = "tab" ? "breadcrumb-item active breadcrumb-tabs" : "breadcrumb-item active"} key={y}>
                                    {x.active ? <a href={x.url} className="active-breadcrumb-link" >{x.name}</a> : <span>{x.name}</span>}
                                </li>

                            )}

                        </ol>
                    </div>
                </div>
        </>
    );
};

export default Breadcrumb;
