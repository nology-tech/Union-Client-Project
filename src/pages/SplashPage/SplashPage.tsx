import "./SplashPage.scss";
import Button from "../../components/Button/Button";
import paintingWoman from "../../images/paintingWoman.png";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <div className="splashPage">
      <div className="splashPage--imageContainer">
        <img src={paintingWoman} />
      </div>
      <div className="splashPage--textContainer">
        <div>
          <p className="splashPage--textContainer__line1">
            DOT TO DOT - LOCAL MAKERS
          </p>
        </div>
        <div>
          <p className="splashPage--textContainer__line2">
            Made by Makers <br></br> Studio Tour
          </p>
        </div>
        <div>
          <p className="splashPage--textContainer__line3">
            Nov - Dec 2021 <br></br> <span className="bold">Paintworks,</span>{" "}
            Bristol
          </p>
        </div>
      </div>
      <div
        className="splashPage--buttonsContainer"
        id="splashPage--buttonsContainerId"
      >
        <Link style={{ textDecoration: "none" }} to="/sign-up">
          <Button label="create an account" />
        </Link>

        <Link style={{ textDecoration: "none" }} to="/login">
          <Button label="sign in" variant="secondary" />
        </Link>
      </div>
    </div>
  );
};

export default SplashPage;
