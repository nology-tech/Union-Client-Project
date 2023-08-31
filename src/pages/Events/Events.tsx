import "./Events.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ChangeEvent, MouseEvent, useState } from "react";
import { MockEvent } from "../../types/types";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";

type EventsProps = {
  mockData: MockEvent[];
};

const Events = ({ mockData }: EventsProps) => {
  const [searchEvents, setSearchEvents] = useState<string>("");
  const [buttonVariant, setButtonVariant] = useState<boolean>(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchEvents(searchTerm);
  };

  const filteredSearch = mockData.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchEvents) ||
      event.category.toLowerCase().includes(searchEvents) ||
      event.description.toLowerCase().includes(searchEvents)
    );
  });

  /* Need to correct the handleClick function that will allow us to click individual buttons rather than clicking one and changing all of them. */
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const eventTarget = event.currentTarget.parentElement as HTMLElement;
    console.log(eventTarget);

    setButtonVariant(true);
  };

  // const handleClick = (event: MouseEvent, eventId: number) => {
  //   const bookedEvents = mockData.map((event) => {
  //     if (event.id === eventId)
  //   })
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
            buttonLabel={buttonVariant ? "CANCEL BOOKING" : "BOOK A PLACE"}
            buttonVariant={buttonVariant}
            handleClick={handleClick}
          />
        );
      })}
      ;
    </Layout>
  );
};

export default Events;
