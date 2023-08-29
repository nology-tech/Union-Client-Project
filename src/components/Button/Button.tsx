import "../Button/Button.scss";
import { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  variant: "default" | "secondary" | "custom";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, variant, onClick }: ButtonProps) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
