import React from "react";
import "./Fasterflex.css";

const Ruler = () => {
  return (
    <React.Fragment>
      <div className="Profiler">
        <div className="clear">

        </div>
      <div className="container">
        <div className="Items">
          <img
            className="Hero"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMWe-7qnIYO2-9_IZVVqYY0yd9zjTCibPN5OWKAPTnrP6s3ANy8mya59ZlcJFpdPUzH1JyvYWCplmJLEv-KLlI18bK699nh0X7myoNvdhMA01E2ofnySmjAnF1L_HJczNyvdZXam3d96I_2HrHpt7EL_VtQPDw31Zep4R3c6Qat6SzQn9_JIA0z9JqXYU/s320/Loca.png"
            alt="hero"
            srcset=""
          />
        </div>
        <div className="Items">
          <h1>Angadi Saiganesh</h1>
          <h2>Software development engineer</h2>
          <h3>Saiganesh7989@gmail.com</h3>
          <div className="Social">
          <div className="Github">
              <a href="https://www.github.com/gani-23">
                <img
                  className="Image-1"
                  src="https://icon-library.com/images/github-icon-white/github-icon-white-2.jpg"
                  alt=""
                  srcset=""
                />
              </a>
            </div>

            <div className="Linkedin">
              <a href="https://www.linkedin.com/in/saiganesh5999">
                <img
                  className="Image-1"
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
            <div className="HackerRank">
              <a href="https://www.hackerrank.com/devops_saiganesh">
                <img
                  className="Image-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
        </div>
        </div>
        </div>
    </React.Fragment>
  );
};

export default Ruler;
