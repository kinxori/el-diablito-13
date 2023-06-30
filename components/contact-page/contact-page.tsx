import "./🎨contact-page.css";
import LinkButton from "../custom-buttons/LinkButton";
import EmailForm from "../email-form/email-form";
import { useRef, useState } from "react";

export default function ContactPage() {
  return (
    <section id="contact-page-id" className="contact-page-root">
      <div className="contact-page-content">
        <div className="contact-page-body">
          <div className="contact-page-copy">
            <h2>
              Instagram&nbsp;<i className="fa-brands fa-instagram"></i>
            </h2>
            <p>
              Dame un follow en Instagram para seguir mis proyectos más actualizados o hacer una
              colaboración.
            </p>
            <LinkButton
              to="https://www.instagram.com/eldiablitotrece/"
              target="_blank"
              className="contact-page-CTA-button"
            >
              Ir a Instagram
            </LinkButton>
          </div>
          <div className="contact-page-copy">
            <h2>
              Twitch.tv&nbsp;<i className="fa-brands fa-twitch"></i>
            </h2>

            <p>
              Si te interesa ver el proceso de 0 a 100 de mis proyectos, no dudes en echarte un
              clavado a mis livestreams.
            </p>
            <LinkButton
              to="https://www.twitch.tv/eldiablitotrece"
              target="_blank"
              className="contact-page-CTA-button"
            >
              Ir a Twitch
            </LinkButton>
          </div>
          <div className="contact-page-copy">
            <h2>
              Discord&nbsp;<i className="fa-brands fa-discord"></i>
            </h2>

            <p>
              Te invito a unirte a mi comunidad de Discord, donde compartimos y colaboramos como
              artistas. ¡Bienvenido al Diablito Trece! 👺
            </p>
            <LinkButton
              to="https://discord.gg/pQAFQxaUWC"
              target="_blank"
              className="contact-page-CTA-button"
            >
              Ir a Discord
            </LinkButton>
          </div>
          <div className="contact-page-copy">
            <h2>
              Facebook&nbsp;<i className="fa-brands fa-facebook"></i>
            </h2>

            <p>
              Te dejo la página oficial de El Diablito Trece en Facebook. Visitanos y déjanos un
              saludo en la bandeja de mensajes.
            </p>
            <LinkButton
              to="https://www.facebook.com/eldiablitotrece"
              target="_blank"
              className="contact-page-CTA-button"
            >
              Ir a Facebook
            </LinkButton>
          </div>
        </div>
        <div className="contact-page-email-form">
          <h2>
            Mánda un correo&nbsp;<i className="fa-regular fa-envelope"></i>
          </h2>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
