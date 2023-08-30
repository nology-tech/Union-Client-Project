import "./Login.scss";
import Form from "../../components/Form/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

type LoginProps = {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const Login = ({ setEmail, setPassword }: LoginProps) => {
  const handleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
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
        handleLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        label="Welcome Back"
      />
    </div>
  );
};

export default Login;
