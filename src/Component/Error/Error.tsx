import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "./Error.css";
import { isAxiosError } from "axios";
import { UnauthorizedError } from "./UnauthorizedError";

export const Error = () => {
    const error = useRouteError();

    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data || error.statusText;
    } else if (isAxiosError(error) && error.response?.status === 401) {
        return <UnauthorizedError />;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = "Unknown error";
    }

    return <div className="error-container">{errorMessage}</div>;
};
