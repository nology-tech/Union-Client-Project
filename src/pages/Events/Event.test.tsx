import { screen } from "@testing-library/react";
import Events from "./Events";
import userEvents from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";
import { getEvents } from "../../utils/firebaseSnapshots";
import { Event } from "../../types/types";

const mockData: Event = {
  capacityCurrent: 0,
  capacityMax: 50,
  category: "Furniture",
  date: new Date(),
  description:
    "The Furniture Workshop, led by a master tinkerer, is a haven for craftsmanship, where artisans bring raw materials to life, sculpting timeless pieces that transform spaces into works of art. With meticulous attention to detail and a passion for innovation, this workshop embraces the art of furniture making, creating bespoke designs that embody the perfect blend of functionality and aesthetic appeal.",
  id: "1",
  images: [
    "https://images.unsplash.com/photo-1618220179428-22…lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1567538096630-e0…lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1631679706909-18…wfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ],
  name: "The Furniture Workshop",
};

it("should render all the events once page loads", () => {
  customRender(<Events eventData={[mockData]} isAdmin={false} />);

  const eventCardButtons = screen.queryAllByTestId(/event-card/i);
  expect(eventCardButtons.length).toBe(getEvents.length);
});

it("should render only 1 related event once beer has been searched", async () => {
  customRender(<Events eventData={[mockData]} isAdmin={false} />);

  const searchBar = screen.getByRole("textbox");
  await userEvents.type(searchBar, "beer");

  const eventCardButtons = screen.queryAllByTestId(/event-card/i);
  expect(eventCardButtons.length).toBe(getEvents.length);
});

it("should not render any events if search not matched", async () => {
  customRender(<Events eventData={[mockData]} isAdmin={false} />);

  const searchBar = screen.getByRole("textbox");
  await userEvents.type(searchBar, "cooking");

  const eventCardButtons = screen.queryAllByTestId(/event-card/i);
  expect(eventCardButtons.length).toBe(0);
});
