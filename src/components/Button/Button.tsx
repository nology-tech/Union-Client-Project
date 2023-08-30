import "../Button/Button.scss";
import { CSSProperties, MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  style?: CSSProperties;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, style, onClick }: ButtonProps) => {
  return (
    <div className="button--container">
      <button className="button" style={style} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
