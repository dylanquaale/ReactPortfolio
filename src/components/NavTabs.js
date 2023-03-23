import React, { useRef, useEffect, useState } from "react";

function NavTabs({ currentPage, handlePageChange }) {
  const [documentWidth, setDocumentWidth] = useState(null);
  const documentReference = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const newDocumentWidth = documentReference.current.offsetWidth;
      setDocumentWidth(newDocumentWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    console.log(documentWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [documentWidth]);
  return (
    <div className="col" ref={documentReference}>
      <h1 className="headerName">Dylan Quaale</h1>
      <ul className="nav nav-tabs">
        <div className={documentWidth < 580 ? "d-flex flex-column-reverse bd-highlight" : "d-flex flex-direction-reverse bd-highlight"}>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About Me" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavTabs;
