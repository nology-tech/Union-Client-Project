import "../Button/Button.scss";
import { CSSProperties, MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  style?: CSSProperties;
  variant?: "secondary";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label, style, onClick, variant }: ButtonProps) => {
  return (
    <div className="button--container">
      <button
        className={variant ? `button button--${variant}` : "button"}
        style={style}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
