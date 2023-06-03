import { useState } from "react";
import CompButton from "./../custom-buttons/CompButton";
import "./🎨email-form.css";

export default function EmailForm() {
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [popUp, setPopUp] = useState("");

  const handleSubmit = async (event: any) => {
    // firebase function
    event.preventDefault();
    const { target } = event;
    const form = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    const result = await fetch(
      "https://us-central1-myportfolio-70cb1.cloudfunctions.net/email-formFunction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, secret: "homelo" }),
      }
    );

    setPopUp("isShown");
    setTimeout(() => {
      setPopUp("");
    }, 50000);
    setEmailInput("");
    setSubjectInput("");
    setMessageInput("");
  };

  const handlePopUp = () => {
    setPopUp("");
  };

  return (
    <section className="email-form-root">
      <form onSubmit={handleSubmit} className="email-form-body">
        <div className="email-form-email-entry">
          <h3>Your email 📫: </h3>
          <label>
            <input
              type="email"
              value={emailInput}
              name="email"
              onChange={(event) => setEmailInput(event.target.value)}
              className="email-input-box"
              required
              placeholder="example@email.com"
            />
          </label>
        </div>
        <div className="email-form-subject-entry">
          <h3>Subject 🖍: </h3>
          <label>
            <input
              value={subjectInput}
              name="subject"
              onChange={(event) => setSubjectInput(event.target.value)}
              className="email-input-box"
              required
              placeholder="Place your subject here"
            />
          </label>
        </div>
        <div className="email-form-text-entry">
          <h3>Your message 💬:</h3>
          <label>
            <textarea
              required
              value={messageInput}
              name="message"
              onChange={(event) => setMessageInput(event.target.value)}
              className="message-input-box"
              placeholder="Enter your message here"
            />
          </label>
        </div>
        <button type="submit" className="mainButton submit-button-CTA">
          Submit
        </button>
        {popUp === "isShown" && (
          <div className="email-email-form-send-pop-up">
            <div className="email-pop-up-body">
              <h2>Email sent! 👺</h2>
              <CompButton variant="mainButton" onClick={handlePopUp}>
                Ok
              </CompButton>
            </div>
            <div className="email-pop-up-background"></div>
          </div>
        )}
      </form>
    </section>
  );
}
