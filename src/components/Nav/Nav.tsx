import { NavLink, useLocation } from "react-router-dom";
import "./Nav.scss";
import home from "../../assets/icons/home.svg";
import events from "../../assets/icons/events.svg";
import calendar from "../../assets/icons/calendar.svg";
import about from "../../assets/icons/about.svg";

const Nav = () => {
  // const location = useLocation();

  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          {/* <NavLink to={"/home"} className="nav__link" activeClassName="active">
            <img src={home} alt="Home link" className="nav__image--home" />
          </NavLink> */}
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <img src={home} alt="Home link" className="nav__image--home" />
          </NavLink>
          {/* <NavLink
            to={"/events"}
            className={`nav__link ${
              location.pathname === "/events" ? "active" : ""
            }`}
          > */}
          <NavLink
            to="/events"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <img
              src={events}
              alt="Events link"
              className="nav__image--events"
            />
          </NavLink>
          {/* <NavLink
            to={"/calendar"}
            className={`nav__link ${
              location.pathname === "/calendar" ? "active" : ""
            }`}
          > */}
          <NavLink
            to="/calendar"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <img
              src={calendar}
              alt="Calendar link"
              className="nav__image--calendar"
            />
          </NavLink>
          {/* <NavLink
            to={"/about"}
            className={`nav__link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          > */}
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
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
