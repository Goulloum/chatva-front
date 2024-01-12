import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hook/auth.hook";

export const PrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();
  console.log("PrivateRoute", user);
  if (!user) {
    return <Navigate to="/login" replace={true} state={{ from: location }} />;
  }

  return <Outlet />;
};
