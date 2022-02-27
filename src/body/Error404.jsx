import React, { useContext } from "react";
import Defines from '../context/defines';

// COMPONENTS 

const Error404 = props => {

    // STATES
    let { defines } = useContext(Defines);

    return (
        <>
    <div className="error_page">
        <div className="jumbotron">
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb style_breadcrumb">
                      <li className="breadcrumb-item" ><a href="/">Home</a></li>
                      <li className="breadcrumb-item active"  aria-current="page">404</li>
                    </ol>
                  </nav>
            </div>
            <hr />
            <div className="error_image">
                <img src="./not-found-1280 - Kopya.jpg" alt="" style={{borderRadius:"8px"}} />
            </div>
          </div>
      </div>
        </>
    );
};

export default Error404;
