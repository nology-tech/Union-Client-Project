import "./Login.scss";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import { ChangeEvent } from "react";
import arrow from "../../assets/images/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const [loginError, setLoginError] = useState<boolean>(false);

  const handleLogin = async () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setUserId(user.uid);
            navigate("/home");
            window.alert("Login Success");
          })
          .catch((error) => {
            window.alert(error.message);
          });
      })
      .catch((error) => {
        window.alert(error.message);
        setLoginError(true);
      });
  };

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
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
        <Link to={"/"}>
          <img className="image-container__image" src={arrow} alt="" />
        </Link>
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
    </div>
  );
};

export default Login;

// test@test.com

// type LoginProps = {
//   email: string;
//   setEmail: (email: string) => void;
//   password: string;
//   setPassword: (password: string) => void;
//   setUserId: (userId: string) => void;
// };

// const Login = ({
//   email,
//   setEmail,
//   password,
//   setPassword,
//   setUserId,
// }: LoginProps) => {
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     setPersistence(auth, browserSessionPersistence);
//     try {
//       const userData = await signInWithEmailAndPassword(auth, email, password);
//       setUserId(userData.user.uid);
//       navigate("/home");
//       return userData;
//     } catch (error: unknown) {
//       if (error instanceof FirebaseError) {
//         console.error(error.code);
//       }
//     }
//   };

//   return (
//     <div>
//       <Form
//         handleLogin={handleLogin}
//         setEmail={setEmail}
//         setPassword={setPassword}
//         label="Welcome Back"
//       />
//     </div>
//   );
// };
