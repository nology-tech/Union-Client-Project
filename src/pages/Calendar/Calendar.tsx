import "./Calendar.scss";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import EventCard from "../../components/EventCard/EventCard";

const CalendarPage = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const defaultValue = {
    year: 2023,
    month: 9,
    day: 16,
  };

  const [selectedDay, setSelectedDay] = useState(defaultValue);

  const handleChange = () => {
    setSelectedDay;
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
        <div className="calendar__container">
          <Calendar
            value={selectedDay}
            onChange={handleChange}
            colorPrimary="#b42004"
            // colorPrimaryLight="#b42004"
            calendarSelectedDayClassName="calendar__day"
          />
        </div>
        {/* <EventCard /> */}
      </div>
    </Layout>
  );
};

export default CalendarPage;
