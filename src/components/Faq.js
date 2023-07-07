import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "1. What benefit do I stand to have from using this platform?",
      content: `Fast Working Process, We can migrate your data and have you running in less than a week. 24/7 Hours Support, We are with you every step of the way and help you overcome any huddles you may come across.
Communication Portal, Making public communication to parents has been made easier in a few clicks send email or SMS communications concerning school programs, students welfare, etc.
Access Control, One of our the most in-demand features indeed!. Monitor when your day scholars are picked up or dropped off by the school shuttle, and when they arrive or depart from school premises all the while promptly notifying their guardians to subdue their worries.
Cloud BackUp, Never worry about data loss in case of any incident your data can be recovered to the last 5 hours of you interacting with your system.
Digital Records, This tool can digitalize almost all processes involved in running your school. Enrollment , to generating report cards you name it we got you covered.`,
    },
    {
      title: "3.Does school x integrate with 3rd party apps.",
      content: "At the moment, No.",
    },
    {
      title: "4.How does the free Trial work?",
      content: `The Trial offers the full version of the professional site for 3 months. The trial doesn’t impose any limitations on the platform. You get the full experience and depth of the SchoolX platform, so you know exactly what you’re getting into when you become a Schoolx customer.`,
    },
    {
      title: "5.Does my free trial limit my access to features?",
      content: `No, during the free trial period, you have access to all available features within the platform`,
    },
    {
      title: "7.Are there any setup fees?",
      content: `No, there are no set-up costs or hidden costs on any of our plans on SchoolX. Order your first term for free and you will get instant access to your account.`,
    },
    {
      title: "8.Will my data be private and safe?",
      content: `We take data security seriously at SchoolX, our servers are hosted in a world-class data center that is protected by 24-hour surveillance and e ensure that our application is always up to date with the latest security patches. All our plans include SSL encryption to keep data safe.`,
    },
    {
      title: "9.Will my data be private and safe?",
      content:
        "Customers take data security seriously — especially for products dealing with sensitive data. Tell them what kinds of measures you take to keep their information secure. Do you have SSL encryption? What kind? How about password hashing? Access tokens? PCI compliance? Physically secured server rooms that you own and operate? Do you sell information to third parties?",
    },
    {
      title: "10. Have more questions, Reach out to us directly",
      content: (
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
                <option value>Discussion For</option>
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
      ),
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function Faqs() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
