import "./Calendar.scss";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {
  Calendar,
  DayValue,
} from "@hassanmojab/react-modern-calendar-datepicker";
import { format, isAfter, isBefore } from "date-fns";
import EventCard from "../../components/EventCard/EventCard";
import { Event } from "../../types/types";
import { getEventsForUser } from "../../utils/firebaseSnapshots";

type CalendarPageProps = {
  eventData: Event[];
  userId: string;
  isAdmin: boolean;
};

const CalendarPage = ({ eventData, userId, isAdmin }: CalendarPageProps) => {
  const [isActive, setIsActive] = useState(true);
  const [buttonVariants, setButtonVariants] = useState<boolean[]>(
    new Array(eventData.length).fill(false)
  );

  const [userEvents, setUserEvents] = useState<Event[]>([]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClickButton = (eventIndex: number) => {
    const newButtonVariants = [...buttonVariants];
    newButtonVariants[eventIndex] = !newButtonVariants[eventIndex];
    setButtonVariants(newButtonVariants);
  };

  const currentDate = new Date();
  const defaultValue: DayValue = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };
  const [selectedDay, setSelectedDay] = useState<DayValue>(defaultValue);

  const timeStampDay = new Date(
    `${selectedDay?.year || defaultValue.year}, ${
      selectedDay?.month || defaultValue.month
    }, ${selectedDay?.day || defaultValue.day}`
  );

  const formattedDate = format(timeStampDay, "dd/MM/yyyy");

  const filteredSearch = eventData.filter((event: Event) => {
    const incomingCalendarDate = format(event.date, "dd/MM/yyyy");
    return incomingCalendarDate == formattedDate;
  });

  const historicSearch = eventData.filter((event: Event) => {
    const incomingCalendarDate = format(event.date, "dd/MM/yyyy");
    const formattedCurrentDate = format(currentDate, "dd/MM/yyyy");
    return incomingCalendarDate < formattedCurrentDate;
  });

  useEffect(
    () => {
      fetchUserEvents();
    }, // eslint-disable-next-line
    []
  );

  const fetchUserEvents = async () => {
    const userEvents: Event[] = await getEventsForUser(userId);
    setUserEvents(userEvents);
  };

  const filterActiveUserEvents = userEvents.filter((event) => {
    const currentDate = new Date();
    return isAfter(event.date, currentDate);
  });

  const filterHistoricUserEvents = userEvents.filter((event) => {
    const currentDate = new Date();
    return isBefore(event.date, currentDate);
  });

  return (
    <Layout isAdmin={isAdmin}>
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
        {isActive && filteredSearch.length === 0 ? (
          <p className="calendar__no-events">
            Sorry, no events on the selected day.
          </p>
        ) : !isActive ? (
          <div className="displayed-events">
            {historicSearch.map((event: Event, index: number) => {
              return (
                <EventCard
                  key={event.id}
                  title={event.name}
                  maker={event.category}
                  date={event.date}
                  textContent={event.description}
                  galleryArray={event.images}
                  capacityCurrent={event.capacityCurrent}
                  capacityMax={event.capacityMax}
                  buttonLabel={
                    buttonVariants[index] ? "CANCEL BOOKING" : "BOOK A PLACE"
                  }
                  buttonVariant={buttonVariants[index]}
                  handleClick={() => handleClickButton(index)}
                />
              );
            })}
          </div>
        ) : (
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
                  capacityCurrent={event.capacityCurrent}
                  capacityMax={event.capacityMax}
                  buttonLabel={
                    buttonVariants[index] ? "CANCEL BOOKING" : "BOOK A PLACE"
                  }
                  buttonVariant={buttonVariants[index]}
                  handleClick={() => handleClickButton(index)}
                />
              );
            })}
          </div>
        )}
        <div className="user-events">
          {!isActive
            ? filterHistoricUserEvents.map((event: Event, index: number) => {
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
                    capacityCurrent={event.capacityCurrent}
                    capacityMax={event.capacityMax}
                  />
                );
              })
            : filterActiveUserEvents.map((event: Event, index: number) => {
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
                    capacityCurrent={event.capacityCurrent}
                    capacityMax={event.capacityMax}
                  />
                );
              })}
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
