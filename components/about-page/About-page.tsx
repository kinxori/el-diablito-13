import LinkButton from "../custom-buttons/LinkButton";
import aboutMainImg from "./../../src/assets/Recurso 2@3x.png";
import diablitoCollage from "/src/assets/diablito-13-about-collage-2.jpg";
import diablitoDrawing from "/src/assets/diablito-picture.png";
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
            <img src={diablitoCollage} alt="Imagen sobre el estilo del diablito 13"></img>
            <p>
              Descubrieron su pasión por la animación al darse cuenta de las ideas imposibles en sus
              mentes y cómo la animación les permite darles vida sin riesgo.
            </p>
            <p>
              Su proceso creativo se basa en buenas pláticas, referencias y diversión. Encuentran
              inspiración en temas actuales, vivencias y alucinaciones.
            </p>
            <video
              preload="auto"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
              src="https://firebasestorage.googleapis.com/v0/b/el-diablito-13-b8034.appspot.com/o/Timelapse-Work-Emote-16x9.mp4?alt=media&token=040263aa-14e6-46a8-ba24-1a960b52b41d"
            ></video>
            <p>
              Consideran que el arte siempre lleva un mensaje personal o dirigido a un sector. Ven
              la relación entre el arte y la tecnología como una adaptación para mejorar su trabajo.
            </p>
            <p>
              Prefieren Instagram para mostrar su trabajo y Facebook para diversión. Si tuvieran que
              hacer un autorretrato, sería un diablo grotesco y enorme con múltiples caras.
            </p>
            <img src={diablitoDrawing} alt="dibujo de diablo"></img>
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
