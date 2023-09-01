import "./Calendar.scss";
import Layout from "../../components/Layout/Layout";
import calendarImg from "../../assets/images/calendar.svg";
import Header from "../../components/Header/Header";
import { useState } from "react";

const Calendar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Layout>
      <div className="calendar">
        <Header title="Calendar" subTitle="MADE BY MAKERS STUDIO TOUR" />
        <div className="calendar__buttons">
          <p
            className="calendar__button"
            onClick={handleClick}
            style={{
              fontWeight: isActive ? 700 : 400,
            }}
          >
            Active
          </p>
          <p
            className="calendar__button"
            onClick={handleClick}
            style={{
              fontWeight: isActive ? 400 : 700,
            }}
          >
            Historic
          </p>
        </div>
        <img
          className="calendar__image"
          src={calendarImg}
          alt="Calendar image"
        />
      </div>
    </Layout>
  );
};

export default Calendar;
