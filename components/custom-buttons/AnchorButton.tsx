import "./🎨customButton.css";

export default function AnchorButton({
  children,
  className,
  href,
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
  };

  return (
    <span className={className}>
      <a href={href} target={target}>
        <button className={classes[variant]} onClick={onClick} type={type}>
          {children}
        </button>
      </a>
    </span>
  );
}
