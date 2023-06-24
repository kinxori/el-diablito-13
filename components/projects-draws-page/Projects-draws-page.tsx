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
            <div className="projects-draw-asset" onClick={() => handleFullScreen("1")}>
              {isFullScreen === "1" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 1 - tal"
                className={
                  isFullScreen === "1" ? "projects-draws-asset-open" : "projects-draws-asset-close"
                }
              ></img>
              {isFullScreen === "1" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>
            <div className="projects-draws-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 2">
            <div className="projects-draw-asset" onClick={() => handleFullScreen("2")}>
              {isFullScreen === "2" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 2 - tal"
                className={
                  isFullScreen === "2" ? "projects-draws-asset-open" : "projects-draws-asset-close"
                }
              ></img>
              {isFullScreen === "2" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>
            <div className="projects-draws-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 3">
            <div className="projects-draw-asset" onClick={() => handleFullScreen("3")}>
              {isFullScreen === "3" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 3 - tal"
                className={
                  isFullScreen === "3" ? "projects-draws-asset-open" : "projects-draws-asset-close"
                }
              ></img>
              {isFullScreen === "3" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>
            <div className="projects-draws-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Un Toque Mágico">
            <div className="projects-draw-asset" onClick={() => handleFullScreen("4")}>
              {isFullScreen === "4" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={unToqueMagico}
                alt="dibujo 4 - tal"
                className={
                  isFullScreen === "4" ? "projects-draws-asset-open" : "projects-draws-asset-close"
                }
              ></img>
              {isFullScreen === "4" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi tenetur
              repudiandae assumenda corporis quibusdam iusto nihil odit provident necessitatibus,
              pariatur aliquam, ea consequatur natus accusamus molestias similique. Error, adipisci!
            </p>
            <div className="projects-draws-CTA">
              <LinkButton to="https://www.instagram.com/p/CHds-TbHjlX/">Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
