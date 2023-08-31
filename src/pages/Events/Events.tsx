import "./Events.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ChangeEvent, useState } from "react";
import { MockEvent } from "../../types/types";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";

type EventsProps = {
  mockData: MockEvent[];
};

const Events = ({ mockData }: EventsProps) => {
  const [searchEvents, setSearchEvents] = useState<string>("");
  // const [buttonLabel, setButtonLabel] = useState<string>("BOOK A PLACE")

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchEvents(searchTerm);
  };

  const filteredSearch = mockData.filter((event) => {
    return event.name.toLowerCase().includes(searchEvents) ||
    event.category.toLowerCase().includes(searchEvents) ||
    event.description.toLowerCase().includes(searchEvents);
  });

  // const handleClick = () => {
   
  // }

  return (
    <Layout>
      <Header title="Events" subTitle="MADE MY MAKERS STUDIO TOUR" />
      <SearchBar searchEvents={searchEvents} handleInput={handleSearch} />
      {filteredSearch.map((event: MockEvent) => {
        return (
          <EventCard
            key={event.id}
            title={event.name}
            maker={event.category}
            date={event.date}
            textContent={event.description}
            galleryArray={event.images}
            buttonLabel={"BOOK A PLACE"}
            handleClick={() => console.log("here")}
          />
        );
      })}
      ;
    </Layout>
  );
};

export default Events;
