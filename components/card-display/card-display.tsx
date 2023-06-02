import "./🎨card-display.css";

export default function CardDisplay({ header, children }: any) {
  return (
    <div className="card-root">
      <div className="card-title">
        <h3>{header}</h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}
