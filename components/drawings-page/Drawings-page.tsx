import "./🎨drawings-page.css";
import { useState } from "react";
import LinkButton from "../custom-buttons/LinkButton";
import CardDisplay from "../card-display/card-display";
import unToqueMagico from "/src/assets/dibujo-4.jpeg";
import billyButcher from "/src/assets/dibujo-3.jpeg";
import inking2022 from "/src/assets/dibujo-2.jpeg";
import jonathanDevils from "/src/assets/dibujo-1.jpeg";

export default function ProjectsDrawsPage() {
  const [isFullScreen, setIsFullScreen] = useState("");

  const handleFullScreen = (id: string) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  return (
    <section id="drawings-page-id" className="drawings-page-root">
      <div className="drawings-page-content">
        <div className="drawings-page-copy">
          <h2>Proyectos de Ilustración</h2>
          <p>
            Aquí te presento una muestra de mis trabajos como ilustrador. Sumérgete en el lado
            oscuro de mi creatividad y adéntrate en mi mundo.
          </p>
        </div>
        <div className="drawings-page-page-cards">
          <CardDisplay header="Jonathan Devil">
            <img
              src={jonathanDevils}
              alt="Titulo: Jonathan Devil. Descripción: ¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch! Fecha: Mayo 31, 2023. Autor: El Diablito 13"
              className={
                isFullScreen === "1"
                  ? "drawings-page-card-asset-open"
                  : "drawings-page-card-asset-close"
              }
              onClick={() => handleFullScreen("1")}
            ></img>
            <h4 className="drawings-page-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h4>
            <i className="drawings-page-card-date">- Mayo 31, 2023</i>
            <div className="drawings-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/Cs7AL0lRnch/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Inking 2022">
            <img
              src={inking2022}
              alt="Titulo: Inking 2022. Descripción: ¡Inspirado en los 2 sujetos más bizarros e idiotas de los 90's, Beavis & Butt-head! Fecha: Noviembre 8, 2022. Autor: El Diablito 13"
              className={
                isFullScreen === "2"
                  ? "drawings-page-card-asset-open"
                  : "drawings-page-card-asset-close"
              }
              onClick={() => handleFullScreen("2")}
            ></img>

            <h4 className="drawings-page-card-title">
              "¡Inspirado en los 2 sujetos más bizarros e idiotas de los 90's, Beavis & Butt-head!"
            </h4>
            <i className="drawings-page-card-date">- Noviembre 8, 2022</i>
            <div className="drawings-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/CktgH2OPdMQ/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Billy Butcher">
            <img
              src={billyButcher}
              alt="Titulo: Billy Butcher. Descripción: ¡El mismísimo Billy Butcher de The Boys! Fecha: Agosto 12, 2022. Autor: El Diablito 13"
              className={
                isFullScreen === "3"
                  ? "drawings-page-card-asset-open"
                  : "drawings-page-card-asset-close"
              }
              onClick={() => handleFullScreen("3")}
            ></img>
            <h4 className="drawings-page-card-title">"¡El mismísimo Billy Butcher de The Boys!"</h4>
            <i className="drawings-page-card-date">- Agosto 12, 2022</i>
            <div className="drawings-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/ChK_mZpOjbu/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Un Toque Mágico">
            <img
              src={unToqueMagico}
              alt="Titulo: Un Toque Mágico. Descripción: ¡Tal vez necesito un toque mágico! Fecha: Noviembre 11, 2020. Autor: El Diablito 13"
              className={
                isFullScreen === "4"
                  ? "drawings-page-card-asset-open"
                  : "drawings-page-card-asset-close"
              }
              onClick={() => handleFullScreen("4")}
            ></img>
            <h4 className="drawings-page-card-title">"¡Tal vez necesito un toque mágico!"</h4>
            <i className="drawings-page-card-date">- Noviembre 11, 2020</i>
            <div className="drawings-page-card-CTA">
              <LinkButton to="https://www.instagram.com/p/CHds-TbHjlX/" target="_blank">
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
