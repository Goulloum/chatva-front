import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/auth.hook";
import "./Login.css";
import { useEffect, useState } from "react";

export const Login = () => {
  const { login, user } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isLogginSuccessfull = await login({
      username: e.currentTarget.mail.value,
      password: e.currentTarget.password.value,
    });
    if (isLogginSuccessfull) {
      navigate("/");
    }

    setError("Identifiants incorrects !");
  };
  return (
    <div className="login-container">
      <div className="left">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="title-form">Connectez-vous :</div>
          <input
            type="text"
            name="mail"
            className="input-email"
            placeholder="Adresse e-mail"
          />
          <input
            type="password"
            name="password"
            className="input-password"
            placeholder="Mot de passe"
          />
          <div className="btn-submit-container">
            <input type="submit" value="Connexion" />
          </div>
          <div className="error-placeholder">{error}</div>
        </form>
        {/* <img src={logo} alt="" className="logo" /> */}
      </div>
      <div className="right">
        <div className="outer-circle ">
          <div className="middle-circle ">
            <div className="inner-circle ">
              <div className="banner">
                <div>Intradata</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
