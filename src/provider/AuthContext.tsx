import { ReactNode, createContext, useState } from "react";
import { LoginPayload } from "../interface/login-payload.interface";
import { AuthContextInterface } from "../interface/auth-context.interface";
import { api } from "../utility/axios.utility";

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(() => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  });

  const login = async (payload: LoginPayload) => {
    try {
      const loginRes = await api.post("/authentication_token", payload);
      const user = {
        token: loginRes.data.token,
        username: loginRes.data.data.username,
        id: loginRes.data.data.id,
      };
      localStorage.setItem("userProfile", JSON.stringify(user));
      setUser(user);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logout = async () => {
    localStorage.removeItem("userProfile");
    setUser(null);
    // await api.post("/auth/logout");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
