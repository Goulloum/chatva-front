import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { PrivateRoute } from "./Component/PrivateRoute/PrivateRoute";
import { AuthContextProvider } from "./provider/AuthContext";
import { Logout } from "./pages/Logout/Logout";
import { Error } from "./Component/Error/Error";
import ChatApp from "./pages/ChatApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ChatApp />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
