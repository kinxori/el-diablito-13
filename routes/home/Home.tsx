import { Outlet, useLocation } from "react-router-dom";
import "./🎨home.css";
import backgroundImg from "./../../src/assets/BK.png";
import NavBar from "./../../components/nav-bar/NavBar";
import LandingPage from "./../../components/landing-page/Landing-page";
import AboutPage from "./../../components/about-page/About-page";
import ProjectsDrawsPage from "./../../components/projects-draws-page/Projects-draws-page";
import ProjectsVidsPage from "./../../components/projects-vids-page/Projects-vids-page";
import ContactPage from "./../../components/contact-page/contact-page";

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
          <ProjectsDrawsPage />
          <ProjectsVidsPage />
          <ContactPage />
        </>
      )}
    </article>
  );
}
