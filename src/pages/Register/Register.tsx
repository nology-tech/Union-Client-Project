import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.scss";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import arrow from "../../images/arrow.png";

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

  return (
    <div className="register-page">
      <div className="image-container">
        <img className="image-container__image" src={arrow} alt="" />
      </div>

      <div className="register-page__heading">
        <h1>Create An Account</h1>
      </div>
    </div>
  );
};

export default Register;
