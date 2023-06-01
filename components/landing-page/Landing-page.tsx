import "./🎨landing-page.css";
import landingPageImg from "./../../src/assets/06_resized.png";

export default function LandingPage() {
  return (
    <section className="landing-page-root">
      <div className="landing-page-content">
        <img src={landingPageImg} alt="landing page el diablito trece"></img>
        <div className="landing-page-copy">
          <h2>Que tranza loco</h2>
        </div>
        <div className="landing-page-CTA">
          <button>cta</button>
        </div>
      </div>
    </section>
  );
}
