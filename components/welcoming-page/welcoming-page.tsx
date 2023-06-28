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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/el-diablito-13-b8034.appspot.com/o/cenizas-alpha.gif?alt=media&token=babbab27-fc34-427a-9ec5-c9e225cefbbf"
            className="welcoming-page-ashes-asset"
          ></img>
          <img
            className="welcoming-page-click-me-asset"
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
