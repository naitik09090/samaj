import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../image/logo.png";
import fb from "../image/facebook.png";
import ig from "../image/instagram.png";
import tt from "../image/twitter.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  // }, [darkMode]);

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <>
      {/* Navbar */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-dark d-block navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse mt-2 ${isOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item nav-item1">
                  <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item nav-item1">
                  <Link className="nav-link" to={"/About"}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item nav-item1">
                  <Link className="nav-link" to={"/Contact"}>
                    Contact Us
                  </Link>
                </li>
                {/* <li className="nav-item ms-2">
                <Link className="nav-link" to="/signup"></Link>
                </li> */}
              </ul>
              <div className="mx-auto">
                <a className="navbar-brand" href=" ">
                  <img src={logo} alt="Logo" className="logo" />
                </a>
              </div>

              <ul className="t_icon navbar-nav ms-auto d-flex flex-row align-items-center">
                <li className=" nav-item ms-2">
                  <a className="nav-link p-0" href=" ">
                    <img src={fb} alt="Facebook" className="fb fb_logo1" />
                  </a>
                </li>
                <li className="nav-item ms-2">
                  <a className="nav-link p-0" href=" ">
                    <img src={ig} alt="Instagram" className="ig ig_logo1" />
                  </a>
                </li>
                <li className="nav-item ms-2">
                  <a className="nav-link p-0" href=" ">
                    <img src={tt} alt="Twitter" className="tt tt_logo1" />
                  </a>
                </li>
              </ul>

              {/* <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mySwitch"
                  name="darkmode"
                  value="yes"
                  onChange={toggleTheme}
                  checked={darkMode}
                />
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
