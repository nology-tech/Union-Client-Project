import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

const setUserId = () => {
  return;
};

it("should render elements to allow login", () => {
  customRender(<Login setUser={setUserId} />);

  const emailInput = screen.getByText("Email Address");
  const passwordInput = screen.getByText("Password");

  expect(passwordInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

it("should not authenticate the user, given incorrect credentials", async () => {
  customRender(<Login setUser={setUserId} />);

  const emailInput = screen.getByPlaceholderText("you@example.com");
  await userEvent.type(emailInput, "notsomethignvalid");
  const passwordInput = screen.getByPlaceholderText("Your password");
  await userEvent.type(passwordInput, "notsomethignvalid");

  const button = screen.getByRole("button");
  await userEvent.click(button);

  const alert = screen.findByText("Sorry, we don't recognise that login");
  expect(alert).toBeTruthy();
});
