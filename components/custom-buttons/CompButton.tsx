import { Link } from "react-router-dom";
import "./🎨CompButton.css";

export default function CopmButton({
  children,
  className,
  to,
  onClick,
  target,
  variant = "mainButton",
  type,
}: any) {
  const classes: any = {
    mainButton: "mainButton",
    secButton: "secButton",
    ghostButton: "ghostButton",
    linkButton: "linkButton",
    desktopMainButton: "desktopMainButton",
    desktopSecButton: "desktopSecButton",
  };

  return (
    <span className={className}>
      <Link to={to} target={target}>
        <button className={classes[variant]} onClick={onClick} type={type}>
          {children}
        </button>
      </Link>
    </span>
  );
}
