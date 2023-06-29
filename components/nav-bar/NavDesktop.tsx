import { Link } from "react-router-dom";
import "./🎨navBar.css";
import logoNav from "./../../src/assets/BK_f_white.png";
import { useState } from "react";
import slideMenuPFP from "./../../src/assets/3333.png";

export default function DesktopNav() {
  const [isClicked, setClicked] = useState(false);

  return (
    <section className="nav-desktop-root">
      <div className="nav-desktop-content">
        <Link to="/" className="nav-desktop-main-logo">
          <img src={logoNav} alt="el-diablito-13"></img>
          <span></span>
        </Link>
        <div className="nav-desktop-buttons">
          <a href="#landing-page-id" className="nav-desktop-button">
            <h3>Inicio</h3>
            <span></span>
          </a>
          <a href="#about-page-id" className="nav-desktop-button">
            <h3>Acerca</h3>
            <span></span>
          </a>
          <a href="#drawings-page-id" className="nav-desktop-button">
            <h3>Ilustración</h3>
            <span></span>
          </a>
          <a href="#projects-vids-id" className="nav-desktop-button">
            <h3>Animación</h3>
            <span></span>
          </a>
          <a href="#contact-page-id" className="nav-desktop-button">
            <h3>Contacto</h3>
            <span></span>
          </a>
          <button className="nav-desktop-button" onClick={() => setClicked(!isClicked)}>
            <h3>
              Redes Sociales{" "}
              {isClicked ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </h3>
            <span></span>
            <div
              className={
                isClicked ? "nav-desktop-button-redes-open" : "nav-desktop-button-redes-closed"
              }
            >
              <a
                className="nav-desktop-slider-redes-anchor"
                href="https://www.twitch.tv/eldiablitotrece"
                target="_blank"
              >
                <h3>
                  <i className="fa-brands fa-twitch"></i>&nbsp;&nbsp;Twitch
                </h3>
              </a>
              <a
                className="nav-desktop-slider-redes-anchor"
                href="https://www.instagram.com/eldiablitotrece/"
                target="_blank"
              >
                <h3>
                  <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;Instagram
                </h3>
              </a>
              <a
                className="nav-desktop-slider-redes-anchor"
                href="https://www.facebook.com/eldiablitotrece"
                target="_blank"
              >
                <h3>
                  <i className="fa-brands fa-facebook"></i>&nbsp;&nbsp;Facebook
                </h3>
              </a>
              <a
                className="nav-desktop-slider-redes-anchor"
                href="https://www.tiktok.com/@eldiablitotrece"
                target="_blank"
              >
                <h3>
                  <i className="fa-brands fa-tiktok"></i>&nbsp;&nbsp;TikTok
                </h3>
              </a>
              <a
                className="nav-desktop-slider-redes-anchor"
                href="https://discord.gg/pQAFQxaUWC"
                target="_blank"
              >
                <h3>
                  <i className="fa-brands fa-discord"></i>&nbsp;&nbsp;Discord
                </h3>
              </a>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
