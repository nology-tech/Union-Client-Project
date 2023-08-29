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

- Variant prop is optional and can take "secondary" and "custom"

- Custom creates a button with the classname "button--custom" which has no stylings and can be modified/styled.

- Below are the styles for the "secondary" variant:

```typescript
&--secondary {
    background: $color-light-grey;
    color: $color-dark-grey;
  }
```

- Below are the stylings for thr default variant, if no variant is selected, these stylings are applied:

```typescript
.button {
  width: 19.4375rem;
  height: 4.125rem;
  border-radius: 0.3125rem;
  background: $color-red;
  color: $color-white;
}
```

- It also take a prop "onclick" which takes a function.

- And takes a "label" prop which takes a string.
