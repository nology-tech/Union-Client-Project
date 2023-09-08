import { User, createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.scss";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import arrow from "../../assets/images/arrow.png";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import FedSignIn from "../../components/FedSignIn/FedSignIn";
import { addUser } from "../../utils/firebaseSnapshots";

type RegisterProps = {
  setUser: (user: User) => void;
};

const Register = ({ setUser }: RegisterProps) => {
  const [userInput, setUserInput] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [colorChange, setColorChange] = useState<boolean>(true);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState<string>("");
  const [emailColorChange, setEmailColorChange] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [firebaseError, setFirebaseError] = useState<string>("");

  const handleRegister = async () => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = auth?.currentUser?.uid;
      addUser(userData, firstName, lastName, email, userId);

      setUser(userData.user);
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use")
          setFirebaseError("Email Already Exists");

        if (error.code === "auth/weak-password")
          setFirebaseError("Sorry, password must be longer than 5 characters.");

        console.error(error.code);
      }
    }
  };

  const navigateBack = () => {
    navigate("/splash");
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
    if (userInput) {
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
      {!userInput && (
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
            <FedSignIn setUser={setUser} />
          </div>
        </>
      )}

      {userInput && (
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
                inputPlaceholder=""
                handleInput={handlePasswordInput}
              />
            </div>
            <div>
              {firebaseError && (
                <p className="register-page__email-exists">{firebaseError}</p>
              )}
              {firebaseError === "passwordError" && (
                <p className="register-page__weak-password">{firebaseError}</p>
              )}
            </div>

            <div className="register-page__create-account">
              <Button label="Create Account" onClick={beforeRegister} />
            </div>
            <FedSignIn setUser={setUser} />
          </div>
        </>
      )}
    </div>
  );
};

export default Register;
