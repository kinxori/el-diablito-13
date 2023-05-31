import { Link } from "react-router-dom";
import { useState } from "react";
import logoNav from "./../../src/assets/BK_f_white.png";

export default function NavMobile() {
  const [isClicked, setClicked] = useState(false);

  return (
    <section className="nav-mobile-root">
      <div className="nav-mobile-content">
        <div className="nav-mobile-slide-root">
          <span className="nav-mobile-slide-icon" onClick={() => setClicked(!isClicked)}>
            {isClicked ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </span>
          <div style={{ display: "none" }}>slide</div>
        </div>
        <Link to="/">
          <img className="nav-mobile-main-logo" src={logoNav} alt="el-diablito-13"></img>
        </Link>
      </div>
    </section>
  );
}
