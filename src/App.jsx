import React, { useState } from "react";

import './App.css';

// Yönlendirici
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// LOCAL COMPOMNENTs
import Header from './body/header';
import Services from './services';
import HomePage from './homepage';
import Error404 from './body/Error404';
import Footer from './body/footer';
import ShoppingCart from './shopping_cart';

// CONTEXT
import Defines from "./context/defines";

let subDefines = {

  title: "Ana Sayfa",
  breadcrumb: [{ name: "Home Page", url: "/homepage", active: true, type: 'link' }], //type iki çeşittir: tab ve type
  box: "irem",

  like_counter: 0 ,
  bag_counter: 0,

}


const App = () => {
  const [defines, setDefines] = useState(subDefines);


  return (
    <div className="App">
      <Defines.Provider value={{ defines, setDefines }}>
        <Router>
          <Header/>
          <Switch>
            {/* Sıralama çok önemli basit olan en altta olmalı !!! */}

            {/* Pages */}
            <Route exact path="/" component={HomePage} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/services" component={Services} />
            <Route path="/error_404" component={Error404} />
            <Route path="/shopping_cart" component={ShoppingCart} /> 

          </Switch>
          <Footer/>
        </Router>
      </Defines.Provider>
    </div>
  )
}

export default App;
