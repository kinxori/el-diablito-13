import { useRouteError } from "react-router-dom";

export default function Error404() {
  const error: any = useRouteError();

  return (
    <section>
      <div>This is an error</div>
      <h2>{error.statusText || error.message}</h2>
    </section>
  );
}
