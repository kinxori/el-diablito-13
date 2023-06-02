import CompButton from "../custom-buttons/CompButton";
// import projectsMainvideo from "./../../src/assets/Recurso 2@3x.png"; //this has to be a video
import CardDisplay from "../card-display/card-display";
import "./🎨projects-vids-page.css";

export default function ProjectsVidsPage() {
  return (
    <section id="projects-vids-id" className="projects-vids-root">
      <div className="projects-vids-content">
        <div className="projects-vids-copy">
          <h2>Proyectos de Animación 👺</h2>
          <p>Tambien soy animador, estos son unos de mis trabajos 👺</p>
        </div>
        <CardDisplay header="video 1">
          <video className="card-display-vid-content"></video>
          <div className="projects-vids-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
        <CardDisplay header="video 2">
          <video className="card-display-vid-content"></video>
          <div className="projects-vids-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
        <CardDisplay header="video 3">
          <video className="card-display-vid-content"></video>
          <div className="projects-vids-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
        <CardDisplay header="video 4">
          <video className="card-display-vid-content"></video>
          <div className="projects-vids-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
      </div>
    </section>
  );
}
