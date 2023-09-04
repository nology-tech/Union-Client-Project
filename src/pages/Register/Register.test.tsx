import { screen } from "@testing-library/react";
import "./Register";

import { customRender } from "../../utils/testUtils";
import Register from "./Register";

const fakeString = "fake";
const fakeFunction = () => {
  const anotherFake = "fake";
  return anotherFake;
};

it("should render the Header", () => {
  customRender(
    <Register
      email={fakeString}
      password={fakeString}
      setEmail={fakeFunction}
      setPassword={fakeFunction}
      setUserId={fakeFunction}
    />
  );
  const header = screen.getByText("Create An Account");

  expect(header).toBeInTheDocument();
});

it("should render the back arrow image", () => {
  customRender(
    <Register
      email={fakeString}
      password={fakeString}
      setEmail={fakeFunction}
      setPassword={fakeFunction}
      setUserId={fakeFunction}
    />
  );

  const image = screen.getByAltText("back-arrow");

  expect(image).toBeInTheDocument();
});

it("should render both input boxes", () => {
  customRender(
    <Register
      email={fakeString}
      password={fakeString}
      setEmail={fakeFunction}
      setPassword={fakeFunction}
      setUserId={fakeFunction}
    />
  );

  const firstName = screen.getByPlaceholderText("John");

  const lastName = screen.getByPlaceholderText("Doe");

  expect(firstName).toBeInTheDocument();

  expect(lastName).toBeInTheDocument();
});