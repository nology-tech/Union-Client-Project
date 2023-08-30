import "./Login.scss";
import Form from "../../components/Form/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";

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
  const handleLogin = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      setUserId(userData.user.uid);
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
