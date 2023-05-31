import "./🎨navBar.css";
import NavMobile from "./navMobile";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [navComponent, setIsNavComponent] = useState(<NavMobile />);

  useEffect(() => {
    const handleRezise = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setIsNavComponent(<NavMobile />);
      } else if (screenWidth <= 1180) {
        setIsNavComponent(<div>tablet</div>);
      } else {
        setIsNavComponent(<div>desktop</div>);
      }
    };
    window.addEventListener("resize", handleRezise);
    return () => window.removeEventListener("resize", handleRezise);
  }, []);
  return <>{navComponent}</>;
}
