import LinkButton from "../custom-buttons/LinkButton";
import aboutMainImg from "./../../src/assets/Recurso 2@3x.png";
import "./🎨about-page.css";

export default function AboutPage() {
  return (
    <section id="about-page-id" className="about-page-root">
      <div className="about-page-content">
        <img src={aboutMainImg} alt="about page el diablito trece"></img>
        <div className="about-page-copy">
          <div className="about-page-copy-content">
            <h2>¿Quién es El Diablito Trece? 😈</h2>
            <p>
              El Diablito 13 es una secta de animadores que se dedica a la animación 2D y 3D. Su
              enfoque se centra en expresar ideas surrealistas y alucinantes para entretener con una
              experiencia visual impactante.
            </p>
            <img
              src=""
              alt="Imagen sobre el estilo del diablito 13"
              className="about-page-copy-content-img"
            ></img>
            <p>
              Descubrieron su pasión por la animación al darse cuenta de las ideas imposibles en sus
              mentes y cómo la animación les permite darles vida sin riesgo.
            </p>
            <p>
              Su proceso creativo se basa en buenas pláticas, referencias y diversión. Encuentran
              inspiración en temas actuales, vivencias y alucinaciones.
            </p>
            <img
              src=""
              alt="Podrías incluir una imagen que represente una sesión de brainstorming o ilustraciones y referencias que inspiran su creatividad."
              className="about-page-copy-content-img"
            ></img>
            <p>
              Consideran que el arte siempre lleva un mensaje personal o dirigido a un sector. Ven
              la relación entre el arte y la tecnología como una adaptación para mejorar su trabajo.
            </p>
            <p>
              Prefieren Instagram para mostrar su trabajo y Facebook para diversión. Si tuvieran que
              hacer un autorretrato, sería un diablo grotesco y enorme con múltiples caras.
            </p>
            <img src="" alt="dibujo de diablo" className="about-page-copy-content-img"></img>
            <p>
              Aconsejan perseverancia, representar ideas y estudiar el entorno. Películas favoritas:
              "Fight Club", "Fear & Loathing in Las Vegas", "Django", "Ren y Stimpy" e "Invader
              Zim". El Diablito 13 promueve una experiencia única y cautivadora a través de su
              animación. 👺
            </p>
          </div>
          <div className="about-page-CTA">
            <LinkButton>Sigueme en Instagram!</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
