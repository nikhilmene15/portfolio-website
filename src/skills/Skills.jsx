import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./skills.scss";
function Skills() {
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
    <section className="skills__wrapper position-relative" id="skills">
      <div className="container">
        <h2 className="top">Skills</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-3  mt-3 mt-md-0 left">
            <div className="skill_card ">
              <h3>html</h3>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-3 mt-md-0 top">
            <div className="skill_card skill_card_1">
              <h3>css</h3>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-3 mt-md-0 top">
            <div className="skill_card skill_card_2">
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-3 mt-lg-0 right">
            <div className="skill_card">
              <h3>react js</h3>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-3 left">
            <div className="skill_card">
              <h3>gulp</h3>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-3 bottom">
            <div className="skill_card">
              <h3>sass</h3>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-3 right">
            <div className="skill_card">
              <h3>responsive design</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
