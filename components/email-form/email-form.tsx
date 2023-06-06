import { useState } from "react";
import LinkButton from "../custom-buttons/LinkButton";
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
          "Content-Type": "application/json",
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
        <div className="email-form-email-entry">
          <h3>Your email 📫: </h3>
          <input
            type="email"
            value={emailInput}
            name="email"
            onChange={(event) => setEmailInput(event.target.value)}
            className="email-input-box"
            required
            placeholder="example@email.com"
          />
        </div>
        <div className="email-form-subject-entry">
          <h3>Subject 🖍: </h3>
          <input
            value={subjectInput}
            name="subject"
            onChange={(event) => setSubjectInput(event.target.value)}
            className="email-input-box"
            required
            placeholder="Place your subject here"
          />
        </div>
        <div className="email-form-text-entry">
          <h3>Your message 💬:</h3>
          <textarea
            required
            value={messageInput}
            name="message"
            onChange={(event) => setMessageInput(event.target.value)}
            className="message-input-box"
            placeholder="Enter your message here"
          />
        </div>
        <button type="submit" className="mainButton email-form-submit-button">
          Submit
        </button>
        {isPopUp && (
          <>
            <div className="a">
              <div className="email-form-pop-up-body">
                <h2>Correo enviado! 👺</h2>
                <LinkButton
                  variant="mainButton"
                  className="email-form-pop-up-button"
                  onClick={() => {
                    setIsPopUp(false);
                  }}
                >
                  Ok
                </LinkButton>
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
      </form>
    </section>
  );
}
