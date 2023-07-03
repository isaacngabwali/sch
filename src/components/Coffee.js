import React from "react";

function Blog() {
  return (
    <div>

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
              <li><a href="/price">Pricing</a></li>
              <li><a href="/resource">Resource Centre</a></li>
              <li><a href="/faq">Faq</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="main-nav__right">
            <a href="#" className="thm-btn main-nav__btn-two"><span>Book Demo</span></a>
          </div>
        </div>
      </header>
      
    </div>
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up" /></a>
  </div>

  );
}

export default Blog;
