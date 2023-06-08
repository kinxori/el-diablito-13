import LinkButton from "../custom-buttons/LinkButton";
import projectsMainImg from "./../../src/assets/master.png";
import CardDisplay from "../card-display/card-display";
import "./🎨projects-draws-page.css";
import { useState } from "react";

export default function ProjectsDrawsPage() {
  const [isFullScreen, setIsFullScreen] = useState("");
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  const handleFullScreen = (id: string) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  return (
    <section id="projects-draws-page-id" className="projects-draws-page-root">
      <div className="projects-draws-page-content">
        <div className="projects-draws-page-copy">
          <h2>Proyectos de Ilustración 👺</h2>
          <p>TRabajando como ilustrador, estos son unos de mis trabajos 👺</p>
        </div>
        <div className="projects-draws-page-cards">
          <CardDisplay header="Dibujo 1">
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("1")}>
              {isLoadingVideo && (
                <div className="projects-draws-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "1" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 1 - tal"
                className={
                  isFullScreen === "1"
                    ? "card-display-img-content-open"
                    : "card-display-img-content-close"
                }
              ></img>
              {isFullScreen === "1" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>
            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 2">
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("2")}>
              {isLoadingVideo && (
                <div className="projects-draws-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "2" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 2 - tal"
                className={
                  isFullScreen === "2"
                    ? "card-display-img-content-open"
                    : "card-display-img-content-close"
                }
              ></img>
              {isFullScreen === "2" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>
            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 3">
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("3")}>
              {isLoadingVideo && (
                <div className="projects-draws-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "3" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 3 - tal"
                className={
                  isFullScreen === "3"
                    ? "card-display-img-content-open"
                    : "card-display-img-content-close"
                }
              ></img>
              {isFullScreen === "3" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>
            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 4">
            <div className="projects-draws-fullscreen-asset" onClick={() => handleFullScreen("4")}>
              {isLoadingVideo && (
                <div className="projects-draws-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "4" && (
                <LinkButton className="projects-draws-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <img
                src={projectsMainImg}
                alt="dibujo 4 - tal"
                className={
                  isFullScreen === "4"
                    ? "card-display-img-content-open"
                    : "card-display-img-content-close"
                }
              ></img>
              {isFullScreen === "4" && <div className="projects-draws-asset-bg-blank"></div>}
            </div>

            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
