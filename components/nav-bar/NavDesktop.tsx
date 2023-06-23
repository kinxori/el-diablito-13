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
          <div></div>
        </Link>
        <div className="nav-desktop-buttons">
          <a href="#landing-page-id" className="nav-desktop-button">
            <h3>Inicio</h3>
            <div></div>
          </a>
          <a href="#about-page-id" className="nav-desktop-button">
            <h3>Acerca</h3>
            <div></div>
          </a>
          <a href="#projects-draws-page-id" className="nav-desktop-button">
            <h3>Ilustración</h3>
            <div></div>
          </a>
          <a href="#projects-vids-page-id" className="nav-desktop-button">
            <h3>Animación</h3>
            <div></div>
          </a>
          <a href="#contact-page-id" className="nav-desktop-button">
            <h3>Contacto</h3>
            <div></div>
          </a>
          <Link
            to="https://www.twitch.tv/eldiablitotrece"
            className="nav-desktop-button"
            target="_blank"
          >
            <h3>Twitch</h3>
            <div></div>
          </Link>
          <Link
            to="https://www.instagram.com/eldiablitotrece/"
            className="nav-desktop-button"
            target="_blank"
          >
            <h3>Instagram</h3>
            <div></div>
          </Link>
          <Link
            to="https://www.facebook.com/eldiablitotrece"
            className="nav-desktop-button"
            target="_blank"
          >
            <h3>Facebook</h3>
            <div></div>
          </Link>
          <Link
            to="https://www.tiktok.com/@eldiablitotrece"
            className="nav-desktop-button"
            target="_blank"
          >
            <h3>TikTok</h3>
            <div></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
