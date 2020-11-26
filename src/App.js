import React from 'react';
import Banner from "./Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Intro from "./Intro";
import Forging from "./Forging";
import './App.css';
import CastBillets from './CastBillets';
import Rcs from "./Rcs";
import Hrrb from "./Hrrb";
import WireRod from "./WireRod";
import Brb from "./Brb";
import Sbrb from "./Sbrb";
import Sstb from "./Sstb";
import AllProducts from "./AllProducts";
import Utss from "./Utss";
import Hrs from "./Hrs";
import Hrp from "./Hrp";
import Crs from "./Crs";
import Appbar from "./Appbar";
import Profile from "./Profile";

function App() {
  return (

  
        <div className="app">
          <Router>
            
            <Appbar/>
           
            <Switch>
              <Route path ="/castbillets">
                <CastBillets/>
              </Route>
              <Route path ="/forging">
                
                <Forging/>
              </Route>
              <Route path ="/rcs">
                <Rcs/>
              </Route>
              <Route path ="/hrrb">
                <Hrrb/>
              </Route>
              <Route path ="/wirerod">
                <WireRod/>
              </Route>
              <Route path ="/brb">
                <Brb/>
              </Route>
              <Route path ="/allProducts">
                <AllProducts/>
              </Route>

              <Route path ="/sbrb">
                <Sbrb/>
              </Route>
              <Route path ="/sstb">
                <Sstb/>
              </Route>
              <Route path ="/utss">
                <Utss/>
              </Route>
              <Route path ="/hrs">
                <Hrs/>
              </Route>
              <Route path ="/hrp">
                <Hrp/>
              </Route>
              <Route path ="/crs">
                <Crs/>
              </Route>
              <Route path ="/profile">
                <Profile/>
              </Route>

              <Route path="/">
                <Banner/>
                <Home/>
                <Intro/>
                <ContactForm/>
          
           

              
              </Route>
            
            </Switch>
            
            <Footer/>
          </Router>
       
 
  
  
</div>


    
  );
}

export default App;
