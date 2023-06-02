import CompButton from "../custom-buttons/CompButton";
import projectsMainImg from "./../../src/assets/Recurso 2@3x.png";
import CardDisplay from "./../card-display/card-display";
import "./🎨projects-page.css";

export default function ProjectsPage() {
  return (
    <section id="projects-page-id" className="projects-page-root">
      <div className="projects-page-content">
        <div className="projects-page-copy">
          <h2>Proyectos de Ilustración 👺</h2>
          <p>TRabajando como ilustrador, estos son unos de mis trabajos 👺</p>
          <CardDisplay header="Dibujo 1">
            <div className="projects-page-CTA">
              <CompButton>Sigueme en tuich</CompButton>
            </div>
          </CardDisplay>
        </div>
      </div>
    </section>
  );
}
