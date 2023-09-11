import { NavLink } from "react-router-dom";
import "./Nav.scss";
import home from "../../assets/icons/home.svg";
import events from "../../assets/icons/events.svg";
import calendar from "../../assets/icons/calendar.svg";
import about from "../../assets/icons/about.svg";
import account from "../../assets/icons/account.svg";
import admin from "../../assets/icons/admin.svg";
import { getUser } from "../../utils/firebaseSnapshots";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";

type NavProps = {
  user: User;
};

const Nav = ({ user }: NavProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    console.log("is running");

    const fetchUserDetails = async () => {
      if (user) {
        const currentUser = await getUser(user.uid);
        console.log(currentUser);

        if (currentUser && currentUser.isAdmin) {
          setIsAdmin(currentUser.isAdmin);
        } else {
          setIsAdmin(false);
        }
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img src={home} alt="Home link" className="nav__image" />
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img src={events} alt="Events link" className="nav__image" />
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img src={calendar} alt="Calendar link" className="nav__image" />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav__link--active" : "nav__link"
            }
          >
            <img src={about} alt="About link" className="nav__image" />
          </NavLink>
          {isAdmin ? (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
            >
              <img src={admin} alt="Admin link" className="nav__image" />
            </NavLink>
          ) : (
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
            >
              <img src={account} alt="Account link" className="nav__image" />
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
