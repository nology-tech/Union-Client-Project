import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventCard from "./EventCard";

const title = "Some Event";
const maker = "Some Maker";
const date = 1690149575;
const formattedDate = new Date(date);
const textPara = "This is a sweet event, we hope you can come and enjoy it.";
const imageArr = [
  "https://plus.unsplash.com/premium_photo-1691837115446-51a333c1941b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1692706079486-84fb5dd1391e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1693297162063-399177bd6e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
];
const clickFunc = () => {
  // do something here...
};
const capacityCurrent = 0;
const capacityMax = 50;

it("should render event card", () => {
  render(
    <EventCard
      title={title}
      maker={maker}
      date={formattedDate}
      textContent={textPara}
      galleryArray={imageArr}
      buttonLabel="Click MEEE"
      handleClick={clickFunc}
      capacityCurrent={capacityCurrent}
      capacityMax={capacityMax}
    />
  );

  const eventCardTitle = screen.getByText("Some Event");
  const gallery = screen.queryByText("Gallery");

  expect(eventCardTitle).toBeInTheDocument();
  expect(gallery).toBeFalsy();
});

it("should render Gallery after arrow has been clicked", async () => {
  render(
    <EventCard
      title={title}
      maker={maker}
      date={formattedDate}
      textContent={textPara}
      galleryArray={imageArr}
      buttonLabel="Click MEEE"
      handleClick={clickFunc}
      capacityCurrent={capacityCurrent}
      capacityMax={capacityMax}
    />
  );

  const arrow = screen.getByAltText("arrow");
  await userEvent.click(arrow);

  const gallery = screen.getByText("Gallery");

  expect(gallery).toBeInTheDocument();
});
