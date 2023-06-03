import "./🎨landing-page.css";
import landingPageImg from "./../../src/assets/06_resized.png";
import LinkButton from "../custom-buttons/LinkButton";

export default function LandingPage() {
  return (
    <section id="landing-page-id" className="landing-page-root">
      <div className="landing-page-content">
        <img src={landingPageImg} alt="landing page el diablito trece"></img>
        <div className="landing-page-copy">
          <h2>Que tranza loc@, bienvenid@ al infierno 🔥 </h2>
          <div className="landing-page-CTA">
            <LinkButton>Galería de ilustración</LinkButton>
            <LinkButton variant="secButton">Galería de animación</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
