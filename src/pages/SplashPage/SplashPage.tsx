import "./SplashPage.scss";
import Button from "../../components/Button/Button";
import paintingWoman from "../../images/paintingWoman.png";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <div className="splashPage">
      <div className="splashPage__imageContainer">
        <img src={paintingWoman} />
      </div>
      <div className="splashPage__textContainer">
        <div>
          <p className="splashPage__textContainer splashPage__textContainer--line1">
            DOT TO DOT - LOCAL MAKERS
          </p>
        </div>
        <div>
          <p className="splashPage__textContainer splashPage__textContainer--line2">
            Made by Makers <br></br> Studio Tour
          </p>
        </div>
        <div>
          <p className="splashPage__textContainer splashPage__textContainer--line3">
            Nov - Dec 2021 <br></br> <span className="bold">Paintworks,</span>{" "}
            Bristol
          </p>
        </div>
      </div>
      <div
        className="splashPage__buttonsContainer"
        id="splashPage__buttonsContainerId"
      >
        <Link style={{ textDecoration: "none" }} to="/register">
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
