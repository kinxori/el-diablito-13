import "./🎨landing-page.css";
import landingPageImg from "./../../src/assets/06_resized.png";
import AnchorButton from "../custom-buttons/AnchorButton";

export default function LandingPage() {
  return (
    <section id="landing-page-id" className="landing-page-root">
      <div className="landing-page-content">
        <img src={landingPageImg} alt="landing page el diablito trece"></img>
        <div className="landing-page-copy">
          <h2>Sumérgete en el abismo de la imaginación del Diablito Trece 🔥</h2>
          <div className="landing-page-CTA">
            <AnchorButton href="#projects-draws-page-id" variant="mainButton">
              Galería de ilustración
            </AnchorButton>
            <AnchorButton href="#projects-vids-page-id" variant="secButton">
              Galería de animación
            </AnchorButton>
          </div>
        </div>
      </div>
    </section>
  );
}
