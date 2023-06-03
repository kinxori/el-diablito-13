import CompButton from "../custom-buttons/LinkButton";
import aboutMainImg from "./../../src/assets/Recurso 2@3x.png";
import "./🎨about-page.css";

export default function AboutPage() {
  return (
    <section id="about-page-id" className="about-page-root">
      <div className="about-page-content">
        <img src={aboutMainImg} alt="about page el diablito trece"></img>
        <div className="about-page-copy">
          <h2>Quien es el diablito 13? pues soy yo, kien mas jasjs </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ducimus
            quisquam debitis, quibusdam eligendi ab. Vel, vitae nulla, cumque sequi autem incidunt
            aliquam quo suscipit, veritatis ipsum sit distinctio est Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium iusto repellendus beatae aliquam minus quod?
            Nobis et alias, inventore, ducimus dignissimos quis, quibusdam magni suscipit nesciunt
            veniam obcaecati dolore quasi! 👺
          </p>
          <div className="about-page-CTA">
            <CompButton>Sigueme en tuich</CompButton>
          </div>
        </div>
      </div>
    </section>
  );
}
