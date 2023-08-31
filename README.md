## Quickstart

1. Install the dependencies with `npm install`
2. Run the application with `npm run dev`

## File Structure 🗂️

- Components contains all generic components that are shared across pages. They should be generic and reusable, and testable in isolation.

- Pages contains our different application views. Generally any requests should be activated here so that any children components don't have to, e.g. If we have a 'User Details' view, we should dispatch our network requests for user information from here.

- Styles consists global style files that should be made available across our application.

## Testing ⚗️

- This project utilizes Vitest with React Testing Library (RTL).

- All component folders will have an associated test file within the same folder. Each component is tested independently (unit testing) to ensure they work in isolation and aren't affected by external factors(such as other components).

- Any test that would use the 'render' function from RTL, use the 'customRender' function from testUtils.js. This adds routing by default so we can easily test components that include route/link logic.
  - A example can be seen in `src/pages/Home`

## Code Quality 🌟

- This project uses prettier and ESlint to increase code readability and consistency.

## Button Component

```typescript
<Button
  label="working"
  onClick={handleClick}
  variant="secondary"
  style={fakeStyle}
/>
```

- Button Component needs 2 variables with 2 optional variables that can be used.

- First, variable/prop is label which is a string. This is the text you want to show on your button.

- Second, onClick needs a function to handle the clicking, this will most likely be an mouseEventHandler.

- Third, style is an inbuilt react hook that allows you to create an object with the styles you need and pass it into the button. This prop is optional and if not added the style for the button will be the default styles for the project. e.g:

```typescript
const fakeStyle = {
  padding: "2rem",
  color: "red",
  backgroundColor: "blue",
  fontWeight: "bold",
};
```

- Lastly, variant prop is optional but can take only the string "secondary" that will give you the following styles:

````typescript
    background: $color-light-grey;
    color: $color-charcoal;
    ```
````

## SplashPage

- SplashPage is an entry point to the app in order to get the user to sign in or create an account
- It uses the button component in both default and secondary styles
- Links to the paths: "/sign-up" and "/login" applied to their respective buttons
- Uses global variables in line with clients brand

## Mock Data

- We have added mockEvents.ts that holds the mock data for our events.
- A mockEvent type has been added for the mock data:

```typescript
export type MockEvent = {
  id: number;
  name: string;
  category: string;
  date: string;
  description: string;
  images: string[];
};
```

- We currently have 5 mock events that have been taken from the Figma page with the ability to add further events as and when needed.
- we have added 2 events with a data that's in past so they can be used to show in the "Historic" section.

## Features

### Nav

- Simple navbar created with links to the respective pages.
- Clients main priority was ease of use, this has been implemented by having a self explained navbar with only 4 navigation buttons.
- We've added an active class to the scss file to darken the icon of the page which the user is viewing.

## Header Component

<Header
  title="Made by Makers Studio Tour"
  subTitle="Sat 20 | Sun 21 Nov 2021"
  imageUrl="url"
  locationVenue="Venue"
  locationCity="City"
/>

- Header component needs 1 prop (title) and takes 5 optional props.
- Prop #1 (title) is a string that is then outputted into a h1 tag
- Prop #2 (subTitle) is an optional string that is then outputted into a p tag underneath the title
- Prop #3 (imageUrl) is an optional string that is then used as the source for the img tag
- Prop #4 (videoUrl) is an optional string that is then used as the source for the video tag
- Prop #5 (locationVenue) is an optional string that is used in the homepage to display additional information about the event
- Prop #6 (locationCity) is an optional string that is used in the homepage to display additional information about the event

- The component is built to only handle 1 image or 1 video, having both video and image url props will not display correctly on screen.
- The component will always display "DOT TO DOT - LOCAL MAKERS" at the top in "$color-yellow"

### 404 Not Found Page

- **Error Message**: When a user lands on a non-existent route or page, they are presented with an error message indicating that the requested content could not be found.

- **Return to Home Button**: To enhance user navigation and convenience, a button is provided on the 404 Not Found Page. When clicked, this button redirects the user back to the home page.
