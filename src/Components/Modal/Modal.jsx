import React from "react";
import "./Modal.css";

export default function Modal({ setIsOpen, img }) {
    // function to  Check if the click target is the background container (modal-container)
    const closeModal = (e) => {
    if (e.target.classList.contains("modal-container")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className="modal-container position-fixed top-0 start-0 bottom-0 end-0 w-100 h-100 d-flex justify-content-center align-items-center "
        onClick={closeModal}
      >
        <img
          src={img}
          alt="Selected"
          className="modal-image d-block rounded-3"
        />
      </div>
    </>
  );
}
