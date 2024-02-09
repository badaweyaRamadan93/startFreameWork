import React from "react";
import "./Contact.css";
export default function Contact() {
  // const handleLabel = (e) => {
  //   console.log(e.target.id);
  // };

  return (
    <section className="portfolio min-vh-100 py-5 d-flex justify-content-center align-items-center">
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="title text-center pt-4 ">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            conatct section
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="title-line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="title-line ms-3"></div>
          </div>
        </div>

        <form className="contact-form px-3 py-4 mx-auto mt-5">
          <div>
            <input
              id="userName"
              type="text"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
            <label htmlFor="userName" className="position-relative ">
              userName :
            </label>
          </div>

          <div>
            <input
              id="userAge"
              type="number"
              min="0"
              max="120"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
            <label htmlFor="userAge" className="position-relative">
              userAge :
            </label>
          </div>

          <div>
            <input
              id="userEmail"
              type="text"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
            <label htmlFor="userEmail" className="position-relative">
              userEmail :
            </label>
          </div>

          <div>
            <input
              id="userPassword"
              type="password"
              placeholder="userPassword"
              name="userPassword"
              className="form-control border-0 border-bottom py-3 position-relative "
            />

            <label htmlFor="userPassword" className="position-relative ">
              userPassword :
            </label>
          </div>

          <button
            type="button"
            className="btn  text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            send Message
          </button>
        </form>
      </div>
    </section>
  );
}
