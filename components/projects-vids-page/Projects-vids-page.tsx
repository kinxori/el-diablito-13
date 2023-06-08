import LinkButton from "../custom-buttons/LinkButton";
import projectsVideo1 from "./../../src/assets/Ilustracion_sin_título.mp4"; //this has to be a video
import CardDisplay from "../card-display/card-display";
import "./🎨projects-vids-page.css";
import { useState } from "react";

export default function ProjectsVidsPage() {
  const [isFullScreen, setIsFullScreen] = useState("");
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  const handleFullScreen = (id: string) => {
    setIsFullScreen((currenValue) => (currenValue !== id ? id : ""));
  };

  return (
    <section id="projects-vids-page-id" className="projects-vids-page-root">
      <div className="projects-vids-page-content">
        <div className="projects-vids-page-copy">
          <h2>Proyectos de Animación 👺</h2>
          <p>Tambien soy animador, estos son unos de mis trabajos 👺</p>
        </div>
        <div className="projects-vids-page-cards">
          <CardDisplay header="video 1">
            <div className="projects-vids-fullscreen-asset" onClick={() => handleFullScreen("1")}>
              {!isLoadingVideo && (
                <div className="projects-vids-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "1" && (
                <LinkButton className="projects-vids-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <video
                loop
                autoPlay
                src={projectsVideo1}
                className={
                  isFullScreen === "1" ? "projects-vids-asset-open" : "projects-vids-asset-close"
                }
                onLoadedData={() => setIsLoadingVideo(true)}
              ></video>
              {isFullScreen === "1" && <div className="projects-vids-asset-bg-blank"></div>}
            </div>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 2">
            <div className="projects-vids-fullscreen-asset" onClick={() => handleFullScreen("2")}>
              {!isLoadingVideo && (
                <div className="projects-vids-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "2" && (
                <LinkButton className="projects-vids-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <video
                loop
                autoPlay
                src={projectsVideo1}
                className={
                  isFullScreen === "2" ? "projects-vids-asset-open" : "projects-vids-asset-close"
                }
                onLoadedData={() => setIsLoadingVideo(true)}
              ></video>
              {isFullScreen === "2" && <div className="projects-vids-asset-bg-blank"></div>}
            </div>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 3">
            <div className="projects-vids-fullscreen-asset" onClick={() => handleFullScreen("3")}>
              {!isLoadingVideo && (
                <div className="projects-vids-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "3" && (
                <LinkButton className="projects-vids-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <video
                loop
                autoPlay
                src={projectsVideo1}
                className={
                  isFullScreen === "3" ? "projects-vids-asset-open" : "projects-vids-asset-close"
                }
                onLoadedData={() => setIsLoadingVideo(true)}
              ></video>
              {isFullScreen === "3" && <div className="projects-vids-asset-bg-blank"></div>}
            </div>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 4">
            <div className="projects-vids-fullscreen-asset" onClick={() => handleFullScreen("4")}>
              {!isLoadingVideo && (
                <div className="projects-vids-asset-loader">Loading video...</div>
              )}
              {isFullScreen === "4" && (
                <LinkButton className="projects-vids-asset-close-button" variant="linkButton">
                  Close
                </LinkButton>
              )}
              <video
                loop
                autoPlay
                src={projectsVideo1}
                className={
                  isFullScreen === "4" ? "projects-vids-asset-open" : "projects-vids-asset-close"
                }
                onLoadedData={() => setIsLoadingVideo(true)}
              ></video>
              {isFullScreen === "4" && <div className="projects-vids-asset-bg-blank"></div>}
            </div>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
