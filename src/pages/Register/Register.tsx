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
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
};

const Register = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
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

  const handleEmailInput = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
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
    toggle();
  };

  const toggle = () => {
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
        <div className="image-container">
          <img
            className="image-container__image"
            src={arrow}
            alt=""
            onClick={navigateBack}
          />
        </div>
      )}

      {userinput && (
        <div className="image-container">
          <img
            className="image-container__image"
            src={arrow}
            alt=""
            onClick={toggle}
          />
        </div>
      )}

      <div className="register-page__heading">
        <h1 className="register-page__heading__header">Create An Account</h1>
      </div>
      <div className="register-page__input">
        {userinput && (
          <>
            <div className="register-page__email">
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
          </>
        )}

        {!userinput && (
          <>
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
          </>
        )}
        {!userinput && (
          <div className="register-page__next-button">
            <Button label="Next" onClick={handleClickNext} />
          </div>
        )}

        {userinput && (
          <div className="register-page__create-account">
            <Button label="Create Account" onClick={handleRegister} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
