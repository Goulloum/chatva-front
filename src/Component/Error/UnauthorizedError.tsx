import { useAuth } from "../../hook/auth.hook";
import "./UnauthorizedError.css";
import { Link } from "react-router-dom";

export const UnauthorizedError = () => {
    const { logout } = useAuth();
    logout();

    return (
        <div className="unauthorized-error-container">
            <div className="unauthorized-error-title">Erreur 401</div>
            <div className="unauthorized-error-message">
                Vous n'êtes pas autorisé à accéder à cette page. <br /> Pour vous reconnectez veuillez vous reconnecter.
            </div>
            <Link to="/logout" className="unauthorized-error-link">
                Se reconnecter
            </Link>
        </div>
    );
};
