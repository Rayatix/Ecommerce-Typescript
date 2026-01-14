import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="error-box">
        <div className="caution-tape">
            <p>Page not found</p>
        </div>

        <Link to="/" replace={true}>
            <button type="button" name="back">Go back</button>
        </Link>

                <p className="problem-text">
                    Oops. Something went wrong.
                </p>
    </div>
  )
}

export default Error