import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Events from "./Events";
import { mockEvents } from "../../data/mockEvents";
import { customRender } from "../../utils/testUtils";

// page displays all of events given

it("should render all the events", () => {
  customRender(<Events mockData={mockEvents} />);

  // Assert that all event cards are rendered
  const eventCardButtons = screen.getAllByTestId(/event-card/i);
  expect(eventCardButtons.length).toBe(mockEvents.length);
});

// test for search matching 1 event

// test for search matching no events
