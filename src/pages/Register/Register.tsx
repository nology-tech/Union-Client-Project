import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.scss";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import arrow from "../../images/arrow.png";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

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
  const handleRegister = async () => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUserId(userData.user.uid);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
      }
    }
  };
  const handleClickNext = () => {
    navigate("/register/2");
  };
  const navigate = useNavigate();

  const handleFirstName = (event: FormEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const handleLastName = (event: FormEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  return (
    <div className="register-page">
      <div className="image-container">
        <img className="image-container__image" src={arrow} alt="" />
      </div>
      <div className="register-page__heading">
        <h1 className="register-page__heading__header">Create An Account</h1>
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
    </div>
  );
};

export default Register;
