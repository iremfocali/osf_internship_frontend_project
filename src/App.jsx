import React, { useState } from "react";

import logo from './logo.svg';

import './App.css';

// Yönlendirici
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// LOCAL COMPOMNENTs
import Services from './services';
import HomePage from './homepage';
import Header from './body/header';
import Footer from './body/footer';
// CONTEXT
import Defines from "./context/defines";

let subDefines = {

  title: "Ana Sayfa",
  breadcrumb: [{ name: "Home Page", url: "/homepage", active: true, type: 'link' }], //type iki çeşittir: tab ve type
  box: "irem",
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


          </Switch>
          <Footer/>
        </Router>
      </Defines.Provider>
    </div>
  )
}

export default App;
