import { useState } from "react";
import LinkButton from "../custom-buttons/LinkButton";
import projectsMainImg from "./../../src/assets/master.png";
import CardDisplay from "../card-display/card-display";
import "./🎨projects-draws-page.css";
import unToqueMagico from "/src/assets/dibujo-4.jpeg";

export default function ProjectsDrawsPage() {
  const [isFullScreen, setIsFullScreen] = useState("");

  const handleFullScreen = (id: string) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  return (
    <section id="projects-draws-id" className="projects-draws-root">
      <div className="projects-draws-content">
        <div className="projects-draws-copy">
          <h2>Proyectos de Ilustración ✐</h2>
          <p>
            Aquí te presento una muestra de mis trabajos como ilustrador. Sumérgete en el lado
            oscuro de mi creatividad y adéntrate en el mundo de El Diablito Trece.
          </p>
        </div>
        <div className="projects-draws-cards">
          <CardDisplay header="Dibujo 1">
            <div className="projects-draw-card-asset" onClick={() => handleFullScreen("1")}>
              {isFullScreen === "1" && (
                <LinkButton className="full-screen-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 1 - tal"
                className={
                  isFullScreen === "1"
                    ? "projects-draws-card-asset-open"
                    : "projects-draws-card-asset-close"
                }
              ></img>
              {isFullScreen === "1" && <div className="full-screen-bg-blank"></div>}
            </div>
            <div className="projects-draws-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 2">
            <div className="projects-draw-card-asset" onClick={() => handleFullScreen("2")}>
              {isFullScreen === "2" && (
                <LinkButton className="full-screen-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 2 - tal"
                className={
                  isFullScreen === "2"
                    ? "projects-draws-card-asset-open"
                    : "projects-draws-card-asset-close"
                }
              ></img>
              {isFullScreen === "2" && <div className="full-screen-bg-blank"></div>}
            </div>
            <div className="projects-draws-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 3">
            {isFullScreen === "3" && (
              <>
                <LinkButton
                  className="full-screen-close-button"
                  variant="linkButton"
                  onClick={() => handleFullScreen("3")}
                >
                  Close
                </LinkButton>
                <div className="full-screen-bg-blank" onClick={() => handleFullScreen("3")}></div>
              </>
            )}
            <img
              src={projectsMainImg}
              alt="dibujo 3 - tal"
              className={
                isFullScreen === "3"
                  ? "projects-draws-card-asset-open"
                  : "projects-draws-card-asset-close"
              }
              onClick={() => handleFullScreen("3")}
            ></img>
            <h3 style={{ color: "white" }} className="projects-draws-card-title">
              "¡El mismísimo Billy Butcher y el maldito Homelander de The Boys!"
            </h3>
            <i className="projects-draws-card-date">- Agosto 12, 2022</i>
            <div className="projects-draws-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Un Toque Mágico">
            {isFullScreen === "4" && (
              <>
                <LinkButton
                  className="full-screen-close-button"
                  variant="linkButton"
                  onClick={() => handleFullScreen("4")}
                >
                  <i className="fa-regular fa-circle-xmark"></i>
                </LinkButton>
                <div className="full-screen-bg-blank" onClick={() => handleFullScreen("4")}></div>
              </>
            )}
            <img
              src={unToqueMagico}
              alt="dibujo 4 - tal"
              className={
                isFullScreen === "4"
                  ? "projects-draws-card-asset-open"
                  : "projects-draws-card-asset-close"
              }
              onClick={() => handleFullScreen("4")}
            ></img>
            <h3 style={{ color: "white" }} className="projects-draws-card-title">
              "¡Tal vez necesito un toque mágico!"
            </h3>
            <i className="projects-draws-card-date">- Noviembre 11, 2022</i>
            <div className="projects-draws-card-CTA">
              <LinkButton to="https://www.instagram.com/p/CHds-TbHjlX/" target="_blank">
                Visitar
              </LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
