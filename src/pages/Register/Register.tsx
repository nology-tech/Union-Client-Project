import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.scss";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import arrow from "../../images/arrow.png";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

type RegisterProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  setUserId: (userId: string) => void;
};

const Register = ({
  email,
  setEmail,
  password,
  setPassword,
  setUserId,
}: RegisterProps) => {
  const [userinput, setUserInput] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [colorChange, setColorChange] = useState<boolean>(true);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState<string>("");
  const [emailColorChange, setEmailColorChange] = useState<boolean>(true);

  // because we only need the set function, we can get access to that without destructuring, just by accessing the second part of the array.
  const setFirstName = useState<string>("")[1];
  const setLastName = useState<string>("")[1];

  const handleRegister = async () => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUserId(userData.user.uid);
      navigate("/home");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
      }
    }
  };

  const navigateBack = () => {
    navigate("/");
  };

  const navigate = useNavigate();

  const handleFirstName = (event: FormEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const handleLastName = (event: FormEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  };

  const handleEmailInput = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const beforeRegister = () => {
    if (isEmailValid(email) == true && colorChange == false) {
      setEmailColorChange(true);
      return;
    } else if (isEmailValid(email) == false) {
      setEmailColorChange(false);
    } else {
      handleRegister();
    }
  };

  const handlePasswordInput = (event: FormEvent<HTMLInputElement>) => {
    setCheckConfirmPassword(event.currentTarget.value);
    if (checkPassword === event.currentTarget.value) {
      setPassword(event.currentTarget.value);
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const handleClickNext = () => {
    if (userinput) {
      setUserInput(false);
    } else {
      setUserInput(true);
    }
  };

  const handleCheckPasswordInput = (event: FormEvent<HTMLInputElement>) => {
    setCheckPassword(event.currentTarget.value);
    if (event.currentTarget.value != checkConfirmPassword) {
      setColorChange(false);
    } else setColorChange(true);
  };

  return (
    <div className="register-page">
      {!userinput && (
        <>
          <div className="image-container">
            <img
              className="image-container__image"
              src={arrow}
              alt="back-arrow"
              onClick={navigateBack}
            />
          </div>
          <div className="register-page__heading">
            <h1 className="register-page__header">Create An Account</h1>
          </div>
          <div className="register-page__input">
            <div className="register-page__first-name">
              <InputBox
                label="First Name"
                inputType="text"
                inputPlaceholder="  John"
                handleInput={handleFirstName}
              />
            </div>
            <div className="register-page__last-name">
              <InputBox
                label="Last Name"
                inputType="text"
                inputPlaceholder="  Doe"
                handleInput={handleLastName}
              />
            </div>
            <div className="register-page__next-button">
              <Button label="Next" onClick={handleClickNext} />
            </div>
          </div>
        </>
      )}

      {userinput && (
        <>
          <div className="image-container">
            <img
              className="image-container__image"
              src={arrow}
              alt="back-arrow"
              onClick={handleClickNext}
            />
          </div>
          <div className="register-page__heading">
            <h1 className="register-page__header">Create An Account</h1>
          </div>
          <div className="register-page__input">
            <div className={`register-page__email email--${emailColorChange}`}>
              <InputBox
                label="Email Address"
                inputPlaceholder="you@example.com"
                inputType="text"
                handleInput={handleEmailInput}
              />
            </div>
            <div className="register-page__password">
              <InputBox
                label="Password"
                inputPlaceholder="Your Password"
                inputType="password"
                handleInput={handleCheckPasswordInput}
              />
            </div>
            <div
              className={`register-page__confirm-password password-${colorChange}`}
            >
              <InputBox
                label="Confirm Password"
                inputType="password"
                handleInput={handlePasswordInput}
              />
            </div>
            <div className="register-page__create-account">
              <Button label="Create Account" onClick={beforeRegister} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Register;
