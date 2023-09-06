import { ChangeEvent } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./EventForm.scss";
import { doc, addDoc } from "firebase/firestore";

const EventForm = () => {
  const handleEventName = (event: ChangeEvent<HTMLInputElement>) => {
    const eventName = event.currentTarget.value;
  };
  const handleEventCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const eventCategory = event.currentTarget.value;
  };
  const handleEventDate = (event: ChangeEvent<HTMLInputElement>) => {
    const eventDate = event.currentTarget.value;
  };
  const handleEventCapactiy = (event: ChangeEvent<HTMLInputElement>) => {
    const eventCapacity = event.currentTarget.value;
  };
  const handleEventDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const eventDescription = event.currentTarget.value;
  };

  const handleSubmit = () => {
    return;
  };

  return (
    // turn this into a number
    <div>
      <InputBox
        label="Event Name (case sensitive)"
        handleInput={handleEventName}
        inputType="text"
      />
      <InputBox
        label="Category (case sensitive)"
        handleInput={handleEventCategory}
        inputType="text"
      />
      <InputBox label="Date" handleInput={handleEventDate} inputType="text" />
      <InputBox
        label="Max Capacity"
        handleInput={handleEventCapactiy}
        inputType="text"
      />
      <InputBox
        label="Event Description (case sensitive)"
        handleInput={handleEventDescription}
        inputType="text"
      />
      {/* <InputBox
        label="Image URL"
        handleInput={somethingHere}
        inputType="text"
      /> */}
      <div className="event-form__button">
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default EventForm;
