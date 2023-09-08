import "./CreateEvent.scss";
import EventForm from "../../components/EventForm/EventForm";
import backArrow from "../../images/arrow.png";

const CreateEvent = () => {
  return (
    <div className="event-creator">
      <div className="event-creator__back-arrow">
        <img src={backArrow} alt="back arrow" />
      </div>
      <div className="event-creator__header">
        <h1 className="event-creator__header--header">Create your Event</h1>
      </div>
      <div className="event-creator__form">
        <EventForm />
      </div>
    </div>
  );
};

export default CreateEvent;
