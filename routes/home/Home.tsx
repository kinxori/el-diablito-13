import { useState, useEffect, lazy, Suspense } from "react";
import "./🎨home.css";
import backgroundImg from "./../../src/assets/BK.png";

const WelcomingPage = lazy(() => import("./../../components/welcoming-page/welcoming-page"));
const NavBar = lazy(() => import("./../../components/nav-bar/NavBar"));
const LandingPage = lazy(() => import("./../../components/landing-page/Landing-page"));
const AboutPage = lazy(() => import("./../../components/about-page/About-page"));
const DrawingsPage = lazy(() => import("../../components/drawings-page/Drawings-page"));
const VideosPage = lazy(() => import("../../components/videos-page/Videos-page"));
const ColabsPage = lazy(() => import("./../../components/colabs-page/Colabs-page"));
const ContactPage = lazy(() => import("./../../components/contact-page/contact-page"));
const DisclaimerComp = lazy(
  () => import("./../../components/disclaimer-component/disclaimer-comp")
);

export default function () {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000); //SET THIS TO 3 seconds only if welcoming page is enabled!!

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
        <WelcomingPage />
        <Suspense>
          {isLoading && (
            <>
              <img src={backgroundImg} id="home-bg-img"></img>
              <NavBar />
              <LandingPage />
              <AboutPage />
              <DrawingsPage />
              <VideosPage />
              <ColabsPage />
              <ContactPage />
              <DisclaimerComp />
            </>
          )}
        </Suspense>
      </Suspense>
    </article>
  );
}
