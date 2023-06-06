import { useRouteError } from "react-router-dom";
import error404pageIMG from "./../../src/assets/08_1080.png";
import "./🎨404error-page.css";
import LinkButton from "../../components/custom-buttons/LinkButton";

export default function Error404() {
  const error: any = useRouteError();

  return (
    <section className="error-404-page-root">
      <img src={error404pageIMG} alt="error page el diablito 13"></img>
      <h2>Oops! Error 404 👺</h2>
      <i>Status: {error.statusText || error.message}</i>
      <LinkButton to="/" className="error-404-page-CTA">
        Go Home
      </LinkButton>
    </section>
  );
}
