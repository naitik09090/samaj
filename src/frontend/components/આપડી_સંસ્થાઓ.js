import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import card2 from "../image/card2.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    location: "સુરત",
    title: "આહીર શૈક્ષણિક ભવન",
    link: "/admission_surat",
    image: card2,
  },
  {
    id: 2,
    location: "અહમદાબાદ",
    title: "કન્યા છાત્રાલય",
    link: "/admission_Ahmedabad",
    image: card2,
  },
  {
    id: 3,
    location: "સુરત",
    title: "કન્યા છાત્રાલય",
    link: "/admission_surat1",
    image: card2,
  },
  {
    id: 4,
    location: "રાજકોટ",
    title: "આહીર શૈક્ષણિક ભવન",
    link: "/admission_surat1",
    image: card2,
  },
  {
    id: 5,
    location: "દ્વારકા",
    title: "આહીર શૈક્ષણિક ભવન",
    link: "/admission_surat1",
    image: card2,
  },
  {
    id: 6,
    location: "ભાવનગર",
    title: "આહીર શૈક્ષણિક ભવન",
    link: "/admission_surat1",
    image: card2,
  },
];

const આપડી_સંસ્થાઓ = () => {
  const [filter, setFilter] = useState("all");

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

  const handleFilter = (location, title) => {
    setFilter(location, title);
  };
  // const handleFilter1 = (title) => {
  //   setFilter(title);
  // };

  const filteredCards = cardData.filter((card) => {
    if (filter === "all") return true;
    return card.location === filter;
  });
  // const filteredCards1 = cardData.filter((card) => {
  //   if (filter === "all") return true;
  //   return card.title === filter;
  // });

  return (
    <>
      <div className="container-fluid main">
        {/* આપડી સંસ્થાઓ nine image Import */}

        <div className="bg3 container-fluid mb-3">
          <div className="ninefix row" data-aos="fade-right">
            <div className="col-md-12">
              <h1 className="LatestNews1 text-center text-light">આપડી સંસ્થાઓ</h1>
            </div>
          </div>
          <div className="આપડી_સંસ્થાઓ_filter mb-5">
            <select
              className="form-select w-auto d-inline-block"
              onChange={(e) => handleFilter(e.target.value)}
              value={filter}
            >
              <option value="all">All</option>
              <option value="સુરત">સુરત</option>
              <option value="અહમદાબાદ">અહમદાબાદ</option>
              <option value="રાજકોટ">રાજકોટ</option>
              <option value="દ્વારકા">દ્વારકા</option>
              <option value="ભાવનગર">ભાવનગર</option>
            </select>
          </div>

          <div className="container-fluid">
            <div className="row">
              {filteredCards.map((card) => (
                <div className="col-md-4 mb-4" key={card.id}>
                  <Link to={card.link}>
                    <img src={card.image} alt={card.title} className="img-fluid f_card1" />
                  </Link>
                  <h1 className="txt11 text-center">
                    {card.title}
                    <br />
                    {card.location === "આહીર શૈક્ષણિક ભવન" ? "સુરત" : card.location}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="container-fluid">
          <div className="row">
            {filteredCards1.map((card) => (
              <div className="col-md-4 mb-4" key={card.id}>
                <Link to={card.link}>
                  <img src={card.image} alt={card.title} className="img-fluid f_card1" />
                </Link>
                <h1 className="txt11 text-center">
                  {card.title}
                  <br />
                  {card.title === "આહીર શૈક્ષણિક ભવન" ? "સુરત" : card.location}
                </h1>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="bg3 container-fluid">
          <div id="sliderCard" className="carousel slide" data-bs-ride="carousel">
            <div className="ninefix row" data-aos="fade-right">
              <div className="col-md-12">
                <h1 className="LatestNews1 text-center text-light">આપડી સંસ્થાઓ</h1>
              </div>
            </div>

            <div className="carousel-inner">
              Slide 1
              <div className="carousel-item active">
                <div className="row" data-aos="fade-right">
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

              Slide 2
              <div className="carousel-item">
                <div className="row" data-aos="fade-right">
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

              Slide 3
              <div className="carousel-item">
                <div className="row" data-aos="fade-right">
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

            Carousel Controls
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
              Slide 1
              <div className="carousel-item active">
                <div className="row" data-aos="fade-left">
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

              Slide 2
              <div className="carousel-item">
                <div className="row" data-aos="fade-left">
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

              Slide 3
              <div className="carousel-item">
                <div className="row" data-aos="fade-left">
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

            Carousel Controls
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
        </div> */}

        {/* pagination */}
        <div className="container-fluid m-4">
          <ul className="pagination text-center justify-content-center">
            <li className="page-item">
              <Link className="page-link" to={"/Latest_News"}>
                Prev
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link active2" to={"/apani_sanstha"}>
                આપડી સંસ્થાઓ
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={"/Latest_News"}>
                Latest News
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={"/Latest_News"}>
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default આપડી_સંસ્થાઓ;
