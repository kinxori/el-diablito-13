import welcomingPageImgBG from "./../../src/assets/BK.png";
import "./🎨welcoming-page.css";
import { useState } from "react";

export default function WelcomingPage({ onClick }: any) {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <section className="welcoming-page-root">
      <div className="welcoming-page-copy">
        <h1 onClick={onClick}>🔥 Clickeame! 🔥</h1>
      </div>
      <img
        className="welcoming-page-bg-img"
        src={welcomingPageImgBG}
        alt="welcoming page background el diablito 13"
      ></img>
    </section>
  );
}
