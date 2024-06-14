import React, { useEffect } from "react";
import "./aboutme.scss";
import ScrollReveal from "scrollreveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function AboutMe() {
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
    <section className="about__me" id="about">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4">
            <div className="my_profile_img">
              <LazyLoadImage
                className="img-fluid"
                alt=""
                effect="blur"
                src="assets/images/nikhil.png"
              />
            </div>
          </div>
          <div className="col-lg-7 mt-4 mt-md-0 ">
            <h2 className="top">About Me</h2>
            <p className="right">
              Hey there! I'm <span>Nikhil Mene</span>, a passionate web
              developer with a knack for crafting engaging and responsive web
              experiences. With a strong foundation in HTML, CSS, and
              JavaScript, I breathe life into designs using the power of
              React.js and jQuery, while adding smooth animations with GSAP.
              <br />
              <br /> Driven by a love for creativity and innovation, I thrive on
              turning ideas into dynamic, user-friendly websites. My expertise
              extends to utilizing tools like Gulp and Sass to streamline
              development workflows and maintain clean, efficient code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
