import welcomingPageImgBG from "./../../src/assets/BK.png";
import clickMeAsset from "/src/assets/clickme-opening-asset.png";
import "./🎨welcoming-page.css";
import { useState } from "react";

export default function WelcomingPage() {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <>
      {isClicked && (
        <section className="welcoming-page-root">
          <img src=""></img>
          <img
            className="welcoming-page-asset"
            src={clickMeAsset}
            onClick={() => setIsClicked(false)}
          ></img>
          <img
            className="welcoming-page-bg-img"
            src={welcomingPageImgBG}
            alt="welcoming page background el diablito 13"
          ></img>
        </section>
      )}
    </>
  );
}
