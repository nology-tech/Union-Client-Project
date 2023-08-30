import { FormEvent, MouseEventHandler } from "react";
import "./Form.scss";

type FormProps = {
  setUser: (user: string) => void;
  handleLogin: MouseEventHandler<HTMLButtonElement>;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const Form = ({ setUser, handleLogin, setEmail, setPassword }: FormProps) => {
  const handleEmailInput = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordInput = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <label htmlFor="email">email</label>
      <input type="text" id="email" onChange={handleEmailInput} />
      <label htmlFor="password">password</label>
      <input type="text" id="password" onChange={handlePasswordInput} />
      <button type="submit" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};

export default Form;
