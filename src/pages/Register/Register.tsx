import { createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../../components/Form/Form";
import "./Register.scss";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  return (
    <div>
      <Form
        handleLogin={handleRegister}
        setEmail={setEmail}
        setPassword={setPassword}
        label="Create An Account"
      />
    </div>
  );
};

export default Register;
