import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav className="Nav">
        <ul>
          <li>
            <img src="../../assets/icons/Home.svg" alt="Home link" />
          </li>
          <li>
            <img src="../../assets/icons/Events.svg" alt="Events link" />
          </li>
          <li>
            <img src="../../assets/icons/Calendar.svg" alt="Calendar link" />
          </li>
          <li>
            <img src="../../assets/icons/About.svg" alt="About link" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
