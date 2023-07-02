import React from "react";
import { motion } from "framer-motion";
import './Contact.css'
const Contact = () => {
  return (
    <div className="section">
      <section className="contact-sec sec-pad">
        <div className="container">
        <h1 className="section-title sm:hidden">Contact us</h1>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="col-md-6 sm:pt-0 pt-4">
              <div className="contact-detail">
                <h1 className="section-title hidden sm:flex">Contact us</h1>
                <ul className="contact-ul">
                  <li>
                    <i className="fa fa-location-dot"></i> 08, Ram Nagar, Ram
                    Mandir, Ujjain
                  </li>

                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="#">
                      <b>+91 XXXXXXXXXX</b>
                    </a>
                    ,
                    <a href="#">
                      <b>+91 XXXXXXXXXX</b>
                    </a>
                  </li>

                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:sandeepsharmawwe@gmail.com">
                      <b> studyNation@gmail.com</b>
                    </a>
                  </li>
                </ul>

                <span>
                  <a href="#" className="fb">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="insta">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
              </div>
            </div>

            <div className="col-md-6 w-full">
              <form action="#" className="contFrm" method="POST">
                <div className="row">
                  <div className="flex gap-0 sm:flex-row flex-col sm:gap-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="inptFld"
                      required
                    />
                  </div>
                  </div>
                  
                  <div className="flex gap-0 sm:flex-row flex-col sm:gap-3">
                  <div className="col-sm-6">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      className="inptFld"
                      required
                    />
                  </div>

                  </div>
                  
                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <input
                      type="submit"
                      name="submit"
                      value="SUBMIT"
                      className="inptBtn bg-Teal"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>-
        </div>
      </section>
      </div>
  );
};

export default Contact;
