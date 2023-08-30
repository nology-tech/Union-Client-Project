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
<Button label="working" onClick={handleClick} style={fakeStyle} />
```

- Button Component needs 2 variables with an optional third listed below.

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
