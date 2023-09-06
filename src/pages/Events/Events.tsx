import "./Events.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ChangeEvent, useState, useEffect } from "react";
import { isAfter, format } from "date-fns";
import { Event } from "../../types/types";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";
import { getEvents } from "../../utils/firebaseSnapshots";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import blackCross from "../../assets/images/black-cross.png";

const Events = () => {
  const [dbData, setDbData] = useState<Event[]>([]);
  const [searchEvents, setSearchEvents] = useState<string>("");
  const [buttonVariants, setButtonVariants] = useState<boolean[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const navigate = useNavigate();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchEvents(searchTerm);
  };

  const filterByDate = dbData.filter((event) => {
    const currentDate = new Date();
    return isAfter(event.date, currentDate);
  });

  const filteredSearch = filterByDate.filter(
    (event: { name: string; category: string; description: string }) => {
      return (
        event.name.toLowerCase().includes(searchEvents) ||
        event.category.toLowerCase().includes(searchEvents) ||
        event.description.toLowerCase().includes(searchEvents)
      );
    }
  );

  const handleClick = (eventIndex: number) => {
    const newButtonVariants = [...buttonVariants];
    newButtonVariants[eventIndex] = !newButtonVariants[eventIndex];
    setButtonVariants(newButtonVariants);

    setIndex(eventIndex);
    if (newButtonVariants[eventIndex]) setShowPopup(true);
  };

  const handleViewCalendar = () => {
    setShowPopup(false);
    navigate("/calendar");
  };

  const handleCancelBooking = () => {
    const newButtonVariants = [...buttonVariants];
    newButtonVariants[index] = !newButtonVariants[index];
    setButtonVariants(newButtonVariants);
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    getDbData();
  }, []);

  const getDbData = async () => {
    const data = await getEvents();
    setDbData(data as Event[]);
  };

  const today = new Date();
  const date = format(today, "EEEE, do MMMM yyyy");

  return (
    <Layout>
      <Header
        title="Events"
        subTitle={`MADE MY MAKERS STUDIO TOUR`}
        date={date}
      />
      <SearchBar searchEvents={searchEvents} handleInput={handleSearch} />
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
