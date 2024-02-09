import React from "react";
import "./PortfolioCard.css";
export default function PortfolioCard({ img, toggleModal }) {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="inner rounded-3 overflow-hidden position-relative">
          <img
            src={img.src}
            alt={img.alt}
            className="d-block w-100 rounded-3"
          />
          <div
            className="img-layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
            onClick={() => toggleModal(img.src)} // Call toggleModal function on click
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
      </div>
    </>
  );
}
