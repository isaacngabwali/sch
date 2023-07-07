import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ab3bcgv",
        "template_xhicqmn",
        form.current,
        "user_SaNDuY4tUekOSErXPgq4S"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp" data-wow-duration="1500ms">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail" />
            </div>
            {/* /.mailchimp-one__icon */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mailchimp-one__form"
            >
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
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-widget footer-widget__about">
                  <a href="index.php">
                    <img src="img/sx.png" width="90%" alt="" />
                  </a>
                  <div className="footer-widget__social">
                    <a href="https://twitter.com/schlxug">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/company/schlxug/">
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                {/* /.footer-widget */}
              </div>
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <h3 className="footer-widget__title">About Us</h3>
                  <p>
                    Easy to use student Information management system to
                    Simplify workflows, Automate tasks, and Optimize your
                    school’s performance. Save time, improve processes, and
                    fulfill your school mission
                  </p>
                </div>
                {/* /.footer-widget */}
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-2">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Quick Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="/pricing">Pricing</a>
                      </li>
                      <li>
                        <a href="/resource">Resource Centre</a>
                      </li>
                      <li>
                        <a href="/faq">Faq</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.footer-widget__links-wrap */}
              </div>
              <div className="col-lg-3">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Contact Us</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">
                          Block B 3rd floor , Ntinda Complex , Ntinda - Kampala
                          UGANDA
                        </a>
                      </li>
                      <li>
                        <a href="#">+256 703 101688</a>
                      </li>
                      <li>
                        <a href="#">hello@schlxug.com</a>
                      </li>
                    </ul>
                  </div>
                  {/* /.footer-widget */}
                </div>
                {/* /.footer-widget__links-wrap */}
              </div>
              {/* /.col-lg-5 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.site-footer__upper */}
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© copyright | SchoolX</p>
          </div>
          {/* /.container */}
        </div>
        {/* /.site-footer__bottom */}
      </footer>
    </>
  );
}

export default Footer;
