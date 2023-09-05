import "./Calendar.scss";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import { format } from "date-fns";
import EventCard from "../../components/EventCard/EventCard";
import { Event } from "../../types/types";

type CalendarPageProps = {
  eventData: Event[];
};

const CalendarPage = ({ eventData }: CalendarPageProps) => {
  const [isActive, setIsActive] = useState(true);
  const [buttonVariants, setButtonVariants] = useState<boolean[]>(
    new Array(eventData.length).fill(false)
  );

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClickButton = (eventIndex: number) => {
    const newButtonVariants = [...buttonVariants];
    newButtonVariants[eventIndex] = !newButtonVariants[eventIndex];
    setButtonVariants(newButtonVariants);
  };

  let currentDate = new Date();
  const defaultValue = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };

  const [selectedDay, setSelectedDay] = useState(defaultValue);

  const timeStampDay = new Date(
    `${selectedDay.year}, ${selectedDay.month}, ${selectedDay.day}`
  );

  let formattedDate = format(timeStampDay, "dd/MM/yyyy");

  console.log(selectedDay);
  console.log(formattedDate);
  console.log(currentDate);

  const filteredSearch = eventData.filter((event: Event) => {
    return event.date == formattedDate;
  });

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
          {isActive && (
            <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              colorPrimary="#b42004"
              calendarSelectedDayClassName="calendar__day"
            />
          )}
        </div>
        <div className="displayed-events">
          {filteredSearch.map((event: Event, index: number) => {
            return (
              <EventCard
                key={event.id}
                title={event.name}
                maker={event.category}
                date={event.date}
                textContent={event.description}
                galleryArray={event.images}
                buttonLabel={
                  buttonVariants[index] ? "CANCEL BOOKING" : "BOOK A PLACE"
                }
                buttonVariant={buttonVariants[index]}
                handleClick={() => handleClickButton(index)}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
