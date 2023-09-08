import "./SplashPage.scss";
import Button from "../../components/Button/Button";
import painting from "../../assets/images/painting-woman.png";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <div className="splash-page">
      <div className="splash-page__image-container">
        <img src={painting} className="splash-page__image" />
      </div>
      <div className="splash-page__text-container">
        <div>
          <p className="splash-page__text-container splash-page__text-container--line-1">
            DOT TO DOT - LOCAL MAKERS
          </p>
        </div>
        <div>
          <p className="splash-page__text-container splash-page__text-container--line-2">
            Made by Makers <br></br> Studio Tour
          </p>
        </div>
        <div>
          <p className="splash-page__text-container splash-page__text-container--line-3">
            Nov - Dec 2021 <br></br> <span className="bold">Paintworks,</span>{" "}
            Bristol
          </p>
        </div>
      </div>
      <div className="splash-page__buttons-container">
        <Button label="create an account" onClick={handleClickRegister} />

        <Button
          label="sign in"
          variant="secondary"
          onClick={handleClickLogin}
        />
      </div>
    </div>
  );
};

export default SplashPage;
