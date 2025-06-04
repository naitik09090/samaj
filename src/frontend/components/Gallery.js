import React, { useEffect, useState } from "react";
import g1 from "../image/g1.jpg";
import g2 from "../image/g2.jpg";
import g3 from "../image/g3.jpg";
import g4 from "../image/g4.jpg";
import g5 from "../image/g5.jpg";
import g6 from "../image/g6.jpg";
import g7 from "../image/g7.jpg";
import g8 from "../image/g8.jpg";
import g9 from "../image/g9.jpg";
import g10 from "../image/g10.jpg";
import g11 from "../image/g11.jpg";
import g12 from "../image/g12.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const images = [
  { src: g1, category: "Resort" },
  { src: g2, category: "Resort" },
  { src: g3, category: "Hotel" },
  { src: g4, category: "Food" },
  { src: g5, category: "Hotel" },
  { src: g6, category: "Hotel" },
  { src: g7, category: "Resort" },
  { src: g8, category: "Food" },
  { src: g9, category: "Hotel" },
  { src: g10, category: "Food" },
  { src: g11, category: "Hotel" },
  { src: g12, category: "Hotel" },
];

const About_Us = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      disable: "mobile",
      startEvent: "DOMContentLoaded",
      offset: 10,
      delay: 10,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <div className="container-fluid main">
        {/* Gallery */}
        <div className="bg-gallery container-fluid d-block" data-aos="fade-up">
          <div className="row">
            <div className="gallery col-md-12 text-center">Gallery</div>
          </div>
          <div className="justify-content-center">
            {/* Filter Buttons */}

            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Fillter Images
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item btn" onClick={() => setFilter("All")} href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item btn" onClick={() => setFilter("Resort")} href="#">
                    Resort
                  </a>
                </li>
                <li>
                  <a className="dropdown-item btn" onClick={() => setFilter("Food")} href="#">
                    Food
                  </a>
                </li>
                <li>
                  <a className="dropdown-item btn" onClick={() => setFilter("Hotel")} href="#">
                    Hotel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            {filteredImages.map((img, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <img src={img.src} alt={`img-${index}`} className="g1 w-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="container-fluid m-3 justify-content-center">
          <ul className="pagination text-center justify-content-center">
            <li className="page-item">
              <Link className="page-link" to={"/gallery2"}>
                Prev
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link active1" to={"/gallery"}>
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={"/gallery2"}>
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={"/gallery2"}>
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About_Us;
