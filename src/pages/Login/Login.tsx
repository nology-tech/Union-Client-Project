import "./Login.scss";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import { ChangeEvent } from "react";
import arrow from "../../assets/images/arrow.png";
import { Link } from "react-router-dom";

type LoginProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  setUserId: (userId: string) => void;
};

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  setUserId,
}: LoginProps) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      setUserId(userData.user.uid);
      navigate("/home");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
      }
    }
  };

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setEmail(event.currentTarget.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className="login-page">
      <div className="image-container">
        <Link to={"/"}>
          <img className="image-container__image" src={arrow} alt="" />
        </Link>
      </div>
      <div className="login-page__heading">
        <h1 className="login-page__heading--header">Welcome Back</h1>
      </div>
      <div className="login-page__input-container">
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

      {userId && <p>You are logged in with this id: {userId}.</p>}
    </div>
  );
};

export default Login;
