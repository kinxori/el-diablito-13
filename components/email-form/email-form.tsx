import { useState } from "react";
import "./🎨email-form.css";

export default function EmailForm() {
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [isPopUp, setIsPopUp] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    const result = await fetch(
      "https://us-central1-el-diablito-13-b8034.cloudfunctions.net/emailSenderFunction",
      {
        method: "POST",
        headers: {
          "label-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      }
    );

    setIsPopUp(true);
    setTimeout(() => {
      setIsPopUp(false);
    }, 50000);
    setEmailInput("");
    setSubjectInput("");
    setMessageInput("");
  };

  return (
    <section className="email-form-root">
      <form onSubmit={handleSubmit} className="email-form-body">
        <div className="email-form-copy">
          <div className="email-form-label">
            <h3>Tu correo: </h3>
            <input
              type="email"
              value={emailInput}
              name="email"
              onChange={(event) => setEmailInput(event.target.value)}
              className="email-input-box"
              required
              placeholder="ejemplo@email.com"
            />
          </div>
          <div className="email-form-label">
            <h3>Asunto: </h3>
            <input
              value={subjectInput}
              name="subject"
              onChange={(event) => setSubjectInput(event.target.value)}
              className="email-input-box"
              required
              placeholder="Ingresa el asunto"
            />
          </div>
        </div>
        <div className="email-form-label">
          <h3>Mensaje:</h3>
          <textarea
            required
            value={messageInput}
            name="message"
            onChange={(event) => setMessageInput(event.target.value)}
            className="message-input-box"
            placeholder="Ingresa tu mensaje aquí"
          />
        </div>
        <button type="submit" className="mainButton email-form-submit-button">
          Enviar
        </button>
      </form>
      {isPopUp && (
        <>
          <div className="email-form-pop-up-root">
            <div className="email-form-pop-up-body">
              <h3>¡Correo enviado! 👺</h3>
              <button
                className="mainButton email-form-pop-up-button"
                onClick={() => {
                  setIsPopUp(false);
                }}
              >
                Ok
              </button>
            </div>
          </div>

          <div
            className="email-form-pop-up-background"
            onClick={() => {
              setIsPopUp(false);
            }}
          ></div>
        </>
      )}
    </section>
  );
}
