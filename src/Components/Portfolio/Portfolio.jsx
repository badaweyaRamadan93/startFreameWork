import React, { useState } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Modal from "../Modal/Modal"; // Import the modal component

// const images = require.context("../../imgs/portfolio", true);
// const imageList = images.keys().map((image) => images(image));

import project1 from "../../imgs/portfolio/poert1.png";
import project2 from "../../imgs/portfolio/port2.png";
import project3 from "../../imgs/portfolio/port3.png";
import project4 from "../../imgs/portfolio/poert1.png";
import project5 from "../../imgs/portfolio/port2.png";
import project6 from "../../imgs/portfolio/port3.png";

export default function Portfolio() {
  const imageList = [
    {
      id: 11,
      src: project1,
      alt: "Web 1",
    },
    {
      id: 22,
      src: project2,
      alt: "Mpbile App 1",
    },
    {
      id: 33,
      src: project3,
      alt: "Mpbile App 2",
    },
    {
      id: 44,
      src: project4,
      alt: "Web App 2",
    },
    {
      id: 55,
      src: project5,
      alt: "Web App 3",
    },
    {
      id: 66,
      src: project6,
      alt: "Web App 4",
    },
  ];

  const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close
  const [selectedImage, setSelectedImage] = useState(""); // State to store selected image source

  // Function to open modal and set selected image source
  const toggleModal = (src) => {
    setIsOpen(true);
    setSelectedImage(src);
  };

  return (
    <section className="portfolio min-vh-100 py-5 d-flex justify-content-center align-items-center">
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="title text-center pt-4 ">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="title-line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="title-line ms-3"></div>
          </div>
        </div>

        {/* PortfolioCard component */}
        <div className="row  g-4">
          {imageList.map((img) => (
            <PortfolioCard key={img.id} img={img} toggleModal={toggleModal} />
          ))}
        </div>

        {/* Modal component */}
        {isOpen && <Modal setIsOpen={setIsOpen} img={selectedImage} />}
      </div>
    </section>
  );
}
