import { screen, render, waitFor } from "@testing-library/react";
import About from "./About";

it("should render the subheadings", () => {
  render(<About />);

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
  render(<About />);

  const balletImage = screen.getByAltText("Ballet Image");
  const readingImage = screen.getByAltText("Reading Image");

  expect(balletImage).toBeInTheDocument();
  expect(readingImage).toBeInTheDocument();
});

it("should render the video", async () => {
  render(<About />);

  const video = screen.getByTestId("video");
  await waitFor(() => {
    expect(video).toBeInTheDocument();
  });
});
