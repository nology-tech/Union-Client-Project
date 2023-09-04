import "./Events.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ChangeEvent, useState } from "react";
import { MockEvent } from "../../types/types";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import blackCross from "../../assets/images/black-cross.png";

type EventsProps = {
  eventData: MockEvent[];
};

const Events = ({ eventData }: EventsProps) => {
  const [searchEvents, setSearchEvents] = useState<string>("");
  const [buttonVariants, setButtonVariants] = useState<boolean[]>(
    new Array(eventData.length).fill(false)
  );
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchEvents(searchTerm);
  };

  const filteredSearch = eventData.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchEvents) ||
      event.category.toLowerCase().includes(searchEvents) ||
      event.description.toLowerCase().includes(searchEvents)
    );
  });

  const handleClick = (eventIndex: number) => {
    const newButtonVariants = [...buttonVariants];
    newButtonVariants[eventIndex] = !newButtonVariants[eventIndex];
    setButtonVariants(newButtonVariants);

    if (newButtonVariants[eventIndex]) setShowPopup(true);
  };

  const handleViewCalendar = () => {
    setShowPopup(false);
    navigate("/calendar");
  };

  const handleCancelBooking = () => {
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Layout>
      <Header title="Events" subTitle="MADE MY MAKERS STUDIO TOUR" />
      <SearchBar searchEvents={searchEvents} handleInput={handleSearch} />
      <div className="displayed-events">
        {filteredSearch.map((event: MockEvent, index: number) => {
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
              handleClick={() => handleClick(index)}
            />
          );
        })}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <img
              className="popup__black-cross"
              src={blackCross}
              alt="Black cross"
              onClick={handleClose}
            />
            <h3 className="popup__title">Successfully Booked!</h3>
            <Button label="VIEW CALENDAR" onClick={handleViewCalendar} />
            <Button
              label="CANCEL BOOKING"
              onClick={handleCancelBooking}
              variant="secondary"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Events;
