import "./Events.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ChangeEvent, useState, useEffect } from "react";
import { MockEvent } from "../../types/types";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";
import { isAfter, format } from "date-fns";

type EventsProps = {
  eventData: MockEvent[];
};

const Events = ({ eventData }: EventsProps) => {
  const [searchEvents, setSearchEvents] = useState<string>("");
  const [buttonVariants, setButtonVariants] = useState<boolean[]>(
    new Array(eventData.length).fill(false)
  );
  const [date, setDate] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchEvents(searchTerm);
  };

  const filterByDate = eventData.filter((event) => {
    const currentDate = new Date();
    return isAfter(event.date, currentDate);
  });

  const filteredSearch = filterByDate.filter((event) => {
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
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = format(today, "EEEE, do MMMM yyyy");
    setDate(formattedDate);
  }, []);

  return (
    <Layout>
      <Header
        title="Events"
        subTitle={`MADE MY MAKERS STUDIO TOUR`}
        date={date}
      />
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
    </Layout>
  );
};

export default Events;
