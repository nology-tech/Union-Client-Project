import "./EventCreator.scss";
import EventForm from "../../components/EventForm/EventForm";

const EventCreator = () => {
  return (
    <div className="event-creator">
      <div className="event-creator__header">
        <h1 className="event-creator__header--header">Create your Event</h1>
      </div>
      <div className="event-creator__form">
        <EventForm />
      </div>
    </div>
  );
};

export default EventCreator;
