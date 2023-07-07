import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../components/Styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactUs from "./ContactUs";
import Home from "./Home";
import Faq from "./Faqpage";
import Price from "./Pricing";
import Resource from "./News";
import Fee from "./fee";
//

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <Router>
      <div className="page-wrapper">
        <header>
          <div className="site-header-one__logo">
            <a href="/">
              <img src="img/sx.png" width={129} alt="" />
            </a>
          </div>
          <nav ref={navRef}>
            <a href="/">Home</a>
            <a href="/Price">Pricing</a>
            <a href="/Resource">Resource Centre</a>
            <a href="/Faq">Faq</a>
            <a href="/contactUs">Contact</a>
            <div className="main-nav__right">
              <a href="#" className="thm-btn main-nav__btn-two">
                <span>Book Demo</span>
              </a>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </div>
      <Switch>
        <Route path="/Faq">
          <Faq />
        </Route>
        <Route path="/Price">
          <Price />
        </Route>
        <Route path="/Resource">
          <Resource />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route path="/fee">
          <Fee />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
