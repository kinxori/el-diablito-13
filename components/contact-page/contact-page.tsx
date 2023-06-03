import "./🎨contact-page.css";
import CompButton from "../custom-buttons/CompButton";
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
          <div className="contact-page-CTA">
            <h2>
              Sigueme en Instagram <i className="fa-brands fa-instagram"></i>
            </h2>
            <p>Dame un follow en instagram para seguir mis proyectos o hacer una colaboración</p>
            <CompButton className="contact-page-CTA-button"> Ir a Instagram</CompButton>
          </div>
          <div className="contact-page-CTA">
            <h2>
              Sigueme en Twitch.tv <i className="fa-brands fa-twitch"></i>
            </h2>

            <p>
              Si te interesa ver el proceso de 0 a 100 de mis proyectos, no dudes en echarte un
              clavado a mis livestreams
            </p>
            <CompButton className="contact-page-CTA-button"> Ir a Twitch</CompButton>
          </div>
          <div className="contact-page-CTA">
            <h2>
              Mándame un correo <i className="fa-regular fa-envelope"></i>
            </h2>
            <p>Si quieres algun tipo de comision o te interesa colaborar, mandamé un correo!</p>
            <p ref={textToClipBoard}> gustavoq26@gmail.com </p>

            <CompButton className="contact-page-CTA-button" onClick={handleClipboardState}>
              {clipboardIsCopy ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-regular fa-clipboard"></i>
              )}
            </CompButton>
          </div>
        </div>
        <EmailForm />
      </div>
    </section>
  );
}
