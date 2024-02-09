import React from "react";
import avater from "../../imgs/avataaars.svg";
import "./HomeStyle.css";
export default function Home() {
  return (
    <>
      <section className="home min-vh-100 py-5 d-flex justify-content-center align-items-center">
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
          <img src={avater} alt="" className="img-avater d-block" />
          <div className="title text-center pt-4 text-white">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              start Framework
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="title-line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="title-line ms-3"></div>
            </div>
          </div>
          <div className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </div>
        </div>
      </section>
    </>
  );
}
