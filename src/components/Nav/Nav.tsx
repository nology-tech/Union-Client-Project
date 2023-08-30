import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img src={home} alt="Home link" className="nav__image--home" />
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img
              src={events}
              alt="Events link"
              className="nav__image--events"
            />
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img
              src={calendar}
              alt="Calendar link"
              className="nav__image--calendar"
            />
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img src={about} alt="About link" className="nav__image--about" />
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
