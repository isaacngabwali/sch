import React from "react";

function ContactUs() {
  return (
    <>
      <section className="contact-one">
        <img src="assets/images/shapes/contact-bg-shape-1-1.png" className="contact-one__bg-shape-1" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <form action="assets/inc/sendemail.php" className="contact-form-validated contact-one__form">
                <div className="block-title">
                  <p>Contact Now</p>
                  <h3>Have Question? Write <br /> a Message</h3>
                </div>{/* /.block-title */}
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name" name="name" />
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <input type="text" placeholder="Email Address" name="email" />
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <input type="text" placeholder="Subject" name="subject" />
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <select name="services" className="selectpicker">
                      <option value>Discussion For</option>
                      <option value="Pricing Query">Pricing Query</option>
                      <option value="Free Trial">Free Trial</option>
                    </select>{/* /#.selectpicker */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-12">
                    <textarea placeholder="Write Message" name="message" defaultValue={""} />
                  </div>{/* /.col-lg-12 */}
                  <div className="col-lg-12 text-left">
                    <button type="submit" className="thm-btn contact-one__btn"><span>Send
                        Message</span></button>
                    {/* /.thm-btn contact-one__btn */}
                  </div>{/* /.col-lg-12 */}
                </div>{/* /.row */}
              </form>{/* /.contact-one__form */}
              <div className="result" />{/* /.result */}
            </div>{/* /.col-lg-7 */}
            <div className="col-lg-5 d-flex wow fadeInRight" data-wow-duration="1500ms">
              <div className="my-auto">
                <div className="contact-one__image">
                  <img src="assets/images/resources/contact-1-1.jpg" alt="" />
                </div>{/* /.contact-one__image */}
              </div>{/* /.my-auto */}
            </div>{/* /.col-lg-5 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    </>
  );
}

export default ContactUs;
