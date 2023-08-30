import "./Error.scss";
import errorImage from "../../assets/images/404-error.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="error">
      <h1 className="error__heading">
        OOPS. <br /> LOOKS LIKE YOU'VE TAKEN A WRONG TURN.
      </h1>
      <img className="error__image" src={errorImage} alt="Error Image" />
      <div className="error__button">
        <Button label="Home" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Error;
