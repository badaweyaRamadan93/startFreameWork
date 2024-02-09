import React from "react";
import "./FooterStyle.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-head py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h3>AROUND THE WEB</h3>
                <div className="footer-links">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook mx-1" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter mx-1" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in mx-1" />
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-globe mx-1" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-white">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
