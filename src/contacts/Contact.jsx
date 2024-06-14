import React, { useEffect } from "react";
import "./contact.scss";
import ScrollReveal from "scrollreveal";

function Contact() {
  useEffect(() => {
    ScrollReveal().reveal(".left", {
      duration: 3000,
      reset: true,
      distance: "30px",
      origin: "left",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      mobile: false,
    });
    ScrollReveal().reveal(".right", {
      duration: 3000,
      reset: true,
      distance: "30px",
      origin: "right",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      mobile: false,
    });
    ScrollReveal().reveal(".top", {
      duration: 3000,
      reset: true,
      distance: "80px",
      origin: "top",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      mobile: false,
    });
    ScrollReveal().reveal(".bottom", {
      duration: 3000,
      reset: true,
      distance: "80px",
      origin: "bottom",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      mobile: false,
    });
  }, []);
  return (
    <section className="contact_wrapper" id="contact">
      <div className="container">
        <h2 className="top">Contact Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact_content">
              <h3>Let's get in touch. Send me a message:</h3>
              <form action="">
                <input
                  className="left"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="right"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <textarea
                  className="text_area "
                  name=""
                  id=""
                  cols="5"
                  rows="2"
                  placeholder="Write message ..."></textarea>
                <button className="d-block send_msg bottom">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-md-0">
            <div className="contact__img">
              <img
                src="assets/images/contact-me.webp"
                alt="contact"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
