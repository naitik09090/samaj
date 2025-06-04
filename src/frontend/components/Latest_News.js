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

        <div className="container-fluid bg5 d-flex justify-content-center" id="latest_news">
          <div className="container-fluid cont">
            <div className="row" data-aos="fade-right">
              <div className="col-12">
                <h1 className="LatestNews text-center text-dark">Latest News</h1>
              </div>
            </div>

            {/* ROW 1 */}
            <div className="row" data-aos="fade-right">
              <div className="col-12 col-sm-12 col-md-4 image-cont">
                <img src={card2} alt=" " className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to="/latest_news">
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-4 image-cont">
                <img src={card2} alt=" " className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to="/latest_news">
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-4 image-cont">
                <img src={card2} alt=" " className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to="/latest_news">
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="row" data-aos="fade-right">
              <div className="col-12 col-sm-12 col-md-4 image-cont">
                <img src={card2} alt=" " className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to="/latest_news">
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-4 image-cont">
                <img src={card2} alt=" " className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to="/latest_news">
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-4 image-cont">
                <img src={card2} alt=" " className="f_card11" />
                <div className="overlay">
                  <h1 className="txt111 text-center">
                    It is a long established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point.
                    <br />
                    <Link to="/latest_news">
                      <button className="txt112">Read More</button>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
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
