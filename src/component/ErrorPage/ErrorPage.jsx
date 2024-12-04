import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h3>Oppis!!!</h3>
            <p>{error.statusText || error.messages}</p>
            {
                error.status === 404 && <div>
                    <h2>page Not Found</h2>
                    <p>Go back where you from</p>
                    <Link to="/"> <button>button</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;