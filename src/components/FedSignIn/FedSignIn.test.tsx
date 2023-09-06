import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Login from "../../pages/Login/Login";

const setUserId = () => {
  return;
};

it("should render elements to allow login", () => {
  customRender(<Login setUser={setUserId} />);

  const imageRender = screen.getByAltText(/facebook sign in/i);

  expect(imageRender).toBeInTheDocument();
});
