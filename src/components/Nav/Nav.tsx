import { Link } from "react-router-dom";
import "./Nav.scss";
import Home from "../../assets/icons/Home.svg";
import Events from "../../assets/icons/Events.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import About from "../../assets/icons/About.svg";

const Nav = () => {
  return (
    <>
      <nav className="Nav">
        <ul className="Nav__image">
          <Link to={"/"}>
            <img src={Home} alt="Home link" className="Nav__image--home" />
          </Link>
          <Link to={""}>
            <img
              src={Events}
              alt="Events link"
              className="Nav__image--events"
            />
          </Link>
          <Link to={""}>
            <img
              src={Calendar}
              alt="Calendar link"
              className="Nav__image--calendar"
            />
          </Link>
          <Link to={""}>
            <img src={About} alt="About link" className="Nav__image--about" />
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
