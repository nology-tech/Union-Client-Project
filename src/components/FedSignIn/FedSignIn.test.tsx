import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Login from "../../pages/Login/Login";

const email = "daniela.gutperl@gmail.com";
const setEmail = () => {
  return;
};
const password = "password";
const setPassword = () => {
  return;
};
const setUserId = () => {
  return;
};

it("should render elements to allow login", () => {
  customRender(
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      setUserId={setUserId}
    />
  );

  const imageRender = screen.getByAltText(/facebook sign in/i);

  expect(imageRender).toBeInTheDocument();
});
