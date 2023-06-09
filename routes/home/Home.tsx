import { useState, useEffect, lazy, Suspense } from "react";
import "./🎨home.css";
import backgroundImg from "./../../src/assets/BK.png";

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
const WelcomingPage = lazy(() => import("./../../components/welcoming-page/welcoming-page"));

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false); //invert this values for correct display!!

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 0); //SET THIS TO 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <article id="home-root">
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vw",
              background: "black",
              position: "fixed",
              zIndex: "5000",
              top: "0",
              left: "0",
            }}
          ></div>
        }
      >
        {isClicked && <WelcomingPage onClick={() => setIsClicked(false)} />}
      </Suspense>
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
