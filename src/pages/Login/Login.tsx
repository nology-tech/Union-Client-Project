import "./Login.scss";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import { ChangeEvent } from "react";
import arrow from "../../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FedSignIn from "../../components/FedSignIn/FedSignIn";

type LoginProps = {
  setUser: (userId: object) => void;
};

const Login = ({ setUser }: LoginProps) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      setUser(userData.user);
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
        setLoginError(true);
      }
    }
  };

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const navigateToSplash = () => {
    navigate("/splash");
  };

  return (
    <div className="login-page">
      <div className="image__container">
        <img
          className="image-container__image"
          onClick={navigateToSplash}
          src={arrow}
          alt="Back Arrow"
        />
      </div>
      <div className="login-page__heading">
        <h1 className="login-page__heading--header">Welcome Back</h1>
      </div>
      <div className="login-page__input-container">
        {loginError && (
          <p className="login-page__error">
            Sorry, we don't recognise that login
          </p>
        )}
        <InputBox
          label="Email Address"
          inputPlaceholder="you@example.com"
          inputType="text"
          handleInput={handleEmailInput}
        />
        <InputBox
          label="Password"
          inputPlaceholder="Your password"
          inputType="password"
          handleInput={handlePasswordInput}
        />
      </div>
      <div className="login-page__button-container">
        <Button label="SIGN IN" onClick={handleLogin} />
      </div>
      <FedSignIn setUser={setUser} />
    </div>
  );
};

export default Login;
