import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import ScrollReveal from "scrollreveal";

import "./herosection.scss";

function HeroSection() {
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
      duration: 4000,
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
    <>
      <section className="hero__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="hero__sec_content">
                <h1 className="left">
                  Hi,
                  <br />
                  I'am <span>Nikhil</span>
                </h1>
                <h2>
                  <Typewriter
                    options={{
                      strings: "Frontend Developer",
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mt-md-4 curriculum_vitae">
                  Curriculum Vitae
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-md-0 ">
              <div className="hero__img">
                <img
                  src="assets/images/men1.webp"
                  alt="men image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
