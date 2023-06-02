import "./🎨contact-page.css";
import CompButton from "../custom-buttons/CompButton";

export default function ContactPage() {
  return (
    <section id="contact-page-id" className="contact-page-root">
      <div className="contact-page-content">
        <div className="contact-page-copy">
          <h2>Que tranza loc@, bienvenid@ al infierno 🔥 </h2>
          <div className="contact-page-CTA">
            <CompButton>Galería de ilustración</CompButton>
            <CompButton variant="secButton">Galería de animación</CompButton>
          </div>
        </div>
      </div>
    </section>
  );
}
