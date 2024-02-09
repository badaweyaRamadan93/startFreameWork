import React from "react";
import notFoundImg from "../../imgs/page_not_found.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className=" min-vh-100 py-5 d-flex justify-content-center align-items-center">
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
          <img src={notFoundImg} alt="" className=" d-block w-100" />
          <p className="text-danger fs-4 my-2 text-center">
            Oops! It looks like this page doesn't exist. Please check the URL
            and try again.
          </p>
          <Link
            className="btn  my-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
            onClick={() => {
              handleScrollTop();
            }}
            to=""
          >
            Back Home
          </Link>
        </div>
      </section>
    </>
  );
}
