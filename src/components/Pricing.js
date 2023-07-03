import React from "react";

function AboutUs() {
  return (
    <>
      <section className="pricing-one" id="pricing">
        <div className="container">
          <div className="block-title text-center">
            <p>Pricing Tables</p>
            <h3>Choose Pricing Plans Which <br /> Suits Your Needs</h3>
          </div>{/* /.block-title text-center */}
          <div className="tabed-content">
            <div id="month">
              <div className="row">
                <div className="col-lg-12 animated fadeInLeft">
                  <div className="pricing-one__single">
                    <div className="pricing-one__circle" />{/* /.pricing-one__circle */}
                    <div className="pricing-one__inner">
                      <p>BASIC PACKAGE</p>
                      <ul className="list-unstyled pricing-one__list">
                        <li>STUDENT DATA MANAGEMENT</li>
                        <li>ACADEMIC RECORDS</li>
                        <li>ACCESS CONTROL</li>
                        <li>COMMUNICATIONS PORTAL</li>
                        <li>PARENTS ACCESS</li>
                      </ul>{/* /.list-unstyled pricing-one__list */}
                      <a href="#" className="thm-btn pricing-one__btn"><span>Get a Quote</span></a>
                      {/* /.thm-btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /#month */}
           </div>{/* /.tabed-content */}
        </div>{/* /.container */}
      </section>{/* /.pricing-one */}

    </>
  );
}

export default AboutUs;
