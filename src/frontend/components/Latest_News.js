import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import card2 from "../image/card2.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Home_Page = () => {
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
  return (
    <>
      <div className="container-fluid main">
        {/* Latest News */}

        <div className="container-fluid bg5">
          <div className="container-fluid cont">
            <div className="row" data-aos="fade-right">
              <div className="col-md-12">
                <h1 className="LatestNews text-center text-dark">Latest News</h1>
              </div>
            </div>
            <div className="row" data-aos="fade-right">
              <div className="col-md-4 image-cont">
                <img src={card2} alt="Image 1" className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to={"/latest_news"}>
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="col-md-4 image-cont">
                <img src={card2} alt="Image 1" className="f_card011" />
                <div className="overlay1">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to={"/latest_news"}>
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="col-md-4 image-cont">
                <img src={card2} alt="Image 1" className="f_card0011" />
                <div className="overlay2">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to={"/latest_news"}>
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid cont">
            <div className="row" data-aos="fade-left">
              <div className="col-md-4 image-cont">
                <img src={card2} alt="Image 1" className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to={"/latest_news"}>
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="col-md-4 image-cont">
                <img src={card2} alt="Image 1" className="f_card011" />
                <div className="overlay1">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to={"/latest_news"}>
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="col-md-4 image-cont">
                <img src={card2} alt="Image 1" className="f_card0011" />
                <div className="overlay2">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to={"/latest_news"}>
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid">
          <div className="col-md-12">
            <div className="row" data-aos="fade-left">
              <div className="col-md-4">
                <img src={card2} alt="Image 1" className="f_card111 img-fluid" />

                <h1 className="txt1111 text-center">
                  It is a long established fact that a reader will be distracted by the <br />
                  readable content of a page when looking at its layout. The point. <br />
                  <Link to={"/latest_news"}>
                    <button className="txt112">Read More</button>
                  </Link>
                </h1>
              </div>
              <div className="col-md-4">
                <img src={card2} alt="Image 2" className="f_card111 img-fluid" />

                <h1 className="txt1111 text-center">
                  using Lorem Ipsum is that it has a more-or-less normal <br /> distribution
                  letters, as opposed to using Content here, content here. <br />
                  <Link to={"/latest_news"}>
                    <button className="txt112">Read More</button>
                  </Link>
                </h1>
              </div>
              <div className="col-md-4">
                <img src={card2} alt="Image 3" className="f_card111 img-fluid" />

                <h1 className="txt1111 text-center">
                  making it look like readable English. Many desktop publishing <br />
                  packages and web page editors now use Lorem Ipsum. <br />{" "}
                  <Link to={"/latest_news"}>
                    <button className="txt112">Read More</button>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div> */}
        </div>
        {/* pagination */}
        <div className="container-fluid m-4">
          <ul className="pagination text-center justify-content-center">
            <li className="page-item">
              <Link className="page-link" to={"/apani_sanstha"}>
                Prev
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={"/apani_sanstha"}>
                આપડી સંસ્થાઓ
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link active2" to={"/Latest_News"}>
                Latest News
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={"/apani_sanstha"}>
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home_Page;
