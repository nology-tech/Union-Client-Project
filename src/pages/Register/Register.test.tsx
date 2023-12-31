import { screen, act } from "@testing-library/react";
import "./Register";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testUtils";
import Register from "./Register";

const fakeFunction = () => {
  const anotherFake = "fake";
  return anotherFake;
};

it("should render the Header", async () => {
  await act(async () => {
    customRender(<Register setUser={fakeFunction} />);
  });
  const header = screen.getByText("Create An Account");

  expect(header).toBeInTheDocument();
});

it("should render the back arrow image", async () => {
  await act(async () => {
    customRender(<Register setUser={fakeFunction} />);
  });

  const image = screen.getByAltText("back-arrow");

  expect(image).toBeInTheDocument();
});

it("should render both input boxes", async () => {
  await act(async () => {
    customRender(<Register setUser={fakeFunction} />);
  });

  const firstName = screen.getByPlaceholderText("John");

  const lastName = screen.getByPlaceholderText("Doe");

  expect(firstName).toBeInTheDocument();

  expect(lastName).toBeInTheDocument();
});

it("should not register the user, given an email that already exists in the database", async () => {
  customRender(<Register setUser={fakeFunction} />);

  const buttonNext = screen.getByText("Next");
  await userEvent.click(buttonNext);
  const emailInput = screen.getByPlaceholderText("you@example.com");
  await userEvent.type(emailInput, "daniela.gutperl@nology.io");
  const passwordInput = screen.getByPlaceholderText("Your Password");
  await userEvent.type(passwordInput, "password");
  const passwordConfirmation = screen.getByPlaceholderText("");
  await userEvent.type(passwordConfirmation, "password");

  const button = screen.getByRole("button");
  await userEvent.click(button);

  const alert = await screen.findByText("Email Already Exists");
  expect(alert).toBeTruthy();
});
