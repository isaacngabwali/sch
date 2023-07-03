import React from "react";

function News() {
  return (
    <div>

    <div className="page-wrapper">
      <section className="blog-grid">
      <div data-aos="zoom-in" className="mt-16 text-center">
          <h1 className="text-darken text-2xl font-semibold">
          Resource Centre
          </h1>
          <h3 className="text-gray-500 my-5">
          Checkout What’s Going on in Our Resource Centre
          </h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                </div>{/* /.blog-one__image */}
                <div className="blog-one__content">
                  <div className="blog-one__circle" />{/* /.blog-one__circle */}
                  <div className="blog-one__content-inner">
                    <div className="blog-one__meta">
                      <a href="#"><i className="far fa-clock" /> 20 Feb</a>
                      <a href="#"><i className="far fa-comments" /> 2 comments</a>
                    </div>{/* /.blog-one__meta */}
                    <h3><a href="blog-details.html">The Impact of School Fee Loans on Educational Outcomes in Uganda</a></h3>
                  </div>{/* /.blog-one__content-inner */}
                </div>{/* /.blog-one__content */}
              </div>{/* /.blog-one__single */}
            </div>{/* /.col-lg-4 col-md-6 col-sm-12 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                </div>{/* /.blog-one__image */}
                <div className="blog-one__content">
                  <div className="blog-one__circle" />{/* /.blog-one__circle */}
                  <div className="blog-one__content-inner">
                    <div className="blog-one__meta">
                      <a href="#"><i className="far fa-clock" /> 20 Feb</a>
                      <a href="#"><i className="far fa-comments" /> 2 comments</a>
                    </div>{/* /.blog-one__meta */}
                    <h3><a href="blog-details.html">Why fees limit can’t work</a></h3>
                  </div>{/* /.blog-one__content-inner */}
                </div>{/* /.blog-one__content */}
              </div>{/* /.blog-one__single */}
            </div>{/* /.col-lg-4 col-md-6 col-sm-12 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                </div>{/* /.blog-one__image */}
                <div className="blog-one__content">
                  <div className="blog-one__circle" />{/* /.blog-one__circle */}
                  <div className="blog-one__content-inner">
                    <div className="blog-one__meta">
                      <a href="#"><i className="far fa-clock" /> 20 Feb</a>
                      <a href="#"><i className="far fa-comments" /> 2 comments</a>
                    </div>{/* /.blog-one__meta */}
                    <h3><a href="blog-details.html">How do low-income-parents pay school fees?</a></h3>
                  </div>{/* /.blog-one__content-inner */}
                </div>{/* /.blog-one__content */}
              </div>{/* /.blog-one__single */}
            </div>{/* /.col-lg-4 col-md-6 col-sm-12 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.blog-grid */}
    </div>{/* /.page-wrapper */}
  </div>
  );
}

export default News;
