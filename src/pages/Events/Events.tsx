import "./Events.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ChangeEvent, MouseEvent, useState } from "react";
import { MockEvent } from "../../types/types";
import { mockEvents } from "../../data/mockEvents";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";

// type EventsProps = {
//   mockData: MockEvent[];
// };

const Events = () => {
  const [searchEvents, setSearchEvents] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchEvents(searchTerm);
    // const filteredEvents = filterEvents();
  };

  //   const filterEvents = () => {
  //     const filteredBySearch = mockEvents.filter((event) =>
  //       event.name.toLowerCase().includes(searchEvents)
  //     );
  //     return filteredBySearch;
  //   };

  //   const filteredSearch = mockData.filter((event) =>
  //     event.name.toLowerCase().includes(searchEvents)
  //   );

  return (
    <Layout>
      <Header title="Events" subTitle="MADE MY MAKERS STUDIO TOUR" />
      <SearchBar searchEvents={searchEvents} handleInput={handleSearch} />
      {mockEvents.map((event) => {
        return (
          <EventCard
            key={event.id}
            title={event.name}
            maker={event.category}
            date={event.date}
            textContent={event.description}
            galleryArray={event.images}
            buttonLabel={""}
            handleClick={() => console.log("here")}
          />
        );
      })}
      ;
    </Layout>
  );
};

export default Events;
