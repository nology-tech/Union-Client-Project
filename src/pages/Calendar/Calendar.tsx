import "./Calendar.scss";
import Layout from "../../components/Layout/Layout";
import calendarImg from "../../assets/images/calendar.svg";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { getEventsById, getUserEventsIds } from "../../utils/firebaseSnapshots";
import EventCard from "../../components/EventCard/EventCard";

type CalendarProps = {
  userId: string;
};

const Calendar = ({ userId }: CalendarProps) => {
  const [isActive, setIsActive] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [eventsIds, setEventsIds] = useState<string[]>([]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const getEventsIds = async () => {
    const userEventsIds = await getUserEventsIds(userId);
    setEventsIds(userEventsIds);
  };

  const getFilteredEventsByUser = async (ids: string[]) => {
    const filteredEvents = await getEventsById(ids);
    setFilteredEvents(filteredEvents);
  };

  useEffect(() => {
    getEventsIds();
    getFilteredEventsByUser(eventsIds);
  }, []);

  console.log("filtered events", filteredEvents);

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
      {filteredEvents.map((event) => {
        return (
          <EventCard title={event._document.data.value.mapValue.fields.name} maker={event._document.data.value.mapValue.fields.category date={event._document.data.value.mapValue.fields.date} textContent='' galleryArray={[]}/>
        );
      })}
    </Layout>
  );
};

export default Calendar;
