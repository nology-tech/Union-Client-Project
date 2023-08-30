import { Link } from "react-router-dom";
import "./Nav.scss";
import home from "../../assets/icons/home.svg";
import events from "../../assets/icons/events.svg";
import calendar from "../../assets/icons/calendar.svg";
import about from "../../assets/icons/about.svg";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <Link to={"/"} className="nav__link">
            <img src={home} alt="Home link" className="nav__image--home" />
          </Link>
          <Link to={"/events"} className="nav__link">
            <img
              src={events}
              alt="Events link"
              className="nav__image--events"
            />
          </Link>
          <Link to={"/calendar"} className="nav__link">
            <img
              src={calendar}
              alt="Calendar link"
              className="nav__image--calendar"
            />
          </Link>
          <Link to={"/about"} className="nav__link">
            <img src={about} alt="About link" className="nav__image--about" />
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
