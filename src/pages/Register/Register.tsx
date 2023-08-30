import { createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../../components/Form/Form";

import "./Register.scss";
import { FirebaseError } from "firebase/app";

type RegisterProps = {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  label: string;
};

const Register = ({ setEmail, setPassword, label }: RegisterProps) => {
  const handleRegister = async () => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userData.user);
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
        label={label}
      />
    </div>
  );
};

export default Register;
