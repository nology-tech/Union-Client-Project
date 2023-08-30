import "./Login.scss";
import Form from "../../components/Form/Form";
import { MouseEventHandler } from "react";

type LoginProps = {
  handleLogin: MouseEventHandler<HTMLButtonElement>;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  label: string;
};

const Login = ({ handleLogin, setEmail, setPassword, label }: LoginProps) => {
  return (
    <div>
      <Form
        handleLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        label={label}
      />
    </div>
  );
};

export default Login;
