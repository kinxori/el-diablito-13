import { useState } from "react";
import "./🎨colabs-page.css";
import LinkButton from "../custom-buttons/LinkButton";
import CardDisplay from "../card-display/card-display";
import glotoAsset from "/src/assets/colabs/glotoneria-kawai-poster-resized.png";
import grenudoAsset from "/src/assets/colabs/grenudo-logo-resized.png";
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
          <h2>Proyectos de Colaboración</h2>
          <p>
            Algo que me encanta es conocer personas talentosas y poder colaborar en proyectos. Aquí
            te presento unas colaboraciones que he realizado.
          </p>
        </div>
        <div className="colabs-page-page-cards">
          <CardDisplay header="Glotonería Kawaii">
            <img
              src={glotoAsset}
              alt="Titulo: Glotoneria Kawaii. Descripción: ¡Ilustración colaborativa para el bar Pachuqueño Glotoneria KAwaii alusiva al mes del
              Halloween! Fecha: Abril 8, 2021. Autor: El Diablito 13 ft Glotonería Kawaii"
              className={
                isFullScreen === "1"
                  ? "colabs-page-card-asset-open"
                  : "colabs-page-card-asset-close"
              }
              onClick={() => handleFullScreen("1")}
            ></img>
            <h4 className="colabs-page-card-title">
              "¡Ilustración colaborativa para el bar Pachuqueño Glotonería KAwaii alusiva al mes del
              Halloween!"
            </h4>
            <i className="colabs-page-card-date">- Abril 8, 2021</i>
            <div className="colabs-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/CNaqZCVn-nu/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Greñudo Games">
            <img
              src={grenudoAsset}
              alt="Titulo: Greñudo Games. Descripción: ¡Colaboración con Greñudo Games, streamer de kaizos, creamos su imagen y emotes ❤️! Fecha: Diciembre 30, 2021. Autor: El Diablito 13 ft Greñudo Games"
              className={
                isFullScreen === "2"
                  ? "colabs-page-card-asset-open"
                  : "colabs-page-card-asset-close"
              }
              onClick={() => handleFullScreen("2")}
            ></img>

            <h4 className="colabs-page-card-title">
              "¡Colaboración con Greñudo Games, streamer de kaizos, creamos su imagen y emotes ❤️!"
            </h4>
            <i className="colabs-page-card-date">- Diciembre 30, 2021</i>
            <div className="colabs-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/CYHxD1pFu_l/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="NLP MX">
            <img
              src={NLPAsset}
              alt="Titulo: NLP MX. Descripción: ¡Colaboración con la banda de rock NLP MX para su primera live session! Fecha: Octubre 21, 2021. Autor: El Diablito 13 ft NLP MX"
              className={
                isFullScreen === "3"
                  ? "colabs-page-card-asset-open"
                  : "colabs-page-card-asset-close"
              }
              onClick={() => handleFullScreen("3")}
            ></img>
            <h4 className="colabs-page-card-title">
              "¡Colaboración con la banda de rock NLP MX para su primera live session!"
            </h4>
            <i className="colabs-page-card-date">- Octubre 21, 2021</i>
            <div className="colabs-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/CVSyJD2tMLt/" target="_blank">
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
