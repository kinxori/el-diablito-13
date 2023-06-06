import { Outlet, useLocation } from "react-router-dom";
import "./🎨home.css";
import backgroundImg from "./../../src/assets/BK.png";
import NavBar from "./../../components/nav-bar/NavBar";
import LandingPage from "./../../components/landing-page/Landing-page";
import AboutPage from "./../../components/about-page/About-page";
import ProjectsDrawsPage from "./../../components/projects-draws-page/Projects-draws-page";
import ProjectsVidsPage from "./../../components/projects-vids-page/Projects-vids-page";
import ContactPage from "./../../components/contact-page/contact-page";
import DisclaimerComp from "./../../components/disclaimer-component/disclaimer-comp";
import WelcomingPage from "./../../components/welcoming-page/welcoming-page";

import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <div className="loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default function () {
  const location = useLocation();

  return (
    <article id="home-root">
      {/* <img src={backgroundImg} id="home-bg-img"></img>
      <NavBar /> */}
      <WelcomingPage />
      {/* {location.pathname !== "/" ? (
        <Outlet />
      ) : (
        <>
          <LandingPage />
          <AboutPage />
          <ProjectsDrawsPage />
          <ProjectsVidsPage />
          <ContactPage />
          <DisclaimerComp />
        </>
      )} */}
    </article>
  );
}
