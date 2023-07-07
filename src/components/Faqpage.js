import React from "react";
import Faq from "./Faq";
function Faqpage() {
  return (
    <>
      <section className="contact-one">
        <img
          src="assets/images/shapes/contact-bg-shape-1-1.png"
          className="contact-one__bg-shape-1"
          alt=""
        />
        <div className="container">
          <div className="row">
            <Faq />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </>
  );
}

export default Faqpage;
