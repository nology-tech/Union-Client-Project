import { screen } from "@testing-library/react";
import "./Register";

import { customRender } from "../../utils/testUtils";
import Register from "./Register";

const fakeFunction = () => {
  const anotherFake = "fake";
  return anotherFake;
};

it("should render the Header", () => {
  customRender(<Register setUser={fakeFunction} />);
  const header = screen.getByText("Create An Account");

  expect(header).toBeInTheDocument();
});

it("should render the back arrow image", () => {
  customRender(<Register setUser={fakeFunction} />);

  const image = screen.getByAltText("back-arrow");

  expect(image).toBeInTheDocument();
});

it("should render both input boxes", () => {
  customRender(<Register setUser={fakeFunction} />);

  const firstName = screen.getByPlaceholderText("John");

  const lastName = screen.getByPlaceholderText("Doe");

  expect(firstName).toBeInTheDocument();

  expect(lastName).toBeInTheDocument();
});
