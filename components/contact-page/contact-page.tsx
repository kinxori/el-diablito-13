import "./🎨contact-page.css";
import LinkButton from "../custom-buttons/LinkButton";
import EmailForm from "../email-form/email-form";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [clipboardIsCopy, setClipboardIsCopy] = useState(false);
  const textToClipBoard = useRef("") as any;

  const handleClipboardState = () => {
    const text = textToClipBoard.current.textContent;
    navigator.clipboard.writeText(text);
    setClipboardIsCopy(!clipboardIsCopy);
    setTimeout(() => {
      setClipboardIsCopy(false);
    }, 5000);
  };

  return (
    <section id="contact-page-id" className="contact-page-root">
      <div className="contact-page-content">
        <div className="contact-page-copy">
          <h2>
            Instagram&nbsp;<i className="fa-brands fa-instagram"></i>
          </h2>
          <p>Dame un follow en Instagram para seguir mis proyectos o hacer una colaboración.</p>
        </div>
        <LinkButton
          to="https://www.instagram.com/eldiablitotrece/"
          target="_blank"
          className="contact-page-CTA-button"
        >
          Ir a Instagram
        </LinkButton>
        <div className="contact-page-copy">
          <h2>
            Twitch.tv&nbsp;<i className="fa-brands fa-twitch"></i>
          </h2>

          <p>
            Si te interesa ver el proceso de 0 a 100 de mis proyectos, no dudes en echarte un
            clavado a mis livestreams.
          </p>
        </div>
        <LinkButton
          to="https://www.twitch.tv/eldiablitotrece"
          target="_blank"
          className="contact-page-CTA-button"
        >
          Ir a Twitch
        </LinkButton>
        <div className="contact-page-copy">
          <h2>
            Correo&nbsp;<i className="fa-regular fa-envelope"></i>
          </h2>
          <p>
            Mi correo es:&nbsp;
            <i ref={textToClipBoard} className="contact-page-email-text">
              eldiablito1213@gmail.com
            </i>
          </p>
        </div>
        <LinkButton className="contact-page-CTA-button" onClick={handleClipboardState}>
          {clipboardIsCopy ? (
            <span>
              Copiado&nbsp;&nbsp;<i className="fa-solid fa-check"></i>
            </span>
          ) : (
            <span>
              Copiar&nbsp;&nbsp;<i className="fa-regular fa-clipboard"></i>
            </span>
          )}
        </LinkButton>
        <div className="contact-page-copy">
          <h2>
            Mánda un correo&nbsp;<i className="fa-solid fa-pencil"></i>
          </h2>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
