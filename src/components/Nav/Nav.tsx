import { NavLink } from "react-router-dom";
import "./Nav.scss";
import home from "../../assets/icons/home.svg";
import events from "../../assets/icons/events.svg";
import calendar from "../../assets/icons/calendar.svg";
import about from "../../assets/icons/about.svg";
import account from "../../assets/icons/account.svg";
import admin from "../../assets/icons/admin.svg";
import { getUsers } from "../../utils/firebaseSnapshots";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { User } from "../../types/types";

const Nav = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getCurrentUid = auth.currentUser?.uid;

  // filter user by matching UIDs
  const filteredUsers = users.filter((user) => user.UUID === getCurrentUid);
  console.log(users.filter((user) => user.UUID));

  console.log(filteredUsers);

  const isAdmin = filteredUsers.length > 0 && filteredUsers[0].isAdmin;
  console.log(isAdmin);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData as User[]);
    };

    fetchUsers();
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
              <img src={admin} alt="Home link" className="nav__image" />
            </NavLink>
          ) : (
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "nav__link--active" : "nav__link"
              }
            >
              <img src={account} alt="Home link" className="nav__image" />
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
