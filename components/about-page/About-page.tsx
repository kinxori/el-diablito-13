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
              ¡Hola! Soy El Diablito, un artista apasionado dedicado a la ilustración y la animación
              2D. Mi enfoque se centra en expresar ideas surrealistas y vulgares para entretener a
              la pandilla con mi visión de ver al mundo.
            </p>
            <img src={diablitoCollage} alt="Imagen sobre el estilo del diablito 13"></img>
            <p>
              Descubrí mi pasión por la animación y la ilustración al darme cuenta de las ideas
              imposibles en mi mente y cómo estas disciplinas me permiten darles vida sin límites
              creativos.
            </p>
            <p>
              Mi proceso creativo se basa en buenas pláticas, referencias inspiradoras y mucha
              diversión. Encuentro inspiración en temas actuales, mis propias vivencias y
              alucinaciones que me llevan a explorar nuevos universos visuales.
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
              Considero que el arte siempre lleva consigo un mensaje personal o dirigido a un
              determinado sector. Veo la relación entre el arte y la tecnología como una combinación
              perfecta para potenciar mi trabajo creativo.
            </p>
            <p>
              Utilizo plataformas como Instagram para mostrar mi trabajo y Facebook para compartir
              momentos divertidos. Si tuviera que hacer un autorretrato, sería un diablo grotesco y
              enorme con múltiples caras, una representación única de mi estilo.
            </p>
            <img src={diablitoDrawing} alt="dibujo de diablo"></img>
            <p>
              Aconsejo perseverancia, representar ideas auténticas y estudiar mi entorno. Algunas de
              mis películas favoritas incluyen "Fight Club", "Fear & Loathing in Las Vegas",
              "Django", "Ren y Stimpy" e "Invader Zim". Como animador e ilustrador, mi objetivo es
              brindar una experiencia única y cautivadora a través de mis creaciones visuales. 👺
            </p>
          </div>
          <div className="about-page-CTA">
            <LinkButton>¡Sigueme en Instagram!</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
