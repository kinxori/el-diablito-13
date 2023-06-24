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
          <h2>Proyectos de Animación </h2>
          <p>Tambien soy animador, estos son unos de mis trabajos 👺</p>
        </div>
        <div className="projects-vids-page-cards">
          <CardDisplay header="video 1">
            {isFullScreen === "1" && (
              <>
                <LinkButton
                  className="full-screen-close-button"
                  variant="linkButton"
                  onClick={() => handleFullScreen("1")}
                >
                  Close
                </LinkButton>
                <div
                  className="projects-vids-asset-bg-blank"
                  onClick={() => handleFullScreen("1")}
                ></div>
              </>
            )}
            <video
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              src={projectsVideo1}
              className="projects-vids-asset-close"
              onClick={() => handleFullScreen("1")}
            ></video>
            <h3 className="projects-draws-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-draws-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 1">
            {isFullScreen === "1" && (
              <>
                <LinkButton
                  className="full-screen-close-button"
                  variant="linkButton"
                  onClick={() => handleFullScreen("1")}
                >
                  Close
                </LinkButton>
                <div
                  className="projects-vids-asset-bg-blank"
                  onClick={() => handleFullScreen("1")}
                ></div>
              </>
            )}
            <video
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              src={projectsVideo1}
              className="projects-vids-asset-close"
              onClick={() => handleFullScreen("1")}
            ></video>
            <h3 className="projects-draws-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-draws-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 1">
            {isFullScreen === "1" && (
              <>
                <LinkButton
                  className="full-screen-close-button"
                  variant="linkButton"
                  onClick={() => handleFullScreen("1")}
                >
                  Close
                </LinkButton>
                <div
                  className="projects-vids-asset-bg-blank"
                  onClick={() => handleFullScreen("1")}
                ></div>
              </>
            )}
            <video
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              src={projectsVideo1}
              className="projects-vids-asset-close"
              onClick={() => handleFullScreen("1")}
            ></video>
            <h3 className="projects-draws-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-draws-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 1">
            {isFullScreen === "1" && (
              <>
                <LinkButton
                  className="full-screen-close-button"
                  variant="linkButton"
                  onClick={() => handleFullScreen("1")}
                >
                  Close
                </LinkButton>
                <div
                  className="projects-vids-asset-bg-blank"
                  onClick={() => handleFullScreen("1")}
                ></div>
              </>
            )}
            <video
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              src={projectsVideo1}
              className="projects-vids-asset-close"
              onClick={() => handleFullScreen("1")}
            ></video>
            <h3 className="projects-draws-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-draws-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
