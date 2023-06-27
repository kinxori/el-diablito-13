import welcomingPageImgBG from "./../../src/assets/BK.png";
import clickMeAsset from "/src/assets/clickme-opening-asset.png";
import "./🎨welcoming-page.css";
import { useState } from "react";

export default function WelcomingPage({ onClick }: any) {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <section className="welcoming-page-root">
      <img src=""></img>
      <img className="welcoming-page-asset" src={clickMeAsset} onClick={onClick}></img>
      <img
        className="welcoming-page-bg-img"
        src={welcomingPageImgBG}
        alt="welcoming page background el diablito 13"
      ></img>
    </section>
  );
}
