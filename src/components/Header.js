import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import ContactUs from './ContactUs'
import Home from './Home'
import Faq from './Faq';
import Price from './Pricing';
import Resource from './News';
import Fee from './fee';

function Header() {

  return (
    <><Router>
      <div className="page-wrapper">
        <header className="site-header-one stricky">
          <div className="container-fluid">
            <div className="site-header-one__logo">
              <a href="/">
                <img src="img/sx.png" width={129} alt="" />
              </a>
              <span className="side-menu__toggler"><i className="fa fa-bars" /></span>
            </div>
            <div className="main-nav__main-navigation">
              <ul className="main-nav__navigation-box">
                <li>
                  <a href="/">Home</a>
                </li>
                <li><a href="/Price">Pricing</a></li>
                <li><a href="/Resource">Resource Centre</a></li>
                <li><a href="/Faq">Faq</a></li>
                <li><a href="/contactUs">Contact</a></li>
              </ul>
            </div>
            <div className="main-nav__right">
              <a href="#" className="thm-btn main-nav__btn-two"><span>Book Demo</span></a>
            </div>
          </div>
        </header>

      </div>
      <Switch>
        <Route path="/Faq"> <Faq /></Route>
        <Route path="/Price"><Price /></Route>
        <Route path="/Resource"> <Resource /></Route>
        <Route path="/contactUs"> <ContactUs /> </Route>
        <Route path="/fee"> <Fee /> </Route>
        <Route path="/"><Home /> </Route>
      </Switch>
    </Router></>
  );
}

export default Header;


 