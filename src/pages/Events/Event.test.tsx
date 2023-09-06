import { screen } from "@testing-library/react";
import Events from "./Events";
import userEvents from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";
import { getEvents } from "../../utils/firebaseSnapshots";
import { Event } from "../../types/types";
import { useState, useEffect } from "react";

const [dbData, setDbData] = useState<Event[]>([]);

useEffect(() => {
  getDbData();
}, []);

const getDbData = async () => {
  const data = await getEvents();
  setDbData(data as Event[]);
};

it("should render all the events once page loads", () => {
  customRender(<Events eventData={dbData} />);

  const eventCardButtons = screen.getAllByTestId(/event-card/i);
  expect(eventCardButtons.length).toBe(getEvents.length);
});

it("should render only 1 related event once beer has been searched", async () => {
  customRender(<Events eventData={dbData} />);

  const searchBar = screen.getByRole("textbox");
  await userEvents.type(searchBar, "beer");

  const eventCardButtons = screen.getAllByTestId(/event-card/i);
  expect(eventCardButtons.length).toBe(1);
});

it("should not render any events if search not matched", async () => {
  customRender(<Events eventData={dbData} />);

  const searchBar = screen.getByRole("textbox");
  await userEvents.type(searchBar, "cooking");

  const eventCardButtons = screen.queryAllByTestId(/event-card/i);
  expect(eventCardButtons.length).toBe(0);
});
