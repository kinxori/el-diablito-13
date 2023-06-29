import "./🎨landing-page.css";
import landingPageImg from "./../../src/assets/New_Logo_Diablo-edited.png";
import AnchorButton from "../custom-buttons/AnchorButton";

export default function LandingPage() {
  return (
    <section id="landing-page-id" className="landing-page-root">
      <div className="landing-page-content">
        <img src={landingPageImg} alt="landing page el diablito trece"></img>
        <div className="landing-page-copy">
          <div className="landing-page-copy-content">
            <h2>
              Sumérgete en el abismo de la imaginación de <b>El Diablito Trece 🔥</b>
            </h2>
          </div>
          <div className="landing-page-CTA">
            <AnchorButton href="#drawings-page-id" variant="mainButton">
              Galería de ilustración
            </AnchorButton>
            <AnchorButton href="#videos-page-id" variant="secButton">
              Galería de animación
            </AnchorButton>
          </div>
        </div>
      </div>
    </section>
  );
}
