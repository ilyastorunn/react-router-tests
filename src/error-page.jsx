import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();  // `useRouteError` provides the error that was thrown. When the user navigates to routes that don't exist you'll get an error response with a "Not Found" `statusText`.
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops, error page!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}