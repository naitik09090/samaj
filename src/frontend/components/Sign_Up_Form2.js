import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import img1 from "../image/imgn1.jpg";

const Sign_Up_Form2 = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row w-100 shadow rounded overflow-hidden bg-white"
        style={{
          maxWidth: "1000px",
        }}
      >
        {/* Left image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={img1}
            alt="Students"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Right form */}
        <div className="col-md-6 p-5">
          <h4 className="mb-4 text-center text-dark fw-bold">Sign_Up Form</h4>
          <form>
            {/* First & Last Name */}
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
            </div>

            {/* Address */}
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Address" />
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label className="form-label d-block">Gender:</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="female" />
                <label className="form-check-label text-dark" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="male" />
                <label className="form-check-label text-dark" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="other" />
                <label className="form-check-label text-dark" htmlFor="other">
                  Other
                </label>
              </div>
            </div>

            {/* State & City */}
            <div className="row mb-3">
              <div className="col">
                <select className="form-select">
                  <option>State</option>
                  <option>California</option>
                  <option>Texas</option>
                  <option>New York</option>
                </select>
              </div>
              <div className="col">
                <select className="form-select">
                  <option>City</option>
                  <option>Los Angeles</option>
                  <option>Houston</option>
                  <option>New York City</option>
                </select>
              </div>
            </div>

            {/* Pincode */}
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Pincode" />
            </div>

            {/* Course */}
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Course" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input type="email" className="form-control" placeholder="Email ID" />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button type="reset" className="btn btn-light border">
                RESET ALL
              </button>
              <Link to={"/home"}>
                <button type="submit" className="btn btn-warning text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up_Form2;
