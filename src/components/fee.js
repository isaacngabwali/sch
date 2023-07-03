import React from "react";

function Fees() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apiton || Home One || App Landing HTML Template</title>
  {/* favicon */}
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="assets/images/favicons/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="assets/images/favicons/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="assets/images/favicons/favicon-16x16.png"
  />
  <link rel="manifest" href="assets/images/favicons/site.webmanifest" />
  {/* plugin scripts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/animate.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap-select.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap-datepicker.min.css" />
  <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
  <link rel="stylesheet" href="assets/css/magnific-popup.css" />
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="assets/css/swiper.min.css" />
  <link rel="stylesheet" href="assets/css/apton-icons.css" />
  {/* theme styles */}
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/responsive.css" />
  <div className="preloader">
    <img
      src="assets/images/loader.png"
      width={75}
      className="preloader__image"
      alt=""
    />
  </div>
  {/* /.preloader */}
  <div className="page-wrapper">
    <header className="site-header-one stricky site-header-one__fixed-top">
      <div className="container-fluid">
        <div className="site-header-one__logo">
          <a href="index.html">
            <img src="assets/images/logo-1-1.png" width={129} alt="" />
          </a>
          <span className="side-menu__toggler">
            <i className="fa fa-bars" />
          </span>
          {/* /.side-menu__toggler */}
        </div>
        {/* /.site-header-one__logo */}
        <div className="main-nav__main-navigation">
          <ul className="main-nav__navigation-box one-page-scroll-menu">
            <li className="scrollToLink">
              <a href="#home">Home</a>
            </li>
            <li className="scrollToLink">
              <a href="#features">Features</a>
            </li>
            <li className="scrollToLink">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="scrollToLink">
              <a href="#team">Team</a>
            </li>
            <li className="scrollToLink">
              <a href="#screens">Screens</a>
            </li>
            <li className="dropdown scrollToLink">
              <a href="#blog">News</a>
              <ul>
                <li>
                  <a href="blog.html">News</a>
                </li>
                <li>
                  <a href="blog-details.html">News Details</a>
                </li>
              </ul>
            </li>
          </ul>
          {/* /.main-nav__navigation-box */}
        </div>
        {/* /.main-nav__main-navigation */}
        <div className="main-nav__right">
          <a href="#" className="thm-btn main-nav__btn">
            <span>Download App</span>
          </a>
        </div>
        {/* /.main-nav__right */}
      </div>
      {/* /.container-fluid */}
    </header>
    {/* /.site-header-one */}
    <section className="banner-one" id="home">
      <img
        src="assets/images/shapes/banner-shape-1-1.png"
        className="banner-one__bg-shape-1"
        alt=""
      />
      <div
        className="banner-one__bg"
        style={{
          backgroundImage: "url(assets/images/resources/banner-image-1-1.jpg)"
        }}
      ></div>
      {/* /.banner-one__bg */}
      <div className="container">
        <a
          href="https://www.youtube.com/watch?v=Kl5B6MBAntI"
          className="banner-one__video video-popup"
        >
          <i className="fa fa-play" />
        </a>
        {/* /.banner-one__video */}
        <div className="banner-one__moc">
          <img
            src="assets/images/resources/banner-moc-1-1.png"
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        {/* /.banner-one__moc */}
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Email address" />
                <button type="submit" className="thm-btn banner-one__mc-btn">
                  <span>Free Trial</span>
                </button>
                {/* /.thm-btn banner-one__mc-btn */}
              </form>
              <div className="mc-form__response" />
              {/* /.mc-form__response */}
              <h3>
                Manage Your <br /> Project with <br /> Application
              </h3>
              <p>
                Nulla facilisi. Proin felis neque, suscipit egestas erat a{" "}
                <br /> tincidunt finibus magna consectetur lacus.
              </p>
              <a href="#" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
              {/* /.thm-btn banner-one__btn */}
            </div>
            {/* /.banner-one__content */}
          </div>
          {/* /.col-lg-7 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.banner-one */}
    <section className="service-one" id="features">
      <div className="container">
        <div className="block-title text-center">
          <p>Feature List</p>
          <h3>
            Appton Providing You <br /> Best Features
          </h3>
        </div>
        {/* /.block-title text-center */}
        <div className="row">
          <div
            className="col-lg-3 col-md-6 wow fadeInLeft"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle" />
                {/* /.service-one__circle */}
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic" />
                </div>
                {/* /.service-one__icon */}
                <h3>Easy to Edit</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
              {/* /.service-one__inner */}
            </div>
            {/* /.service-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
          <div
            className="col-lg-3 col-md-6 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle" />
                {/* /.service-one__circle */}
                <div className="service-one__icon">
                  <i className="apton-icon-development" />
                </div>
                {/* /.service-one__icon */}
                <h3>Fully Secure</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
              {/* /.service-one__inner */}
            </div>
            {/* /.service-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle" />
                {/* /.service-one__circle */}
                <div className="service-one__icon">
                  <i className="apton-icon-development1" />
                </div>
                {/* /.service-one__icon */}
                <h3>Manage User</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
              {/* /.service-one__inner */}
            </div>
            {/* /.service-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
          <div
            className="col-lg-3 col-md-6 wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle" />
                {/* /.service-one__circle */}
                <div className="service-one__icon">
                  <i className="apton-icon-responsive" />
                </div>
                {/* /.service-one__icon */}
                <h3>Free Trial</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
              {/* /.service-one__inner */}
            </div>
            {/* /.service-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.service-one */}
    <section className="cta-one">
      <img
        src="assets/images/shapes/cta-1-shape-1.png"
        className="cta-one__bg-shape-1"
        alt=""
      />
      <img
        src="assets/images/shapes/cta-1-shape-2.png"
        className="cta-one__bg-shape-2"
        alt=""
      />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img
            src="assets/images/resources/cta-1-moc-1.png"
            className="cta-one__moc-img"
            alt=""
          />
        </div>
        {/* /.cta-one__moc */}
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <div className="block-title text-left">
                <p>Best Application</p>
                <h3>
                  Powerful Application for <br /> Your Projects
                </h3>
              </div>
              {/* /.block-title text-center */}
              <div className="cta-one__text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              {/* /.cta-one__text */}
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle" />
                  Refresing to get such a personal touch.
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  Duis aute irure dolor in reprehenderit in voluptate.
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  Velit esse cillum dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              {/* /.list-unstyled */}
              <a href="#" className="thm-btn cta-one__btn">
                <span>Discover More</span>
              </a>
              {/* /.thm-btn cta-one__btn */}
            </div>
            {/* /.cta-one__content */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.cta-one */}
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">4789</h3>
              <p>Downloads</p>
            </div>
            {/* /.funfact-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">6400</h3>
              <p>Likes</p>
            </div>
            {/* /.funfact-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">900</h3>
              <p>5 Star Rating</p>
            </div>
            {/* /.funfact-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">266</h3>
              <p>Awards</p>
            </div>
            {/* /.funfact-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.funfact-one */}
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <div className="block-title text-left">
                <p>Feature List</p>
                <h3>
                  Appton Providing You <br /> Best Features
                </h3>
              </div>
              {/* /.block-title text-left */}
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-app-development" />
                  </div>
                  {/* /.cta-two__icon */}
                  <h3>
                    Responsive <br /> Design
                  </h3>
                </div>
                {/* /.cta-two__icon-single */}
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-computer-graphic1" />
                  </div>
                  {/* /.cta-two__icon */}
                  <h3>
                    Online <br /> Marketing
                  </h3>
                </div>
                {/* /.cta-two__icon-single */}
              </div>
              {/* /.cta-two__icon-wrap */}
              <div className="cta-two__text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Lorem Ipsum is simply
                  dummy text of the printing laborum perspiciatis unde.
                </p>
              </div>
              {/* /.cta-two__text */}
              <a href="#" className="thm-btn cta-two__btn">
                <span>Discover More</span>
              </a>
              {/* /.thm-btn cta-two__btn */}
            </div>
            {/* /.cta-two__content */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <img
                src="assets/images/resources/cta-2-moc-1.png"
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src="assets/images/resources/cta-2-moc-2.png"
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src="assets/images/resources/cta-2-moc-3.png"
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
            {/* /.cta-two__images */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.cta-two */}
    <section className="pricing-one" id="pricing">
      <div className="container">
        <div className="block-title text-center">
          <p>Pricing Tables</p>
          <h3>
            Choose Pricing Plans Which <br /> Suits Your Needs
          </h3>
        </div>
        {/* /.block-title text-center */}
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          <li className="month active">
            <a href="#">Monthly</a>
          </li>
          <li>
            {/* Rounded switch */}
            <label className="switch on">
              <span className="slider round" />
            </label>
          </li>
          <li className="year">
            <a href="#">Annualy</a>
          </li>
        </ul>
        {/* /.list-inline */}
        <div className="tabed-content">
          <div id="month">
            <div className="row">
              <div className="col-lg-4 animated fadeInLeft">
                <div className="pricing-one__single">
                  <div className="pricing-one__circle" />
                  {/* /.pricing-one__circle */}
                  <div className="pricing-one__inner">
                    <p>Basic Pack</p>
                    <h3>$20.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    {/* /.list-unstyled pricing-one__list */}
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>
                    {/* /.thm-btn */}
                    <span>No hidden charges!</span>
                  </div>
                  {/* /.pricing-one__inner */}
                </div>
                {/* /.pricing-one__single */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4 animated fadeInUp">
                <div className="pricing-one__single">
                  <div className="pricing-one__circle" />
                  {/* /.pricing-one__circle */}
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$30.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    {/* /.list-unstyled pricing-one__list */}
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>
                    {/* /.thm-btn */}
                    <span>No hidden charges!</span>
                  </div>
                  {/* /.pricing-one__inner */}
                </div>
                {/* /.pricing-one__single */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4 animated fadeInRight">
                <div className="pricing-one__single">
                  <div className="pricing-one__circle" />
                  {/* /.pricing-one__circle */}
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <h3>$49.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    {/* /.list-unstyled pricing-one__list */}
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>
                    {/* /.thm-btn */}
                    <span>No hidden charges!</span>
                  </div>
                  {/* /.pricing-one__inner */}
                </div>
                {/* /.pricing-one__single */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /#month */}
          <div id="year">
            <div className="row">
              <div className="col-lg-4 animated fadeInLeft">
                <div className="pricing-one__single">
                  <div className="pricing-one__circle" />
                  {/* /.pricing-one__circle */}
                  <div className="pricing-one__inner">
                    <p>Basic Pack</p>
                    <h3>$59.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    {/* /.list-unstyled pricing-one__list */}
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>
                    {/* /.thm-btn */}
                    <span>No hidden charges!</span>
                  </div>
                  {/* /.pricing-one__inner */}
                </div>
                {/* /.pricing-one__single */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4 animated fadeInUp">
                <div className="pricing-one__single">
                  <div className="pricing-one__circle" />
                  {/* /.pricing-one__circle */}
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$79.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    {/* /.list-unstyled pricing-one__list */}
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>
                    {/* /.thm-btn */}
                    <span>No hidden charges!</span>
                  </div>
                  {/* /.pricing-one__inner */}
                </div>
                {/* /.pricing-one__single */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-4 animated fadeInRight">
                <div className="pricing-one__single">
                  <div className="pricing-one__circle" />
                  {/* /.pricing-one__circle */}
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <h3>$99.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    {/* /.list-unstyled pricing-one__list */}
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>
                    {/* /.thm-btn */}
                    <span>No hidden charges!</span>
                  </div>
                  {/* /.pricing-one__inner */}
                </div>
                {/* /.pricing-one__single */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /#year */}
        </div>
        {/* /.tabed-content */}
      </div>
      {/* /.container */}
    </section>
    {/* /.pricing-one */}
    <section className="testimonials-one">
      <div className="container">
        <div className="row ">
          <div className="col-xl-6">
            <div className="testimonials-one__thumb-carousel-wrap">
              <div className="testimonials-one__icon">
                <div className="testimonials-one__icon-inner">
                  <img src="assets/images/shapes/testi-qoute-1-1.png" alt="" />
                </div>
                {/* /.testimonials-one__icon-inner */}
              </div>
              {/* /.testimonials-one__icon */}
              <div className="testimonials-one__thumb-carousel">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img
                        src="assets/images/resources/testi-1-1.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                    {/* /.testimonials-one__image */}
                  </div>
                  {/* /.swiper-slide */}
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img
                        src="assets/images/resources/testi-1-3.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                    {/* /.testimonials-one__image */}
                  </div>
                  {/* /.swiper-slide */}
                  <div className="swiper-slide">
                    <div className="testimonials-one__image">
                      <img
                        src="assets/images/resources/testi-1-2.jpg"
                        alt="Awesome Image"
                      />
                    </div>
                    {/* /.testimonials-one__image */}
                  </div>
                  {/* /.swiper-slide */}
                </div>
                {/* /.swiper-wrapper */}
              </div>
              {/* /.testimonials-one__thumb-carousel */}
            </div>
            {/* /.testimonials-one__thumb-carousel-wrap */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-xl-6 d-flex">
            <div className="my-auto">
              <div className="block-title text-left">
                <p>Our Testimonials</p>
                <h3>
                  What Our Customers Are <br /> Talking About
                </h3>
              </div>
              {/* /.block-title */}
              <div className="testimonials-one__carousel">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      {/* /.testimonials-one__text */}
                      <h3 className="testimonials-one__title">Joe Kolmer</h3>
                      {/* /.testimonials-one__title */}
                    </div>
                    {/* /.testimonials-one__single */}
                  </div>
                  {/* /.swiper-slide */}
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      {/* /.testimonials-one__text */}
                      <h3 className="testimonials-one__title">Darrin Martos</h3>
                      {/* /.testimonials-one__title */}
                    </div>
                    {/* /.testimonials-one__single */}
                  </div>
                  {/* /.swiper-slide */}
                  <div className="swiper-slide">
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch. Duis aute irure dolor in
                        repre henderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      {/* /.testimonials-one__text */}
                      <h3 className="testimonials-one__title">Tammy Daniely</h3>
                      {/* /.testimonials-one__title */}
                    </div>
                    {/* /.testimonials-one__single */}
                  </div>
                  {/* /.swiper-slide */}
                </div>
                {/* /.swiper-wrapper */}
                <div className="testimonials-one__pagination-wrap">
                  <div className="swiper-pagination" />
                </div>
                {/* /.testimonials-one__pagination-wrap */}
              </div>
              {/* /.testimonials-one__carousel */}
            </div>
            {/* /.my-auto */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.testimonials-one */}
    <section className="brand-one">
      <div className="container">
        <div
          className="brand-one__carousel owl-carousel thm__owl-carousel owl-theme"
          data-options='{"loop": true, "autoplay": true, "autoplayHoverPause": true, "autoplayTimeout": 5000, "items": 5, "dots": false, "nav": false, "margin": 100, "smartSpeed": 700, "responsive": { "0": {"items": 2, "margin": 30}, "480": {"items": 3, "margin": 30}, "991": {"items": 4, "margin": 50}, "1199": {"items": 5, "margin": 100}}}'
        >
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
          <div className="item">
            <img src="assets/images/resources/brand-1-1.png" alt="" />
          </div>
          {/* /.item */}
        </div>
        {/* /.brand-one__carousel owl-carousel thm__owl-carousel owl-theme */}
      </div>
      {/* /.container */}
    </section>
    {/* /.brand-one */}
    <section className="team-one" id="team">
      <img
        src="assets/images/shapes/team-1-bg-1-1.png"
        className="team-one__bg-shape-1"
        alt=""
      />
      <img
        src="assets/images/shapes/team-1-bg-1-2.png"
        className="team-one__bg-shape-2"
        alt=""
      />
      <div className="container">
        <div className="block-title text-center">
          <p>Expert People</p>
          <h3>
            Meet Our Professional <br /> Team Members
          </h3>
        </div>
        {/* /.block-title text-center */}
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle" />
              {/* /.team-one__circle */}
              <div className="team-one__inner">
                <h3>Nathaniel McKenzie</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src="assets/images/team/team-1-1.jpg" alt="" />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                {/* /.team-one__social */}
              </div>
              {/* /.team-one__inner */}
            </div>
            {/* /.team-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 col-sm-12 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle" />
              {/* /.team-one__circle */}
              <div className="team-one__inner">
                <h3>Ronald Parks</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src="assets/images/team/team-1-2.jpg" alt="" />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                {/* /.team-one__social */}
              </div>
              {/* /.team-one__inner */}
            </div>
            {/* /.team-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 col-sm-12 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle" />
              {/* /.team-one__circle */}
              <div className="team-one__inner">
                <h3>Rachel Walker</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src="assets/images/team/team-1-3.jpg" alt="" />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                {/* /.team-one__social */}
              </div>
              {/* /.team-one__inner */}
            </div>
            {/* /.team-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 col-sm-12 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle" />
              {/* /.team-one__circle */}
              <div className="team-one__inner">
                <h3>Willie Castillo</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src="assets/images/team/team-1-4.jpg" alt="" />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                {/* /.team-one__social */}
              </div>
              {/* /.team-one__inn
               */}
            </div>
            {/* /.team-one__single */}
          </div>
          {/* /.col-lg-3 col-md-6 col-sm-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.team-one */}
    <section className="video-one">
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(assets/images/resources/video-bg-1-1.jpg)"
        }}
      >
        <div
          className="video-one__content wow fadeInLeft"
          data-wow-duration="1500ms"
        >
          <div className="block-title">
            <p>Video Tutorial</p>
            <h3>
              Watch Now <br /> Our Video <br /> Tutorial
            </h3>
          </div>
          {/* /.block-title */}
        </div>
        {/* /.video-one__content */}
        <a
          href="https://www.youtube.com/watch?v=Kl5B6MBAntI"
          className="video-one__btn video-popup"
        >
          <i className="fa fa-play" />
        </a>
        {/* /.video-one__btn video-popup */}
      </div>
      {/* /.container */}
    </section>
    {/* /.video-one */}
    <section className="app-shot-one" id="screens">
      <div className="container-fluid">
        <div className="block-title text-center">
          <p>Application Screenshots</p>
          <h3>
            Checkout Our Application <br /> Interface Look
          </h3>
        </div>
        {/* /.block-title */}
        <div
          className="app-shot-one__carousel owl-theme owl-carousel thm__owl-carousel"
          data-options='{ "loop": true, "margin": 30, "nav": false, "dots": true, "autoWidth": false, "autoplay": true, "smartSpeed": 700, "autoplayTimeout": 5000, "autoplayHoverPause": true, "slideBy": 5, "responsive": {
              "0": { "items": 1 },
              "480": { "items": 2 },
              "600": { "items": 3 },
              "991": { "items": 4 },
              "1000": { "items": 5 },
              "1200": { "items": 5 }
          }}'
        >
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-1.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-2.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-3.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-4.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-5.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-1.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-2.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-3.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-4.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-5.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-1.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-2.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-3.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-4.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
          <div className="item">
            <img
              src="assets/images/app-shots/app-shot-n-1-5.png"
              alt="Awesome Image"
            />
          </div>
          {/* /.item */}
        </div>
        {/* /.app-shot-one__carousel owl-theme owl-carousel */}
      </div>
      {/* /.container-fluid */}
    </section>
    {/* /.app-shot-one */}
    <section className="faq-one">
      <img
        src="assets/images/shapes/faq-bg-1-1.png"
        className="faq-one__bg-shape-1"
        alt=""
      />
      <div className="container">
        <div className="block-title text-center">
          <p>Frequently Asked Questions</p>
          <h3>
            Want to Ask Something <br /> From Appton?
          </h3>
        </div>
        {/* /.block-title */}
        <div
          className="accrodion-grp wow fadeIn"
          data-wow-duration="1500ms"
          data-grp-name="faq-accrodion"
        >
          <div className="accrodion active ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>
                  Pre and post launch mobile app marketing pitfalls to avoid
                </h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
                {/* /.inner */}
              </div>
            </div>
            {/* /.accrodion-inner */}
          </div>
          <div className="accrodion  ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>Boostup your application traffic is just a step away</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
                {/* /.inner */}
              </div>
            </div>
            {/* /.accrodion-inner */}
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>How to update application new features</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
                {/* /.inner */}
              </div>
            </div>
            {/* /.accrodion-inner */}
          </div>
          <div className="accrodion ">
            <div className="accrodion-inner">
              <div className="accrodion-title">
                <h4>
                  How to connect with the support to improve app experience
                </h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet.
                  </p>
                </div>
                {/* /.inner */}
              </div>
            </div>
            {/* /.accrodion-inner */}
          </div>
        </div>
      </div>
      {/* /.container */}
    </section>
    {/* /.faq-one */}
    <section className="blog-one" id="blog">
      <div className="container">
        <div className="block-title text-center">
          <p>Latest News &amp; Articles</p>
          <h3>
            Checkout What’s Going <br /> on in Our Blog
          </h3>
        </div>
        {/* /.block-title text-center */}
        <div className="row">
          <div className="col-lg-4 ">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src="assets/images/blog/blog-1-1.jpg" alt="" />
              </div>
              {/* /.blog-one__image */}
              <div className="blog-one__content">
                <div className="blog-one__circle" />
                {/* /.blog-one__circle */}
                <div className="blog-one__content-inner">
                  <div className="blog-one__meta">
                    <a href="#">
                      <i className="far fa-clock" /> 20 Feb
                    </a>
                    <a href="#">
                      <i className="far fa-comments" /> 2 comments
                    </a>
                  </div>
                  {/* /.blog-one__meta */}
                  <h3>
                    <a href="blog-details.html">
                      Leverage agile frame works to provide a synopsis for
                    </a>
                  </h3>
                </div>
                {/* /.blog-one__content-inner */}
              </div>
              {/* /.blog-one__content */}
            </div>
            {/* /.blog-one__single */}
          </div>
          {/* /.col-lg-4  */}
          <div className="col-lg-4 ">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src="assets/images/blog/blog-1-2.jpg" alt="" />
              </div>
              {/* /.blog-one__image */}
              <div className="blog-one__content">
                <div className="blog-one__circle" />
                {/* /.blog-one__circle */}
                <div className="blog-one__content-inner">
                  <div className="blog-one__meta">
                    <a href="#">
                      <i className="far fa-clock" /> 20 Feb
                    </a>
                    <a href="#">
                      <i className="far fa-comments" /> 2 comments
                    </a>
                  </div>
                  {/* /.blog-one__meta */}
                  <h3>
                    <a href="blog-details.html">
                      Launch New Mobile App Marketing Pitfalls To Avoid
                    </a>
                  </h3>
                </div>
                {/* /.blog-one__content-inner */}
              </div>
              {/* /.blog-one__content */}
            </div>
            {/* /.blog-one__single */}
          </div>
          {/* /.col-lg-4  */}
          <div className="col-lg-4 ">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src="assets/images/blog/blog-1-3.jpg" alt="" />
              </div>
              {/* /.blog-one__image */}
              <div className="blog-one__content">
                <div className="blog-one__circle" />
                {/* /.blog-one__circle */}
                <div className="blog-one__content-inner">
                  <div className="blog-one__meta">
                    <a href="#">
                      <i className="far fa-clock" /> 20 Feb
                    </a>
                    <a href="#">
                      <i className="far fa-comments" /> 2 comments
                    </a>
                  </div>
                  {/* /.blog-one__meta */}
                  <h3>
                    <a href="blog-details.html">
                      Bring to the table win-win survival strategies domination.
                    </a>
                  </h3>
                </div>
                {/* /.blog-one__content-inner */}
              </div>
              {/* /.blog-one__content */}
            </div>
            {/* /.blog-one__single */}
          </div>
          {/* /.col-lg-4  */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.blog-one */}
    <section className="contact-one">
      <img
        src="assets/images/shapes/contact-bg-shape-1-1.png"
        className="contact-one__bg-shape-1"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form
              action="assets/inc/sendemail.php"
              className="contact-form-validated contact-one__form"
            >
              <div className="block-title">
                <p>Contact Now</p>
                <h3>
                  Have Question? Write <br /> a Message
                </h3>
              </div>
              {/* /.block-title */}
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" name="name" />
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <input type="text" placeholder="Email Address" name="email" />
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <input type="text" placeholder="Subject" name="subject" />
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <select name="services" className="selectpicker">
                    <option value="">Discussion For</option>
                    <option value="Pricing Query">Pricing Query</option>
                    <option value="Free Trial">Free Trial</option>
                  </select>
                  {/* /#.selectpicker */}
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                    defaultValue={""}
                  />
                </div>
                {/* /.col-lg-12 */}
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Send Message</span>
                  </button>
                  {/* /.thm-btn contact-one__btn */}
                </div>
                {/* /.col-lg-12 */}
              </div>
              {/* /.row */}
            </form>
            {/* /.contact-one__form */}
            <div className="result" />
            {/* /.result */}
          </div>
          {/* /.col-lg-7 */}
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="my-auto">
              <div className="contact-one__image">
                <img src="assets/images/resources/contact-1-1.jpg" alt="" />
              </div>
              {/* /.contact-one__image */}
            </div>
            {/* /.my-auto */}
          </div>
          {/* /.col-lg-5 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.contact-one */}
    <section className="cta-three">
      <img
        src="assets/images/shapes/cta-three-bg-1-1.png"
        className="cta-three__bg-1"
        alt=""
      />
      <img
        src="assets/images/shapes/cta-three-bg-1-2.png"
        className="cta-three__bg-2"
        alt=""
      />
      <div className="container text-center">
        <h3>
          Download our App Today &amp; <br /> Experience Endless Possibilities
        </h3>
        <p>and get started with a free 1 month trial for your business </p>
        <div className="cta-three__btn-wrap">
          <a href="#" className="cta-three__btn">
            <i className="fa fa-play" />
            <span>Get in</span>
            <b>Google Play</b>
          </a>
          <a href="#" className="cta-three__btn">
            <i className="fab fa-apple" />
            <span>Get in</span>
            <b>Apple Store</b>
          </a>
        </div>
        {/* /.cta-three__btn-wrap */}
      </div>
      {/* /.container */}
    </section>
    {/* /.cta-three */}
    <section className="mailchimp-one">
      <div className="container wow fadeInUp" data-wow-duration="1500ms">
        <div className="inner-container">
          <div className="mailchimp-one__icon">
            <i className="apton-icon-mail" />
          </div>
          {/* /.mailchimp-one__icon */}
          <form action="#" className="mailchimp-one__form">
            <input
              type="text"
              placeholder="Enter your email address"
              name="email"
            />
            <button className="thm-btn mailchimp-one__btn" type="submit">
              <span>Register Now</span>
            </button>
            {/* /.thm-btn */}
          </form>
          {/* /.mailchimp-one__form */}
        </div>
        {/* /.inner-container */}
      </div>
      {/* /.container */}
    </section>
    {/* /.mailchimp-one */}
    <footer className="site-footer">
      <div className="site-footer__upper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-widget footer-widget__about">
                <a href="index.html">
                  <img src="assets/images/logo-1-1.png" width={129} alt="" />
                </a>
                <p>
                  Lorem Ipsum is simply dummy text the <br /> printing and
                  setting industry. Lorm Ipsum
                  <br /> has been the text ever.
                </p>
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-5">
              <div className="footer-widget__links-wrap">
                <div className="footer-widget">
                  <h3 className="footer-widget__title">Company</h3>
                  <ul className="list-unstyled footer-widget__links-list">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                  </ul>
                  {/* /.list-unstyled footer-widget__links-list */}
                </div>
                {/* /.footer-widget */}
                <div className="footer-widget">
                  <h3 className="footer-widget__title">Explore</h3>
                  <ul className="list-unstyled footer-widget__links-list">
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Download</a>
                    </li>
                    <li>
                      <a href="#">Free Trial</a>
                    </li>
                  </ul>
                  {/* /.list-unstyled footer-widget__links-list */}
                </div>
                {/* /.footer-widget */}
                <div className="footer-widget">
                  <h3 className="footer-widget__title">Links</h3>
                  <ul className="list-unstyled footer-widget__links-list">
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                  </ul>
                  {/* /.list-unstyled footer-widget__links-list */}
                </div>
                {/* /.footer-widget */}
              </div>
              {/* /.footer-widget__links-wrap */}
            </div>
            {/* /.col-lg-5 */}
            <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
              <div className="footer-widget">
                <div className="footer-widget__social">
                  <a href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
                {/* /.footer-widget__social */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.site-footer__upper */}
      <div className="site-footer__bottom">
        <div className="container text-center">
          <p>© copyright 2020 by Layerdrops.com</p>
        </div>
        {/* /.container */}
      </div>
      {/* /.site-footer__bottom */}
    </footer>
    {/* /.site-footer */}
  </div>
  {/* /.page-wrapper */}
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
    <i className="fa fa-angle-up" />
  </a>
  <div className="side-menu__block">
    <div className="side-menu__block-overlay custom-cursor__overlay">
      <div className="cursor" />
      <div className="cursor-follower" />
    </div>
    {/* /.side-menu__block-overlay */}
    <div className="side-menu__block-inner ">
      <div className="side-menu__top justify-content-end">
        <a href="#" className="side-menu__toggler side-menu__close-btn">
          <img src="assets/images/shapes/close-1-1.png" alt="" />
        </a>
      </div>
      {/* /.side-menu__top */}
      <nav className="mobile-nav__container">
        {/* content is loading via js */}
      </nav>
      <div className="side-menu__sep" />
      {/* /.side-menu__sep */}
      <div className="side-menu__content">
        <p>
          Lorem Ipsum is simply dummy text the printing and setting industry.
          Lorm Ipsum has been the industry's stanard dummy text ever.{" "}
        </p>
        <p>
          <a href="mailto:needhelp@apton.com">needhelp@apton.com</a> <br />{" "}
          <a href="tel:888-999-0000">888 999 0000</a>
        </p>
        <div className="side-menu__social">
          <a href="#">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p" />
          </a>
        </div>
      </div>
      {/* /.side-menu__content */}
    </div>
    {/* /.side-menu__block-inner */}
  </div>
  {/* /.side-menu__block */}
</>

  );
}

export default Fees;
