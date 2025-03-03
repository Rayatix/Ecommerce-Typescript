import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import "/public/styles/404.css";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <Container>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />

          <span>{errorStatus}</span>

          <p className="p-a">{errorStatusText}</p>

          <Link to="/" replace={true} className="back">
            ... Back to previous page
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Error;
