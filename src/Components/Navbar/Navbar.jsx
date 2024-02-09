import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarStyle.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  const navClass = scrolled
    ? "navbar navbar-expand-lg fixed-top shadow"
    : "navbar navbar-expand-lg fixed-top py-4";

  // Component Mounting => DidMount
  useEffect(() => {
    // function to handle navbar scroll
    const handleScroll = () => {
      let isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function to handle navbar open & close
  const handleToggleNav = () => {
    setCloseNav(!closeNav);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={navClass}>
      <div className="container">
        <NavLink
          className="navbar-brand text-uppercase fw-bolder fs-3 text-white"
          to="/"
          onClick={() => {
            handleScrollTop();
          }}
        >
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={closeNav ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <i
            className={`fa-solid ${
              closeNav ? "fa-xmark" : "fa-bars"
            } icon-menu`}
          ></i>
        </button>

        <div
          className={`collapse navbar-collapse ${closeNav ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item me-3">
              <NavLink
                exact="true"
                activeclassname="active"
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3"
                to="/about"
                onClick={() => {
                  handleToggleNav();
                  handleScrollTop();
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                exact="true"
                activeclassname="active"
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3"
                to="/portfolio"
                onClick={() => {
                  handleToggleNav();
                  handleScrollTop();
                }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                exact="true"
                activeclassname="active"
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3"
                to="/contact"
                onClick={() => {
                  handleToggleNav();
                  handleScrollTop();
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
