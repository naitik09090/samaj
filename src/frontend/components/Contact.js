import React, { useEffect, useState } from "react";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img4 from "../image/img4.jpg";
import Location_icon from "../image/Location_icon.png";
import Call_icon from "../image/Call_icon.png";
import Mail_icon from "../image/Mail_icon.png";
import fb1 from "../image/fb1.png";
import ig1 from "../image/ig1.png";
import tt1 from "../image/tt1.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
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

        {/* Form And Details */}

        <div className="container-fluid" data-aos="zoom-in-up">
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
                  <img src={Location_icon} alt="" className="img_કન્યા_છાત્રાલય d-block" />
                  <b className="b_કન્યા_છાત્રાલય">
                    E 310,Titanium City Center ,B/h IOC Petrol Pump, <br />
                    100 Feet Rd, Satellite, Prahlad Nagar, Ahmedabad <br />
                    Gujarat 380015
                  </b>
                </a>
              </b>
              <b>
                <a href="">
                  <img src={Call_icon} alt="" className="img_કન્યા_છાત્રાલય d-block" />
                  <b className="b_કન્યા_છાત્રાલય">
                    +1 253 565 2365 <br /> Mon to Fri 9am to 6pm
                  </b>
                </a>
              </b>
              <b>
                <a href="">
                  <img src={Mail_icon} alt="" className="img_કન્યા_છાત્રાલય d-block" />
                  <b className="b_કન્યા_છાત્રાલય">
                    support@hoxton.com <br /> Send us your query anytime!
                  </b>
                </a>
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

        <div className="container-fluid bg-dark text-light" data-aos="zoom-out">
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
          </div>

          <div className="copyright text-center">© Copyright 2024 All rights reserved |</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
