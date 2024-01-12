import { useEffect, useState } from "react";
import { useAuth } from "../../hook/auth.hook";
import { Loader } from "../../Component/Loader/Loader";

export const Logout = () => {
    const { logout } = useAuth();
    const [isLoggedOut, setIsLoggedOut] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            logout();
            setIsLoggedOut(true);
        }, 2000);
    }, []);

    return !isLoggedOut && <Loader />;
};
