import "../Button/Button.scss";
import { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  variant: "secondary" | "custom";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, variant, onClick }: ButtonProps) => {
  return (
    <div className="button--container">
      <button className={`button button--${variant}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
