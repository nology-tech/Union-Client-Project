import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import CalendarPage from "./Calendar";
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

it("should render the 'active' and 'historic' buttons ", () => {
  customRender(<CalendarPage userId={"KmgYsz4Lw3fCXFzYsVgTWnVaBnl1"}eventData={[mockData]} />);

  const activeButton = screen.getByText("Active");
  const historicButton = screen.getByText("Historic");

  expect(activeButton).toBeInTheDocument();
  expect(historicButton).toBeInTheDocument();
});
