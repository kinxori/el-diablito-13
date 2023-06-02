import { Outlet, useLocation } from "react-router-dom";
import "./🎨home.css";
import backgroundImg from "./../../src/assets/BK.png";
import LandingPage from "./../../components/landing-page/Landing-page";
import AboutPage from "./../../components/about-page/About-page";
import NavBar from "./../../components/nav-bar/NavBar";

export default function () {
  const location = useLocation();

  return (
    <article id="home-root">
      <img src={backgroundImg} id="home-bg-img"></img>
      <NavBar />
      {location.pathname !== "/" ? (
        <Outlet />
      ) : (
        <>
          <LandingPage />
          <AboutPage />
        </>
      )}
    </article>
  );
}
