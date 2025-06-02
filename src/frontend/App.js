import { useState } from "react";
import "./App.css";
import "./About_Us.css";
import "./Home_Page.css";
import "./Contact.css";
import "./Admission.css";
import "./Navbar.css";
import Navbar from "./components/Navbar.js";
import Home_Page from "./components/Home_Page.js";
import About_Us from "./components/About_Us.js";
import Contact from "./components/Contact.js";
import Admission_Surat from "./components/Admission_Surat.js";
import Admission_Ahmedabad from "./components/Admission_Ahmedabad.js";
import Admission_Surat1 from "./components/Admission_Surat1.js";
import Admission_Rajkot from "./components/Admission_Rajkot.js";
import Admission_Dwarka from "./components/Admission_Dwarka.js";
import Admission_Bhavnager from "./components/Admission_Bhavnager.js";
import Apani_Sanstha from "./components/આપડી_સંસ્થાઓ.js";
import Sign_Up from "./components/Sign_Up_Form.js";
import Sign_Up2 from "./components/Sign_Up_Form2.js";
import Gallery from "./components/Gallery.js";
import Gallery2 from "./components/Gallery2.js";
import GoToTop from "./components/GoToTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
        <GoToTop />
          <Router>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home_Page />} />
              <Route path="/About" element={<About_Us />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Admission_Surat" element={<Admission_Surat />} />
              <Route path="/Admission_Ahmedabad" element={<Admission_Ahmedabad />} />
              <Route path="/Admission_Surat1" element={<Admission_Surat1 />} />
              <Route path="/Admission_Rajkot" element={<Admission_Rajkot />} />
              <Route path="/Admission_Dwarka" element={<Admission_Dwarka />} />
              <Route path="/Admission_Bhavnager" element={<Admission_Bhavnager />} />
              <Route path="/Apani_Sanstha" element={<Apani_Sanstha />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Gallery2" element={<Gallery2 />} />
              <Route path="/signup" element={<Sign_Up />} />
              <Route path="/signup2" element={<Sign_Up2 />} />
            </Routes>
          </Router>
    </>
  );
}

export default App;
