import "./🎨navBar.css";
import NavMobile from "./navMobile";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [navComponent, setNavComponent] = useState(<NavMobile />);

  useEffect(() => {
    //I am deleting tablet component and use mobile with media queries
    const handleRezise = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 1180) {
        setNavComponent(<NavMobile />);
      } else if (screenWidth > 1180) {
        setNavComponent(<div style={{ backgroundColor: "red", color: "white" }}>desktop</div>);
      }
    };
    window.addEventListener("resize", handleRezise);
    handleRezise();
    return () => window.removeEventListener("resize", handleRezise);
  }, []);
  return <>{navComponent}</>;
}
