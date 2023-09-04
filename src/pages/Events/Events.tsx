import "./Events.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ChangeEvent, useState, useEffect } from "react";
import { Event } from "../../types/types";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";
import { getEvents } from "../../utils/firebaseSnapshots";

type EventsProps = {
  eventData: Event[];
};

const Events = ({ eventData }: EventsProps) => {
  const [dbData, setDbData] = useState<any>([]);
  const [searchEvents, setSearchEvents] = useState<string>("");
  const [buttonVariants, setButtonVariants] = useState<boolean[]>(
    new Array(eventData.length).fill(false)
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchEvents(searchTerm);
  };

  const filteredSearch = dbData.filter(
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
  };

  useEffect(() => {
    getDbData();
  }, []);

  console.log(dbData);

  const getDbData = async () => {
    const data = await getEvents();
    setDbData(data);
  };

  return (
    <Layout>
      <Header title="Events" subTitle="MADE MY MAKERS STUDIO TOUR" />
      <SearchBar searchEvents={searchEvents} handleInput={handleSearch} />
      <div className="displayed-events">
        {filteredSearch.map((event: Event, index: number) => {
          console.log(event.date);
          return (
            <EventCard
              key={event.id}
              title={event.name}
              maker={event.category}
              date={ new Date (event.date.seconds * 1000).toLocaleDateString()}
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
