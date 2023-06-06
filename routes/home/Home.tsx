import { useState, useEffect, lazy, Suspense } from "react";
import "./🎨home.css";
import backgroundImg from "./../../src/assets/BK.png";
import WelcomingPage from "./../../components/welcoming-page/welcoming-page";

const NavBar = lazy(() => import("./../../components/nav-bar/NavBar"));
const LandingPage = lazy(() => import("./../../components/landing-page/Landing-page"));
const AboutPage = lazy(() => import("./../../components/about-page/About-page"));
const ProjectsDrawsPage = lazy(
  () => import("./../../components/projects-draws-page/Projects-draws-page")
);
const ProjectsVidsPage = lazy(
  () => import("./../../components/projects-vids-page/Projects-vids-page")
);
const ContactPage = lazy(() => import("./../../components/contact-page/contact-page"));
const DisclaimerComp = lazy(
  () => import("./../../components/disclaimer-component/disclaimer-comp")
);

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <article id="home-root">
      {isClicked && <WelcomingPage onClick={() => setIsClicked(false)} />}
      <Suspense>
        {isLoading && (
          <>
            <img src={backgroundImg} id="home-bg-img"></img>
            <NavBar />
            <LandingPage />
            <AboutPage />
            <ProjectsDrawsPage />
            <ProjectsVidsPage />
            <ContactPage />
            <DisclaimerComp />
          </>
        )}
      </Suspense>
    </article>
  );
}
