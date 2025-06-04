import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img4 from "../image/img4.jpg";
import card2 from "../image/card2.jpg";
import fb1 from "../image/fb1.png";
import ig1 from "../image/ig1.png";
import tt1 from "../image/tt1.png";
import up from "../image/up.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
// import icon1 from "../image/icon2.png";

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

  const GoToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="top-btn" onClick={GoToBtn}>
        <img src={up} className="top-btn-img" />
      </div>
      <div className="container-fluid main">
        {/* Slider Three image */}
        {/* scrolldown scrolldown-final __web-inspector-hide-shortcut__ d-block" id="scrolldown" */}

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" data-aos="fade-up">
            <div className="carousel-item active">
              <img src={img1} className="img11 d-block w-100 h-180" alt="First Slide" />
            </div>
            <div className="carousel-item">
              <img src={img2} className="img12 d-block w-100 h-180" alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img src={img4} className="img13 d-block w-100 h-180" alt="Third Slide" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Second Navbar */}

        <div className="container-fluid d-flex justify-content-center">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" data-bs-toggle="tab">
              <a className="nav-link nav_1 active" href="#an_ideology">
                An_Ideology
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tab">
              <a className="nav-link nav_1" href="#આપડી_સંસ્થાઓ">
                આપડી_સંસ્થાઓ
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tab">
              <a className="nav-link nav_1" href="#youtube">
                Youtube
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tab">
              <a className="nav-link nav_1" href="#latest_news">
                Latest News
              </a>
            </li>
          </ul>
        </div>

        {/* An Ideology Details */}

        <div className="container-fluid bg1" data-aos="fade-down" id="an_ideology">
          <div className="row">
            <div className="col-md-12">
              <h1 className="An_Ideology col-md-12 text-center">An Ideology</h1>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-12">
              <div className="bar"></div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <img src={img4} className="img6 mx-auto" alt="Paris" />
            </div>
            <div className="col-sm-12 col-md-3">
              <img src={img4} className="img4 mx-auto" alt="Paris" />
            </div>
            <div className="col-md-6">
              <p className="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum has been the industry s standard dummy
                <br />
                text ever since the 1500s, when an unknown printer took a galley
                <br />
                of type and scrambled it to make a type specimen book. It has
                <br />
                survived not only five centuries, but also the leap into electronic
                <br />
                typesetting, remaining essentially unchanged. It was popularised in
                <br />
                the 1960s with the release of Letraset sheets containing Lorem
                <br />
                Ipsum passages, and more recently with desktop publishing
                <br />
                software like Aldus PageMaker including versions of Lorem Ipsum. <br />
                <button className="btn1">Learn More</button>
              </p>
            </div>
          </div>
        </div>

        {/* આપડી સંસ્થા Details */}
        <div className="container-fluid">
          <div className="row s_Details">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <h1>10+</h1>
              <p>
                Sanstha
                <br />
                StartYear
              </p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <h1>10+</h1>
              <p>
                Total
                <br />
                Sanstha
              </p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <h1>10+</h1>
              <p>
                Sanstha
                <br />
                Years
              </p>
            </div>
          </div>
        </div>

        {/* આપડી સંસ્થાઓ nine image Import */}

        <div className="bg3 container-fluid" id="આપડી_સંસ્થાઓ">
          <div id="sliderCard" className="carousel slide" data-bs-ride="carousel">
            <div className="ninefix row" data-aos="fade-up">
              <div className="col-md-12">
                <h1 className="LatestNews1 text-center text-light">આપડી સંસ્થાઓ</h1>
              </div>
            </div>

            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row" data-aos="fade-up">
                  <div className="col-md-4">
                    <Link to="/admission_surat">
                      <img src={card2} alt="Image 1" className=" f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center ">
                      આહીર શૈક્ષણિક ભવન <br /> સુરત
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_Ahmedabad">
                      <img src={card2} alt="Image 2" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      કન્યા છાત્રાલય <br /> અહમદાબાદ
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_surat1">
                      <img src={card2} alt="Image 3" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      કન્યા છાત્રાલય <br /> સુરત
                    </h1>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row" data-aos="fade-up">
                  <div className="col-md-4">
                    <Link to="/admission_surat">
                      <img src={card2} alt="Image 4" className=" f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> સુરત
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_Ahmedabad">
                      <img src={card2} alt="Image 5" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      કન્યા છાત્રાલય <br /> અહમદાબાદ
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_surat1">
                      <img src={card2} alt="Image 6" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      કન્યા છાત્રાલય <br /> સુરત
                    </h1>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="row" data-aos="fade-up">
                  <div className="col-md-4">
                    <Link to="/admission_Ahmedabad">
                      <img src={card2} alt="Image 7" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      કન્યા છાત્રાલય <br /> અહમદાબાદ
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_surat1">
                      <img src={card2} alt="Image 8" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      કન્યા છાત્રાલય <br /> સુરત
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_surat">
                      <img src={card2} alt="Image 9" className=" f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> સુરત
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#sliderCard"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#sliderCard"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden ">Next</span>
            </button>
          </div>
          <div id="sliderCard1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row" data-aos="fade-up">
                  <div className="col-md-4">
                    <Link to="/admission_rajkot">
                      <img src={card2} alt="Image 10" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> રાજકોટ
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_dwarka">
                      <img src={card2} alt="Image 11" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> દ્વારકા
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_bhavnager">
                      <img src={card2} alt="Image 12" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> ભાવનગર
                    </h1>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row" data-aos="fade-up">
                  <div className="col-md-4">
                    <Link to="/admission_rajkot">
                      <img src={card2} alt="Image 13" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> રાજકોટ
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_dwarka">
                      <img src={card2} alt="Image 14" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> દ્વારકા
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_bhavnager">
                      <img src={card2} alt="Image 15" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> ભાવનગર
                    </h1>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="row" data-aos="fade-up">
                  <div className="col-md-4">
                    <Link to="/admission_dwarka">
                      <img src={card2} alt="Image 16" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> દ્વારકા
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_bhavnager">
                      <img src={card2} alt="Image 17" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> ભાવનગર
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <Link to="/admission_rajkot">
                      <img src={card2} alt="Image 18" className="f_card1 img-fluid" />
                    </Link>
                    <h1 className="txt11 text-center">
                      આહીર શૈક્ષણિક ભવન <br /> રાજકોટ
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#sliderCard1"
              data-bs-slide="prev"
            >
              <span className="prev carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#sliderCard1"
              data-bs-slide="next"
            >
              <span className="next carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden ">Next</span>
            </button>
          </div>
          <div className="container-fluid" data-aos="zoom-in">
            <div className="row text-center" data-aos="fade-right">
              <div className="col-md-12">
                <Link to={"/apani_sanstha"}>
                  <button
                    type="button"
                    className="btn111 text-center"
                    data-toggle="collapse"
                    data-target="#demo"
                  >
                    <b>More</b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Youtube Link */}

        <div className="container-fluid" data-aos="fade-up" id="youtube">
          <div className="row">
            <div className="youtube_video col-row-12">
              <iframe
                className="youtube"
                src="https://www.youtube.com/embed/ejunflwgquc?si=1sE_WTDq-eeVXe5P"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Latest News */}

        <div className="container-fluid bg5" id="latest_news">
          <div className="row" data-aos="fade-right">
            <div className="col-md-12">
              <h1 className="LatestNews text-center text-dark">Latest News</h1>
            </div>
          </div>

          {/* ROW 1 */}
          <div className="row" data-aos="fade-right">
            <div className="col-sm-12 col-md-1"></div>
            <div className="col-sm-12 col-md-3 image-cont">
              <img src={card2} alt="Image 1" className="f_card11" />
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

            <div className="col-sm-12 col-md-4 image-cont">
              <img src={card2} alt="Image 2" className="f_card11" />
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

            <div className="col-sm-12 col-md-3 image-cont">
              <img src={card2} alt="Image 3" className="f_card11" />
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
            <div className="col-sm-12 col-md-1"></div>
          </div>

          {/* ROW 2 */}
          <div className="row" data-aos="fade-right">
            <div className="col-sm-12 col-md-1"></div>
            <div className="col-sm-12 col-md-3 image-cont">
              <img src={card2} alt="Image 4" className="f_card11" />
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

            <div className="col-sm-12 col-md-4 image-cont">
              <img src={card2} alt="Image 5" className="f_card11" />
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

            <div className="col-sm-12 col-md-3 image-cont">
              <img src={card2} alt="Image 6" className="f_card11" />
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
            <div className="col-sm-12 col-md-1"></div>
          </div>

          {/* READ MORE BUTTON */}
          <div className="row text-center" data-aos="zoom-in">
            <div className="col-md-12">
              <Link to="/latest_news">
                <button type="button" className="btn11 text-center">
                  <b>Read More</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* footer */}

        <div className="container-fluid bg-dark text-light" data-aos="zoom-in-down">
          <div className="row">
            <div className="a1 col-md-4">
              <h1>આહીર સમાજ ગુજરાત</h1>
              <p>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. Vestibulum ante ipsum <br />
                  primis in faucibus
                </strong>
              </p>
              <div>
                <a href="#">
                  <img src={fb1} alt="Facebook" className="alogo fb_logo" />
                </a>
                <a href="#">
                  <img src={ig1} alt="Instagram" className="alogo ig_logo" />
                </a>
                <a href="#">
                  <img src={tt1} alt="Twitter" className="alogo tt_logo" />
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="home row">
                <div className="home col-6">
                  <a href="/home">
                    <p className="mb-2">Home</p>
                  </a>
                  <a href="/About">
                    <p className="mb-2">About Us</p>
                  </a>
                  <a href="#">
                    <p className="mb-2">Admission</p>
                  </a>
                  <a href="/Contact">
                    <p className="mb-2">Contact Us</p>
                  </a>
                </div>
                <div className="contact col-6">
                  <p className="mb-2">Contact</p>
                  <p className="mb-2">FAQ S</p>
                  <p className="mb-2">Team Policy</p>
                  <p className="mb-2">Privacy Policy</p>
                </div>
              </div>
            </div>

            <div className="contactInfo col-md-4">
              <h2>Contact Us</h2>
              <p>
                need to be sure there isn t anything embarrassing
                <br />
                hidden in the middle of text.
                <br />
                All the Lorem ipsum generators on the Internet
              </p>
              <ul>
                <li>123-785-4521</li>
                <li>info14@gmail.com</li>
                <li>
                  106, shilp aperia, Ambli Rd,
                  <br />
                  Vikram Nagar, Ahmedabad,
                  <br />
                  Gujarat 380058
                </li>
              </ul>
            </div>

            <div className="copyright text-center">© Copyright 2024 All rights reserved |</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Page;
