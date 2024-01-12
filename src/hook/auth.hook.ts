import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error("Authentication context should be defined !");
    }

    return context;
};
