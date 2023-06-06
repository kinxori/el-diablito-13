const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.VITE_APP_EMAIL,
    pass: process.env.VITE_APP_PASS,
  },
});

transport
  .verify()
  .then(() => {
    console.log("SMTP server connection successful 🚀");
  })
  .catch((error: any) => {
    console.error("SMTP server connection error 🥺:", error);
  });

const sendContactForm = (form: any) => {
  return transport
    .sendMail({
      subject: `${form.subject}`,
      bcc: "gustavoq26@gmail.com",
      html: `<h3>This person has sent you an email, reply ASAP! 😵</h3>
        <p> From: ${form.email} </p>
        <p> Message: ${form.message} </p>
        `,
    })
    .then((r: any) => {
      console.log("Sender Function Working 🤝", r.accepted);
      console.log("Sender Function Rejected👺", r.rejected);
    })
    .catch((e: any) => console.log("If you see this, sender function is not working 🥲", e));
};

exports.emailSenderFunction = functions.https.onRequest((request: any, response: any) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "POST");
  response.set("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    response.status(204).send("");
  } else {
    sendContactForm(request.body);
    return response.json({ message: "Email sent! 🛐" });
  }
});
