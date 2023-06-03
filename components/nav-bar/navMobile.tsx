import { Link } from "react-router-dom";
import { useState } from "react";
import logoNav from "./../../src/assets/BK_f_white.png";
import slideMenuPFP from "./../../src/assets/3333.png";
import AnchorButton from "../custom-buttons/AnchorButton";

export default function NavMobile() {
  const [isClicked, setClicked] = useState(false);

  return (
    <section className="nav-mobile-root">
      <Link to="/">
        <img className="nav-mobile-main-logo" src={logoNav} alt="el-diablito-13"></img>
      </Link>
      <span
        className={isClicked ? "nav-mobile-icon-open" : "nav-mobile-icon-close"}
        onClick={() => setClicked(!isClicked)}
      >
        {isClicked ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </span>
      <div className={isClicked ? "nav-mobile-slide-root-open" : "nav-mobile-slide-root-close"}>
        <div className="nav-mobile-slide-content">
          <div className="nav-mobile-slide-headline">
            <h2>El Diablito 13</h2>
            <img src={slideMenuPFP} alt="el diablito trece foto de perfil"></img>
          </div>
          <div className="nav-mobile-slide-copy">
            <AnchorButton variant="ghostButton" className="nav-mobile-slide-anchor">
              <h3>
                Inicio <i className="fa-solid fa-house"></i>
              </h3>
            </AnchorButton>
            <AnchorButton variant="ghostButton" className="nav-mobile-slide-anchor">
              <h3>
                Acerca <i className="fa-solid fa-user"></i>
              </h3>
            </AnchorButton>
            <AnchorButton variant="ghostButton" className="nav-mobile-slide-anchor">
              <h3>
                Proyectos <i className="fa-solid fa-pencil"></i>
              </h3>
            </AnchorButton>
            <AnchorButton variant="ghostButton" className="nav-mobile-slide-anchor">
              <h3>
                Contacto <i className="fa-solid fa-at"></i>
              </h3>
            </AnchorButton>
          </div>
          <hr className="nav-mobile-slide-separator"></hr>
          <div className="nav-mobile-slide-social-media">
            <div>
              <Link to="https://www.twitch.tv/eldiablitotrece" target="_blank">
                <i className="fa-brands fa-twitch"></i>
              </Link>
            </div>
            <div>
              <Link to="https://www.instagram.com/eldiablitotrece/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
            <div>
              <Link to="https://www.facebook.com/eldiablitotrece" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </div>
            <div>
              <Link to="https://www.tiktok.com/@eldiablitotrece" target="_blank">
                <i className="fa-brands fa-tiktok"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
