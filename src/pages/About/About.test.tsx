import { screen, waitFor } from "@testing-library/react";
import About from "./About";
import { customRender } from "../../utils/testUtils";

it("should render the subheadings", () => {
  customRender(<About isAdmin={false} />);

  const subheading1 = screen.getByText(
    "Ripping Up the Rulebook & Starting From Scratch"
  );
  const subheading2 = screen.getByText("Our Artisans");
  const subheading3 = screen.getByText("The Early Years");

  expect(subheading1).toBeInTheDocument();
  expect(subheading2).toBeInTheDocument();
  expect(subheading3).toBeInTheDocument();
});

it("should render images", () => {
  customRender(<About isAdmin={false} />);

  const balletImage = screen.getByAltText("Ballet Image");
  const readingImage = screen.getByAltText("Reading Image");

  expect(balletImage).toBeInTheDocument();
  expect(readingImage).toBeInTheDocument();
});

it("should render the video", async () => {
  customRender(<About isAdmin={false} />);

  const video = screen.getByTestId("video");
  await waitFor(() => {
    expect(video).toBeInTheDocument();
  });
});
