import "./🎨navBar.css";
import NavMobile from "./navMobile";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [navComponent, setNavComponent] = useState(<NavMobile />);

  useEffect(() => {
    const handleRezise = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setNavComponent(<NavMobile />);
      } else if (screenWidth <= 1180) {
        setNavComponent(<div>tablet</div>);
      } else {
        setNavComponent(<div>desktop</div>);
      }
    };
    window.addEventListener("resize", handleRezise);
    return () => window.removeEventListener("resize", handleRezise);
  }, []);
  return <>{navComponent}</>;
}
