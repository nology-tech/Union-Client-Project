# Dot to Dot - Proof of Concept

## Contributors
Chu Lam - https://github.com/Koji47</br> 
Daniela Gutperl - https://github.com/ElaM8</br>
Jugraj Singh - https://github.com/akajugz</br>
Luca Gilardenghi - https://github.com/churlish404</br>
Luke Welbourn - https://github.com/luke-welbourn</br>
Max Swaine - https://github.com/maxswaine</br>
Nick Phelan - https://github.com/nmWolfe</br>
Nicole Denheim - https://github.com/NDenheim</br>
Szabolcs Sziklai - https://github.com/sabifromtherock</br>
Tufiale Chowdhury - https://github.com/Tufiale</br>

## Quickstart

1. Install the dependencies with `npm install`.
2. Run the application with `npm run dev`.

## File Structure 🗂️

- Components: Contains all generic components that are shared across pages. They should be generic and reusable, and testable in isolation.
- Pages: Contains our different application views. Generally, any requests should be activated here so that any children components don't have to. For example, if we have a 'User Details' view, we should dispatch our network requests for user information from here.
- Styles: Consists of global style files that should be made available across our application.

## Testing ⚗️

- This project utilizes Vitest with React Testing Library (RTL).
- All component folders will have an associated test file within the same folder. Each component is tested independently (unit testing) to ensure they work in isolation and aren't affected by external factors(such as other components).
- Any test that would use the 'render' function from RTL, use the 'customRender' function from testUtils.js. This adds routing by default so we can easily test components that include route/link logic. An example can be seen in `src/pages/Home`.

## Code Quality 🌟

- This project uses Prettier and ESLint to increase code readability and consistency.

## Pages

### Home

- Created a homepage that replicated the design given on Figma.
- Homepage uses the `<Header/>` component at the top of the page.
- Homepage uses two `<Button/>` components, one for routing to the events page ("/events") and another routing to the about page ("/about").
- Homepage currently displays event information about "Made by Makers Studio Tour".

### Events

- Created a filter that ensures the only events visible are events in the future from today's date.
- Created events page to render the search bar and events passed in.
- The search bar filters the events by event name, category and description
- State for each events' "booking" button is kept in Events as an array

```tsx
const [buttonVariants, setButtonVariants] = useState<boolean[]>(
  new Array(eventData.length).fill(false)
);
```

- Use index when mapping over events to target the buttons individually

```tsx
{filteredSearch.map((event: MockEvent, index: number))}
```

- Added feature whereby users are able to see how many spaces are available dynamically through the database.

### Calendar

- Added a dummy layout for the Calendar to show proof of concept.
- Added padding bottom to the Header subtitle.
- Added a functional calendar to the Calendar Page.
- Calendar page has Active and Historic toggle, which changes the user's view of events.
- Users are able to interact with the calendar package to access specific events depending on the date.

### About

- **Layout**: The layout has been changed to improve readability and user engagement. We've incorporated videos, images and more information about the company to create a more user friendly experience.

- **Header Formatting**: Changed formatting in the header to account for spacing and playback issues with the video. This includes using the iframe HTML element as opposed to the video element.

```js
<iframe
  className="header__video"
  src={videoUrl}
  width={350}
  height={240}
  data-testid="video"
></iframe>
```

```tsx
const [buttonVariants, setButtonVariants] = useState<boolean[]>(
  new Array(eventData.length).fill(false)
);
```

- Use index when mapping over events to target the buttons individually

```tsx
{filteredSearch.map((event: MockEvent, index: number))}
```

### Account

- Created an account page with a sign-out button.
- Account page displays the user's profile picture, first name, last name, and email address.

### Splash

- Splash Page is an entry point to the app to get the user to sign in or create an account.
- It uses the `Button` component in both default and secondary styles.
- Links to the paths: "/sign-up" and "/login" applied to their respective buttons.
- Uses global variables in line with clients' brand.

### Login

Added functionality for logging in users who are previously registered. When a user navigates to the login page, the login pages is displayed with the required input fields to authenticate.

Added functionality for failed login to display error message. When a user attempts to login with invalid credentials, they will receive an error message to advise that the details they used cannot be found.

Provided testing for render of the login page and for login errors for unauthenticated users.

Login Props:

```typescript
type LoginProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  setUserId: (userId: string) => void;
};
```

### Register

- Register Page takes nine props, these props are almost entirely to do with authentication in the creation of a user account.

- First name and Last name are currently unused useState variables, however we anticipate them to be used later in development

```typescript
type RegisterProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  setUserId: (userId: string) => void;
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
};
```

- The initial Register page has two input text boxes "First Name" and "last Name". The next button uses the toggle function to conditionally render an alternative register page for the second half of the account creation process. On the initial page the back arrow navigates back to the splash page.

- The secondary register page has three input boxes. Email, Password and Confirm Password. The create account button checks the password and email eligibility and then if correct submits that information to the fireBase. The Back button on this page sends the user back to the first Register page.

### Error

- **Error Message**: When a user lands on a non-existent route or page, they are presented with an error message indicating that the requested content could not be found.
- **Return to Home Button**: To enhance user navigation and convenience, a button is provided on the 404 Not Found Page. When clicked, this button redirects the user back to the home page.

### Admin Page

- We have created an admin page that allows the admin assigned user to perform certain actions.
- The page itself features 2 buttons, "Add Event" and "Sign Out"; the add event button allows the admin user to go to a specific page where they can input relevant event information which is then pushed to the main database.
- The sign out button would simply allows the user to securely sign out.
- The user must be an administrator to view this page. There is functionality added to the nav bar component and the app.tsx routes that allow conditional rendering according to the current user being an admin or not.
- The current user has to be set as an admin on the firebase database manually, as default all users are set to not being an administrator.

## Components

### Button

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

### Federated Sign In

- Federated sign is a reusable component to used on register and login pages.
- Allows the user to create a userId by logging in to Google. Facebook and Apple sign in icons currently show pop up "in development".
- redirects the user to home if the login is successful, if not redirects to error page.

### Nav

- Simple navbar created with links to the respective pages.
- Clients main priority was ease of use, this has been implemented by having a self explained navbar with only 5 navigation buttons.
- We've added an active class to the scss file to darken the icon of the page which the user is viewing.
- Added white background color and box shadow to match to brief.

### Header

```typescript
<Header
  title="Made by Makers Studio Tour"
  subTitle="Sat 20 | Sun 21 Nov 2021"
  imageUrl="url"
  locationVenue="Venue"
  locationCity="City"
  date="Current Day on Events Page"
/>
```

- Header component needs 1 prop (title) and takes 5 optional props.
- Prop #1 (title) is a string that is then outputted into a h1 tag
- Prop #2 (subTitle) is an optional string that is then outputted into a p tag underneath the title
- Prop #3 (imageUrl) is an optional string that is then used as the source for the img tag
- Prop #4 (videoUrl) is an optional string that is then used as the source for the video tag
- Prop #5 (locationVenue) is an optional string that is used in the homepage to display additional information about the event
- Prop #6 (locationCity) is an optional string that is used in the homepage to display additional information about the event

- The component is built to only handle 1 image or 1 video, having both video and image url props will not display correctly on screen.
- The component will always display "DOT TO DOT - LOCAL MAKERS" at the top in "$color-yellow"

- **Header Formatting**: Changed formatting in the header to account for spacing and playback issues with the video. This includes using the iframe HTML element as opposed to the video element.

```js
<iframe
  className="header__video"
  src={videoUrl}
  width={350}
  height={240}
  data-testid="video"
></iframe>
```

### Events Booking Popup Window

This popup window provides three main actions: closing the popup, navigating to the calendar, and canceling a booking.

- **Closing the Popup** : To close the popup window, simply click on the black cross icon located at the top right corner of the popup.
- **Viewing the Calendar** : If you wish to view the calendar or manage your bookings, you can do so by clicking the "VIEW CALENDAR" button.
- **Canceling a Booking** : To cancel a booking that you've previously made, you can click on the "CANCEL BOOKING" button.

## Dev Tools

### Mock Data

- We have added mockEvents.ts that holds the mock data for our events.
- A mockEvent type has been added for the mock data:

```typescript
export type MockEvent = {
  id: number;
  name: string;
  category: string;
  date: Date;
  description: string;
  images: string[];
};
```

- We currently have 5 mock events that have been taken from the Figma page with the ability to add further events as and when needed.
- we have added 2 events with a data that's in past so they can be used to show in the "Historic" section.

### SnapShot FireBase

- Database has been created inside Firebase
- Firebase.ts has been updated to import Firestore
- Data from Firestore is stored as a variable called filteredData as an array
- Exported util file "FirebaseSnapshots" that handles collecting data from Firebase in an async function
- Data in the database contains fields: category, date, description, id, images and a name

### FirebaseSnapshots

- Created a function called getEvents that retrieves data from Firebase FireStore database and returns the data as "filteredData"
- Converted Timestamp to JS Date object

### Firebase Auth persistence

- Added functionality so that when a signed in user refreshes the page, they stay signed in.
- Currently, when anyone signs in they are permanently signed in.

### How to Create New Users

Currently, there are two options for creating a new user:

1. The new user provides their first and last name details, along with an email and password combination.
2. The new user selects the google logo to use federated sign in.

Both options will create a new user in accordance with the user schema.

### Data Structure

The project uses a Firestore Database (and previously included Firebase Authentication).

- The collection name is _users_.

- Each user document has a unique identifier user id _UUID_

```typescript
User schema:
UUID: string;
email: string;
events: []
firstName: String;
lastName: string;
```

- Errors:

We check if the user already exists (the email address used to register must be unique) in the database. If the user attempts to register via option 1 (above) with an email that already exists in the database, they are served an error message to advise the email already exists. If the user attempts to register using federated sign in, they are logged in and taken to home.

- The users collection contains a list of user documents, with a field for event ids. This is an array of strings.

- The events collection contains a list of event documents, with fields for event details.

### User Events

Users are able to see future and past events that they have signed up for, so that they can have insight into which events they have attended in the past, and their personal future event calendar.

### How To See Future and Past Events

Users can switch between future/active events and past/historic events by clicking on the relevant links at the top left and top right of the page, respectively.

### How to see Event Details

Event Cards become visible when the user clicks on the specific event, as the component is reused across the app.

### Queries

Queries to the Firestore database are made via Firebase Snapshots.

### Event Creation

Users granted admin privileges are now able to create an event, via a simple to use, interactive form.

The form requires all input fields be filled out, and then is sent to the database and uploaded to the Events page.

Users can stipulate the event name, category, date, capacity and description, as well as having the option to upload/add images.

## About Us

- This project has been crafted by a dedicated group of junior developers currently undergoing one of \_nology's comprehensive training courses to become full-stack developers. We embarked on this journey to expand our skills and gain hands-on experience in building real-world applications. We understand that learning is an ongoing process, and we wholeheartedly welcome any feedback, suggestions, or constructive criticism on this project. Your insights are invaluable to us as they not only enhance the quality of this project but also contribute to our growth as developers. Feel free to share your thoughts and ideas with us, and together, we can continue our journey of improvement and learning
