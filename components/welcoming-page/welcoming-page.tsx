import welcomingPageIMG from "./../../src/assets/master_resized.png";
import welcomingPageImgBG from "./../../src/assets/BK.png";
import "./🎨welcoming-page.css";

export default function WelcomingPage() {
  return (
    <section className="welcoming-page-root">
      <div className="welcoming-page-copy">
        <h1>🔥 ¡Clickeame! 🔥</h1>
      </div>
      <img
        className="welcoming-page-bg-img"
        src={welcomingPageImgBG}
        alt="welcoming page background el diablito 13"
      ></img>
    </section>
  );
}
