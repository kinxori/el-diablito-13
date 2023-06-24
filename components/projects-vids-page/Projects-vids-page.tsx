import LinkButton from "../custom-buttons/LinkButton";
import projectsVideo1 from "./../../src/assets/Ilustracion_sin_título.mp4"; //this has to be a video
import CardDisplay from "../card-display/card-display";
import "./🎨projects-vids-page.css";

export default function ProjectsVidsPage() {
  return (
    <section id="projects-vids-id" className="projects-vids-root">
      <div className="projects-vids-content">
        <div className="projects-vids-copy">
          <h2>Proyectos de Animación </h2>
          <p>
            Además de ser ilustrador, también me aventuro en el mundo de la animación. Aquí te
            presento algunos de mis trabajos más sobresalientes. 👺
          </p>
        </div>
        <div className="projects-vids-cards">
          <CardDisplay header="video 1">
            <video
              src={projectsVideo1}
              className="projects-vids-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h3 className="projects-vids-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-vids-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 1">
            <video
              src={projectsVideo1}
              className="projects-vids-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h3 className="projects-vids-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-vids-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 1">
            <video
              src={projectsVideo1}
              className="projects-vids-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h3 className="projects-vids-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-vids-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 1">
            <video
              src={projectsVideo1}
              className="projects-vids-card-asset"
              loop={false}
              autoPlay={false}
              controls={true}
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
            ></video>
            <h3 className="projects-vids-card-title">
              "¡Tributo al Jonathan Davis de Korn con su clásico pans Adidas, hecho en vivo en
              Twitch!"
            </h3>
            <i className="projects-vids-card-date">- Mayo 31, 2023</i>
            <div className="projects-vids-card-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
