import { ChangeEventHandler } from "react";
import "./InputBox.scss";

type InputBoxProps = {
  label: string;
  inputType: string;
  inputPlaceholder?: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
};

const InputBox = ({
  label,
  inputType,
  inputPlaceholder,
  handleInput,
}: InputBoxProps) => {
  return (
    <div className="input-box">
      <label htmlFor="input" className="input-box__label">
        {label}
      </label>
      <div className="input-box__input">
        <input
          className="input-box__input--box"
          type={inputType}
          placeholder={inputPlaceholder}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default InputBox;
