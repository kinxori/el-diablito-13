import CompButton from "../custom-buttons/CompButton";
import projectsMainImg from "./../../src/assets/master.png";
import CardDisplay from "../card-display/card-display";
import "./🎨projects-draws-page.css";

export default function ProjectsDrawsPage() {
  return (
    <section id="projects-draws-id" className="projects-draws-root">
      <div className="projects-draws-content">
        <div className="projects-draws-copy">
          <h2>Proyectos de Ilustración 👺</h2>
          <p>TRabajando como ilustrador, estos son unos de mis trabajos 👺</p>
        </div>
        <CardDisplay header="Dibujo 1">
          <img
            src={projectsMainImg}
            alt="dibujo 1 - tal"
            className="card-display-img-content"
          ></img>
          <div className="projects-draws-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
        <CardDisplay header="Dibujo 2">
          <img
            src={projectsMainImg}
            alt="dibujo 1 - tal"
            className="card-display-img-content"
          ></img>
          <div className="projects-draws-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
        <CardDisplay header="Dibujo 3">
          <img
            src={projectsMainImg}
            alt="dibujo 1 - tal"
            className="card-display-img-content"
          ></img>
          <div className="projects-draws-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
        <CardDisplay header="Dibujo 4">
          <img
            src={projectsMainImg}
            alt="dibujo 1 - tal"
            className="card-display-img-content"
          ></img>
          <div className="projects-draws-CTA">
            <CompButton>Visitar</CompButton>
          </div>
        </CardDisplay>
      </div>
    </section>
  );
}
