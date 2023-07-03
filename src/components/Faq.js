import React from "react";

function Faq() {
  return (
    <section className="faq-one">
    <img src="assets/images/shapes/faq-bg-1-1.png" className="faq-one__bg-shape-1" alt="" />
    <div className="container">
      <div className="block-title text-center">
        <p>Frequently Asked Questions</p>
        <h3>Want to Ask Something <br /> From Appton?</h3>
      </div>{/* /.block-title */}
      <div className="accrodion-grp wow fadeIn" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
        <div className="accrodion active ">
          <div className="accrodion-inner">
            <div className="accrodion-title">
              <h4>Pre and post launch mobile app marketing pitfalls to avoid</h4>
            </div>
            <div className="accrodion-content">
              <div className="inner">
                <p>There are many variations of passages of available but majority have alteration
                  in some by inject humour or random words. Lorem ipsum dolor sit amet.</p>
              </div>{/* /.inner */}
            </div>
          </div>{/* /.accrodion-inner */}
        </div>
        <div className="accrodion  ">
          <div className="accrodion-inner">
            <div className="accrodion-title">
              <h4>Boostup your application traffic is just a step away</h4>
            </div>
            <div className="accrodion-content">
              <div className="inner">
                <p>There are many variations of passages of available but majority have alteration
                  in some by inject humour or random words. Lorem ipsum dolor sit amet.</p>
              </div>{/* /.inner */}
            </div>
          </div>{/* /.accrodion-inner */}
        </div>
        <div className="accrodion ">
          <div className="accrodion-inner">
            <div className="accrodion-title">
              <h4>How to update application new features</h4>
            </div>
            <div className="accrodion-content">
              <div className="inner">
                <p>There are many variations of passages of available but majority have alteration
                  in some by inject humour or random words. Lorem ipsum dolor sit amet.</p>
              </div>{/* /.inner */}
            </div>
          </div>{/* /.accrodion-inner */}
        </div>
        <div className="accrodion ">
          <div className="accrodion-inner">
            <div className="accrodion-title">
              <h4>How to connect with the support to improve app experience</h4>
            </div>
            <div className="accrodion-content">
              <div className="inner">
                <p>There are many variations of passages of available but majority have alteration
                  in some by inject humour or random words. Lorem ipsum dolor sit amet.</p>
              </div>{/* /.inner */}
            </div>
          </div>{/* /.accrodion-inner */}
        </div>
      </div>
    </div>{/* /.container */}
  </section>
  );
}

export default Faq;
