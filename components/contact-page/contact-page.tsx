import "./🎨contact-page.css";
import CompButton from "../custom-buttons/CompButton";

export default function ContactPage() {
  return (
    <section id="contact-page-id" className="contact-page-root">
      <div className="contact-page-content">
        <div className="contact-page-copy">
          <div className="contact-page-CTA">
            <h2>Sigueme en Instagram 🔥</h2>
            <p>Dame un follow en instagram para seguir mis proyectos o hacer una colaboración</p>
            <CompButton className="contact-page-CTA-button"> Ir a Instagram</CompButton>
          </div>
          <div className="contact-page-CTA">
            <h2>Sigueme en Twitch.tv 🔥</h2>
            <p>
              Si te interesa ver el proceso de 0 a 100 de mis proyectos, no dudes en echarte un
              clavado a mis livestreams
            </p>
            <CompButton className="contact-page-CTA-button"> Ir a Twitch</CompButton>
          </div>
        </div>
      </div>
    </section>
  );
}
