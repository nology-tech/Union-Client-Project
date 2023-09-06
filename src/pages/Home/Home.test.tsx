import { screen } from "@testing-library/react";
import Home from "./Home";

import { customRender } from "../../utils/testUtils";

it("should render the heading", () => {
  customRender(<Home />);

  const heading = screen.getByRole("heading", {
    name: /If this is your first Made by makers for the people, welcome!/i,
  });

  expect(heading).toBeInTheDocument();
});

it("should render the welcome message", () => {
  customRender(<Home />);

  const welcome = screen.getByText(
    "If this is your first Made by makers for the people, welcome!"
  );

  expect(welcome).toBeInTheDocument();
});

it("should render the content", () => {
  customRender(<Home />);

  const content = screen.getByText(
    "Learn more about the history of pottery and how ceramics can be used as a building material for small clay bricks. Using the tools you learned from the workshop you will make a few pieces."
  );

  expect(content).toBeInTheDocument();
});
