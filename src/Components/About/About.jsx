import React from "react";
import "./AboutStyle.css";
export default function About() {
  return (
    <section className="about min-vh-100 py-5 d-flex justify-content-center align-items-center">
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="title text-center pt-4 text-white">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            about component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="title-line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="title-line ms-3"></div>
          </div>
        </div>
        <div className="row px-5  text-white">
          <div className="col-md-6 ps-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6 pe-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
