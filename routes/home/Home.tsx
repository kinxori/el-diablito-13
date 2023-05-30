import { Outlet, useLocation } from "react-router-dom";
import backgroundImg from "./../../src/assets/BK.png";
import LandingPage from "./../../components/landing-page/Landing-page";
export default function () {
  const location = useLocation();

  return (
    <article>
      <img src={backgroundImg} id="home-bg-img"></img>
      {location.pathname !== "/" ? <Outlet /> : <LandingPage />}
    </article>
  );
}
