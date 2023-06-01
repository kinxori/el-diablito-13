import "./🎨landing-page.css";
import landingPageImg from "./../../src/assets/06_resized.png";
import CompButton from "../custom-buttons/CompButton";

export default function LandingPage() {
  return (
    <section className="landing-page-root">
      <div className="landing-page-content">
        <img src={landingPageImg} alt="landing page el diablito trece"></img>
        <div className="landing-page-copy">
          <h2>Que tranza loc@, bienvenid@ al infierno 🔥 </h2>
          <div className="landing-page-CTA">
            <CompButton>Galería de ilustración</CompButton>
            <CompButton variant="secButton">Galería de animación</CompButton>
          </div>
        </div>
      </div>
    </section>
  );
}
