import { useState } from "react";
import "./🎨colabs-page.css";
import LinkButton from "../custom-buttons/LinkButton";
import CardDisplay from "../card-display/card-display";
import glotoAsset from "/src/assets/colabs/glotoneria-kawai-poster.png";
import grenudoAsset from "/src/assets/colabs/grenudo-logo.png";
import NLPAsset from "/src/assets/colabs/NLP-portada.png";

export default function ColabsPage() {
  const [isFullScreen, setIsFullScreen] = useState("");

  const handleFullScreen = (id: string) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  return (
    <section id="colabs-page-id" className="colabs-page-root">
      <div className="colabs-page-content">
        <div className="colabs-page-copy">
          <h2>Proyectos de Colaboración 👥</h2>
          <p>
            Algo que me encanta es conocer personas talentosas y poder colaborar en proyectos. Aquí
            te presento unas colaboraciones que he realizado.
          </p>
        </div>
        <div className="colabs-page-page-cards">
          <CardDisplay header="Jonathan Devil">
            <img
              src={glotoAsset}
              alt="dibujo 1 - tal"
              className={
                isFullScreen === "1"
                  ? "colabs-page-card-asset-open"
                  : "colabs-page-card-asset-close"
              }
              onClick={() => handleFullScreen("1")}
            ></img>
            <h4 className="colabs-page-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h4>
            <i className="colabs-page-card-date">- Mayo 31, 2023</i>
            <div className="colabs-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/Cs7AL0lRnch/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Inking 2022">
            <img
              src={grenudoAsset}
              alt="dibujo 2 - tal"
              className={
                isFullScreen === "2"
                  ? "colabs-page-card-asset-open"
                  : "colabs-page-card-asset-close"
              }
              onClick={() => handleFullScreen("2")}
            ></img>

            <h4 className="colabs-page-card-title">
              "¡Inspirado en los 2 sujetos más bizarros e idiotas de los 90's!"
            </h4>
            <i className="colabs-page-card-date">- Noviembre 8, 2022</i>
            <div className="colabs-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/CktgH2OPdMQ/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Billy Butcher">
            <img
              src={NLPAsset}
              alt="dibujo 3 - tal"
              className={
                isFullScreen === "3"
                  ? "colabs-page-card-asset-open"
                  : "colabs-page-card-asset-close"
              }
              onClick={() => handleFullScreen("3")}
            ></img>
            <h4 className="colabs-page-card-title">"¡El mismísimo Billy Butcher de The Boys!"</h4>
            <i className="colabs-page-card-date">- Agosto 12, 2022</i>
            <div className="colabs-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/ChK_mZpOjbu/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          {isFullScreen !== "" && (
            <>
              <LinkButton
                className="full-screen-close-button"
                variant="linkButton"
                onClick={() => handleFullScreen("")}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </LinkButton>
              <div className="full-screen-bg-blank" onClick={() => handleFullScreen("")}></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
