import LinkButton from "../custom-buttons/LinkButton";
import projectsMainImg from "./../../src/assets/master.png";
import CardDisplay from "../card-display/card-display";
import "./🎨projects-draws-page.css";

export default function ProjectsDrawsPage() {
  return (
    <section id="projects-draws-page-id" className="projects-draws-page-root">
      <div className="projects-draws-page-content">
        <div className="projects-draws-page-copy">
          <h2>Proyectos de Ilustración 👺</h2>
          <p>TRabajando como ilustrador, estos son unos de mis trabajos 👺</p>
        </div>
        <div className="projects-draws-page-cards">
          <CardDisplay header="Dibujo 1">
            <img
              src={projectsMainImg}
              alt="dibujo 1 - tal"
              className="card-display-img-content"
            ></img>
            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 2">
            <img
              src={projectsMainImg}
              alt="dibujo 1 - tal"
              className="card-display-img-content"
            ></img>
            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 3">
            <img
              src={projectsMainImg}
              alt="dibujo 1 - tal"
              className="card-display-img-content"
            ></img>
            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
          <CardDisplay header="Dibujo 4">
            <img
              src={projectsMainImg}
              alt="dibujo 1 - tal"
              className="card-display-img-content"
            ></img>
            <div className="projects-draws-page-CTA">
              <LinkButton>Visitar</LinkButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
