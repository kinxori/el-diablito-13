import { Link } from "react-router-dom";
import logoNav from "./../../src/assets/BK_f_white.png";

export default function NavMobile() {
  return (
    <section className="nav-mobile-root">
      <div className="nav-mobile-content">
        <div className="nav-mobile-slide-root">
          <span className="nav-mobile-slide-icon">
            <i className="fa-solid fa-bars"></i>
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
