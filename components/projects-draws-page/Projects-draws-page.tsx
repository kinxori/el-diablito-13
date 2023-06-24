import LinkButton from "../custom-buttons/LinkButton";
import projectsMainImg from "./../../src/assets/master.png";
import CardDisplay from "../card-display/card-display";
import "./🎨projects-draws-page.css";
import { useState } from "react";

export default function ProjectsDrawsPage() {
  const [isFullScreen, setIsFullScreen] = useState("");

  const handleFullScreen = (id: string) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  return (
    <section id="projects-draws-id" className="projects-draws-root">
      <div className="projects-draws-content">
        <div className="projects-draws-copy">
          <h2>Proyectos de Ilustración 👺</h2>
          <p>TRabajando como ilustrador, estos son unos de mis trabajos 👺</p>
        </div>
        <div className="projects-draws-cards">
          <CardDisplay header="Dibujo 1">
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("1")}>
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
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("2")}>
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
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("3")}>
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
          <CardDisplay header="Dibujo 4">
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("4")}>
              {isFullScreen === "4" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 4 - tal"
                className={
                  isFullScreen === "4" ? "projects-draws-asset-open" : "projects-draws-asset-close"
                }
              ></img>
              {isFullScreen === "4" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>

            <div className="projects-draws-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
