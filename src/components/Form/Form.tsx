import { FormEvent, MouseEventHandler } from "react";
import "./Form.scss";

type FormProps = {
  handleLogin: MouseEventHandler<HTMLButtonElement>;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  label: string;
};

const Form = ({ handleLogin, setEmail, setPassword, label }: FormProps) => {
  const handleEmailInput = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordInput = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>{label}</h1>
      <label htmlFor="email">Email Address</label>
      <input type="text" id="email" onChange={handleEmailInput} />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" onChange={handlePasswordInput} />
      <button type="submit" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};

export default Form;
