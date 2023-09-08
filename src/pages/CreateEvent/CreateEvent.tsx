import "./CreateEvent.scss";
import EventForm from "../../components/EventForm/EventForm";
import backArrow from "../../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";

type CreateEventProps = {
  handleNewEvent: () => void;
};

const CreateEvent = ({ handleNewEvent }: CreateEventProps) => {
  const navigate = useNavigate();

  const navAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="event-creator">
      <div className="event-creator__back-arrow">
        <img src={backArrow} alt="back arrow" onClick={navAdmin} />
      </div>
      <div className="event-creator__header">
        <h1 className="event-creator__header--header">Create your Event</h1>
      </div>
      <div className="event-creator__form">
        <EventForm handleNewEvent={handleNewEvent} />
      </div>
    </div>
  );
};

export default CreateEvent;
