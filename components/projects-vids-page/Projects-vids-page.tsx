import LinkButton from "../custom-buttons/LinkButton";
import projectsVideo1 from "./../../src/assets/Ilustracion_sin_título.mp4"; //this has to be a video
import CardDisplay from "../card-display/card-display";
import "./🎨projects-vids-page.css";

export default function ProjectsVidsPage() {
  return (
    <section id="projects-vids-page-id" className="projects-vids-page-root">
      <div className="projects-vids-page-content">
        <div className="projects-vids-page-copy">
          <h2>Proyectos de Animación 👺</h2>
          <p>Tambien soy animador, estos son unos de mis trabajos 👺</p>
        </div>
        <div className="projects-vids-page-cards">
          <CardDisplay header="video 1">
            <video controls src={projectsVideo1} className="card-display-vid-content"></video>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 2">
            <video controls src={projectsVideo1} className="card-display-vid-content"></video>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 3">
            <video controls src={projectsVideo1} className="card-display-vid-content"></video>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="video 4">
            <video controls src={projectsVideo1} className="card-display-vid-content"></video>
            <div className="projects-vids-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
