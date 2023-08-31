import { screen } from "@testing-library/react";
import Home from "./Home";


import { customRender } from "../../utils/testUtils";

it("should render the form", () => {
  customRender(<Home />);

  const heading = screen.getByRole("heading", {
    name: /page heading/i,
  });

  expect(heading).toBeInTheDocument();
});

it("should render the welcome message", () => {
  customRender(<Home />);

  const welcome = screen.getByText("welcome!");

  expect(welcome).toBeInTheDocument();
});

it("should render the content", () => {
  customRender(<Home />);

  const content = screen.getByText("Learn more about the history of pottery");

  expect(content).toBeInTheDocument();
});