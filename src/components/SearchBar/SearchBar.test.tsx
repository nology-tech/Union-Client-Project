import { screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { customRender } from "../../utils/testUtils";

it("should render the searchBar", () => {
  // arranging
  customRender(
    <SearchBar searchEvents={"test"} handleInput={() => console.log("test")} />
  );
  //acting
  const searchBar = screen.getByRole("textbox");
  //asserting
  expect(searchBar).toBeInTheDocument();
});
