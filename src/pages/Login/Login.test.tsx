import { screen, render } from "@testing-library/react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"


  const email = "daniela.gutperl@gmail.com"
  const setEmail = () => {}
  const password = "password"
  const setPassword = () => {}
  const setUserId = () => {}

it("should render elements to allow login", () => {
  render(<MemoryRouter><Login 
      email={email}
      setEmail = {setEmail}
      password = {password}
      setPassword = {setPassword}
      setUserId = {setUserId}
      /></MemoryRouter>);
      
    const emailInput = screen.getByText("Email Address");
    const passwordInput = screen.getByText("Password");
  
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
});


it("should not authenticate the user, given incorrect credentials", async () => {
  render(<MemoryRouter><Login 
      email={email}
      setEmail = {setEmail}
      password = {password}
      setPassword = {setPassword}
      setUserId = {setUserId}
      /></MemoryRouter>);
      
    const emailInput = screen.getByPlaceholderText("you@example.com");
    await userEvent.type(emailInput, "notsomethignvalid")
    const passwordInput = screen.getByPlaceholderText("Your password");
    await userEvent.type(passwordInput, "notsomethignvalid")

    const button = screen.getByRole("button")
    await userEvent.click(button);

    const alert = screen.findByText("Sorry, we don't recognise that login")
    expect(alert).toBeTruthy();
});