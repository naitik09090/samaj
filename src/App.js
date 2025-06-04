/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// front-end routes and admit panel routes

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import About_Us from "./frontend/components/About_Us.js";
import Contact from "./frontend/components/Contact.js";
import Admission from "./frontend/components/Admission_Surat.js";
import Admission_Ahmedabad from "./frontend/components/Admission_Ahmedabad.js";
import Admission_Surat1 from "./frontend/components/Admission_Surat1.js";
import Admission_Rajkot from "./frontend/components/Admission_Rajkot.js";
import Admission_Dwarka from "./frontend/components/Admission_Dwarka.js";
import Admission_Bhavnager from "./frontend/components/Admission_Bhavnager.js";
import Apani_Sanstha from "./frontend/components/આપડી_સંસ્થાઓ.js";
import Latest_News from "./frontend/components/Latest_News.js";
import Gallery from "./frontend/components/Gallery.js";
import Gallery2 from "./frontend/components/Gallery2.js";
import Home_Page from "./frontend/components/Home_Page.js";
import Navbar from "./frontend/components/Navbar.js";
// import Sign_Up_Form from "./frontend/components/Sign_Up_Form.js";
import Sign_Up_Form2 from "./frontend/components/Sign_Up_Form2.js";
import "./frontend/Navbar.css";
import "./frontend/About_Us.css";
import "./frontend/Home_Page.css";
import "./frontend/Contact.css";
import "./frontend/Admission.css";
import "./frontend/Navbar.css";
import { Dashboard, Slideshow } from "@mui/icons-material";
import Sanstha from "layouts/sanstha/index.js";
import News from "layouts/news/index.js";
import Profile from "layouts/profile/index.js";
import Video from "layouts/gallery/components/Footer/index.js";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);
  const location = useLocation();
  const currentPath = location.pathname;

  // Public routes
  const isPublicRoute = [
    "/",
    "/home",
    "/about",
    "/contact",
    "/admission_surat",
    "/admission_ahmedabad",
    "/admission_surat1",
    "/admission_rajkot",
    "/admission_dwarka",
    "/admission_bhavnager",
    "/apani_sanstha",
    "/latest_news",
    "/gallery",
    "/gallery2",
    "/navbar",
    // "/signup",
    "/signup2",
  ].includes(currentPath.toLowerCase());

  const isPublicRoutes = [
    "/dashboard",
    "/sanstha",
    "/profile",
    "/slideshow",
    "/videogallery",
    "/news",
  ].includes(currentPath.toLowerCase());

  // Admin route

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Material Dashboard 2"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {isPublicRoutes && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
        </>
      )}

      <Routes>
        {isPublicRoutes && (
          <>
            {getRoutes(routes)}
            <Route
              path="/sanstha"
              element={
                <>
                  <Dashboard />
                  <Sanstha />
                </>
              }
            />
            <Route
              path="/news"
              element={
                <>
                  <Dashboard />
                  <News />
                </>
              }
            />
            <Route
              path="/slideshow"
              element={
                <>
                  <Dashboard />
                  <Slideshow />
                </>
              }
            />
            <Route
              path="/videogallery"
              element={
                <>
                  <Dashboard />
                  <Video />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Dashboard />
                  <Profile />
                </>
              }
            />

            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}

        {isPublicRoute && (
          <>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home_Page />
                </>
              }
            />
            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <Home_Page />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <About_Us />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Navbar />
                  <Contact />
                </>
              }
            />
            <Route
              path="/admission_surat"
              element={
                <>
                  <Navbar />
                  <Admission />
                </>
              }
            />
            <Route
              path="/admission_ahmedabad"
              element={
                <>
                  <Navbar />
                  <Admission_Ahmedabad />
                </>
              }
            />
            <Route
              path="/admission_surat1"
              element={
                <>
                  <Navbar />
                  <Admission_Surat1 />
                </>
              }
            />
            <Route
              path="/admission_rajkot"
              element={
                <>
                  <Navbar />
                  <Admission_Rajkot />
                </>
              }
            />
            <Route
              path="/admission_dwarka"
              element={
                <>
                  <Navbar />
                  <Admission_Dwarka />
                </>
              }
            />
            <Route
              path="/admission_bhavnager"
              element={
                <>
                  <Navbar />
                  <Admission_Bhavnager />
                </>
              }
            />
            <Route
              path="/apani_sanstha"
              element={
                <>
                  <Navbar />
                  <Apani_Sanstha />
                </>
              }
            />
            <Route
              path="/latest_news"
              element={
                <>
                  <Navbar />
                  <Latest_News />
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <Navbar />
                  <Gallery />
                </>
              }
            />
            <Route
              path="/gallery2"
              element={
                <>
                  <Navbar />
                  <Gallery2 />
                </>
              }
            />

            {/* <Route
              path="/signup"
              element={
                <>
                  <Sign_Up_Form />
                </>
              }
            /> */}
            <Route
              path="/signup2"
              element={
                <>
                  <Sign_Up_Form2 />
                </>
              }
            />
            <Route path="/navbar" element={<Navbar />} />
          </>
        )}
      </Routes>
    </ThemeProvider>
  );
}
