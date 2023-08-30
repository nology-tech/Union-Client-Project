import { MouseEventHandler } from "react";
import Form from "../../components/Form/Form";
import "./Register.scss";

type RegisterProps = {
  handleRegister: MouseEventHandler<HTMLButtonElement>;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  label: string;
};

const Register = ({
  handleRegister,
  setEmail,
  setPassword,
  label,
}: RegisterProps) => {
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
