import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import EventForm from "../../pages/CreateEvent/CreateEvent";
import userEvent from "@testing-library/user-event";

const dummyFunc = () => {
  return;
};

it("should render the form inputs", () => {
  customRender(<EventForm handleNewEvent={dummyFunc} />);

  const eventName = screen.getByText("Event Name (case sensitive)");
  const eventCat = screen.getByText("Event Category (case sensitive)");
  const eventDate = screen.getByText("Date");
  const eventCap = screen.getByText("Event Capacity");
  const eventDesc = screen.getByText("Event Description");
  const eventImg = screen.getByText("Image URL");

  expect(eventName).toBeInTheDocument();
  expect(eventCat).toBeInTheDocument();
  expect(eventDate).toBeInTheDocument();
  expect(eventCap).toBeInTheDocument();
  expect(eventDesc).toBeInTheDocument();
  expect(eventImg).toBeInTheDocument();
});

it("should show required message on load", () => {
  customRender(<EventForm handleNewEvent={dummyFunc} />);

  const reqMessage = screen.getAllByText("this field is required");

  expect(reqMessage).toBeTruthy();
});

it("should remove required message when requirements are met", async () => {
  customRender(<EventForm handleNewEvent={dummyFunc} />);
  const nameInput = screen.getByText("Event Name (case sensitive)");
  await userEvent.type(nameInput, "Furniture Sale");
});
