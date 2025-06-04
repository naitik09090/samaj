import React, { useEffect, useState } from "react";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img4 from "../image/img4.jpg";
import imgn1 from "../image/imgn1.jpg";
import wifi from "../image/wifi.png";
import food from "../image/food.png";
import security1 from "../image/security1.png";
import library from "../image/library.png";
import img5 from "../image/img5.jpg";
import g1 from "../image/g1.jpg";
import g2 from "../image/g2.jpg";
import g3 from "../image/g3.jpg";
import g4 from "../image/g4.jpg";
import g5 from "../image/g5.jpg";
import g6 from "../image/g6.jpg";
import Location_icon from "../image/Location_icon.png";
import Call_icon from "../image/Call_icon.png";
import Mail_icon from "../image/Mail_icon.png";
import fb1 from "../image/fb1.png";
import ig1 from "../image/ig1.png";
import tt1 from "../image/tt1.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Admission = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { FirstName, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [FirstName]: value,
    }));
  };
  const handleChange1 = (e) => {
    const { LastName, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [LastName]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
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
        {/* Slider Three image */}

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

        {/* one Image And Two Paragraph */}

        <div className="container-fluid" data-aos="flip-up">
          <div className="row text-center">
            <b className="h11">આહીર શૈક્ષણિક ભવન રાજકોટ</b>
          </div>
        </div>

        <div className="container-fluid" data-aos="fade-up">
          <div className="row row12345">
            <div className="col-md-1"></div>
            <div className="txt122 col-md-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.Contrary
              to popular belief, Lorem ipsum is not simply random
              <br />
              <br />
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="col-md-6">
              <img src={imgn1} alt="" className="imgn11 mx-auto d-block" />
            </div>
          </div>
        </div>

        {/* Four Card */}

        <div className="container-fluid card-bg" data-aos="zoom-out-down">
          <div className="row row123">
            {/* wifi */}

            <div className="col-md-3 card bg-dark">
              <img src={wifi} alt="" className="wifi" />
              <div className="wifitxt text-white">Unlimited Wifi</div>
              <div className="p1 text-white">
                lt has roots in a piece of classical <br />
                Latin literature from 45 BC,making
                <br />
                it over 2000 years old. Richard , a<br />
                McClintock, Latin professor Hampden
                <br />
                -Sydney college in Virginia, looked up
              </div>
            </div>
            {/* <div className='col-md-1'></div> */}

            {/* food */}

            <div className="col-md-3 card bg-dark">
              <img src={food} alt="" className="food" />
              <b className="foodtxt text-white">Food</b>
              <p className="p1 text-white">
                one of the more obscure Latin words, <br />
                consectetur, from a Lorem Ipsum
                <br />
                passage, and going through the
                <br />
                cites of the word in classical literature
                <br />
                discovered the undoubtable source.
              </p>
            </div>
            {/* <div className='col-md-1'></div> */}

            {/* security */}

            <div className="col-md-3 card bg-dark">
              <img src={security1} alt="" className="security" />
              <b className="securitytxt text-white">Security</b>
              <p className="p1 text-white">
                Lorem Ipsum comes from sections <br />
                1.10.32 and 1.10.33 of de Finibus
                <br />
                Bonorum et Malorum by Cicero,
                <br />
                (The Extremes of Good and Evil)
                <br />
                written in 45 BC. This book is a reatise
              </p>
            </div>
            {/* <div className='col-md-1'></div> */}

            {/* library */}

            <div className="col-md-3 card bg-dark">
              <img src={library} alt="" className="library" />
              <b className="librarytxt text-white">Library</b>
              <p className="p1 text-white">
                There are many variations of <br />
                passages of Lorem Ipsum available,
                <br />
                but the majority have suffered in some
                <br />
                form, by injected humour,or words
                <br />
                or ramdomised woreds which
              </p>
            </div>
          </div>
        </div>

        {/* Two image and Two Paragraph */}

        <div className="container-fluid bg2" data-aos="fade-left">
          <div className="row row1234">
            <div className="col-md-6 txtcard ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut <br />
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor
              <br />
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              <br />
              sunt in culpa qui officia deserunt mollit anim id est laborum
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremqlaudantium, totam rem aperiam, eaque <br />
              ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.Nemo enim ipsam voluptatem quia
              <br />
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
              <br />
            </div>
            <div className="col-md-3">
              <img src={img5} alt="" className="img5 mx-auto d-block" />
            </div>
            <div className="col-md-3">
              <img src={img5} alt="" className="img5_1 mx-auto d-block" />
            </div>
          </div>
        </div>

        {/* Gallery */}

        <div className="bg-gallery container-fluid d-block" data-aos="fade-up">
          <div className="row">
            <div className="gallery col-md-12 text-center">Gallery</div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-md-4">
              <img src={g1} alt="" className="g1" />
            </div>
            <div className="col-md-4">
              <img src={g2} alt="" className="g1" />
            </div>
            <div className="col-md-4">
              <img src={g3} alt="" className="g1" />
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-md-4">
              <img src={g4} alt="" className="g1" />
            </div>
            <div className="col-md-4">
              <img src={g5} alt="" className="g1" />
            </div>
            <div className="col-md-4">
              <img src={g6} alt="" className="g1" />
            </div>
          </div>

          <div className="container-fluid" data-aos="zoom-in">
            <div className="row text-center" data-aos="fade-right">
              <div className="col-md-12">
                <Link to={"/gallery"}>
                  <button
                    type="button"
                    className="btn1111 text-center"
                    data-toggle="collapse"
                    data-target="#demo"
                  >
                    <b>More Images</b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form And Details */}

        <div className="container-fluid" data-aos="zoom-out-down">
          <div className="row">
            {/* Details */}
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <br />
              <b className="contact_કન્યા_છાત્રાલય">કન્યા છાત્રાલય</b> <br />
              <b className="p_કન્યા_છાત્રાલય">
                Maecenas consectetur ante vitae ante hendrerit tincidunt. Cras dignissim <br />
                lectus nibh, eu convallis magna facilisis et. Maecenas rhoncus sed velit a rutrum.
                <br />
                Curabitur pretium, massa ut venenatis dignissim, libero ante facilisis turpis,
                <br />
                ac rutrum odio diam sit amet nulla. Donec blandit rhoncus lacus, eu elementum augue
                <br />
                convallis non.
                <br />
                <br />
                Cras cursus eu diam eu pharetra. Curabitur fermentum ultrices neque, non viverra
                turpis <br />
                luctus et. Duis enim purus, ornare sodales erat id, mattis vehicula metus.
                Pellentesque
                <br />
                faucibus portadui ac scelerisque. Praesent cursus, nunc ut sodales aliquam, enim
                <br />
                purus maximusipsum, a volutpat augue ipsum et eros.
              </b>
              <br />
              <br />
              <br />
              <br />
            </div>

            {/* Form */}

            <div className="col-md-5">
              <br />
              <br />
              <form onSubmit={handleSubmit} className="form_Main">
                <div className="row mb-3">
                  <h2>Name(required)</h2>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="First Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="Last Name"
                      onChange={handleChange1}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="Email">Email (required)</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    name="Email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Subject">Subject (required)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Subject"
                    name="Subject"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" value={formData.Message} onChange={handleChange}>
                    Message (required)
                    <textarea
                      name="message"
                      rows="5"
                      cols="104"
                      placeholder="Send This Message..."
                      className="form-control msg"
                    ></textarea>
                  </label>
                </div>
                <div className="mb-3">
                  <button type="submit" className="submit_btn">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Map */}

        <div className="container-fluid" data-aos="zoom-in-down">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5 m_txt">
              <b>
                <a href="">
                  <img src={Location_icon} alt="" className="img_કન્યા_છાત્રાલય d-block" />{" "}
                </a>
              </b>
              <b className="b_કન્યા_છાત્રાલય">
                E 310,Titanium City Center ,B/h IOC Petrol Pump, <br />
                100 Feet Rd, Satellite, Prahlad Nagar, Ahmedabad <br />
                Gujarat 380015
              </b>
              <b>
                <a href="">
                  <img src={Call_icon} alt="" className="img_કન્યા_છાત્રાલય d-block" />{" "}
                </a>
              </b>
              <b className="b_કન્યા_છાત્રાલય">
                +1 253 565 2365 <br /> Mon to Fri 9am to 6pm
              </b>
              <b>
                <a href="">
                  <img src={Mail_icon} alt="" className="img_કન્યા_છાત્રાલય d-block" />{" "}
                </a>
              </b>
              <b className="b_કન્યા_છાત્રાલય">
                support@hoxton.com <br /> Send us your query anytime!
              </b>
            </div>
            <div className="col-md-5">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18302.748293324257!2d72.872099813405!3d21.245579736758803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1747654806410!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        {/* End Point */}

        <div className="end2 container-fluid bg-dark text-light" data-aos="zoom-out-down">
          <div className="row">
            <div className="a1 col-md-4">
              <h1>આહીર સમાજ ગુજરાત</h1>
              <p className="mt-3">
                <strong>Lorem ipsum dolor sit amet, consectetur</strong>
                <br />
                adipiscing elit. Vestibulum ante ipsum <br />
                primis in faucibus
              </p>
              <div className="gap-3 mt-3">
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
                  <a href="/about">
                    <p className="mb-2">About Us</p>
                  </a>
                  <a href="#">
                    <p className="mb-2">Admission</p>
                  </a>
                  <a href="/contact">
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
              <p className="small">
                need to be sure there isnt anything embarrassing
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
          </div>

          <div className="copyright text-center">© Copyright 2024 All rights reserved |</div>
        </div>
      </div>
    </>
  );
};

export default Admission;
