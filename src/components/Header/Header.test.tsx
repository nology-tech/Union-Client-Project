import { screen, waitFor } from "@testing-library/react";
import Header from "./Header";

import { customRender } from "../../utils/testUtils";

it("should render the Title", () => {
  customRender(<Header title="Title" />);

  const Title = screen.getByText("Title");

  expect(Title).toBeInTheDocument();
});

it("should render the Sub-title", () => {
  customRender(<Header title="Title" subTitle="Sub-title" />);

  const subTitle = screen.getByText("Sub-title");

  expect(subTitle).toBeInTheDocument();
});

it("should render the video", async () => {
  customRender(
    <Header
      title="Title"
      videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
  );

  const video = screen.getByTestId("video");
  await waitFor(() => {
    expect(video).toBeInTheDocument();
  });
});

it("should render the image", async () => {
  customRender(
    <Header
      title="Title"
      imageUrl="https://scontent.flhr3-4.fna.fbcdn.net/v/t39.30808-6/300821088_415331324036801_5013185588051545215_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-5W4chOqOjMAX-dcAHG&_nc_ht=scontent.flhr3-4.fna&oh=00_AfBfEfdszP105oMDao0I7Y9maug9Buqi4I1F6r_zVEKhpw&oe=64F34549"
    />
  );

  const image = screen.getByTestId("image");
  await waitFor(() => {
    expect(image).toBeInTheDocument();
  });
});
