import { Outlet, useLocation } from "react-router-dom";
import backgroundImg from "./../../src/assets/BK.png";

export default function () {
  const location = useLocation();

  return (
    <article>
      <img src={backgroundImg} className="home-bg-img"></img>
      {location.pathname !== "/" ? (
        <Outlet />
      ) : (
        <section className="home-landing-page">
          <div className="home-landing-page-content">
            <div>homelo chino</div>
          </div>
        </section>
      )}
    </article>
  );
}
