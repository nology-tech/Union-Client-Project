import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Events from "./Events";
import { MockEvent } from "../../types/types";
import { mockEvents } from "../../data/mockEvents";
import { customRender } from "../../utils/testUtils";

// page displays all of events given

it("should render all the events", () => {
  customRender(<Events mockData={mockEvents} />);

  // Assert that all event cards are rendered
  const eventCardButtons = screen.getAllByRole("button");
  expect(eventCardButtons.length).toBe(mockEvents.length);
});

// test for search matching 1 event

// test for search matching no events

// testing that the book event button toggles on each click

// it("toggles booking button on click", async () => {
//   customRender(<Events mockData={mockEvents} />);
//   const button = screen.getByRole("button", { name: /BOOK A PLACE/i });

//   //   if (!button) {
//   //     throw new Error("problem");
//   //   }

//   // Click the booking button and check if it toggles.
//   await userEvent.click(button);
//   expect(
//     screen.getByRole("button", { name: /CANCEL BOOKING/i })
//   ).toBeInTheDocument();

//   //   // Click again and check if it toggles back.
//   //   await userEvent.click(button);
//   //   expect(screen.getByRole("BOOK A PLACE")).toBeInTheDocument();
// });
