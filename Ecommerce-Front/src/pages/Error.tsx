import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page not found";
  }

  return (
    <div className="error-box">
      <div className="caution-tape">
        {/* <h1>{errorStatus}</h1> */}
        {/* <p>{errorStatusText}</p> */}
        <p>{errorStatusText}</p>
      </div>

      <Link to="/" replace>
        <button type="button">Go back</button>
      </Link>

      <p className="problem-text">{errorStatus}</p>
    </div>
  );
};

export default Error;
